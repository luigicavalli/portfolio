import type { ExperienceItem } from '../types';


export const experience: ExperienceItem[] = [
  {
    id: 'pwc',
    role: 'Software Engineer Consultant',
    company: 'PwC Italy',
    location: 'Milan, Italy',
    period: '2024 – Present',
    description: [
      'Full stack development in a consulting environment, delivering software solutions for enterprise clients.',
      'Focus on scalable architecture, clean code, and reusable component design.',
    ],
    type: 'work',
  },
  {
    id: 'develhope',
    role: 'Full Stack Developer',
    company: 'Develhope',
    location: 'Remote',
    period: '2024',
    description: [
      'Intensive full stack development program covering modern web technologies.',
      'Built team and solo projects applying agile methodologies.'
    ],
    type: 'education',
  },
  {
    id: 'high_school',
    role: 'High School Diploma',
    company: 'Istituto Scolastico "S. Vincenzo De\' Paoli"',
    location: 'Reggio Calabria, Italy',
    period: '2017',
    description: [
      'Scientific subjects-oriented high school program.'
    ],
    type: 'education',
  },
  {
    id: 'high_school_aborad',
    role: 'Study Experience Abroad',
    company: 'EF Academy International Boarding School',
    location: 'Thornwood, NY',
    period: '2015 – 2016',
    description: [
      'Full academic year at an English-language international boarding school in New York.',
      'International Baccalaureate (IB) coursework in a multicultural environment.',
    ],
    type: 'education',
  }
];
