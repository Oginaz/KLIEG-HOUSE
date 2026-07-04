<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SubscribeRequest;
use App\Models\Subscriber;
use Illuminate\Http\JsonResponse;

class SubscriberController extends Controller
{
    /**
     * POST /api/subscribers
     * Persists a newsletter sign-up or "stay in the loop" contact message.
     */
    public function store(SubscribeRequest $request): JsonResponse
    {
        $data = $request->validated();
        $data['source'] = $data['source'] ?? 'newsletter';

        $subscriber = Subscriber::firstOrCreate(
            ['email' => $data['email'], 'source' => $data['source']],
            ['name' => $data['name'] ?? null, 'message' => $data['message'] ?? null]
        );

        $wasRecentlyCreated = $subscriber->wasRecentlyCreated;

        return response()->json([
            'data' => [
                'email' => $subscriber->email,
                'source' => $subscriber->source,
            ],
            'message' => $wasRecentlyCreated
                ? 'You are on the list. Klieg House will be in touch before the lights go up.'
                : 'You are already on the list for this address.',
        ], $wasRecentlyCreated ? 201 : 200);
    }
}
