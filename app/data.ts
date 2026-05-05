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

type Education = {
  school: string
  degree: string
  expected: string
  id: string
}

type SideQuestGoal = {
  title: string
  description: string
  progress: number // 0 to 1
  target: string
  current: string
  id: string
}

export const EDUCATION: Education[] = [
  {
    school: 'University of British Columbia',
    degree: 'Computer Science + Business',
    expected: 'Expected May 2028',
    id: 'edu-1',
  },
]

export const SIDE_QUEST_GOALS: SideQuestGoal[] = [
  {
    title: 'Full Splits',
    description: 'Achieve full splits (left + right)',
    progress: 170 / 180, // 170 degrees out of 180
    target: '180°',
    current: '170°',
    id: 'quest-1',
  },
  {
    title: 'Guitar',
    description: '(Re)learn the guitar',
    progress: 0 / 10, // 0 out of 10 songs learned
    target: '10 songs',
    current: '0 / 10',
    id: 'quest-2',
  },
]

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
    name: 'QueryLearn',
    description:
      'RAG-powered learning platform',
    link: '', // add if deployed
    video: '',
    id: 'querylearn',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Diligent',
    title: 'Software Engineering Intern',
    start: 'Jun 2026',
    end: 'Present',
    link: '',
    id: 'work1',
  },
  {
    company: 'Turing',
    title: 'Data Analyst Intern',
    start: 'Sep 2025',
    end: 'Dec 2025',
    link: '',
    id: 'work2',
  },
  {
    company: 'Freshslice Pizza',
    title: 'Technical Project Manager Intern',
    start: 'Jun 2024',
    end: 'Sep 2024',
    link: '',
    id: 'work3',
  },
  {
    company: 'PC Galore',
    title: 'Technician Intern',
    start: 'Jul 2023',
    end: 'Aug 2023',
    link: '',
    id: 'work4',
  }
]

export const LEADERSHIP_EXPERIENCE: WorkExperience[] = [
  {
    company: 'UBC BizTech',
    title: 'Software Engineer',
    start: 'Mar 2026',
    end: 'Present',
    link: '',
    id: 'work5',
  },
  {
    company: 'ByYourSide Society',
    title: 'Software Developer',
    start: 'Dec 2025',
    end: 'Present',
    link: '',
    id: 'work6',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  // {
  //   title: 'Road to my First SWE Internship'
  //   description: 'First Recruiting Season',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-1',
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
