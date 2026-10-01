import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'
import { Section } from '@/components/site/section'
import { SectionHeading } from './section-heading'

type RelatedProduct = { name: string; image: string; href: string }

export function RelatedProducts({ categoryName, products }: { categoryName: string; products: RelatedProduct[] }) {
  return (
    <Section labelledBy="ilgili-urunler-title" tone="surface">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeading id="ilgili-urunler-title" eyebrow={categoryName} title="Benzer Ürünler" />
        <Link
          href="#"
          className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-brand"
        >
          {`Tüm ${categoryName}`}
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((item, index) => (
          <li key={item.name}>
            <Reveal delay={index * 80}>
              <Link
                href={item.href}
                className="group block border border-border bg-white transition-colors duration-200 hover:border-brand"
              >
                <span className="relative block aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </span>
                <span className="flex items-center justify-between gap-4 border-t border-border px-5 py-4">
                  <span className="font-medium text-neutral-900">{item.name}</span>
                  <ArrowRight
                    className="size-4 text-neutral-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-brand"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
