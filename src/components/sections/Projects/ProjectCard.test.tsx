import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../../../types';

const base: Project = {
  id:          'test-project',
  title:       'Test Project',
  description: 'A test project description.',
  tags:        ['React', 'TypeScript'],
};

describe('ProjectCard', () => {
  it('renders title and description', () => {
    render(<ProjectCard project={base} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A test project description.')).toBeInTheDocument();
  });

  it('renders all tags', () => {
    render(<ProjectCard project={base} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('shows team badge when teamProject is true', () => {
    render(<ProjectCard project={{ ...base, teamProject: true }} />);
    expect(screen.getByText('Team project')).toBeInTheDocument();
  });

  it('does not show team badge when teamProject is false', () => {
    render(<ProjectCard project={{ ...base, teamProject: false }} />);
    expect(screen.queryByText('Team project')).not.toBeInTheDocument();
  });

  it('renders live demo link when liveUrl is provided', () => {
    render(<ProjectCard project={{ ...base, liveUrl: 'https://example.com' }} />);
    expect(screen.getByRole('link', { name: 'Live demo' })).toHaveAttribute('href', 'https://example.com');
  });

  it('renders GitHub link when githubUrl is provided', () => {
    render(<ProjectCard project={{ ...base, githubUrl: 'https://github.com/user/repo' }} />);
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/user/repo');
  });

  it('renders no action links when no URLs are provided', () => {
    render(<ProjectCard project={base} />);
    expect(screen.queryByRole('link', { name: 'Live demo' })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'GitHub' })).not.toBeInTheDocument();
  });
});
