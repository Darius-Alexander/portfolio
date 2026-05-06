'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { BLOG_POSTS } from '../data'

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

export default function BlogPage() {
  return (
    <motion.main
      className="space-y-12 not-prose"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >


      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h1 className="mb-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Blog</h1>
        <div className="flex flex-col gap-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.uid}
              href={post.link}
              className="group flex flex-col space-y-1.5 rounded-2xl bg-zinc-50 p-5 transition-colors hover:bg-zinc-100 dark:bg-zinc-900/50 dark:hover:bg-zinc-900"
            >
              <h2 className="text-lg font-medium transition-colors text-zinc-900 dark:text-zinc-100">
                {post.title}
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
