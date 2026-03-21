type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Nexus',
    description:
      'AI-native workflow platform enabling real-time agent execution across tools like Slack, Google Sheets, and GitHub.',
    link: 'https://devpost.com/software/nexus', // replace if needed
    video: '',
    id: 'nexus',
  },
  {
    name: 'JobLingo',
    description:
      'Duolingo-style learning platform for job-specific vocabulary.',
    link: 'https://github.com/Darius-Alexander/JobLingo', // add if deployed
    video: '',
    id: 'joblingo',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Turing',
    title: 'Data Analyst Intern',
    start: 'Sep 2025',
    end: 'Dec 2025',
    link: '',
    id: 'work1',
  },
  {
    company: 'Freshslice Pizza',
    title: 'Technical Project Manager Intern',
    start: 'Jun 2024',
    end: 'Sep 2024',
    link: '',
    id: 'work2',
  },
  {
    company: 'PC Galore',
    title: 'Technician Intern',
    start: 'Jul 2023',
    end: 'Aug 2023',
    link: '',
    id: 'work3',
  }
]

export const LEADERSHIP_EXPERIENCE: WorkExperience[] = [
  {
    company: 'ByYourSide Society',
    title: 'Software Developer',
    start: 'Dec 2025',
    end: 'Present',
    link: '',
    id: 'work4',
  },
  {
    company: 'UBC BizTech',
    title: 'Partnerships Director',
    start: 'May 2024',
    end: 'Present',
    link: '',
    id: 'work5',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  // {
  //   title: 'Exploring the Intersection of Design, AI, and Design Engineering',
  //   description: 'How AI is changing the way we design',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-1',
  // },
  // {
  //   title: 'Why I left my job to start my own company',
  //   description:
  //     'A deep dive into my decision to leave my job and start my own company',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-2',
  // },
  // {
  //   title: 'What I learned from my first year of freelancing',
  //   description:
  //     'A look back at my first year of freelancing and what I learned',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-3',
  // },
  // {
  //   title: 'How to Export Metadata from MDX for Next.js SEO',
  //   description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
  //   link: '/blog/example-mdx-metadata',
  //   uid: 'blog-4',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Darius-Alexander',
  },
  {
    label: 'LinkedIn',
    link: 'www.linkedin.com/in/darius-alexander/',
  },
]

export const EMAIL = 'dariusalexander1118@gmail.com'
