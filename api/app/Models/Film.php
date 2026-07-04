<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug', 'title', 'genre', 'logline', 'synopsis', 'director', 'cast',
        'premiere_at', 'premiere_venue', 'runtime_minutes', 'poster_path',
        'backdrop_path', 'trailer_url', 'is_featured', 'status',
    ];

    protected $casts = [
        'cast' => 'array',
        'premiere_at' => 'datetime',
        'is_featured' => 'boolean',
    ];

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
