import * as React from 'react';
import { cn } from '../../lib/utils';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { SectionHeading } from '../layout/SectionHeading';
import { useReveal } from '../../hooks/useReveal';
import { IconByName } from '../ui/icon-by-name';
import { skills } from '../../data/skills';
import type { Skill } from '../../types';

type CategoryId = 'all' | Skill['category'];

const categories: { id: CategoryId; label: string }[] = [
  { id: 'all', label: 'Todo' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'tools', label: 'Herramientas' },
  { id: 'other', label: 'Otros' },
];

const categoryAccent: Record<Skill['category'], string> = {
  frontend: 'bg-primary/10 text-primary',
  backend: 'bg-accent text-accent-foreground',
  tools: 'bg-secondary text-secondary-foreground',
  other: 'bg-muted text-muted-foreground',
};

const Skills: React.FC = () => {
  const [active, setActive] = React.useState<CategoryId>('all');
  const ref = useReveal<HTMLDivElement>();

  const filtered = React.useMemo(
    () => (active === 'all' ? skills : skills.filter((s) => s.category === active)),
    [active]
  );

  return (
    <Section id="skills" aria-label="Habilidades">
      <Container ref={ref}>
        <div data-reveal>
          <SectionHeading
            title="Un stack que conozco de verdad."
            description="Tecnologías que uso a diario, no que intenté una vez. Cada una la elegí porque me resuelve un problema concreto."
            align="center"
          />
        </div>

        {/* Segmented filter */}
        <div
          data-reveal
          role="tablist"
          aria-label="Filtrar por categoría"
          className="mt-10 mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-1 rounded-full border border-border bg-card/60 p-1 shadow-soft-sm backdrop-blur-sm"
          style={{ transitionDelay: '80ms' }}
        >
          {categories.map((c) => {
            const isActive = active === c.id;
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(c.id)}
                className={cn(
                  'relative inline-flex h-8 items-center justify-center gap-1.5 rounded-full px-4 text-sm font-medium',
                  'transition-colors duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  isActive
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-foreground"
                  />
                )}
                {isActive && (
                  <span
                    aria-hidden
                    className="relative inline-block h-1.5 w-1.5 rounded-full bg-background"
                  />
                )}
                <span className="relative">{c.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <ul
          data-reveal
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
          style={{ transitionDelay: '160ms' }}
        >
          {filtered.map((skill, i) => (
            <li
              key={skill.name}
              data-reveal
              style={{ transitionDelay: `${200 + i * 35}ms` }}
            >
              <article
                className={cn(
                  'group relative flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-4 sm:p-5',
                  'transition-all duration-300 ease-out-expo',
                  'hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-soft-md'
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      'inline-flex h-9 w-9 items-center justify-center rounded-md transition-transform duration-300 ease-out-expo group-hover:scale-110',
                      categoryAccent[skill.category]
                    )}
                    aria-hidden
                  >
                    <IconByName name={skill.icon} size={18} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-foreground">
                  {skill.name}
                </h3>
                <p className="mt-auto font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {categoryLabel(skill.category)}
                </p>
              </article>
            </li>
          ))}
        </ul>

        {filtered.length === 0 && (
          <p
            data-reveal
            className="mt-12 text-center text-sm text-muted-foreground"
          >
            No hay habilidades en esta categoría todavía.
          </p>
        )}
      </Container>
    </Section>
  );
};

export default Skills;

function categoryLabel(c: Skill['category']) {
  switch (c) {
    case 'frontend':
      return 'Frontend';
    case 'backend':
      return 'Backend';
    case 'tools':
      return 'Tools';
    case 'other':
      return 'Other';
  }
}
