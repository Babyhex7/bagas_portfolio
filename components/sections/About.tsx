'use client';

import Image from 'next/image';
import { Section, Reveal } from '@/components/ui/Section';

const focus = [
  { title: 'Frontend', detail: 'React, Next.js, Tailwind CSS — antarmuka yang cepat dan enak dipakai.' },
  { title: 'Backend & data', detail: 'Node.js, REST API, integrasi basis data untuk sistem yang harus jalan tiap hari.' },
  { title: 'Mobile', detail: 'Flutter untuk produk lintas platform, dari prototipe sampai rilis.' },
  { title: 'Kolaborasi klien', detail: 'Bekerja langsung dengan pemilik produk — dari brief singkat sampai situs live.' },
];

export function About() {
  return (
    <Section
      id="profile"
      band="paper"
      index="01"
      label="Profile"
      meta={['Bandung, ID', 'UPI · RPL']}
      title={
        <>
          Satu orang,
          <br />
          <span className="italic text-nila">delapan klien.</span>
        </>
      }
      lede="Mahasiswa S1 Rekayasa Perangkat Lunak di Universitas Pendidikan Indonesia yang merangkap sebagai fullstack engineer lepas — mengerjakan produk untuk klien nyata di sela kuliah."
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
        <Reveal className="plate relative aspect-[4/5] overflow-hidden rounded-panel border border-ink/12 lg:order-2">
          <Image
            src="/assets/images/profile.jpg"
            alt="Bagas Adhi Nugraha"
            fill
            sizes="(min-width: 1024px) 22rem, 90vw"
            className="object-cover"
            priority
          />
        </Reveal>

        <div className="lg:order-1">
          <div className="space-y-5 text-base leading-relaxed opacity-80 md:text-lg">
            <p>
              Kerja saya berkisar dari <strong className="text-nila">dasbor internal</strong> yang dipakai
              tim operasional tiap jam, sampai <strong className="text-nila">situs korporat</strong> yang jadi
              wajah pertama sebuah perusahaan. Dua hal itu butuh pendekatan berbeda — dan saya suka
              mengerjakan keduanya.
            </p>
            <p>
              Sebagian besar pekerjaan terbaru ada di ekosistem <strong className="text-nila">Duluin</strong>,
              sebuah rangkaian produk HR &amp; operasional: presensi, manajemen tenaga kerja, keuangan
              internal, sampai portal rekrutmen — tujuh produk, satu ekosistem.
            </p>
          </div>

          <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {focus.map((f) => (
              <div key={f.title} className="border-t border-ink/15 pt-4">
                <dt className="font-display text-lg font-semibold">{f.title}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed opacity-65">{f.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
