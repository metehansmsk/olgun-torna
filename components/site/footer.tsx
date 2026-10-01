import Link from 'next/link'
import { FileDown, Mail, MapPin, Phone } from 'lucide-react'
import {
  catalogPdfHref,
  companyLinks,
  contactInfo,
  machineProducts,
  serviceLinks,
  type NavLink,
} from '@/lib/site-data'
import { Logo } from './logo'
import { SocialIcons } from './social-icons'

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-white">{children}</h2>
}

function FooterLinks({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <nav aria-label={title} className="lg:col-span-2">
      <FooterHeading>{title}</FooterHeading>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const productLinks: NavLink[] = machineProducts.map((p) => ({ label: p.name, href: `/urunlerimiz#${p.slug}` }))

export function Footer() {
  return (
    <footer className="metal-carbon relative text-white/60">
      <div className="metal-rule absolute inset-x-0 top-0 h-px opacity-50" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 pt-16 md:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-12">
          {/* Marka + PDF katalog */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed">
              1963&apos;ten bu yana madencilik sektörüne krom konsantre tesisi makineleri, değirmen, kırıcı, elek ve
              konveyör sistemleri imal ediyoruz.
            </p>
            <a
              href={catalogPdfHref}
              download
              className="metal-silver metal-shine mt-7 inline-flex h-11 items-center gap-2.5 rounded-sm border border-white/60 px-5 text-[11px] font-medium uppercase tracking-[0.12em] text-brand-dark shadow-[inset_0_1px_0_rgb(255_255_255/0.9)] hover:text-black"
            >
              <FileDown className="size-4" aria-hidden="true" />
              PDF Katalog İndir
            </a>
            <div className="mt-8">
              <FooterHeading>Sosyal Medya</FooterHeading>
              <SocialIcons
                className="mt-4 flex items-center gap-2 [&_a]:flex [&_a]:size-9 [&_a]:items-center [&_a]:justify-center [&_a]:border [&_a]:border-white/15 [&_a]:transition-colors [&_a:hover]:border-white [&_a:hover]:text-white"
                iconClassName="size-4"
              />
            </div>
          </div>

          <FooterLinks title="Hızlı Menü" links={companyLinks} />
          <FooterLinks title="Ürünler" links={productLinks} />
          <FooterLinks title="Hizmetler" links={serviceLinks} />

          {/* İletişim */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <FooterHeading>İletişim</FooterHeading>
            <ul className="mt-5 space-y-4 text-sm font-light">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-white/40" aria-hidden="true" />
                <address className="not-italic leading-relaxed">{contactInfo.address}</address>
              </li>
              {contactInfo.phones.map((phone) => (
                <li key={phone.href} className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-white/40" aria-hidden="true" />
                  <a href={phone.href} className="transition-colors hover:text-white">
                    {phone.label}
                  </a>
                </li>
              ))}
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-white/40" aria-hidden="true" />
                <a href={`mailto:${contactInfo.email}`} className="break-all transition-colors hover:text-white">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>{`© ${new Date().getFullYear()} Olgun Torna Makina İmalat Sanayi Ltd. Şti. Tüm hakları saklıdır.`}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="#" className="transition-colors hover:text-white">
                KVKK Aydınlatma Metni
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-colors hover:text-white">
                Çerez Politikası
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
