import Link from 'next/link'
import { useId } from 'react'
import { cn } from '@/lib/utils'

const GEAR_PATH =
  'M42.88 12.67 L45.10 4.26 L54.90 4.26 L57.12 12.67 L66.18 15.62 L72.92 10.11 L80.85 15.88 L77.70 23.99 L83.30 31.69 L91.98 31.20 L95.01 40.53 L87.70 45.24 L87.70 54.76 L95.01 59.47 L91.98 68.80 L83.30 68.31 L77.70 76.01 L80.85 84.12 L72.92 89.89 L66.18 84.38 L57.12 87.33 L54.90 95.74 L45.10 95.74 L42.88 87.33 L33.82 84.38 L27.08 89.89 L19.15 84.12 L22.30 76.01 L16.70 68.31 L8.02 68.80 L4.99 59.47 L12.30 54.76 L12.30 45.24 L4.99 40.53 L8.02 31.20 L16.70 31.69 L22.30 23.99 L19.15 15.88 L27.08 10.11 L33.82 15.62 Z'

/** Olgun Torna dişli amblemi (metalik dişli + grafit göbek). */
export function LogoMark({ className, light = false }: { className?: string; light?: boolean }) {
  const id = useId().replace(/:/g, '')
  const metal = `ot-metal-${id}`
  const hub = `ot-hub-${id}`

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={metal} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={light ? '#f5f6f8' : '#d9dde3'} />
          <stop offset="45%" stopColor={light ? '#b9bfc8' : '#8a929e'} />
          <stop offset="55%" stopColor={light ? '#e4e7eb' : '#b4bac4'} />
          <stop offset="100%" stopColor={light ? '#8d95a1' : '#3f4650'} />
        </linearGradient>
        <radialGradient id={hub} cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#5d646e" />
          <stop offset="100%" stopColor="#15181b" />
        </radialGradient>
      </defs>
      {/* Dişli gövdesi, ortası boş */}
      <path
        d={`${GEAR_PATH} M50 24 A26 26 0 1 0 50 76 A26 26 0 1 0 50 24 Z`}
        fill={`url(#${metal})`}
        fillRule="evenodd"
      />
      {/* Torna aynası halkası */}
      <circle cx="50" cy="50" r="19" fill={`url(#${hub})`} />
      <circle cx="50" cy="50" r="11" fill="none" stroke="#d9dde2" strokeWidth="3.5" />
      <circle cx="50" cy="50" r="4" fill="#f2f4f6" />
    </svg>
  )
}

export function Logo({ variant = 'default' }: { variant?: 'default' | 'light' }) {
  const light = variant === 'light'

  return (
    <Link href="/" className="group flex shrink-0 items-center gap-2.5 md:gap-3" aria-label="Olgun Torna - Anasayfa">
      <LogoMark
        light={light}
        className="size-10 shrink-0 transition-transform duration-700 ease-out group-hover:rotate-[36deg] md:size-12"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'whitespace-nowrap text-[19px] font-black uppercase tracking-[0.02em] md:text-[25px]',
            light ? 'text-white' : 'text-brand-dark',
          )}
        >
          Olgun <span className={light ? 'text-metal-light' : 'text-metal'}>Torna</span>
        </span>
        <span
          className={cn(
            'mt-1 whitespace-nowrap text-[7px] font-bold uppercase tracking-[0.16em] md:text-[8.5px] md:tracking-[0.2em]',
            light ? 'text-white/60' : 'text-neutral-500',
          )}
        >
          Makina İmalat Sanayi Ltd. Şti.
        </span>
      </span>
    </Link>
  )
}
