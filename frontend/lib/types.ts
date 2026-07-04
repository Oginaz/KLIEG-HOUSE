export type FilmStatus = 'announced' | 'teaser' | 'upcoming' | 'premiered';

export interface Film {
  id: number;
  slug: string;
  title: string;
  genre: string;
  logline: string;
  synopsis: string;
  director: string;
  cast: string[];
  premiere_at: string;
  premiere_venue: string | null;
  runtime_minutes: number | null;
  poster_path: string | null;
  backdrop_path: string | null;
  trailer_url: string | null;
  is_featured: boolean;
  status: FilmStatus;
}
