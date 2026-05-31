import type { Project } from '../types';


export const projects: Project[] = [
  {
    id: 'norvia-studio',
    title: 'Norvia Studio',
    description:
      'A lightweight but comprehensive management system for creative agencies, design studios, and freelance teams — covering clients, projects, billing, and internal resources in a single workspace.',
    longDescription:
      'Multi-tenant SaaS platform that lets small creative teams manage their entire workflow in one place: onboard clients, track projects through their lifecycle, generate quotes and invoices, and manage team assignments — all scoped to a workspace and secured behind an authentication layer.',
    tags: ['SaaS', 'Multi-tenant', 'Angular', 'Express', 'TypeScript', 'Clean Architecture', 'Firebase', 'Google Cloud Platform', 'PostgreSQL', 'Supabase', 'Sentry'],
    githubUrl: 'https://github.com/luigicavalli/norvia-studio',
    liveUrl: 'https://norvia-studio.luigicavalli.it/',
    featured: true,
    teamProject: false,
  },
  {
    id: 'stayfit',
    title: 'StayFit',
    description:
      'A web app for nutritionists and personal trainers to fight one-size-fits-all plans. Professionals onboard clients via a detailed questionnaire — covering allergies, motor issues, and more — then generate fully personalised nutrition and training plans, cutting their workload in half.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'REST API', 'Team Project'],
    githubUrl: 'https://github.com/luigicavalli/develhope-stay-fit',
    featured: false,
    teamProject: true,
  },
];
