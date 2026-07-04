'use client';

import { useState, type FormEvent } from 'react';
import { subscribe } from '@/lib/api';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function NewsletterForm({
  source = 'newsletter',
  showMessageField = false,
}: {
  source?: 'newsletter' | 'contact';
  showMessageField?: boolean;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [feedback, setFeedback] = useState<string>('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = new FormData(e.currentTarget);
    const email = String(form.get('email') ?? '').trim();
    const name = String(form.get('name') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();

    try {
      const res = await subscribe({
        email,
        name: name || undefined,
        message: message || undefined,
        source,
      });
      setStatus('success');
      setFeedback(res.message);
      e.currentTarget.reset();
    } catch (err) {
      setStatus('error');
      setFeedback(err instanceof Error ? err.message : 'Something went wrong. Try again in a moment.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3" noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor={`${source}-name`}>Name</label>
        <input
          id={`${source}-name`}
          name="name"
          type="text"
          placeholder="Name (optional)"
          className="w-full rounded-sm border border-white/10 bg-stage px-4 py-3 text-sm text-paper placeholder:text-carbon focus:border-klieg"
        />
        <label className="sr-only" htmlFor={`${source}-email`}>Email address</label>
        <input
          id={`${source}-email`}
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-sm border border-white/10 bg-stage px-4 py-3 text-sm text-paper placeholder:text-carbon focus:border-klieg"
        />
      </div>

      {showMessageField && (
        <>
          <label className="sr-only" htmlFor={`${source}-message`}>Message</label>
          <textarea
            id={`${source}-message`}
            name="message"
            rows={4}
            placeholder="What are you reaching out about?"
            className="w-full rounded-sm border border-white/10 bg-stage px-4 py-3 text-sm text-paper placeholder:text-carbon focus:border-klieg"
          />
        </>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full shrink-0 rounded-sm bg-klieg px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-opacity hover:opacity-90 disabled:opacity-50 sm:w-auto"
      >
        {status === 'loading' ? 'Sending…' : showMessageField ? 'Send message' : 'Get the drop'}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={
          status === 'success'
            ? 'text-sm text-klieg'
            : status === 'error'
            ? 'text-sm text-velvet-light text-red-300'
            : 'sr-only'
        }
      >
        {feedback}
      </p>
    </form>
  );
}
