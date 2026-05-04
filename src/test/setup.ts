import '@testing-library/jest-dom';
import { vi } from 'vitest';

global.IntersectionObserver = vi.fn().mockImplementation(function(
  this: { observe: ReturnType<typeof vi.fn>; disconnect: ReturnType<typeof vi.fn> },
) {
  this.observe    = vi.fn();
  this.disconnect = vi.fn();
}) as unknown as typeof IntersectionObserver;
