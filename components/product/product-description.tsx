import { Check } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'
import { Section } from '@/components/site/section'
import type { DescriptionSection } from '@/lib/site-data'
import { SectionHeading } from './section-heading'

export function ProductDescription({ sections }: { sections: DescriptionSection[] }) {
  return (
    <Section id="urun-aciklamasi" labelledBy="urun-aciklamasi-title" tone="surface">
      <SectionHeading id="urun-aciklamasi-title" eyebrow="Detaylı Bilgi" title="Ürün Açıklaması" />

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <aside className="hidden lg:col-span-3 lg:block">
          <nav aria-label="Açıklama içeriği" className="sticky top-40 border-l border-border">
            <ul>
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="-ml-px flex gap-3 border-l-2 border-transparent py-2.5 pl-5 text-sm text-neutral-600 transition-colors hover:border-brand hover:text-brand"
                  >
                    <span className="tabular-nums text-neutral-400">{String(index + 1).padStart(2, '0')}</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="flex flex-col gap-px border border-border bg-border lg:col-span-9">
          {sections.map((section, index) => (
            <Reveal key={section.id}>
              <article
                id={section.id}
                aria-labelledby={`${section.id}-title`}
                className="scroll-mt-36 bg-white p-6 md:p-10"
              >
                <h3 id={`${section.id}-title`} className="flex items-baseline gap-4 text-lg font-medium text-neutral-900">
                  <span className="text-sm tabular-nums text-brand" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {section.title}
                </h3>
                <div className="mt-4 space-y-4 text-[15px] font-light leading-relaxed text-neutral-600">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.list && (
                  <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] text-neutral-700">
                        <Check className="mt-1 size-4 shrink-0 text-brand" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
