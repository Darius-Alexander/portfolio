'use client'
import { Spotlight } from '@/components/ui/spotlight'

interface ExperienceCardProps {
  company: string
  title: string
  start: string
  end: string
  link: string
}

export function ExperienceCard({
  company,
  title,
  start,
  end,
  link,
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
      <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
        <div className="relative flex w-full flex-row justify-between">
          <div>
            <h4 className="font-normal dark:text-zinc-100">{title}</h4>
            <p className="text-zinc-500 dark:text-zinc-400">{company}</p>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
            {start} - {end}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
