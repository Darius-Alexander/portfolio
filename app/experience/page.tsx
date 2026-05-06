'use client'
import { motion } from 'motion/react'
import { ExperienceCard } from '@/components/ExperienceCard'
import { ProjectCard } from '@/components/ProjectCard'
import {
  WORK_EXPERIENCE,
  LEADERSHIP_EXPERIENCE,
  PROJECTS,
} from '../data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = { duration: 0.3 }

import Link from 'next/link'

export default function ExperiencePage() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          &larr; Back to Home
        </Link>
      </motion.div>

      {/* Work Experience */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <ExperienceCard
              key={job.id}
              company={job.company}
              title={job.title}
              start={job.start}
              end={job.end}
              link={job.link}
              logo={job.logo}
            />
          ))}
        </div>
      </motion.section>

      {/* Leadership */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Leadership & Community</h3>
        <div className="flex flex-col space-y-2">
          {LEADERSHIP_EXPERIENCE.map((role) => (
            <ExperienceCard
              key={role.id}
              company={role.company}
              title={role.title}
              start={role.start}
              end={role.end}
              link={role.link}
              logo={role.logo}
            />
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              link={project.link}
              video={project.video}
              logo={project.logo}
            />
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
