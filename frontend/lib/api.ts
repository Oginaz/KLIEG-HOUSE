import type { Film } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000/api';

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: { Accept: 'application/json', ...(init?.headers ?? {}) },
    // Upcoming Launches must reflect the API, not a build-time snapshot.
    cache: 'no-store',
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.message ?? `Request to ${path} failed (${res.status})`);
  }

  return res.json();
}

export async function getFilms(params?: { featured?: boolean; status?: string }): Promise<Film[]> {
  const search = new URLSearchParams();
  if (params?.featured) search.set('featured', '1');
  if (params?.status) search.set('status', params.status);
  const qs = search.toString() ? `?${search.toString()}` : '';

  const { data } = await apiFetch<{ data: Film[] }>(`/films${qs}`);
  return data;
}

export async function getFilm(slug: string): Promise<Film> {
  const { data } = await apiFetch<{ data: Film }>(`/films/${slug}`);
  return data;
}

export async function subscribe(payload: {
  name?: string;
  email: string;
  message?: string;
  source?: 'newsletter' | 'contact';
}): Promise<{ message: string }> {
  return apiFetch<{ message: string }>(`/subscribers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}
