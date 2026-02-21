import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Idriss PEZERON JACCA',
    photoBackEmoji: '💻',
    title: {
      fr: 'Développeur Web Junior',
      en: 'Junior Web Developer',
    },
    subtitle: {
      fr: 'En formation à Metz Numeric School — Recherche un stage du 21/07/2026 au 18/09/2026',
      en: 'Web development student at Metz Numeric School — Looking for an internship from 07/21/2026 to 09/18/2026',
    },
    location: '57100 France',
  },
  seo: {
    title: 'Idriss PEZERON JACCA — Développeur Web Junior',
    description: 'CV interactif d\'Idriss PEZERON JACCA, développeur web junior en formation spécialisé en HTML, CSS, JavaScript et Python.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },
  contact: [
    { type: 'linkedin', label: 'idriss-pezeron-jacca', href: 'https://www.linkedin.com/in/idriss-pezeron-jacca-83a8b61b2' },
    { type: 'email', label: 'Idriss.pj@gmail.com' },
    { type: 'phone', label: '+33 7 83 37 25 91' },
    { type: 'location', label: '3 rue du chemin couvert, 57100 France' },
  ],
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'C2', en: 'C2' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'B2', en: 'B2' } },
      ],
    },
    {
      title: { fr: 'Frontend', en: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'JavaScript' },
        { name: 'Bootstrap' },
        { name: 'React' },
      ],
    },
    {
      title: { fr: 'Backend', en: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Python' },
        { name: 'PHP' },
        { name: 'Node.js' },
      ],
    },
    {
      title: { fr: 'Outils', en: 'Tools' },
      type: 'badges',
      items: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'VS Code' },
      ],
    },
    {
      title: { fr: 'Méthodologies', en: 'Methodologies' },
      type: 'text',
      items: [
        { name: { fr: 'Logique CRUD, structures de données', en: 'CRUD logic, data structures' } },
        { name: { fr: 'Organisation et méthodologie de travail', en: 'Organization and structured workflow' } },
      ],
    },
    {
      title: { fr: 'Qualités', en: 'Soft Skills' },
      type: 'text',
      items: [
        { name: { fr: 'Adaptabilité', en: 'Adaptability' } },
        { name: { fr: 'Communication', en: 'Communication' } },
        { name: { fr: 'Travail d\'équipe', en: 'Teamwork' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'stage-dev',
      company: { fr: 'Stage Développeur Web', en: 'Web Developer Internship' },
      role: { fr: 'Stagiaire Développeur Web', en: 'Web Developer Intern' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: '2025', en: '2025' },
      description: {
        fr: 'Participation à l\'optimisation de pages web et amélioration de l\'expérience utilisateur.',
        en: 'Worked on web page optimization and user experience improvements.',
      },
      techs: ['HTML5', 'CSS3', 'JavaScript', 'Odoo'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Collaboration avec un développeur senior sur des projets web.',
          en: 'Worked closely with a senior developer on web projects.',
        },
        tasks: {
          fr: [
            'Optimisation de pages HTML/CSS',
            'Amélioration de l\'UX sur Odoo',
            'Collaboration technique et revue de code',
          ],
          en: [
            'HTML/CSS page optimization',
            'UX improvement on Odoo',
            'Technical collaboration and code review',
          ],
        },
        env: {
          fr: 'HTML / CSS / JavaScript / Odoo',
          en: 'HTML / CSS / JavaScript / Odoo',
        },
      },
    },
    {
      id: 'zil-labs',
      company: { fr: 'ZIL Labs', en: 'ZIL Labs' },
      role: { fr: 'Projet Application Questionnaire', en: 'Quiz Application Project' },
      type: { fr: 'Projet académique', en: 'Academic Project' },
      period: { fr: '2025', en: '2025' },
      description: {
        fr: 'Développement d\'une application front-end utilisant Bootstrap et des API liées aux jeux vidéo.',
        en: 'Development of a front-end application using Bootstrap and video game related APIs.',
      },
      techs: ['Bootstrap', 'JavaScript'],
      isHighlighted: true,
      details: {
        tasks: {
          fr: [
            'Affichage dynamique des données via API',
            'Gestion des interactions utilisateur',
            'Affichage conditionnel des résultats',
          ],
          en: [
            'Dynamic data display via API',
            'User interaction management',
            'Conditional result rendering',
          ],
        },
        env: {
          fr: 'Bootstrap / JavaScript / API REST',
          en: 'Bootstrap / JavaScript / REST API',
        },
      },
    },
    {
      id: 'film-manager',
      company: { fr: 'Projet Personnel', en: 'Personal Project' },
      role: { fr: 'Gestionnaire de Films — Python', en: 'Movie Manager — Python' },
      type: { fr: 'Projet académique', en: 'Academic Project' },
      period: { fr: '2025', en: '2025' },
      description: {
        fr: 'Création d\'une application Python intégrant une logique CRUD complète.',
        en: 'Creation of a Python application implementing full CRUD logic.',
      },
      techs: ['Python'],
      details: {
        tasks: {
          fr: [
            'Ajout, modification, suppression et recherche de films',
            'Structuration du code et séparation des responsabilités',
          ],
          en: [
            'Add, edit, delete and search movies',
            'Code structuring and separation of concerns',
          ],
        },
        env: {
          fr: 'Python',
          en: 'Python',
        },
      },
    },
    {
      id: 'barman-experience',
      company: { fr: 'Expériences en restauration', en: 'Hospitality Experience' },
      role: { fr: 'Barman', en: 'Bartender' },
      type: { fr: 'CDD / Saisonnier', en: 'Fixed-term / Seasonal' },
      period: { fr: '2023 - 2025', en: '2023 - 2025' },
      description: {
        fr: 'Expériences professionnelles au Luxembourg et à Paris développant sens du service et travail d\'équipe.',
        en: 'Professional experiences in Luxembourg and Paris developing service mindset and teamwork.',
      },
      techs: [],
      details: {
        tasks: {
          fr: [
            'Service client et gestion des commandes',
            'Travail en équipe dans des environnements dynamiques',
            'Gestion du stress et organisation',
          ],
          en: [
            'Customer service and order management',
            'Teamwork in fast-paced environments',
            'Stress management and organization',
          ],
        },
      },
    },
  ],
  education: [
    {
      school: { fr: 'Metz Numeric School', en: 'Metz Numeric School' },
      degree: { fr: 'Développement Web', en: 'Web Development' },
      specialty: { fr: 'Formation développeur web', en: 'Web developer training' },
      period: '2025 - 2026',
    },
    {
      school: { fr: 'Metz Numeric School', en: 'Metz Numeric School' },
      degree: { fr: 'Num&Boost', en: 'Num&Boost' },
      period: '2025',
    },
    {
      school: { fr: 'Lycée Eugène Delacroix — Drancy', en: 'Lycée Eugène Delacroix — Drancy' },
      degree: { fr: 'Baccalauréat Professionnel', en: 'Vocational Baccalaureate' },
      period: '',
    },
  ],
  projects: [],
  hobbies: [],
  theme: { preset: 'ocean' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES', en: 'EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to see more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}
