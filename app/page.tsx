'use client'
import { motion } from 'motion/react'
import { SpeedometerGauge } from '@/components/ui/speedometer-gauge'
import { SocialLinks } from '@/components/SocialLinks'
import {
  EDUCATION,
  SIDE_QUEST_GOALS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function Home() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* Bio */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            I build data-driven and AI-powered products that bridge technical
            execution with real-world impact. From developing agentic systems to
            shipping full-stack applications, I focus on turning complex
            workflows into intuitive, scalable solutions. Passionate about
            product thinking, I combine engineering, analytics, and leadership to
            deliver measurable results.
          </p>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Education</h3>
        <div className="flex flex-col gap-3">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
            >
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {edu.school}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {edu.degree}
                    </p>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {edu.expected}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Side Quest Goals */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-2 text-lg font-medium">Side Quests</h3>
        <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
          Current goals outside of code
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SIDE_QUEST_GOALS.map((quest) => (
            <div
              key={quest.id}
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
            >
              <div className="relative flex h-full w-full flex-col items-center rounded-[15px] bg-white px-4 pt-6 pb-5 dark:bg-zinc-950">
                <SpeedometerGauge
                  progress={quest.progress}
                  title={quest.title}
                  current={quest.current}
                  target={quest.target}
                />
                <div className="mt-3 text-center">
                  <h4 className="font-normal dark:text-zinc-100">
                    {quest.title}
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {quest.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Connect */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <SocialLinks links={SOCIAL_LINKS} />
      </motion.section>
    </motion.main>
  )
}
