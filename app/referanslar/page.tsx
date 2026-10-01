import type { Metadata } from 'next'
import { Header } from '@/components/site/header'
import { Breadcrumb } from '@/components/site/breadcrumb'
import { CTA } from '@/components/site/cta'
import { Footer } from '@/components/site/footer'
import { Reveal } from '@/components/site/reveal'
import { LogoMark } from '@/components/site/logo'
import { contactInfo, references, type Reference } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Referanslar - Olgun Torna Makina İmalat Sanayi Ltd. Şti.',
  description: 'Olgun Torna olarak çözüm ortağı olduğumuz madencilik firmaları ve referanslarımız.',
}

const referencesQuoteHref = `mailto:${contactInfo.email}?subject=${encodeURIComponent('Teklif Talebi')}`

function initials(name: string) {
  return name
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toLocaleUpperCase('tr-TR'))
    .join('')
}

function ReferenceCard({ reference, index }: { reference: Reference; index: number }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-border bg-white p-6 shadow-[0_1px_2px_rgb(0_0_0/0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-[0_18px_40px_-18px_rgb(0_0_0/0.35)] md:p-7">
      {/* Üstte gümüş çizgi, hover'da beliriyor */}
      <span
        aria-hidden="true"
        className="metal-rule absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
      />
      {/* Arkada silik dişli */}
      <LogoMark className="pointer-events-none absolute -bottom-10 -right-10 size-36 opacity-[0.05] transition-all duration-700 group-hover:rotate-45 group-hover:opacity-[0.09]" />

      <div className="flex items-start justify-between">
        <span className="metal-silver flex size-14 items-center justify-center rounded-full border border-white text-lg font-black tracking-tight text-brand-dark shadow-[inset_0_1px_0_rgb(255_255_255/0.9),0_2px_6px_rgb(0_0_0/0.18)] transition-colors duration-300 group-hover:text-black">
          {initials(reference.name)}
        </span>
        <span className="text-[11px] font-medium tabular-nums tracking-[0.2em] text-neutral-400">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-black uppercase leading-tight tracking-[0.02em] text-brand-dark md:text-xl">
          {reference.name.toLocaleUpperCase('tr-TR')}
        </h3>
        <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-steel">
          {reference.suffix.toLocaleUpperCase('tr-TR')}
        </p>
      </div>
    </article>
  )
}

export default function ReferencesPage() {
  return (
    <>
      <Header activeLabel="Referanslar" />
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Referanslar', href: '/referanslar' },
        ]}
      />
      <main>
        {/* Giriş bandı */}
        <section aria-labelledby="referanslar-baslik" className="metal-dark relative overflow-hidden text-white">
          <LogoMark
            light
            className="pointer-events-none absolute -right-24 top-1/2 size-[420px] -translate-y-1/2 opacity-[0.06] md:-right-16"
          />
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
                <span className="h-px w-8 bg-current" aria-hidden="true" />
                Referanslarımız
              </p>
              <h1
                id="referanslar-baslik"
                className="mt-4 text-balance text-3xl font-light tracking-tight md:text-4xl lg:text-[44px] lg:leading-[1.15]"
              >
                Madencilik sektörünün güvendiği <span className="text-metal-light font-bold">çözüm ortağı</span>
              </h1>
              <p className="mt-5 max-w-2xl text-pretty font-light leading-relaxed text-white/70">
                Yıllardır birlikte çalıştığımız madencilik firmalarına kaliteli imalat, hızlı servis ve güvenilir
                çözümler sunuyoruz.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 lg:col-span-4">
              <div className="bg-black/30 px-6 py-6">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-white/50">Referans Firma</dt>
                <dd className="text-metal-light mt-2 text-4xl font-black tabular-nums">{references.length}+</dd>
              </div>
              <div className="bg-black/30 px-6 py-6">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-white/50">Sektör</dt>
                <dd className="mt-3 text-lg font-bold uppercase tracking-wide text-white">Madencilik</dd>
              </div>
            </dl>
          </div>
          <div className="metal-rule absolute inset-x-0 bottom-0 h-px opacity-60" aria-hidden="true" />
        </section>

        {/* Referans listesi */}
        <section aria-label="Referans firmalar" className="metal-surface py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {references.map((reference, index) => (
                <li key={reference.name}>
                  <Reveal delay={(index % 4) * 80} className="h-full">
                    <ReferenceCard reference={reference} index={index} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CTA quoteHref={referencesQuoteHref} />
      </main>
      <Footer />
    </>
  )
}
