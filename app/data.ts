type Project = {
  name: string
  description: string
  link: string
  video: string
  logo?: string
  colorClasses?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  logo?: string
  colorClasses?: string
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
  logo?: string
  colorClasses?: string
  id: string
}

type SubGoal = {
  label: string
  progress: number // 0 to 1
  current: string
  target: string
}

type SideQuestGoal = {
  title: string
  description: string
  progress: number // 0 to 1 (aggregate — if subGoals exist, this is the average)
  target: string
  current: string
  subGoals?: SubGoal[]
  id: string
}

export const EDUCATION: Education[] = [
  {
    school: 'University of British Columbia',
    degree: "Bachelor's Degree, Major in Computer Science and Business",
    expected: 'Expected May 2028',
    logo: '/assets/logos/ubc.png',
    colorClasses: 'bg-blue-100/60 dark:bg-blue-900/30',
    id: 'edu-1',
  },
]

export const SIDE_QUEST_GOALS: SideQuestGoal[] = [
  {
    title: 'Full Splits',
    description: 'Achieve full splits (Left + Right)',
    progress: (155 / 180 + 170 / 180) / 2,
    target: '180°',
    current: '~163°',
    subGoals: [
      {
        label: 'Left',
        progress: 155 / 180,
        current: '155°',
        target: '180°',
      },
      {
        label: 'Right',
        progress: 170 / 180,
        current: '170°',
        target: '180°',
      },
    ],
    id: 'quest-1',
  },
  {
    title: 'Guitar',
    description: '(Re)learn the guitar',
    progress: 1 / 10, // total songs learned out of 10
    target: '10 songs',
    current: '1 / 10',
    subGoals: [
      {
        label: 'Classical',
        progress: 1 / 5,
        current: '1',
        target: '5 songs',
      },
      {
        label: 'Pop',
        progress: 0 / 5,
        current: '0',
        target: '5 songs',
      },
    ],
    id: 'quest-2',
  },
  {
    title: 'Chess',
    description: 'Achieve 1200+ ELO (Bullet + Rapid)',
    progress: (800 / 1200 + 900 / 1200) / 2, // average progress
    target: '1200',
    current: '~850', // (800 + 900) / 2
    // TODO: Hook this up to chess.com or lichess API later
    subGoals: [
      {
        label: 'Bullet',
        progress: 800 / 1200,
        current: '800',
        target: '1200',
      },
      {
        label: 'Rapid',
        progress: 900 / 1200,
        current: '900',
        target: '1200',
      },
    ],
    id: 'quest-3',
  },
  {
    title: 'Gym',
    description: 'Hit the gym 200 times in the next calendar year',
    progress: 0,
    target: '200 sessions',
    current: '0',
    subGoals: [
      { label: 'Push', progress: 0, current: '0', target: '70' },
      { label: 'Pull', progress: 0, current: '0', target: '70' },
      { label: 'Legs', progress: 0, current: '0', target: '60' },
    ],
    id: 'quest-4',
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Nexus',
    description:
      'AI-native workflow platform enabling real-time agent execution across tools like Slack, Google Sheets, and GitHub.',
    link: 'https://devpost.com/software/nexus', // replace if needed
    video: '',
    logo: '/assets/logos/nexus.png',
    colorClasses: 'bg-zinc-100/60 dark:bg-zinc-900/30',
    id: 'nexus',
  },
  {
    name: 'QueryLearn',
    description:
      'RAG-powered learning platform',
    link: '', // add if deployed
    video: '',
    logo: '/assets/logos/querylearn.jpg',
    colorClasses: 'bg-emerald-100/60 dark:bg-emerald-900/30',
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
    logo: '/assets/logos/diligent.png',
    colorClasses: 'bg-red-100/60 dark:bg-red-900/30',
    id: 'work1',
  },
  {
    company: 'Turing',
    title: 'Data Analyst Intern',
    start: 'Sep 2025',
    end: 'Dec 2025',
    link: '',
    logo: '/assets/logos/turing.png',
    colorClasses: 'bg-zinc-100/60 dark:bg-zinc-900/30',
    id: 'work2',
  },
  {
    company: 'Freshslice Pizza',
    title: 'Technical Project Manager Intern',
    start: 'Jun 2024',
    end: 'Sep 2024',
    link: '',
    logo: '/assets/logos/freshslice.png',
    colorClasses: 'bg-green-100/60 dark:bg-green-900/30',
    id: 'work3',
  },
  {
    company: 'PC Galore',
    title: 'Technician Intern',
    start: 'Jul 2023',
    end: 'Aug 2023',
    link: '',
    logo: '/assets/logos/pcgalore.png',
    colorClasses: 'bg-sky-100/60 dark:bg-sky-900/30',
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
    logo: '/assets/logos/biztech.png',
    colorClasses: 'bg-blue-200/60 dark:bg-blue-800/40',
    id: 'work5',
  },
  {
    company: 'ByYourSide Society',
    title: 'Software Developer',
    start: 'Dec 2025',
    end: 'Present',
    link: '',
    logo: '/assets/logos/byyourside.svg',
    colorClasses: 'bg-indigo-100/60 dark:bg-indigo-900/30',
    id: 'work6',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Road to my First SWE Internship',
    description: 'First Recruiting Season',
    link: '/blog/road-to-my-first-swe-internship',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Darius-Alexander',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/darius-alexander/',
  },
]

export const EMAIL = 'dariusalexander1118@gmail.com'
