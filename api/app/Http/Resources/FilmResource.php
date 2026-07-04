<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FilmResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'title' => $this->title,
            'genre' => $this->genre,
            'logline' => $this->logline,
            'synopsis' => $this->synopsis,
            'director' => $this->director,
            'cast' => $this->cast,
            'premiere_at' => $this->premiere_at?->toIso8601String(),
            'premiere_venue' => $this->premiere_venue,
            'runtime_minutes' => $this->runtime_minutes,
            'poster_path' => $this->poster_path,
            'backdrop_path' => $this->backdrop_path,
            'trailer_url' => $this->trailer_url,
            'is_featured' => $this->is_featured,
            'status' => $this->status,
        ];
    }
}
