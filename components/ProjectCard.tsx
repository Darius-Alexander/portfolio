'use client'

import Image from 'next/image'
import { ArrowUpRight, Play } from 'lucide-react'

interface ProjectCardProps {
  name: string
  description: string
  achievement?: string
  stack: string[]
  link: string
  linkLabel?: string
  demoUrl?: string
  logo?: string
  colorClasses?: string
}

export function ProjectCard({
  name,
  description,
  achievement,
  stack,
  link,
  linkLabel,
  demoUrl,
  logo,
  colorClasses,
}: ProjectCardProps) {
  return (
    <article
      className={`overflow-hidden rounded-2xl border border-black dark:border-zinc-800 ${colorClasses || 'bg-white dark:bg-zinc-950'}`}
    >
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-4">
            {logo ? (
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                <Image src={logo} alt={`${name} logo`} fill className="object-cover" />
              </div>
            ) : (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white/70 text-sm font-semibold text-zinc-800 dark:border-white/10 dark:bg-zinc-900/70 dark:text-zinc-100">
                {name.slice(0, 2).toUpperCase()}
              </div>
            )}

            <div className="min-w-0">
              <h4 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">{name}</h4>
              {achievement && (
                <p className="mt-0.5 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                  {achievement}
                </p>
              )}
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap justify-end gap-2">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-white/70 px-3 py-1.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-white dark:border-white/15 dark:bg-zinc-900/70 dark:text-zinc-100 dark:hover:bg-zinc-900"
              >
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
                Watch demo
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-black/15 bg-white/70 px-3 py-1.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-white dark:border-white/15 dark:bg-zinc-900/70 dark:text-zinc-100 dark:hover:bg-zinc-900"
              >
                {linkLabel || 'View'}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-4 text-zinc-700 dark:text-zinc-300">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2" aria-label={`${name} technologies`}>
          {stack.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-zinc-900/60 dark:text-zinc-300"
            >
              {technology}
            </span>
          ))}
        </div>

      </div>
    </article>
  )
}
