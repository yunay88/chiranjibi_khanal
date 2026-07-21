'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  subject: z.string().min(1, 'Required'),
  message: z.string().min(10, 'At least 10 characters'),
});

type Data = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Data>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Data) => {
    setSubmitError('');
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to send');
      reset();
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {isSubmitSuccessful && (
        <p className="text-text-secondary body-small">Message sent. Thank you.</p>
      )}
      {submitError && (
        <p className="text-red-400 text-sm">{submitError}</p>
      )}

      <div>
        <input
          {...register('name')}
          placeholder="Name"
          className="w-full bg-transparent border-b border-border py-4 text-lg text-text placeholder-text-muted focus:outline-none focus:border-text transition-colors duration-300"
        />
        {errors.name && <p className="text-text-muted text-xs mt-2">{errors.name.message}</p>}
      </div>

      <div>
        <input
          {...register('email')}
          placeholder="Email"
          type="email"
          className="w-full bg-transparent border-b border-border py-4 text-lg text-text placeholder-text-muted focus:outline-none focus:border-text transition-colors duration-300"
        />
        {errors.email && <p className="text-text-muted text-xs mt-2">{errors.email.message}</p>}
      </div>

      <div>
        <input
          {...register('subject')}
          placeholder="Subject"
          className="w-full bg-transparent border-b border-border py-4 text-lg text-text placeholder-text-muted focus:outline-none focus:border-text transition-colors duration-300"
        />
        {errors.subject && <p className="text-text-muted text-xs mt-2">{errors.subject.message}</p>}
      </div>

      <div>
        <textarea
          {...register('message')}
          placeholder="Message"
          rows={4}
          className="w-full bg-transparent border-b border-border py-4 text-lg text-text placeholder-text-muted focus:outline-none focus:border-text transition-colors duration-300 resize-none"
        />
        {errors.message && <p className="text-text-muted text-xs mt-2">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex items-center gap-2 text-[15px] text-text/70 hover:text-text transition-all duration-300"
      >
        <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
      </button>
    </form>
  );
}
