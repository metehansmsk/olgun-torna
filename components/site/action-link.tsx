import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const variants = {
  primary:
    'metal-dark metal-shine border border-black/40 text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_1px_2px_rgb(0_0_0/0.25)] hover:text-silver',
  outline:
    'border border-neutral-300 bg-white text-neutral-800 hover:border-brand-dark hover:bg-surface hover:text-brand-dark',
  inverse:
    'metal-silver metal-shine border border-white/60 text-brand-dark shadow-[inset_0_1px_0_rgb(255_255_255/0.9),0_1px_3px_rgb(0_0_0/0.35)] hover:text-black',
  'outline-inverse': 'border border-white/40 text-white hover:border-white hover:bg-white/10',
}

const sizes = {
  sm: 'h-10 px-4 text-[11px]',
  md: 'h-12 px-6 text-xs',
}

type ActionLinkProps = {
  href: string
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  icon?: LucideIcon
  className?: string
  children: ReactNode
} & Omit<ComponentProps<'a'>, 'href' | 'className' | 'children'>

export function ActionLink({
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className,
  children,
  ...rest
}: ActionLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-sm font-medium uppercase tracking-[0.1em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
      {Icon && (
        <Icon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </Link>
  )
}
