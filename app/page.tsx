import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Crosshair,
  DraftingCompass,
  Factory,
  FlaskConical,
  Globe,
  Package,
  Settings,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { Header } from '@/components/site/header'
import { CTA } from '@/components/site/cta'
import { Footer } from '@/components/site/footer'
import { Reveal } from '@/components/site/reveal'
import { LogoMark } from '@/components/site/logo'
import { ActionLink } from '@/components/site/action-link'
import { CountUp } from '@/components/site/count-up'
import { MachineIllustration } from '@/components/site/machine-illustration'
import {
  FOUNDED_YEAR,
  contactInfo,
  homeServices,
  homeStats,
  machineProducts,
  references,
  sectors,
  type HomeStat,
  type ServiceItem,
} from '@/lib/site-data'

const quoteHref = `mailto:${contactInfo.email}?subject=${encodeURIComponent('Teklif Talebi')}`

const statIcons: Record<HomeStat['icon'], LucideIcon> = {
  experience: Award,
  globe: Globe,
  factory: Factory,
  certificate: BadgeCheck,
}

const serviceIcons: Record<ServiceItem['icon'], LucideIcon> = {
  design: DraftingCompass,
  install: Settings,
  maintenance: Wrench,
  parts: Package,
}

/** Vitrinde gösterilecek ürünler (slug ile seçilir) */
const featuredSlugs = ['krom-konsantre-tesisi', 'degirmenler', 'kiricilar', 'konveyor-bantlar']
const featuredProducts = machineProducts.filter((p) => featuredSlugs.includes(p.slug))

/** Bölüm başlıkları için ortak küçük bileşen */
function Eyebrow({ children, inverse = false }: { children: React.ReactNode; inverse?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] ${inverse ? 'text-white/60' : 'text-steel'}`}
    >
      <span className="h-px w-8 bg-current" aria-hidden="true" />
      {children}
    </p>
  )
}

function initials(name: string) {
  return name
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w.charAt(0).toLocaleUpperCase('tr-TR'))
    .join('')
}

export default function HomePage() {
  return (
    <>
      <Header activeLabel="Anasayfa" />

      <main>
        {/* =========================================================
            1. HERO — değer önerisi, iki CTA, görsel
           ========================================================= */}
        <section aria-labelledby="hero-baslik" className="metal-dark relative overflow-hidden text-white">
          <LogoMark
            light
            className="pointer-events-none absolute -left-32 -top-32 size-[460px] opacity-[0.04]"
          />
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-12 lg:gap-16 lg:py-28">
            <div className="lg:col-span-6">
              <Eyebrow inverse>{FOUNDED_YEAR}&apos;ten Bu Yana · Madencilik Makineleri</Eyebrow>
              <h1
                id="hero-baslik"
                className="mt-5 text-balance text-4xl font-light leading-[1.08] tracking-tight md:text-5xl lg:text-[56px]"
              >
                Hassas mühendislik,{' '}
                <span className="text-metal-light font-black">dayanıklı endüstriyel çözümler</span>
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg font-light leading-relaxed text-white/70">
                Krom konsantre tesisleri, değirmenler, kırıcılar, elekler ve konveyör sistemlerini kendi tesisimizde
                tasarlıyor, imal ediyor ve sahada devreye alıyoruz.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ActionLink href="/urunlerimiz" variant="inverse" icon={ArrowRight}>
                  Ürünlerimizi İnceleyin
                </ActionLink>
                <ActionLink href={quoteHref} variant="outline-inverse">
                  Teklif Alın
                </ActionLink>
              </div>
            </div>

            {/* Görsel alanı — gerçek makine fotoğrafı veya video ile değiştirilebilir */}
            <div className="relative lg:col-span-6">
              <figure className="relative aspect-[4/3] overflow-hidden border border-white/10 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.6)]">
                <Image
                  src="/images/fabrika.jpg"
                  alt="Olgun Torna üretim tesisi"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover grayscale-[30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent" aria-hidden="true" />
                <figcaption className="absolute bottom-4 left-4 border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                  Adana Üretim Tesisi
                </figcaption>
              </figure>
              <div className="metal-silver absolute -bottom-6 -left-3 hidden items-center gap-3 border border-white px-5 py-4 text-brand-dark shadow-xl sm:flex md:-left-6">
                <LogoMark className="size-10" />
                <div className="leading-tight">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">Kuruluş</p>
                  <p className="text-2xl font-black">{FOUNDED_YEAR}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="metal-rule absolute inset-x-0 bottom-0 h-px opacity-60" aria-hidden="true" />
        </section>

        {/* =========================================================
            2. GÜVEN / İSTATİSTİK BANDI
           ========================================================= */}
        <section aria-label="Rakamlarla Olgun Torna" className="metal-carbon text-white">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
            {homeStats.map((stat, i) => {
              const Icon = statIcons[stat.icon]
              return (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 border-white/10 px-4 py-8 md:px-8 ${i % 2 === 1 ? 'border-l' : ''} ${i === 2 ? 'lg:border-l' : ''} ${i > 1 ? 'border-t lg:border-t-0' : ''}`}
                >
                  <span className="flex size-12 shrink-0 items-center justify-center border border-white/15 bg-white/5 text-white/80">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  {/* dt önce gelir (semantik), görselde sayı üstte durur */}
                  <div className="flex flex-col-reverse">
                    <dt className="mt-1.5 text-[11px] uppercase leading-snug tracking-[0.14em] text-white/55">
                      {stat.label}
                    </dt>
                    <dd className="text-metal-light text-3xl font-black leading-none md:text-4xl">
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    </dd>
                  </div>
                </div>
              )
            })}
          </dl>
        </section>

        {/* =========================================================
            3. ÖNE ÇIKAN ÜRÜNLER (VİTRİN)
           ========================================================= */}
        <section aria-labelledby="vitrin-baslik" className="metal-surface py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <Eyebrow>Ürün Grupları</Eyebrow>
                <h2 id="vitrin-baslik" className="mt-3 text-balance text-3xl font-light tracking-tight text-brand-dark md:text-4xl">
                  Cevher hazırlama hattının her aşaması için makineler
                </h2>
              </div>
              <Link
                href="/urunlerimiz"
                className="group hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-brand-dark md:flex"
              >
                Tüm Ürünler
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

            <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product, i) => (
                <li key={product.slug}>
                  <Reveal delay={i * 80} className="h-full">
                    <article className="group flex h-full flex-col overflow-hidden border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-[0_22px_45px_-22px_rgb(0_0_0/0.4)]">
                      {/* Görsel: gerçek ürün fotoğrafı gelince <Image> ile değiştirin */}
                      <div className="metal-dark relative px-8 py-6 text-white/55 transition-colors group-hover:text-white/85">
                        <MachineIllustration kind={product.kind} className="mx-auto max-w-[200px]" />
                        <span className="absolute left-3 top-3 text-[9px] uppercase tracking-[0.18em] text-white/40">
                          Temsili
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="text-base font-black uppercase leading-tight tracking-[0.02em] text-brand-dark">
                          {product.name}
                        </h3>
                        <p className="mt-3 line-clamp-3 text-sm font-light leading-relaxed text-neutral-600">
                          {product.summary}
                        </p>
                        <Link
                          href={`/urunlerimiz#${product.slug}`}
                          className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-medium uppercase tracking-[0.14em] text-brand-dark"
                          aria-label={`${product.name} ürününü incele`}
                        >
                          İncele
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </Link>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>

            <div className="mt-12 text-center">
              <ActionLink href="/urunlerimiz" icon={ArrowRight}>
                Tüm Ürünlerimizi Görün
              </ActionLink>
            </div>
          </div>
        </section>

        {/* =========================================================
            4. KURUMSAL ÖZET (HAKKIMIZDA VİTRİNİ)
           ========================================================= */}
        <section aria-labelledby="kurumsal-baslik" className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <figure className="relative aspect-[4/3] overflow-hidden border border-border">
                <Image
                  src="/images/fabrika.jpg"
                  alt="Olgun Torna fabrika binası ve üretim alanı"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            <Reveal delay={120}>
              <Eyebrow>Kurumsal</Eyebrow>
              <h2 id="kurumsal-baslik" className="mt-3 text-balance text-3xl font-light tracking-tight text-brand-dark md:text-4xl">
                60 yılı aşkın imalat tecrübesi
              </h2>
              <div className="mt-6 space-y-4 text-pretty font-light leading-relaxed text-neutral-700">
                <p>
                  {FOUNDED_YEAR} yılında kurulan Olgun Torna, madencilik sektörüne yönelik makine imalatında uzmanlaşmıştır.
                  Talaşlı imalat, kaynaklı konstrüksiyon ve montaj süreçlerinin tamamını kendi tesisimizde yürütüyoruz.
                </p>
                <p>
                  Her projeye sahadaki koşulları ve tesisin kapasitesini analiz ederek başlıyor; tasarımdan devreye almaya
                  kadar tek muhatap olarak çalışıyoruz. Konveyör bant makarası gibi kritik yedek parçaları da kendi
                  bünyemizde üretiyoruz.
                </p>
              </div>

              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { icon: FlaskConical, title: 'Ar-Ge', text: 'Sahaya özel tasarım' },
                  { icon: Crosshair, title: 'Yüksek Tolerans', text: 'Hassas talaşlı imalat' },
                  { icon: BadgeCheck, title: 'Kalite', text: 'Her aşamada kontrol' },
                ].map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex items-start gap-3 border-l-2 border-brand-dark pl-3">
                    <Icon className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-bold text-brand-dark">{title}</p>
                      <p className="text-xs text-neutral-500">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                href="/hakkimizda"
                className="group mt-10 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-brand-dark"
              >
                Hakkımızda Detayı
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* =========================================================
            5. HİZMETLER & ÇÖZÜMLER
           ========================================================= */}
        <section id="hizmetler" aria-labelledby="hizmetler-baslik" className="metal-dark scroll-mt-32 py-16 text-white md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="max-w-2xl">
              <Eyebrow inverse>Hizmetler & Çözümler</Eyebrow>
              <h2 id="hizmetler-baslik" className="mt-3 text-balance text-3xl font-light tracking-tight md:text-4xl">
                Makinenin tüm ömrü boyunca yanınızdayız
              </h2>
            </div>

            <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {homeServices.map((service, i) => {
                const Icon = serviceIcons[service.icon]
                return (
                  <li key={service.title} className="group bg-[#1a1d21] p-7 transition-colors hover:bg-[#23272c]">
                    <div className="flex items-center justify-between">
                      <span className="metal-silver flex size-12 items-center justify-center border border-white/70 text-brand-dark">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="text-[11px] tabular-nums tracking-[0.2em] text-white/30">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="mt-7 text-lg font-bold leading-snug">{service.title}</h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-white/60">{service.text}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* =========================================================
            6. REFERANSLAR & SEKTÖRLER
           ========================================================= */}
        <section aria-labelledby="referans-baslik" className="metal-surface py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <Eyebrow>Referanslar & Sektörler</Eyebrow>
                <h2 id="referans-baslik" className="mt-3 text-balance text-3xl font-light tracking-tight text-brand-dark md:text-4xl">
                  Sektörün önde gelen firmalarının çözüm ortağı
                </h2>
              </div>
              <Link
                href="/referanslar"
                className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-brand-dark"
              >
                Tüm Referanslar
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

            {/* Sektör bandı */}
            <ul className="mt-10 flex flex-wrap gap-2" aria-label="Hizmet verilen sektörler">
              {sectors.map((sector) => (
                <li
                  key={sector}
                  className="border border-neutral-300 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-700"
                >
                  {sector}
                </li>
              ))}
            </ul>

            {/* Referans "logo" duvarı — firma logoları gelince monogram yerine <Image> kullanın */}
            <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
              {references.slice(0, 12).map((ref) => (
                <li
                  key={ref.name}
                  className="group flex flex-col items-center justify-center gap-3 bg-white px-4 py-7 text-center grayscale transition hover:bg-neutral-50"
                >
                  <span className="metal-silver flex size-11 items-center justify-center rounded-full border border-white text-sm font-black text-brand-dark shadow-[inset_0_1px_0_rgb(255_255_255/0.9),0_2px_5px_rgb(0_0_0/0.15)]">
                    {initials(ref.name)}
                  </span>
                  <span className="text-[12px] font-bold uppercase leading-tight tracking-wide text-neutral-700 group-hover:text-brand-dark">
                    {ref.name.toLocaleUpperCase('tr-TR')}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* =========================================================
            7. TEKLİF ALMA CTA BANDI
           ========================================================= */}
        <CTA
          quoteHref={quoteHref}
          eyebrow="Teklif"
          title="Projeniz için özel mühendislik çözümü mü arıyorsunuz?"
          description="İhtiyacınızı paylaşın; mühendislerimiz tesisinize uygun makine ve kapasite önerisini hazırlasın."
          primaryLabel="Teklif İsteyin"
        />
      </main>

      {/* 8. FOOTER — iletişim, hızlı linkler, PDF katalog */}
      <Footer />
    </>
  )
}
