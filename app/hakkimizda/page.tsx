import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/site/header'
import { Breadcrumb } from '@/components/site/breadcrumb'
import { CTA } from '@/components/site/cta'
import { Footer } from '@/components/site/footer'
import { Reveal } from '@/components/site/reveal'
import { LogoMark } from '@/components/site/logo'
import { ActionLink } from '@/components/site/action-link'
import { contactInfo, machineProducts } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Hakkımızda - Olgun Torna Makina İmalat Sanayi Ltd. Şti.',
  description:
    '1963 yılında kurulan Olgun Torna, madencilik sektörü üzerine makina imalatı yapmaktadır.',
}

const FOUNDED = 1963

const stats = [
  { value: String(FOUNDED), label: 'Kuruluş Yılı' },
  { value: `${new Date().getFullYear() - FOUNDED}+`, label: 'Yıllık Tecrübe' },
  { value: 'Madencilik', label: 'Uzmanlık Alanı' },
]

export default function AboutPage() {
  return (
    <>
      <Header activeLabel="Hakkımızda" />
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Hakkımızda', href: '/hakkimizda' },
        ]}
      />
      <main>
        {/* Görsel başlık */}
        <section aria-labelledby="hakkimizda-baslik" className="relative isolate overflow-hidden text-white">
          <Image
            src="/images/fabrika.jpg"
            alt="Olgun Torna üretim tesisi"
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover grayscale-[35%]"
          />
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-[#121417]/95 via-[#1c1f23]/80 to-[#1c1f23]/30"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-32">
            <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
              <span className="h-px w-8 bg-current" aria-hidden="true" />
              Hakkımızda
            </p>
            <h1
              id="hakkimizda-baslik"
              className="mt-4 max-w-2xl text-balance text-3xl font-light tracking-tight md:text-4xl lg:text-5xl lg:leading-[1.1]"
            >
              {FOUNDED}&apos;ten bu yana <span className="text-metal-light font-bold">madenciliğe güç veriyoruz</span>
            </h1>
          </div>
          <div className="metal-rule absolute inset-x-0 bottom-0 h-px opacity-60" aria-hidden="true" />
        </section>

        {/* Rakamlar */}
        <section aria-label="Kısaca Olgun Torna" className="metal-carbon text-white">
          <dl className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-8">
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 sm:px-8 sm:first:pl-0">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-white/50">{stat.label}</dt>
                <dd className="text-metal-light mt-2 text-3xl font-black tracking-tight md:text-4xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Firma metni + fotoğraf */}
        <section aria-labelledby="firmamiz-baslik" className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-12 lg:items-center lg:gap-16">
            <Reveal className="lg:col-span-6">
              <figure className="relative">
                <div className="relative aspect-[3/2] overflow-hidden border border-border">
                  <Image
                    src="/images/fabrika.jpg"
                    alt="Olgun Torna fabrika binası ve üretim alanı"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="metal-dark absolute -bottom-6 -right-3 flex items-center gap-3 px-5 py-4 text-white shadow-xl md:-right-6">
                  <LogoMark light className="size-9" />
                  <div className="leading-tight">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Kuruluş</p>
                    <p className="text-xl font-black">{FOUNDED}</p>
                  </div>
                </div>
              </figure>
            </Reveal>

            <Reveal className="lg:col-span-6" delay={120}>
              <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-steel">
                <span className="h-px w-8 bg-current" aria-hidden="true" />
                Firmamız
              </p>
              <h2
                id="firmamiz-baslik"
                className="mt-3 text-balance text-2xl font-light tracking-tight text-brand-dark md:text-3xl"
              >
                Olgun Torna Makina İmalat Sanayi Ltd. Şti.
              </h2>
              <div className="mt-6 space-y-4 text-pretty text-[16px] font-light leading-relaxed text-neutral-700">
                <p>
                  {FOUNDED} yılında kurulan firmamız <strong className="font-semibold text-brand-dark">madencilik sektörü</strong>{' '}
                  üzerine makina imalatı yapmaktadır.
                </p>
                <p>
                  Krom konsantre tesisi makineleri, değirmenler, kırıcılar, elekler ve konveyör bantlar imalatlarımız
                  içerisindedir.
                </p>
                <p>Konveyör bant makarası imalatını yedek parça olarak da yapmaktayız.</p>
              </div>

              <ul className="mt-8 flex flex-wrap gap-2">
                {machineProducts.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/urunlerimiz#${product.slug}`}
                      className="inline-flex border border-border bg-surface px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-700 transition-colors hover:border-brand-dark hover:bg-brand-dark hover:text-white"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ActionLink href="/urunlerimiz" icon={ArrowRight}>
                  Ürünlerimiz
                </ActionLink>
                <ActionLink href="/referanslar" variant="outline">
                  Referanslarımız
                </ActionLink>
              </div>
            </Reveal>
          </div>
        </section>

        <CTA quoteHref={`mailto:${contactInfo.email}?subject=${encodeURIComponent('Bilgi Talebi')}`} />
      </main>
      <Footer />
    </>
  )
}
