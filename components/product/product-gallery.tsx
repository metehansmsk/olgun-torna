'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'
import { Section } from '@/components/site/section'
import type { GalleryImage } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

const arrowClass =
  'absolute top-1/2 flex size-11 -translate-y-1/2 items-center justify-center bg-white/90 text-neutral-900 transition-colors hover:bg-brand hover:text-white'

export function ProductGallery({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const active = images[activeIndex]

  const go = (direction: 1 | -1) =>
    setActiveIndex((current) => (current + direction + images.length) % images.length)

  const openLightbox = () => dialogRef.current?.showModal()
  const closeLightbox = () => dialogRef.current?.close()

  return (
    <Section id="fotograf-galerisi" labelledBy="fotograf-galerisi-title">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeading id="fotograf-galerisi-title" eyebrow="Galeri" title="Fotoğraf Galerisi" />
        <p className="text-sm text-neutral-500" aria-live="polite">
          {`${activeIndex + 1} / ${images.length}`}
        </p>
      </div>

      <Reveal className="mt-10">
        <div className="group relative aspect-[16/10] overflow-hidden border border-border bg-surface md:aspect-[16/8]">
          <Image
            key={active.src}
            src={active.src}
            alt={active.alt}
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02] md:p-8"
          />
          <button
            type="button"
            onClick={openLightbox}
            aria-label={`Büyük görüntüle: ${active.alt}`}
            className="absolute inset-0 flex cursor-zoom-in items-end justify-end p-4"
          >
            <span className="flex items-center gap-2 bg-neutral-900/80 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
              <Maximize2 className="size-3.5" aria-hidden="true" />
              Büyüt
            </span>
          </button>
          <button type="button" onClick={() => go(-1)} aria-label="Önceki görsel" className={cn(arrowClass, 'left-0')}>
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Sonraki görsel" className={cn(arrowClass, 'right-0')}>
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>

        <ul className="mt-3 flex snap-x gap-3 overflow-x-auto pb-1 [scrollbar-width:thin] md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
          {images.map((image, index) => {
            const isActive = index === activeIndex
            return (
              <li key={image.src} className="w-32 shrink-0 snap-start md:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Görsel ${index + 1}: ${image.alt}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'group/thumb relative block aspect-[4/3] w-full overflow-hidden border-2 bg-surface transition-colors',
                    isActive ? 'border-brand' : 'border-transparent hover:border-neutral-300',
                  )}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 240px, 128px"
                    className="object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                  />
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute inset-0 bg-neutral-900/30 transition-opacity duration-200',
                      isActive ? 'opacity-0' : 'opacity-100 group-hover/thumb:opacity-0',
                    )}
                  />
                </button>
              </li>
            )
          })}
        </ul>
      </Reveal>

      <dialog
        ref={dialogRef}
        aria-label="Görsel görüntüleyici"
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') go(1)
          if (event.key === 'ArrowLeft') go(-1)
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-neutral-950 p-0 text-white backdrop:bg-black/80"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 md:px-6">
            <p className="truncate text-sm text-white/80" aria-live="polite">
              <span className="mr-3 tabular-nums text-white">{`${activeIndex + 1} / ${images.length}`}</span>
              {active.alt}
            </p>
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Görüntüleyiciyi kapat"
              className="flex size-10 shrink-0 items-center justify-center text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          <div className="relative flex-1">
            <Image key={active.src} src={active.src} alt={active.alt} fill sizes="100vw" className="object-contain p-4 md:p-12" />
            <button type="button" onClick={() => go(-1)} aria-label="Önceki görsel" className={cn(arrowClass, 'left-2 md:left-6')}>
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Sonraki görsel" className={cn(arrowClass, 'right-2 md:right-6')}>
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </dialog>
    </Section>
  )
}
