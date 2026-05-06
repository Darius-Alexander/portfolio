'use client'
import { Spotlight } from '@/components/ui/spotlight'

import Image from 'next/image'

interface ExperienceCardProps {
  company: string
  title: string
  start: string
  end: string
  link: string
  logo?: string
  colorClasses?: string
}

export function ExperienceCard({
  company,
  title,
  start,
  end,
  link,
  logo,
  colorClasses,
}: ExperienceCardProps) {
  const Wrapper = link ? 'a' : 'div'
  const wrapperProps = link
    ? { href: link, target: '_blank' as const, rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper
      className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
      {...wrapperProps}
    >
      <Spotlight
        className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
        size={64}
      />
      <div className={`relative h-full w-full rounded-[15px] p-4 ${colorClasses || 'bg-white dark:bg-zinc-950'}`}>
        <div className="relative flex w-full flex-row justify-between items-start">
          <div className="flex gap-4 items-center">
            {logo && (
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                <Image
                  src={logo}
                  alt={`${company} logo`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <h4 className="font-medium dark:text-zinc-100">{title}</h4>
              <p className="text-zinc-500 dark:text-zinc-400">{company}</p>
            </div>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 whitespace-nowrap mt-1">
            {start} - {end}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
