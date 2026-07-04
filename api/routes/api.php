<?php

use App\Http\Controllers\Api\FilmController;
use App\Http\Controllers\Api\SubscriberController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes — Klieg House
|--------------------------------------------------------------------------
| All routes are prefixed with /api by Laravel's RouteServiceProvider.
*/

Route::get('/films', [FilmController::class, 'index']);
Route::get('/films/{film:slug}', [FilmController::class, 'show']);

Route::post('/subscribers', [SubscriberController::class, 'store']);
