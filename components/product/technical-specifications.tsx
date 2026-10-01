import { ArrowRight, FileDown } from 'lucide-react'
import { ActionLink } from '@/components/site/action-link'
import { Reveal } from '@/components/site/reveal'
import { Section } from '@/components/site/section'
import type { SpecRow } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

type TechnicalSpecificationsProps = {
  productName: string
  specs: SpecRow[]
  note: string
  catalogHref: string
  quoteHref: string
}

export function TechnicalSpecifications({ productName, specs, note, catalogHref, quoteHref }: TechnicalSpecificationsProps) {
  return (
    <Section id="teknik-ozellikler" labelledBy="teknik-ozellikler-title">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <SectionHeading
            id="teknik-ozellikler-title"
            eyebrow="Teknik Veriler"
            title="Teknik Özellikler"
            description="Modele ve opsiyonel donanımlara göre değişen teknik değerler için satış ekibimizle iletişime geçebilirsiniz."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
            <ActionLink href={catalogHref} variant="outline" icon={FileDown}>
              Teknik Veri Föyü
            </ActionLink>
            <ActionLink href={quoteHref} icon={ArrowRight}>
              Teknik Bilgi Talep Et
            </ActionLink>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-8" delay={100}>
          <div className="overflow-hidden border border-border">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">{`${productName} teknik özellikleri`}</caption>
              <thead className="metal-dark text-white">
                <tr>
                  <th scope="col" className="px-4 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] md:px-6">
                    Özellik
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] md:px-6">
                    Değer
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {specs.map((spec, index) => (
                  <tr
                    key={spec.label}
                    className={cn('transition-colors hover:bg-neutral-50', index % 2 === 1 && 'bg-surface/70')}
                  >
                    <th scope="row" className="w-2/5 px-4 py-4 align-top font-medium text-neutral-900 md:px-6">
                      {spec.label}
                    </th>
                    <td className="px-4 py-4 text-neutral-600 md:px-6">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-neutral-500">{note}</p>
        </Reveal>
      </div>
    </Section>
  )
}
