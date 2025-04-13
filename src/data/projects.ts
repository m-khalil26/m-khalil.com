import {
  SiChakraui,
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiLaravel,
  SiPostgresql,
  SiStripe,
  SiTailwindcss,
} from 'react-icons/si'
import Maraudr from '@public/img/projects/maraudR.png'
import EXIT from '@public/img/projects/exIT.png'
import BETL from '@public/img/projects/BETL.png'
import type { Project } from '@utils/types'
import EsgixImage from '@public/img/projects/ESGIX.png'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Maraudr',
    description: {
      en: 'Maraudr is a human sized, intuitive ERP that helps charity associations in their daily work',
      fr: 'Maraudr est un ERP à taille humaine, facile à prendre en main qui a pour but d\'organiser et d\'aider les associaions dans leurs travails journaliers',
    },
    image: { src: Maraudr },
    homepage: '',
    github: 'https://github.com/m-khalil26/ExIT',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '2',
    title: 'ExIT',
    description: {
      en: 'A social media that offers and eninvrionement for sharing, executing and reviewing code.',
      fr: 'Un réseau social qui offre un enivronement pour déployer, partager et executer du code entre amis ou collègues.',
    },
    image: { src: EXIT },
    homepage: '',
    github: 'https://github.com/maraudr-app',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'ChakraUI', icon: SiChakraui, color: '#319795' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'websockets', colorScheme: 'green' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '3',
    title: 'BETL',
    description: {
      en: 'An ETL for extracting use-case driven anonymized production datasets, and loading it in test environement',
      fr: 'Un ETL qui permet l\'extraction de jeux de données ciblés selon le cas d\'usage, tout en les anonymisant et les charegeant dans des environnements de tests ',
    },
    image: { src: BETL },
    // github: 'https://github.com/chr-ge/why-pigeons',
    technologies: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Stripe', icon: SiStripe, color: '#008CDD' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'e-commerce', colorScheme: 'purple' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '4',
    title: 'ESGIX',
    description: {
      en: 'A Social network ( Twitterish ) for the ESGI students ( On mobile )',
      fr: 'Un réseau social ( Type twitter ) pour les etudiants de l\'ESGI. Sur mobile.',
    },
    image: { src: EsgixImage },
    github: 'https://github.com/ESGI-5AL1/flutter-esgix',
    technologies: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Stripe', icon: SiStripe, color: '#008CDD' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'Social media', colorScheme: 'purple' },
      { label: 'flutter', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
]
