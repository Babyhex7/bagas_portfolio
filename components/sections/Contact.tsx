'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { SOCIAL_LINKS } from '@/lib/constants';
import { useLocale } from '@/components/providers/LocaleProvider';

const fieldClass =
  'w-full border-b border-paper/25 bg-transparent py-3 font-body text-lg placeholder:text-paper/35 focus:border-kunyit focus:outline-none';

export function Contact() {
  const { dict } = useLocale();
  const c = dict.contact;
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `*${c.title}*

*${c.fields.name}:* ${formData.name}
*${c.fields.subject}:* ${formData.subject}

*${c.fields.message}:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/${SOCIAL_LINKS.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Section
      id="contact"
      band="ink"
      index="06"
      label={c.label}
      meta={[SOCIAL_LINKS.email, 'Bandung, ID']}
      title={c.title}
      lede={c.lede}
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div className="space-y-8">
          <a href={`mailto:${SOCIAL_LINKS.email}`} className="block border-t border-paper/15 pt-4">
            <p className="label opacity-45">{c.channels.email}</p>
            <p className="mt-1 font-display text-xl font-medium">{SOCIAL_LINKS.email}</p>
          </a>
          <a
            href={`https://wa.me/${SOCIAL_LINKS.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-t border-paper/15 pt-4"
          >
            <p className="label opacity-45">{c.channels.whatsapp}</p>
            <p className="mt-1 font-display text-xl font-medium">{SOCIAL_LINKS.whatsapp}</p>
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-t border-paper/15 pt-4"
          >
            <p className="label opacity-45">{c.channels.github}</p>
            <p className="mt-1 font-display text-xl font-medium">Babyhex7</p>
          </a>
          <div className="border-t border-paper/15 pt-4">
            <p className="label opacity-45">{c.channels.location}</p>
            <p className="mt-1 font-display text-xl font-medium">Bandung, Jawa Barat</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="label opacity-55">
              {c.fields.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={c.placeholders.name}
              className={`${fieldClass} mt-2`}
            />
          </div>

          <div>
            <label htmlFor="subject" className="label opacity-55">
              {c.fields.subject}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder={c.placeholders.subject}
              className={`${fieldClass} mt-2`}
            />
          </div>

          <div>
            <label htmlFor="message" className="label opacity-55">
              {c.fields.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder={c.placeholders.message}
              className={`${fieldClass} mt-2 resize-none`}
            />
          </div>

          <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">
            {c.submit}
          </Button>
        </form>
      </div>
    </Section>
  );
}
