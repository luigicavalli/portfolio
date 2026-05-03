type ExperienceType = 'work' | 'education';
type SkillType      = 'frontend' | 'backend' | 'tools' | 'other';

export interface Project {
  id:               string;
  title:            string;
  description:      string;
  longDescription?: string;
  tags:             string[];
  githubUrl?:       string;
  liveUrl?:         string;
  featured?:        boolean;
  teamProject?:     boolean;
}

export interface ExperienceItem {
  id:          string;
  role:        string;
  company:     string;
  location:    string;
  period:      string;
  description: string[];
  type:        ExperienceType;
}

export interface Skill {
  name:     string;
  category: SkillType;
}