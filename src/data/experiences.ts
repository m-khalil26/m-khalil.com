import type { ExperienceProps } from '@components/structure/Experience/Experience'

export const experiences: ExperienceProps[] = [
  {
    company: 'Bouygues Telecom',
    position: {
      en: ' Full stack developer / Assistant software architect',
      fr: 'Développeur full stack / Assistant architecte logiciel',
    },
    role: {
      label: 'Alternance',
      color: 'green',
    },
    duration: '2023 - Present',
    description: {
      en: [
        'Development of a standard ETL allowing extraction of targeted datasets',
        'Participation in IS redesign project / POC of the fixed transport part',
        'Developments on a intern DotNet framework',
        'Implementation of CI/CD chains via Gitlab-CI'
      ].join('. '),
      fr: [
        'Développement d\'un ETL standard permettant l’extraction de jeux de données ciblés sur des systèmes d\'informations existants,  l\'objectif étant de répliquer les données strictement nécessaires sur d’autres environnements et d\'hyper-automatiser les processus de tests sur de nouveaux systèmes.',
        'Développements sur un framework C# / DotNet interne',
        'Participation au chantier de refonte SI / POC de la partie transport du fixe, modélisation, proposition architecturale, analyse de l\'existant, rédaction, benchmark d\'applications et déroulement des uses-cases sur solutions externes, choix des éditeurs.',
        'Mise en place de chaines CI/CD via Gitlab - CI, déploiement d\'artefacts, déploiements via OpenShift.'
      ].join('. ')
    },
    skills: ['Java', 'PL/SQL', 'Oracle Database', 'C#', '.NET', 'JavaFX'],
    logo: {
      name: 'Bouygues Telecom',
      icon: '/img/bouygues-telecom.webp',
      color: '#3178C6',
    },
  },
  {
    company: 'TotalEnergies',
    position: {
      en: ' IT Internship',
      fr: 'Stagiaire IT',
    },
    role: {
      label: 'Stage',
      color: 'yellow',
    },
    duration: '2023',
    description: {
      en: [
        'Development of a stock audit tool for service stations, confirming data authenticity and viability after its passage and transformation through various IS chain systems',
        'Support on an internal application (DotNet Core / SQLServer / React)'
      ].join('. '),
      fr: [
        'Développement d\'un outil de d\'audit des stocks des stations services, confirmant l\'authenticité et la viabilité la donnée après le passage et la transformation de cette dernière via divers systèmes de la chaine du SI.',
        'Support sur une application interne ( DotNet Core / SQLServer / React )'
      ].join('. ')
    },
    skills: ['.NET Core', 'SQLServer', 'React'],
    logo: {
      name: 'Bouygues Telecom',
      icon: '/img/totalenergies.avif',
      color: '#3178C6',
    },
  },
  // Add more experiences...
]