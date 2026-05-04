import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from '../components/ui/Button/Button';

describe('Button', () => {
  it('renders as <button> when no href is provided', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('renders as <a> when href is provided', () => {
    render(<Button href="#contact">Contact</Button>);
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact');
  });

  it('adds external attributes when external prop is set', () => {
    render(<Button href="https://github.com" external>GitHub</Button>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not add external attributes by default', () => {
    render(<Button href="#about">About</Button>);
    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  it('renders children correctly', () => {
    render(<Button>View projects</Button>);
    expect(screen.getByText('View projects')).toBeInTheDocument();
  });
});
