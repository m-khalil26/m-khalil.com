import { IoLogoPwa } from 'react-icons/io5'
import {
  SiAmazonwebservices,
  SiAmazondynamodb,
  SiGooglecloud,
  SiGraphql,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTypescript,
  SiRust,
  SiOcaml,
  SiCss3,
  SiSpring,
  SiDotnet,
  SiSolidity,
  SiOracle,
} from 'react-icons/si'
import { TbBrandCSharp } from "react-icons/tb";
import { Javascript } from '@components/icons'
import type { SkillGroup } from '@utils/types'
import { FaJava } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
export const skills: SkillGroup[] = [
  {
    id: '1',
    category: 'languages',
    skills: [
      { name: 'Java', icon: FaJava, color: 'red' },
      { name: 'C#', icon: TbBrandCSharp, color: 'blue' },
      { name: 'Rust', icon: SiRust, color: 'brown' },
      { name: 'OCaml', icon: SiOcaml, color: 'orange' },
      { name: 'Typescript', icon: SiTypescript, color: '#3178C6' },
      // { name: 'Javascript', icon: Javascript, color: '#F7DF1E' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Solidity', icon: SiSolidity, color: 'grey' },
    ],
  },
  {
    id: '2',
    category: 'back-end',
    skills: [
      { name: 'Spring', icon: SiSpring, color: 'Green' },
      { name: '.NET Core', icon: SiDotnet, color: 'black' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    ],
  },
  {
    id: '3',
    category: 'databases',
    skills: [
      { name: 'Oracle Database', icon: SiOracle, color: 'red' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Microsoft SQL Server', icon: DiMsqlServer, color: 'BLue' },

      { name: 'Amazon DynamoDB', icon: SiAmazondynamodb, color: '#4053D6' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    ],
  },
  {
    id: '4',
    category: 'front-end',
    skills: [
      { name: 'JavaFx', icon: FaJava, color: '#5a0fc8' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'CSS3', icon: SiCss3, color: '#264de4' },
    ],
  },

  {
    id: '5',
    category: 'cloud',
    skills: [
      {
        name: 'Amazon Web Services',
        icon: SiAmazonwebservices,
        color: '#232F3E',
      },
      { name: 'Azure', icon: TbBrandAzure, color: '#4285F4' },
      { name: 'Google Cloud Platform', icon: SiGooglecloud, color: '#4285F4' },

    ],
  },

]
