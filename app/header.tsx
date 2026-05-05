'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'motion/react'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '/experience' },
  { label: 'Blog', href: '/blog' },
]

export function Header() {
  const pathname = usePathname()

  // Match root exactly, or match prefix for sub-pages
  const isActive = (href: string): boolean => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Darius Alexander
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Business + Computer Science @ UBC
        </TextEffect>
      </div>
      <nav className="flex items-center gap-1 rounded-full bg-zinc-100/80 p-1 dark:bg-zinc-900/80">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative px-3 py-1.5 text-sm transition-colors duration-200"
          >
            {isActive(item.href) && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-white shadow-sm dark:bg-zinc-800"
                transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
              />
            )}
            <span
              className={`relative z-10 ${
                isActive(item.href)
                  ? 'text-zinc-900 dark:text-zinc-100'
                  : 'text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200'
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  )
}
