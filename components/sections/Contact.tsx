'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { SOCIAL_LINKS } from '@/lib/constants';

const fieldClass =
  'w-full border-b border-ink/25 bg-transparent py-3 font-body text-lg placeholder:text-ink/35 focus:border-nila focus:outline-none';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `*Halo, saya ingin menghubungi Anda*

*Nama:* ${formData.name}
*Perihal:* ${formData.subject}

*Pesan:*
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
      band="paper"
      index="05"
      label="Contact"
      meta={[SOCIAL_LINKS.email, 'Bandung, ID']}
      title="Punya proyek berikutnya?"
      lede="Isi form ini dan pesannya langsung terformat ke WhatsApp saya — atau hubungi lewat kanal di bawah."
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div className="space-y-8">
          <a href={`mailto:${SOCIAL_LINKS.email}`} className="block border-t border-ink/15 pt-4">
            <p className="label opacity-45">Email</p>
            <p className="mt-1 font-display text-xl font-medium">{SOCIAL_LINKS.email}</p>
          </a>
          <a
            href={`https://wa.me/${SOCIAL_LINKS.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-t border-ink/15 pt-4"
          >
            <p className="label opacity-45">WhatsApp</p>
            <p className="mt-1 font-display text-xl font-medium">{SOCIAL_LINKS.whatsapp}</p>
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-t border-ink/15 pt-4"
          >
            <p className="label opacity-45">GitHub</p>
            <p className="mt-1 font-display text-xl font-medium">Babyhex7</p>
          </a>
          <div className="border-t border-ink/15 pt-4">
            <p className="label opacity-45">Lokasi</p>
            <p className="mt-1 font-display text-xl font-medium">Bandung, Jawa Barat</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="label opacity-55">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Nama Anda"
              className={`${fieldClass} mt-2`}
            />
          </div>

          <div>
            <label htmlFor="subject" className="label opacity-55">
              Perihal
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Tentang apa ini?"
              className={`${fieldClass} mt-2`}
            />
          </div>

          <div>
            <label htmlFor="message" className="label opacity-55">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Ceritakan proyeknya..."
              className={`${fieldClass} mt-2 resize-none`}
            />
          </div>

          <Button type="submit" variant="solid" size="lg" className="w-full sm:w-auto">
            Kirim lewat WhatsApp
          </Button>
        </form>
      </div>
    </Section>
  );
}
