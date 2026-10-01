import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  tone?: 'default' | 'inverse'
  className?: string
}

export function SectionHeading({ id, eyebrow, title, description, tone = 'default', className }: SectionHeadingProps) {
  const inverse = tone === 'inverse'

  return (
    <div className={cn('max-w-2xl', className)}>
      {eyebrow && (
        <p
          className={cn(
            'flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em]',
            inverse ? 'text-white/60' : 'text-brand',
          )}
        >
          <span className="h-px w-8 bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          'mt-3 text-balance text-2xl font-light tracking-tight md:text-3xl',
          inverse ? 'text-white' : 'text-neutral-900',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-pretty text-[15px] font-light leading-relaxed',
            inverse ? 'text-white/70' : 'text-neutral-600',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
