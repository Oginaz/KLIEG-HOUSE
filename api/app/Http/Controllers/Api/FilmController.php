<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\FilmResource;
use App\Models\Film;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FilmController extends Controller
{
    /**
     * GET /api/films
     * Optional query params: ?featured=1  ?status=upcoming
     */
    public function index(Request $request): JsonResponse
    {
        $query = Film::query()->orderBy('premiere_at');

        if ($request->boolean('featured')) {
            $query->where('is_featured', true);
        }

        if ($status = $request->query('status')) {
            $query->where('status', $status);
        }

        return response()->json([
            'data' => FilmResource::collection($query->get()),
        ]);
    }

    /**
     * GET /api/films/{film:slug}
     */
    public function show(Film $film): JsonResponse
    {
        return response()->json([
            'data' => new FilmResource($film),
        ]);
    }
}
