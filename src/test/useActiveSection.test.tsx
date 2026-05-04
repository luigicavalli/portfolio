import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useActiveSection } from '../hooks/useActiveSection';

function TestPage({ ids }: { ids: string[] }) {
  const activeId = useActiveSection(ids);
  return (
    <>
      <div data-testid="indicator" data-active={activeId} />
      {ids.map((id) => <section key={id} id={id} />)}
    </>
  );
}

describe('useActiveSection', () => {
  const callbackMap = new Map<string, IntersectionObserverCallback>();

  beforeEach(() => {
    callbackMap.clear();
    (global.IntersectionObserver as ReturnType<typeof vi.fn>).mockImplementation(
      function(
        this: { observe: (el: Element) => void; disconnect: () => void },
        cb: IntersectionObserverCallback,
      ) {
        this.observe    = (el: Element) => callbackMap.set(el.id, cb);
        this.disconnect = vi.fn();
      },
    );
  });

  it('starts with no active section', () => {
    render(<TestPage ids={['about', 'projects']} />);
    expect(screen.getByTestId('indicator')).toHaveAttribute('data-active', '');
  });

  it('sets active section when it intersects', () => {
    render(<TestPage ids={['about', 'projects']} />);

    act(() => {
      callbackMap.get('about')?.([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver);
    });

    expect(screen.getByTestId('indicator')).toHaveAttribute('data-active', 'about');
  });

  it('updates active section when a different section intersects', () => {
    render(<TestPage ids={['about', 'projects']} />);

    act(() => {
      callbackMap.get('about')?.([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver);
    });
    act(() => {
      callbackMap.get('projects')?.([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver);
    });

    expect(screen.getByTestId('indicator')).toHaveAttribute('data-active', 'projects');
  });

  it('does not change active section when entry is not intersecting', () => {
    render(<TestPage ids={['about', 'projects']} />);

    act(() => {
      callbackMap.get('about')?.([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver);
    });
    act(() => {
      callbackMap.get('projects')?.([{ isIntersecting: false } as IntersectionObserverEntry], {} as IntersectionObserver);
    });

    expect(screen.getByTestId('indicator')).toHaveAttribute('data-active', 'about');
  });

  it('observes all provided section IDs', () => {
    render(<TestPage ids={['about', 'projects', 'contact']} />);
    expect(callbackMap.has('about')).toBe(true);
    expect(callbackMap.has('projects')).toBe(true);
    expect(callbackMap.has('contact')).toBe(true);
  });
});
