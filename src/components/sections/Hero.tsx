import * as React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Container } from '../layout/Container';
import { useReveal } from '../../hooks/useReveal';
import { socialLinks } from '../../data/navigation';

const stats = [
  { value: '+2', label: 'Años construyendo' },
  { value: '6+', label: 'Proyectos en producción' },
  { value: 'CO', label: 'Valledupar, Colombia' },
];

const Hero: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="home"
      aria-label="Presentación"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32"
    >
      {/* Atmospheric backdrop — soft radial spotlight only. No decorative grid. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-spotlight"
      />

      <Container className="relative">
        <div ref={ref} className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Left column (copy) */}
          {/* Copy column */}
          <div className="flex flex-col">
            <div
              data-reveal
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
              style={{ transitionDelay: '40ms' }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
              </span>
              Disponible para nuevos proyectos
            </div>

            <h1
              data-reveal
              className="mt-6 text-display-2xl text-foreground"
              style={{ transitionDelay: '120ms' }}
            >
              Hola, soy{' '}
              <span className="relative whitespace-nowrap text-primary">
                Hector Rincon
                <svg
                  aria-hidden
                  viewBox="0 0 240 8"
                  className="absolute -bottom-1.5 left-0 h-2 w-full text-primary/40"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 5 Q 60 0 120 4 T 238 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p
              data-reveal
              className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground"
              style={{ transitionDelay: '200ms' }}
            >
              Desarrollador web full stack. Construyo productos digitales
              completos — desde interfaces cuidadas hasta APIs confiables — con
              foco en rendimiento, accesibilidad y una experiencia que la gente
              quiera usar.
            </p>

            <div
              data-reveal
              className="mt-8 flex flex-wrap items-center gap-3"
              style={{ transitionDelay: '280ms' }}
            >
              <Button asChild size="lg" className="group">
                <a href="#projects">
                  Ver proyectos
                  <ArrowUpRight className="transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Hablemos</a>
              </Button>
            </div>

            <dl
              data-reveal
              className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8"
              style={{ transitionDelay: '360ms' }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <dt className="order-2 mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="order-1 text-2xl font-semibold tracking-tight tabular-nums text-foreground">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div
              data-reveal
              className="mt-10 flex max-w-md items-center gap-4"
              style={{ transitionDelay: '440ms' }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Encuéntrame en
              </span>
              <div className="h-px w-8 bg-border" />
              <ul className="flex items-center gap-1">
                {socialLinks.map((link) => (
                  <li key={link.platform}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.platform}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    >
                      <SocialIcon name={link.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Portrait column */}
          <div
            data-reveal
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
            style={{ transitionDelay: '180ms' }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft-md">
              <img
                src="/img/foto_page-0001.jpg"
                alt="Hector Armando Rincon Farelo"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
              {/* Soft inner border for a clean edge */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5"
              />
            </div>

            {/* Floating detail card */}
            <div
              className="absolute -left-4 bottom-8 hidden sm:flex items-center gap-3 rounded-xl border border-border bg-popover/90 px-4 py-3 shadow-soft-md backdrop-blur-md"
              data-reveal
              style={{ transitionDelay: '600ms' }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-medium text-foreground">
                  Frontend · Backend
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  React · Node · TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          aria-label="Bajar a la siguiente sección"
          className="group absolute bottom-2 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground lg:flex"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-y-1" />
        </a>
      </Container>
    </section>
  );
};

export default Hero;

/** Inline social icon — small and explicit, no extra registry lookup. */
function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case 'Github':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case 'Linkedin':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'Mail':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    default:
      return null;
  }
}
