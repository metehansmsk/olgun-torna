'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'
import { Section } from '@/components/site/section'
import { SectionHeading } from './section-heading'

type ProductVideoProps = {
  title: string
  poster: string
}

export function ProductVideo({ title, poster }: ProductVideoProps) {
  const [requested, setRequested] = useState(false)

  return (
    <Section id="video" labelledBy="video-title" tone="dark">
      <SectionHeading
        id="video-title"
        tone="inverse"
        eyebrow="Video"
        title="Ürün Videosu"
        description="Makinenin çalışma prensibini ve kullanımını gösteren tanıtım videosu bu alanda yer alacaktır."
      />

      <Reveal className="mt-10">
        <div className="group relative aspect-video overflow-hidden border border-white/10 bg-neutral-800">
          <Image
            src={poster}
            alt=""
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <button
            type="button"
            onClick={() => setRequested(true)}
            aria-label={`${title} videosunu oynat`}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex size-16 items-center justify-center rounded-full bg-white text-brand-dark transition-transform duration-300 group-hover:scale-105 md:size-20">
              <Play className="ml-1 size-6 fill-current md:size-7" aria-hidden="true" />
            </span>
          </button>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 border-t border-white/10 bg-neutral-950/70 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
            <p className="text-sm font-medium text-white md:text-base">{title}</p>
            <p className="text-xs text-white/60" aria-live="polite">
              {requested ? 'Video yakında yayınlanacaktır.' : 'Süre: —'}
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
