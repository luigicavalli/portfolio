import { describe, it, expect } from 'vitest';
import { experience } from '../data/experience';

describe('experience data', () => {
  it('has at least one entry', () => {
    expect(experience.length).toBeGreaterThan(0);
  });

  it('every entry has required fields', () => {
    for (const e of experience) {
      expect(e.id).toBeTruthy();
      expect(e.role).toBeTruthy();
      expect(e.company).toBeTruthy();
      expect(e.location).toBeTruthy();
      expect(e.period).toBeTruthy();
      expect(Array.isArray(e.description)).toBe(true);
      expect(e.description.length).toBeGreaterThan(0);
    }
  });

  it('type is either work or education', () => {
    for (const e of experience) {
      expect(['work', 'education']).toContain(e.type);
    }
  });

  it('has a work entry for PwC', () => {
    const pwc = experience.find((e) => e.id === 'pwc');
    expect(pwc).toBeDefined();
    expect(pwc?.type).toBe('work');
  });
});
