<?php

namespace Database\Seeders;

use App\Models\Film;
use Illuminate\Database\Seeder;

class FilmSeeder extends Seeder
{
    public function run(): void
    {
        $films = [
            [
                'slug' => 'the-last-eclipse',
                'title' => 'The Last Eclipse',
                'genre' => 'Science Fiction / Thriller',
                'logline' => 'The decade\'s only total eclipse may also be its last sunrise.',
                'synopsis' => "When a solar research station goes dark mid-experiment, astrophysicist Noor Kade has six minutes of totality to shut down a chain reaction she helped design. THE LAST ECLIPSE follows one crew's race against light itself, told in real time, as three continents watch the sky go out.",
                'director' => 'Mara Solheim',
                'cast' => ['Idris Vane', 'Renata Cho', 'Tomasz Okonkwo', 'Liv Andersen'],
                'premiere_at' => '2026-08-21 20:00:00',
                'premiere_venue' => 'The Meridian Theatre, Los Angeles',
                'runtime_minutes' => 118,
                'poster_path' => '/posters/the-last-eclipse.svg',
                'backdrop_path' => '/posters/the-last-eclipse.svg',
                'trailer_url' => 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
                'is_featured' => true,
                'status' => 'teaser',
            ],
            [
                'slug' => 'ironveil',
                'title' => 'Ironveil',
                'genre' => 'Heist / Action',
                'logline' => 'Five ex-operatives. One stolen archive. A twelve-hour window before it\'s gone for good.',
                'synopsis' => "Retired for eight years, a disbanded intelligence crew reunites to steal back a national archive auctioned to the highest bidder on the black market. IRONVEIL is a clockwork heist across four cities, built on the one rule they all broke to get out alive the first time: trust no one who taught you the job.",
                'director' => 'Bassel Farouk',
                'cast' => ['Grace Ilunga', 'Marcus Wren', 'Aiko Tanaka', 'Devraj Suri'],
                'premiere_at' => '2026-10-09 19:30:00',
                'premiere_venue' => 'Palazzo Cinema, Venice',
                'runtime_minutes' => 132,
                'poster_path' => '/posters/ironveil.svg',
                'backdrop_path' => '/posters/ironveil.svg',
                'trailer_url' => 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
                'is_featured' => true,
                'status' => 'upcoming',
            ],
            [
                'slug' => 'salt-and-ember',
                'title' => 'Salt & Ember',
                'genre' => 'Romantic Drama',
                'logline' => 'Two rival kitchens, one dying fishing village, and a summer neither of them planned on.',
                'synopsis' => "In a Portuguese harbor town losing its last cannery, chef Inês Cabral and her estranged rival Théo Marchand are forced to share a single kitchen for the season. SALT & EMBER simmers over one summer of resentment, repair, and the kind of cooking that only happens when no one is looking.",
                'director' => 'Camille Duarte',
                'cast' => ['Inês Rocha', 'Théo Lambert', 'Sofia Bettencourt'],
                'premiere_at' => '2026-11-13 19:00:00',
                'premiere_venue' => 'Cinema Ideal, Lisbon',
                'runtime_minutes' => 104,
                'poster_path' => '/posters/salt-and-ember.svg',
                'backdrop_path' => '/posters/salt-and-ember.svg',
                'trailer_url' => null,
                'is_featured' => false,
                'status' => 'announced',
            ],
            [
                'slug' => 'pale-hour',
                'title' => 'Pale Hour',
                'genre' => 'Psychological Horror',
                'logline' => 'The graveyard-shift DJ is getting calls from a station that went off air in 1987.',
                'synopsis' => "Late-night radio host Wren Callahan starts receiving requests from listeners who use the names of the dead — and the station's own archives prove some of those broadcasts predate her birth. PALE HOUR unfolds entirely between midnight and dawn, one call at a time.",
                'director' => 'Osei Boateng',
                'cast' => ['Wren Callahan (as herself)', 'Priya Deshmukh', 'Callum Fitzgerald'],
                'premiere_at' => '2027-01-15 21:00:00',
                'premiere_venue' => 'The Regent, Chicago',
                'runtime_minutes' => 97,
                'poster_path' => '/posters/pale-hour.svg',
                'backdrop_path' => '/posters/pale-hour.svg',
                'trailer_url' => null,
                'is_featured' => false,
                'status' => 'announced',
            ],
            [
                'slug' => 'golden-hour-city',
                'title' => 'Golden Hour City',
                'genre' => 'Musical Drama',
                'logline' => 'One last set, before the only venue that ever wanted them closes for good.',
                'synopsis' => "A twelve-piece mariachi collective plays out the final summer of the club that raised them, chasing one last booking big enough to save it. GOLDEN HOUR CITY is a love letter to bands that outlive the rooms built for them, scored entirely by its own cast.",
                'director' => 'Renata Cho',
                'cast' => ['Los Faroles de Medianoche (ensemble)', 'Diego Amaya', 'Luz Herrera'],
                'premiere_at' => '2027-03-05 20:00:00',
                'premiere_venue' => 'Teatro Dorado, Mexico City',
                'runtime_minutes' => 112,
                'poster_path' => '/posters/golden-hour-city.svg',
                'backdrop_path' => '/posters/golden-hour-city.svg',
                'trailer_url' => null,
                'is_featured' => false,
                'status' => 'announced',
            ],
        ];

        foreach ($films as $film) {
            Film::updateOrCreate(['slug' => $film['slug']], $film);
        }
    }
}
