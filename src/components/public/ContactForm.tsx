'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // TODO: Send to /api/contact
    console.log('Form data:', data);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {isSubmitSuccessful && (
        <div className="p-4 bg-surface border border-border text-sm text-text-secondary">
          Message sent successfully. I&apos;ll get back to you soon.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input
            {...register('name')}
            placeholder="Name"
            className="w-full bg-transparent border-b border-border py-3 text-sm text-text placeholder-text-muted focus:outline-none focus:border-text transition-colors"
          />
          {errors.name && (
            <p className="text-xs text-text-muted mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            {...register('email')}
            placeholder="Email"
            type="email"
            className="w-full bg-transparent border-b border-border py-3 text-sm text-text placeholder-text-muted focus:outline-none focus:border-text transition-colors"
          />
          {errors.email && (
            <p className="text-xs text-text-muted mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <input
          {...register('subject')}
          placeholder="Subject"
          className="w-full bg-transparent border-b border-border py-3 text-sm text-text placeholder-text-muted focus:outline-none focus:border-text transition-colors"
        />
        {errors.subject && (
          <p className="text-xs text-text-muted mt-1">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register('message')}
          placeholder="Message"
          rows={5}
          className="w-full bg-transparent border-b border-border py-3 text-sm text-text placeholder-text-muted focus:outline-none focus:border-text transition-colors resize-none"
        />
        {errors.message && (
          <p className="text-xs text-text-muted mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-block border border-text px-8 py-3 text-sm uppercase tracking-widest text-text hover:bg-text hover:text-bg transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
