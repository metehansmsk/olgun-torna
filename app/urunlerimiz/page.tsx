import type { Metadata } from 'next'
import { ArrowRight, Check, Phone } from 'lucide-react'
import { Header } from '@/components/site/header'
import { Breadcrumb } from '@/components/site/breadcrumb'
import { CTA } from '@/components/site/cta'
import { Footer } from '@/components/site/footer'
import { Reveal } from '@/components/site/reveal'
import { LogoMark } from '@/components/site/logo'
import { ActionLink } from '@/components/site/action-link'
import { MachineIllustration } from '@/components/site/machine-illustration'
import { contactInfo, machineProducts, type MachineProduct } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Ürünlerimiz - Olgun Torna Makina İmalat Sanayi Ltd. Şti.',
  description:
    'Krom konsantre tesisi makineleri, değirmenler, kırıcılar, elekler, konveyör bantlar ve konveyör bant makarası imalatı.',
}

function quoteFor(name: string) {
  return `mailto:${contactInfo.email}?subject=${encodeURIComponent(`${name} - Teklif Talebi`)}`
}

function ProductCard({ product, index }: { product: MachineProduct; index: number }) {
  return (
    <article
      id={product.slug}
      className="group flex h-full scroll-mt-36 flex-col overflow-hidden border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-[0_22px_45px_-22px_rgb(0_0_0/0.4)]"
    >
      {/* Temsili görsel alanı */}
      <div className="metal-dark relative overflow-hidden px-10 py-8 text-white/55 transition-colors duration-300 group-hover:text-white/80">
        <LogoMark
          light
          className="pointer-events-none absolute -right-12 -top-12 size-40 opacity-[0.06] transition-transform duration-700 group-hover:rotate-45"
        />
        <MachineIllustration kind={product.kind} className="relative mx-auto max-w-[260px]" />
        <span className="absolute left-4 top-4 border border-white/15 bg-black/30 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
          Temsili Görsel
        </span>
        <span className="absolute right-4 top-4 text-[11px] font-medium tabular-nums tracking-[0.2em] text-white/40">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="metal-rule absolute inset-x-0 bottom-0 h-px opacity-60" aria-hidden="true" />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h2 className="text-lg font-black uppercase leading-tight tracking-[0.02em] text-brand-dark md:text-xl">
          {product.name}
        </h2>
        <p className="mt-3 text-pretty text-[15px] font-light leading-relaxed text-neutral-600">{product.summary}</p>
        <ul className="mt-5 space-y-2 border-t border-border pt-5">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-neutral-700">
              <Check className="mt-0.5 size-4 shrink-0 text-steel" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-7">
          <ActionLink href={quoteFor(product.name)} size="sm" icon={ArrowRight}>
            Teklif Al
          </ActionLink>
        </div>
      </div>
    </article>
  )
}

export default function ProductsPage() {
  return (
    <>
      <Header activeLabel="Ürünlerimiz" />
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Ürünlerimiz', href: '/urunlerimiz' },
        ]}
      />
      <main>
        <section aria-labelledby="urunler-baslik" className="metal-dark relative overflow-hidden text-white">
          <LogoMark
            light
            className="pointer-events-none absolute -right-24 top-1/2 size-[420px] -translate-y-1/2 opacity-[0.06] md:-right-16"
          />
          <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
            <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
              <span className="h-px w-8 bg-current" aria-hidden="true" />
              Ürünlerimiz
            </p>
            <h1
              id="urunler-baslik"
              className="mt-4 max-w-3xl text-balance text-3xl font-light tracking-tight md:text-4xl lg:text-[44px] lg:leading-[1.15]"
            >
              Madencilik sektörü için <span className="text-metal-light font-bold">ağır hizmet makineleri</span>
            </h1>
            <p className="mt-5 max-w-2xl text-pretty font-light leading-relaxed text-white/70">
              Kırma, öğütme, eleme, taşıma ve zenginleştirme süreçleri için ihtiyacınıza uygun makineleri kendi
              tesisimizde imal ediyoruz.
            </p>

            {/* Hızlı erişim */}
            <nav aria-label="Ürün listesi" className="mt-10">
              <ul className="flex flex-wrap gap-2">
                {machineProducts.map((product) => (
                  <li key={product.slug}>
                    <a
                      href={`#${product.slug}`}
                      className="inline-flex border border-white/15 bg-white/5 px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/75 transition-colors hover:border-white/50 hover:bg-white/10 hover:text-white"
                    >
                      {product.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="metal-rule absolute inset-x-0 bottom-0 h-px opacity-60" aria-hidden="true" />
        </section>

        <section aria-label="Ürün listesi" className="metal-surface py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {machineProducts.map((product, index) => (
                <li key={product.slug}>
                  <Reveal delay={(index % 3) * 90} className="h-full">
                    <ProductCard product={product} index={index} />
                  </Reveal>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col items-start gap-5 border border-border bg-white p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div>
                <h2 className="text-lg font-bold text-brand-dark">Özel ölçü veya farklı bir makine mi arıyorsunuz?</h2>
                <p className="mt-1.5 text-sm font-light text-neutral-600">
                  Tesisinize özel proje ve yedek parça imalatı için bizimle iletişime geçin.
                </p>
              </div>
              <ActionLink href={contactInfo.phones[0].href} variant="outline" icon={Phone}>
                {contactInfo.phones[0].label}
              </ActionLink>
            </div>
          </div>
        </section>

        <CTA quoteHref={`mailto:${contactInfo.email}?subject=${encodeURIComponent('Teklif Talebi')}`} />
      </main>
      <Footer />
    </>
  )
}
