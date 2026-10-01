import Link from 'next/link'
import { ChevronRight, House } from 'lucide-react'
import type { NavLink } from '@/lib/site-data'

export function Breadcrumb({ items }: { items: NavLink[] }) {
  return (
    <div className="border-b border-border bg-surface">
      <nav aria-label="Sayfa konumu" className="mx-auto max-w-7xl px-4 md:px-8">
        <ol className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-3.5 text-xs text-neutral-500 [scrollbar-width:none]">
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <li key={item.label} className="flex items-center gap-2">
                {index > 0 && <ChevronRight className="size-3.5 text-neutral-400" aria-hidden="true" />}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-neutral-900">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="flex items-center gap-1.5 transition-colors hover:text-brand">
                    {index === 0 && <House className="size-3.5" aria-hidden="true" />}
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </div>
  )
}
