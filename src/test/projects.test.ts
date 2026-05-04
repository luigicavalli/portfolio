import { describe, it, expect } from 'vitest';
import { projects } from '../data/projects';

describe('projects data', () => {
  it('has at least one project', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('has exactly one featured project', () => {
    const featured = projects.filter((p) => p.featured);
    expect(featured).toHaveLength(1);
  });

  it('every project has required fields', () => {
    for (const p of projects) {
      expect(p.id).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(Array.isArray(p.tags)).toBe(true);
    }
  });

  it('Norvia Studio has both live and GitHub URLs', () => {
    const norvia = projects.find((p) => p.id === 'norvia-studio');
    expect(norvia?.liveUrl).toBeTruthy();
    expect(norvia?.githubUrl).toBeTruthy();
  });

  it('all tags are non-empty strings', () => {
    for (const p of projects) {
      for (const tag of p.tags) {
        expect(typeof tag).toBe('string');
        expect(tag.length).toBeGreaterThan(0);
      }
    }
  });
});
