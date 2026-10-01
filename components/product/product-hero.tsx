import Image from 'next/image'
import { ArrowRight, FileDown, Phone } from 'lucide-react'
import { ActionLink } from '@/components/site/action-link'
import type { GalleryImage, ProductFact } from '@/lib/site-data'

type ProductHeroProps = {
  title: string
  category: string
  summary: string
  image: GalleryImage
  facts: ProductFact[]
  catalogHref: string
  quoteHref: string
  phone: { label: string; href: string }
}

export function ProductHero({ title, category, summary, image, facts, catalogHref, quoteHref, phone }: ProductHeroProps) {
  return (
    <section aria-labelledby="urun-basligi" className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-8 md:py-14 lg:grid-cols-12 lg:gap-14 lg:py-16">
        <figure className="relative aspect-[4/3] overflow-hidden border border-border bg-surface lg:col-span-7">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1280px) 720px, (min-width: 1024px) 58vw, 100vw"
            className="object-contain p-6 md:p-10"
          />
        </figure>

        <div className="flex flex-col justify-center lg:col-span-5">
          <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-brand">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            {category}
          </p>
          <h1
            id="urun-basligi"
            className="mt-4 text-balance text-3xl font-normal tracking-tight text-neutral-900 md:text-4xl lg:text-[40px] lg:leading-[1.15]"
          >
            {title}
          </h1>
          <p className="mt-5 text-pretty text-base font-light leading-relaxed text-neutral-600">{summary}</p>

          <dl className="mt-8 divide-y divide-border border-y border-border">
            {facts.map((fact) => (
              <div key={fact.label} className="flex items-baseline justify-between gap-6 py-3.5">
                <dt className="shrink-0 text-[11px] uppercase tracking-[0.14em] text-neutral-500">{fact.label}</dt>
                <dd className="text-right text-sm font-medium text-neutral-900">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href={quoteHref} icon={ArrowRight}>
              Teklif Al
            </ActionLink>
            <ActionLink href={catalogHref} variant="outline" icon={FileDown}>
              PDF Katalog
            </ActionLink>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="flex size-11 items-center justify-center border border-border text-brand" aria-hidden="true">
              <Phone className="size-4" />
            </span>
            <p className="text-sm text-neutral-500">
              Satış ekibimize ulaşın
              <a href={phone.href} className="block text-base font-medium text-neutral-900 transition-colors hover:text-brand">
                {phone.label}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
