'use client'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ExperienceCard } from '@/components/ExperienceCard'
import { ProjectCard } from '@/components/ProjectCard'
import {
  WORK_EXPERIENCE,
  LEADERSHIP_EXPERIENCE,
  PROJECTS,
  EMAIL,
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
              colorClasses={job.colorClasses}
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
              colorClasses={role.colorClasses}
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
              colorClasses={project.colorClasses}
            />
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
      </motion.section>
    </motion.main>
  )
}
