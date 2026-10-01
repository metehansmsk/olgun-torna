import { ArrowRight, Mail, Phone } from 'lucide-react'
import { contactInfo } from '@/lib/site-data'
import { ActionLink } from './action-link'

type CTAProps = {
  quoteHref: string
  eyebrow?: string
  title?: string
  description?: string
  primaryLabel?: string
}

export function CTA({
  quoteHref,
  eyebrow = 'İletişim',
  title = 'Ürün hakkında daha fazla bilgi almak ister misiniz?',
  description = 'Teknik detaylar, opsiyonel donanımlar ve fiyat teklifi için satış ekibimizle iletişime geçin.',
  primaryLabel = 'Teklif Al',
}: CTAProps) {
  return (
    <section id="iletisim" aria-labelledby="cta-title" className="metal-dark relative scroll-mt-32 text-white lg:scroll-mt-36">
      <div className="metal-rule absolute inset-x-0 top-0 h-px opacity-60" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 id="cta-title" className="mt-3 text-balance text-2xl font-light tracking-tight md:text-3xl lg:text-[34px] lg:leading-tight">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-pretty font-light leading-relaxed text-white/80">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-5 lg:items-end">
          <div className="flex flex-col gap-3 sm:flex-row">
            <ActionLink href={quoteHref} variant="inverse" icon={ArrowRight}>
              {primaryLabel}
            </ActionLink>
            <ActionLink href={contactInfo.phones[0].href} variant="outline-inverse">
              Bizimle İletişime Geç
            </ActionLink>
          </div>
          <div className="flex flex-col gap-2 text-sm text-white/80 sm:flex-row sm:gap-6">
            <a href={contactInfo.phones[0].href} className="flex items-center gap-2 transition-colors hover:text-white">
              <Phone className="size-4" aria-hidden="true" />
              {contactInfo.phones[0].label}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 transition-colors hover:text-white">
              <Mail className="size-4" aria-hidden="true" />
              {contactInfo.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
