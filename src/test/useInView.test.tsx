import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useInView } from '../hooks/useInView';

function TestBox() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return <div ref={ref} data-testid="box" data-inview={String(inView)} />;
}

describe('useInView', () => {
  let capturedCallback: IntersectionObserverCallback;

  beforeEach(() => {
    (global.IntersectionObserver as ReturnType<typeof vi.fn>).mockImplementation(
      function(
        this: { observe: ReturnType<typeof vi.fn>; disconnect: ReturnType<typeof vi.fn> },
        cb: IntersectionObserverCallback,
      ) {
        capturedCallback  = cb;
        this.observe      = vi.fn();
        this.disconnect   = vi.fn();
      },
    );
  });

  it('starts with inView false', () => {
    render(<TestBox />);
    expect(screen.getByTestId('box')).toHaveAttribute('data-inview', 'false');
  });

  it('sets inView to true when element intersects', () => {
    render(<TestBox />);
    act(() => {
      capturedCallback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      );
    });
    expect(screen.getByTestId('box')).toHaveAttribute('data-inview', 'true');
  });

  it('stays false when not intersecting', () => {
    render(<TestBox />);
    act(() => {
      capturedCallback(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      );
    });
    expect(screen.getByTestId('box')).toHaveAttribute('data-inview', 'false');
  });

  it('returns a ref attached to the element', () => {
    render(<TestBox />);
    expect(screen.getByTestId('box')).toBeInTheDocument();
  });
});
