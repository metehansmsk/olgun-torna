'use client'

import { useEffect, useState } from 'react'
import { productSections } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function ProductSectionNav() {
  const [activeId, setActiveId] = useState<string>(productSections[0].id)

  useEffect(() => {
    const sections = productSections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav aria-label="Ürün bölümleri" className="sticky top-16 z-30 border-y border-border bg-white lg:top-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ul className="-mb-px flex overflow-x-auto [scrollbar-width:none]">
          {productSections.map((section) => {
            const isActive = activeId === section.id
            return (
              <li key={section.id} className="shrink-0">
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'block border-b-2 px-4 py-4 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors md:px-5',
                    isActive
                      ? 'border-brand text-brand'
                      : 'border-transparent text-neutral-500 hover:text-neutral-900',
                  )}
                >
                  {section.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
