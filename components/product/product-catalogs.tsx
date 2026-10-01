import { Download, FileText } from 'lucide-react'
import { ActionLink } from '@/components/site/action-link'
import { Reveal } from '@/components/site/reveal'
import { Section } from '@/components/site/section'
import { SectionHeading } from './section-heading'

type Catalog = { title: string; format: string; size: string; href: string }

export function ProductCatalogs({ catalogs }: { catalogs: Catalog[] }) {
  return (
    <Section id="kataloglar" labelledBy="kataloglar-title">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            id="kataloglar-title"
            eyebrow="Dokümanlar"
            title="Kataloglar"
            description="Ürün kataloğu ve teknik dokümanlar yayınlandığında bu alandan indirilebilecektir."
          />
        </div>
        <Reveal className="lg:col-span-8">
          <ul className="divide-y divide-border border-y border-border">
            {catalogs.map((catalog) => (
              <li key={catalog.title} className="flex flex-wrap items-center gap-5 py-5 sm:flex-nowrap">
                <span className="flex size-12 shrink-0 items-center justify-center bg-surface text-brand" aria-hidden="true">
                  <FileText className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-neutral-900">{catalog.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-neutral-500">
                    {`${catalog.format} · Boyut: ${catalog.size}`}
                  </p>
                </div>
                <ActionLink href={catalog.href} variant="outline" size="sm" icon={Download} aria-label={`${catalog.title} indir`}>
                  İndir
                </ActionLink>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
