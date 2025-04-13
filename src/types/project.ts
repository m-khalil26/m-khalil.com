import type { IconType } from 'react-icons';

export interface Technology {
    name: string;
    icon: IconType;
    color: string;
}

export interface Project {
    name: string;
    description: string;
    homepage: string;
    technologies: Technology[];
}
