import * as React from 'react';
import { ArrowUpRight, Github, SearchX } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { SectionHeading } from '../layout/SectionHeading';
import { useReveal } from '../../hooks/useReveal';
import { projects } from '../../data/projects';
import { cn } from '../../lib/utils';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<string>('all');
  const ref = useReveal<HTMLDivElement>();

  const tags = React.useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ['all', ...Array.from(set)];
  }, []);

  const filtered = React.useMemo(
    () =>
      activeFilter === 'all'
        ? projects
        : projects.filter((p) => p.tags.includes(activeFilter)),
    [activeFilter]
  );

  return (
    <Section id="projects" tone="muted" aria-label="Proyectos">
      <Container ref={ref}>
        <div data-reveal>
          <SectionHeading
            title="Trabajo que se puede tocar."
            description="Una selección de productos que diseñé, construí y desplegué. Cada uno resuelve un problema distinto y vive en producción."
            align="center"
          />
        </div>

        {/* Filter */}
        <div
          data-reveal
          role="tablist"
          aria-label="Filtrar por tecnología"
          className="mt-10 mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-1.5"
          style={{ transitionDelay: '80ms' }}
        >
          {tags.map((tag) => {
            const isActive = activeFilter === tag;
            return (
              <button
                key={tag}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tag)}
                className={cn(
                  'relative inline-flex h-8 items-center gap-1.5 rounded-full border px-3.5 text-xs font-medium',
                  'transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  isActive
                    ? 'border-foreground bg-foreground text-background shadow-soft-sm'
                    : 'border-border bg-card text-muted-foreground hover:border-foreground/20 hover:text-foreground'
                )}
              >
                {isActive && (
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 rounded-full bg-background"
                  />
                )}
                {tag === 'all' ? 'Todos' : tag}
              </button>
            );
          })}
        </div>

        {/* Projects grid */}
        <ul
          data-reveal
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          style={{ transitionDelay: '160ms' }}
        >
          {filtered.map((project, i) => (
            <li
              key={project.id}
              data-reveal
              className="h-full"
              style={{ transitionDelay: `${120 + i * 80}ms` }}
            >
              <article
                className={cn(
                  'group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card',
                  'transition-all duration-300 ease-out-expo',
                  'hover:-translate-y-1 hover:border-foreground/15 hover:shadow-soft-lg'
                )}
              >
                {/* Cover */}
                <a
                  href={project.demoLink ?? project.sourceLink ?? '#'}
                  target={project.demoLink || project.sourceLink ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="relative block aspect-[4/3] overflow-hidden border-b border-border bg-muted"
                  aria-label={`Abrir ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                    loading="lazy"
                    decoding="async"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10"
                  />
                  <span
                    aria-hidden
                    className="absolute left-4 top-4 inline-flex h-7 items-center rounded-full bg-background/85 px-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground shadow-soft-sm backdrop-blur"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    aria-hidden
                    className="absolute right-4 top-4 inline-flex h-9 w-9 translate-x-1 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-soft-sm backdrop-blur transition-all duration-300 ease-out-expo group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-5 flex items-center gap-1 border-t border-border">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link -mx-2 inline-flex items-center gap-1 rounded-md px-2 py-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        Demo
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out-expo group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    )}
                    {project.sourceLink && (
                      <a
                        href={project.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link -mx-2 inline-flex items-center gap-1.5 rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Código
                      </a>
                    )}
                    {!project.demoLink && !project.sourceLink && (
                      <span className="py-3 text-xs text-muted-foreground/70">
                        Próximamente
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {filtered.length === 0 && (
          <div
            data-reveal
            className="mt-16 flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border py-16 text-center"
          >
            <SearchX className="h-6 w-6 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              No hay proyectos con esta tecnología todavía.
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Projects;
