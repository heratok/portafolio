import * as React from 'react';
import { Briefcase, GraduationCap, Globe2, Award, Code2, Server } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { SectionHeading } from '../layout/SectionHeading';
import { useReveal } from '../../hooks/useReveal';
import { cn } from '../../lib/utils';

const facts = [
  { icon: Briefcase, label: 'Experiencia', value: '+2 años' },
  { icon: GraduationCap, label: 'Educación', value: 'Ing. de Sistemas' },
  { icon: Globe2, label: 'Idiomas', value: 'Español · Inglés' },
  { icon: Award, label: 'Certificaciones', value: 'AWS · Google Cloud' },
];

const capabilities = [
  {
    icon: Code2,
    title: 'Frontend',
    description:
      'Interfaces reactivas y accesibles. Componentes reutilizables, animaciones con propósito y un sistema de diseño que escala con el producto.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Vite'],
  },
  {
    icon: Server,
    title: 'Backend',
    description:
      'APIs claras y servicios confiables. Modelado de datos, autenticación y despliegues reproducibles con foco en lo que se puede mantener.',
    stack: ['Node.js', 'Express', 'MongoDB', 'SQL'],
  },
];

const About: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Section id="about" tone="muted" aria-label="Sobre mí">
      <Container ref={ref}>
        <div data-reveal>
          <SectionHeading
            title="Construyo software con intención."
            description="Soy un desarrollador al que le importa cómo se siente el producto terminado, no solo que funcione. Hecho a mano, con calma, y siempre con un ojo en el siguiente usuario."
            align="center"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Bio column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div
              data-reveal
              className="text-base sm:text-lg leading-relaxed text-foreground/85"
              style={{ transitionDelay: '80ms' }}
            >
              <p>
                Empecé en el desarrollo web por curiosidad y me quedé por
                oficio. Llevo más de dos años construyendo productos para
                startups, agencias y equipos de producto — desde landings que
                convierten hasta paneles que la gente usa todos los días.
              </p>
              <p className="mt-5">
                Me obsesionan los detalles invisibles: el peso de la tipografía,
                el espaciado entre elementos, los estados de carga que no
                mienten. El código es un medio; el resultado es lo que la gente
                recuerda.
              </p>
              <p className="mt-5">
                Cuando no estoy programando, leo sobre diseño, contribuyo a
                proyectos open source o exploro nuevas herramientas que me
                ayudan a ser mejor en lo mío.
              </p>
            </div>

            <dl
              data-reveal
              className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border"
              style={{ transitionDelay: '200ms' }}
            >
              {facts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={fact.label}
                    className="flex flex-col gap-2 bg-card p-5 sm:p-6"
                  >
                    <dt className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                      <Icon className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
                      <span>{fact.label}</span>
                    </dt>
                    <dd className="text-base sm:text-lg font-semibold text-foreground">
                      {fact.value}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>

          {/* Capabilities column */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <article
                  key={cap.title}
                  data-reveal
                  className={cn(
                    'group relative overflow-hidden rounded-lg border border-border bg-card p-6 sm:p-7',
                    'transition-all duration-300 ease-out-expo',
                    'hover:border-foreground/15 hover:shadow-soft-md hover:-translate-y-0.5'
                  )}
                  style={{ transitionDelay: `${120 + i * 80}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {cap.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {cap.stack.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-background/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>

        {/* Philosophy pull-quote — own row, NOT nested in another card */}
        <figure
          data-reveal
          className="relative mt-16 sm:mt-20 overflow-hidden rounded-2xl border border-border surface-highlight px-6 py-10 sm:px-12 sm:py-14 shadow-soft-md"
          style={{ transitionDelay: '120ms' }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 bg-glow-primary"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 bg-glow-primary opacity-60"
          />
          <div className="relative max-w-3xl">
            <blockquote className="text-xl sm:text-2xl leading-snug tracking-tight text-balance">
              <span className="font-serif text-primary/80">&ldquo;</span>
              El mejor código no es el más clever — es el que otro developer
              puede leer un año después y entender. La tecnología tiene que
              resolver problemas reales y mejorar la vida de las personas.
              <span className="font-serif text-primary/80">&rdquo;</span>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 text-sm">
              <span className="h-px w-8 bg-current opacity-30" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">
                Mi filosofía
              </span>
            </figcaption>
          </div>
        </figure>
      </Container>
    </Section>
  );
};

export default About;
