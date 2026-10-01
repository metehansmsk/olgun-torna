import type { MachineKind } from '@/lib/site-data'
import { cn } from '@/lib/utils'

/**
 * Ürün fotoğrafları gelene kadar kullanılan temsili makine çizimleri.
 * Çizgiler currentColor kullanır, rengi üst elemandan alır.
 */
const drawings: Record<MachineKind, React.ReactNode> = {
  // Sallantılı masa + spiral
  krom: (
    <>
      <path d="M30 120 L150 100 L150 110 L30 130 Z" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path key={i} d={`M${45 + i * 15} ${118 - i * 2.5} l10 -1.7`} strokeWidth="1.5" />
      ))}
      <path d="M45 128 V160 M135 112 V160 M30 160 H150" />
      <rect x="60" y="138" width="30" height="16" rx="2" />
      <path d="M200 40 V160" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M180 ${55 + i * 22} q20 -10 40 0 q-20 10 -40 0`} />
      ))}
      <path d="M185 160 H215" />
    </>
  ),
  // Bilyalı değirmen
  degirmen: (
    <>
      <rect x="55" y="70" width="130" height="60" rx="6" />
      <path d="M55 82 H185 M55 118 H185" strokeWidth="1.5" />
      <path d="M35 90 H55 V110 H35 Z M185 90 H205 V110 H185 Z" />
      <circle cx="160" cy="100" r="40" strokeDasharray="4 4" />
      <path d="M45 110 V160 M195 110 V160 M30 160 H210" />
      <circle cx="90" cy="100" r="6" />
      <circle cx="110" cy="108" r="5" />
      <circle cx="128" cy="96" r="6" />
      <rect x="215" y="135" width="20" height="25" rx="2" />
      <path d="M205 100 L225 135" />
    </>
  ),
  // Çeneli kırıcı
  kirici: (
    <>
      <path d="M70 40 H170 L150 80 H90 Z" />
      <path d="M90 80 L100 140 H140 L150 80" />
      <path d="M100 85 L112 135 M140 85 L128 135" strokeWidth="1.5" />
      <circle cx="190" cy="105" r="30" />
      <circle cx="190" cy="105" r="6" />
      <path d="M190 75 V135 M160 105 H220" strokeWidth="1.5" />
      <path d="M80 140 H200 M85 140 V160 M195 140 V160 M70 160 H210" />
    </>
  ),
  // Titreşimli elek
  elek: (
    <>
      <path d="M40 70 L200 110 V125 L40 85 Z" />
      <path d="M40 95 L200 135 V150 L40 110 Z" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <path key={i} d={`M${55 + i * 18} ${78 + i * 4.5} v12`} strokeWidth="1.2" />
      ))}
      <path d="M60 115 l-4 6 l8 4 l-8 4 l8 4 l-4 6" />
      <path d="M180 145 l-4 6 l8 4 l-4 6" />
      <path d="M45 140 H90 M165 165 H210" />
      <rect x="100" y="45" width="35" height="22" rx="3" />
    </>
  ),
  // Eğimli bant konveyör
  konveyor: (
    <>
      <path d="M30 140 L210 60" />
      <path d="M35 152 L215 72" />
      <circle cx="35" cy="146" r="8" />
      <circle cx="212" cy="66" r="10" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle key={i} cx={65 + i * 25} cy={136 - i * 11.1} r="3.5" />
      ))}
      <path d="M60 150 V165 M120 124 V165 M180 97 V165 M45 165 H195" />
      <path d="M90 115 l8 -8 l8 4 l-2 7 Z M140 93 l9 -7 l7 5 l-3 6 Z" strokeWidth="1.5" />
    </>
  ),
  // Oluklu makara seti
  makara: (
    <>
      <path d="M40 80 L80 120" />
      <path d="M200 80 L160 120" />
      <rect x="28" y="66" width="62" height="22" rx="11" transform="rotate(45 59 77)" />
      <rect x="82" y="110" width="76" height="22" rx="11" />
      <rect x="150" y="66" width="62" height="22" rx="11" transform="rotate(-45 181 77)" />
      <path d="M95 121 H145" strokeWidth="1.2" strokeDasharray="3 3" />
      <path d="M50 150 H190 M60 150 V138 M180 150 V138" />
      <path d="M30 60 Q120 140 210 60" strokeWidth="1.5" strokeDasharray="6 4" />
    </>
  ),
}

export function MachineIllustration({ kind, className }: { kind: MachineKind; className?: string }) {
  return (
    <svg
      viewBox="0 0 240 200"
      className={cn('h-auto w-full', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {drawings[kind]}
    </svg>
  )
}
