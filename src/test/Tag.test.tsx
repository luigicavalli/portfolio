import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Tag } from '../components/ui/Tag/Tag';

describe('Tag', () => {
  it('renders the label text', () => {
    render(<Tag label="TypeScript" />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders as a span', () => {
    const { container } = render(<Tag label="React" />);
    expect(container.querySelector('span')).toBeInTheDocument();
  });
});
