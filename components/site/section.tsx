import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const tones = {
  white: 'bg-white',
  surface: 'metal-surface',
  dark: 'metal-dark text-white',
}

type SectionProps = {
  id?: string
  labelledBy: string
  tone?: keyof typeof tones
  className?: string
  children: ReactNode
}

export function Section({ id, labelledBy, tone = 'white', className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('scroll-mt-32 py-16 md:py-20 lg:scroll-mt-36', tones[tone], className)}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">{children}</div>
    </section>
  )
}
