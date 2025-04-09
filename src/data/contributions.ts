import { SiJavascript, SiTypescript } from 'react-icons/si'
import type { ContributionProps } from '@components/structure/OpenSource/Contribution'

export const contributions: ContributionProps[] = [

  {
    user: '',
    repository: 'Lycée privé LES IRIS',
    role: {
      label: 'Baccalaureat',
      color: 'green',
    },
    githubUrl: '',
    description: {
      en: 'Scientific Baccalaureate with distinctions (average grade: 15.7/20), including a score of 20/20 in Mathematics.',
      fr: "Baccalauréat scientifique avec mention Bien (moyenne : 15,7/20), dont 20/20 en mathématiques.",
    },
    topics: [],
    language: {
      name: 'Typescript',
      icon: 'img/les iris.png',
      color: '#3178C6',
    },
  },
  {
    user: '',
    repository: 'Université de Rouen Normandie',
    role: {
      label: 'Licence',
      color: 'orange',
    },
    githubUrl: '',
    description: {
      en: 'Bachelor’s degree in Mathematics and Computer Science with distinction (overall GPA: 14.8/20).',
      fr: "Licence en Mathématiques et Informatique avec mention (moyenne générale : 14,8/20).",
    },
    topics: [],
    language: {
      name: 'Javascript',
      icon: 'img/univ-rouen.png',
      color: '#F7DF1E',
    },
  },
  {
    user: '',
    repository: 'Ecole supérieure de génie informatique de Paris',
    role: {
      label: 'Master',
      color: 'blue',
    },
    githubUrl: '',
    description: {
      en: 'Master’s Degree (M2) in Software Architecture with honors (overall GPA: 15.1/20)',
      fr: "Master 2 Architecture Logicielle avec mention (moyenne générale : 15,1/20)",
    },
    topics: [],
    language: {
      name: 'Javascript',
      icon: 'img/esgi.png',
      color: '#F7DF1E',
    },
  },
]
