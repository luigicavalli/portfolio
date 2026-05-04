import { useEffect, useState } from 'react';

export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: '-50% 0px -50% 0px', threshold: 0 },
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')]);

  return activeId;
}
