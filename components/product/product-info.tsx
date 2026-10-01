import { Reveal } from '@/components/site/reveal'
import { Section } from '@/components/site/section'
import { ProductFeatures } from './product-features'
import { SectionHeading } from './section-heading'

type ProductInfoProps = {
  overview: string[]
  features: string[]
  usageAreas: string[]
}

export function ProductInfo({ overview, features, usageAreas }: ProductInfoProps) {
  return (
    <Section id="genel-bakis" labelledBy="genel-bakis-title" tone="surface">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <SectionHeading id="genel-bakis-title" eyebrow="Genel Bakış" title="Ürün Hakkında" />
          <div className="mt-6 space-y-4 text-[15px] font-light leading-relaxed text-neutral-600">
            {overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className="mt-10 text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-900">
            Kullanım Alanları
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {usageAreas.map((area) => (
              <li key={area} className="border border-neutral-300 bg-white px-3 py-1.5 text-[13px] text-neutral-700">
                {area}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-7 lg:pt-1" delay={100}>
          <ProductFeatures features={features} />
        </Reveal>
      </div>
    </Section>
  )
}
