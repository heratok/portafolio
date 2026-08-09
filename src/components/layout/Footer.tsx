import * as React from 'react';
import { ArrowUp } from 'lucide-react';
import { Container } from './Container';
import { navItems, socialLinks } from '../../data/navigation';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background">
      <Container className="py-14 sm:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Brand block */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <a
              href="#home"
              className="-ml-2 inline-flex w-fit items-center gap-2.5 rounded-md p-2 outline-none"
              aria-label="Volver arriba"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-sm leading-none shadow-soft-sm">
                HR
              </span>
              <span className="text-sm font-semibold tracking-tight text-foreground">
                Hector Rincon
              </span>
            </a>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Desarrollador web full stack. Construyo productos digitales que
              la gente quiere usar, con foco en los detalles invisibles.
            </p>
            <a
              href="#contact"
              className="group -mx-2 inline-flex w-fit items-center gap-1.5 rounded-md px-3 py-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Empezar un proyecto
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Nav */}
          <nav className="lg:col-span-3" aria-label="Navegación del sitio">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Navegación
            </h3>
            <ul className="mt-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group -mx-2 inline-flex items-center gap-1.5 rounded-md px-3 py-3 text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    <span className="link-underline">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <nav className="lg:col-span-4" aria-label="Redes sociales y contacto">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Encuéntrame en
            </h3>
            <ul className="mt-4 flex flex-col gap-1">
              {socialLinks.map((link) => (
                <li key={link.platform}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group -mx-2 inline-flex items-center gap-2 rounded-md px-3 py-3 text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    <span className="link-underline">{link.platform}</span>
                    <ArrowUp className="h-3 w-3 -rotate-45 opacity-50 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="font-mono text-[11px] text-muted-foreground">
            © {year} Hector Rincon. Hecho con cuidado.
          </p>
          <p className="font-mono text-[11px] text-muted-foreground/70">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-success align-middle" />{' '}
            Disponible para nuevos proyectos
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
