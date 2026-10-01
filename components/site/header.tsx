'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronRight, Mail, Menu, Phone, X } from 'lucide-react'
import { activeNavLabel, contactInfo, mainNav, type NavLink } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { ActionLink } from './action-link'
import { Logo } from './logo'
import { SocialIcons } from './social-icons'

function LanguageSwitch({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <div className="flex items-center gap-1 text-[11px] font-medium tracking-wider">
      <a
        href="#"
        aria-current="true"
        className={cn('px-1.5 py-0.5', tone === 'light' ? 'text-white' : 'text-brand')}
      >
        TR
      </a>
      <span aria-hidden="true" className={tone === 'light' ? 'text-white/30' : 'text-neutral-300'}>
        /
      </span>
      <a
        href="#"
        className={cn(
          'px-1.5 py-0.5 transition-colors',
          tone === 'light' ? 'text-white/60 hover:text-white' : 'text-neutral-500 hover:text-brand',
        )}
      >
        EN
      </a>
    </div>
  )
}

function TopBar() {
  return (
    <div className="metal-carbon hidden border-b border-white/5 text-white/70 md:block">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs md:px-8">
        <div className="flex items-center gap-6">
          <a href={contactInfo.phones[0].href} className="flex items-center gap-2 transition-colors hover:text-white">
            <Phone className="size-3.5" aria-hidden="true" />
            {contactInfo.phones[0].label}
          </a>
          <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 transition-colors hover:text-white">
            <Mail className="size-3.5" aria-hidden="true" />
            {contactInfo.email}
          </a>
        </div>
        <div className="flex items-center gap-5">
          <SocialIcons className="flex items-center gap-4 [&_a]:transition-colors [&_a:hover]:text-white" iconClassName="size-3.5" />
          <span className="h-4 w-px bg-white/20" aria-hidden="true" />
          <LanguageSwitch />
        </div>
      </div>
    </div>
  )
}

function Dropdown({ items }: { items: NavLink[] }) {
  return (
    <ul className="invisible absolute left-0 top-full z-50 min-w-60 translate-y-1 border border-t-2 border-border border-t-brand bg-white py-2 opacity-0 shadow-lg shadow-black/5 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      {items.map((child) => (
        <li key={child.label} className="group/sub relative">
          <Link
            href={child.href}
            className="flex items-center justify-between gap-6 px-5 py-2.5 text-[13px] text-neutral-700 transition-colors hover:bg-surface hover:text-brand"
          >
            {child.label}
            {child.children && <ChevronRight className="size-3.5" aria-hidden="true" />}
          </Link>
          {child.children && (
            <ul className="invisible absolute left-full top-0 -mt-2 min-w-56 border border-border bg-white py-2 opacity-0 shadow-lg shadow-black/5 transition-opacity duration-200 group-focus-within/sub:visible group-focus-within/sub:opacity-100 group-hover/sub:visible group-hover/sub:opacity-100">
              {child.children.map((sub) => (
                <li key={sub.label}>
                  <Link
                    href={sub.href}
                    className="block px-5 py-2.5 text-[13px] text-neutral-700 transition-colors hover:bg-surface hover:text-brand"
                  >
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}

function DesktopNavItem({ item, activeLabel }: { item: NavLink; activeLabel: string }) {
  const isActive = item.label === activeLabel

  return (
    <li className="group relative h-full">
      <Link
        href={item.href}
        aria-current={isActive ? 'true' : undefined}
        className={cn(
          'relative flex h-full items-center gap-1 px-2.5 text-[12px] font-medium uppercase tracking-[0.1em] transition-colors xl:px-3.5 xl:text-[13px]',
          isActive ? 'text-brand' : 'text-neutral-700 hover:text-brand',
        )}
      >
        {item.label}
        {item.children && (
          <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" aria-hidden="true" />
        )}
        <span
          aria-hidden="true"
          className={cn(
            'absolute inset-x-2.5 bottom-0 h-0.5 origin-left bg-gradient-to-r from-brand-dark via-steel to-brand-dark transition-transform duration-200 xl:inset-x-3.5',
            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
          )}
        />
      </Link>
      {item.children && <Dropdown items={item.children} />}
    </li>
  )
}

function MobileNav({ onNavigate, activeLabel }: { onNavigate: () => void; activeLabel: string }) {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <nav
      id="mobil-menu"
      aria-label="Mobil menü"
      className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-white lg:hidden"
    >
      <ul className="divide-y divide-border">
        {mainNav.map((item) => {
          const isActive = item.label === activeLabel
          const isOpen = openItem === item.label
          const labelClass = cn(
            'text-[13px] font-medium uppercase tracking-[0.1em]',
            isActive ? 'text-brand' : 'text-neutral-800',
          )
          return (
            <li key={item.label}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    onClick={() => setOpenItem(isOpen ? null : item.label)}
                    aria-expanded={isOpen}
                    className={cn('flex w-full items-center justify-between px-5 py-4 text-left', labelClass)}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn('size-4 transition-transform duration-200', isOpen && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <ul className="border-t border-border bg-surface py-2">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={onNavigate}
                            className="block px-8 py-2.5 text-sm text-neutral-600 transition-colors hover:text-brand"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={item.href} onClick={onNavigate} className={cn('block px-5 py-4', labelClass)}>
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
      <div className="flex flex-col gap-4 border-t border-border bg-surface px-5 py-5">
        <a href={contactInfo.phones[0].href} className="flex items-center gap-2 text-sm text-neutral-700">
          <Phone className="size-4 text-brand" aria-hidden="true" />
          {contactInfo.phones[0].label}
        </a>
        <div className="flex items-center justify-between">
          <LanguageSwitch tone="dark" />
          <SocialIcons className="flex items-center gap-4 text-brand" iconClassName="size-4" />
        </div>
      </div>
    </nav>
  )
}

export function Header({ activeLabel = activeNavLabel }: { activeLabel?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-40 bg-white/95 shadow-[0_1px_0_0_#dcdfe3] backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 md:px-8 lg:h-20">
          <Logo />
          <nav aria-label="Ana menü" className="hidden h-full lg:block">
            <ul className="flex h-full items-center">
              {mainNav.map((item) => (
                <DesktopNavItem key={item.label} item={item} activeLabel={activeLabel} />
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <ActionLink href="#iletisim" size="sm" className="hidden sm:inline-flex">
              Teklif Al
            </ActionLink>
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobil-menu"
              aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              className="flex size-10 items-center justify-center rounded-sm border border-border text-neutral-800 transition-colors hover:border-brand hover:text-brand lg:hidden"
            >
              {mobileOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
        <div className="metal-rule h-px" aria-hidden="true" />
        {mobileOpen && <MobileNav onNavigate={() => setMobileOpen(false)} activeLabel={activeLabel} />}
      </header>
    </>
  )
}
