import { useEffect, useRef } from 'react';

/**
 * Adds `is-revealed` to every element with `[data-reveal]` inside the returned
 * container once it enters the viewport. Honors `prefers-reduced-motion`
 * (elements are revealed immediately) and only runs once per element.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { rootMargin: '-10% 0px', threshold: 0.05 }
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (reduceMotion) {
      targets.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    // Reveal anything already in viewport on mount (above-the-fold content)
    const revealNow = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-revealed');
        return true;
      }
      return false;
    };

    targets.forEach((el) => revealNow(el));

    // Observe only the elements still hidden
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05, ...options }
    );

    const stillHidden = targets.filter((el) => !el.classList.contains('is-revealed'));
    stillHidden.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [options]);

  return ref;
}
