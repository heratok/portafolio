import * as React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '../ui/sheet';
import { ThemeToggle } from '../ui/theme-toggle';
import { Container } from './Container';
import { navItems } from '../../data/navigation';
import { useScrolled } from '../../hooks/useScrolled';
import { cn } from '../../lib/utils';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const sectionIds = navItems.map((item) => item.href.replace('#', ''));

function Brand() {
  return (
    <a
      href="#home"
      className="group -ml-2 inline-flex items-center gap-2.5 rounded-md p-2 outline-none"
      aria-label="Hector Rincon — Inicio"
    >
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-sm leading-none shadow-soft-sm transition-transform duration-300 ease-out-expo group-hover:scale-105">
        HR
        <span className="absolute inset-0 rounded-md ring-1 ring-inset ring-white/15" aria-hidden />
      </span>
      <span className="hidden sm:inline-flex flex-col leading-tight">
        <span className="text-sm font-semibold tracking-tight text-foreground">
          Hector Rincon
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          Full Stack
        </span>
      </span>
    </a>
  );
}

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'group relative inline-flex items-center rounded-md px-3 py-3 text-sm font-medium',
        'transition-colors duration-200',
        '-mx-1',
        active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
      )}
    >
      {label}
      <span
        aria-hidden
        className={cn(
          'absolute inset-x-2 -bottom-0.5 h-px origin-left bg-foreground transition-transform duration-300 ease-out-expo',
          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        )}
      />
    </a>
  );
}

function useActiveSection() {
  const [active, setActive] = React.useState<string>('home');

  React.useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const scrolled = useScrolled(8);
  const activeId = useActiveSection();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-expo',
        scrolled
          ? 'border-b border-border/80 bg-background/80 backdrop-blur-md shadow-soft-sm'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Brand />

          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-7"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                active={activeId === item.href.replace('#', '')}
              />
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <ThemeToggle theme={theme} onToggle={toggleTheme} className="hidden sm:inline-flex" />

            <Button
              asChild
              variant="primary"
              size="md"
              className="hidden !h-11 md:inline-flex"
            >
              <a href="#contact">Hablemos</a>
            </Button>

            {/* Mobile controls */}
            <ThemeToggle
              theme={theme}
              onToggle={toggleTheme}
              className="sm:hidden"
            />

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground/80 hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Abrir menú"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex h-full flex-col">
                  <div className="border-b border-border px-6 py-5">
                    <Brand />
                  </div>
                  <nav
                    aria-label="Navegación móvil"
                    className="flex-1 overflow-y-auto px-6 py-8"
                  >
                    <ul className="flex flex-col gap-1">
                      {navItems.map((item, i) => (
                        <li
                          key={item.href}
                          data-reveal
                          style={{ transitionDelay: `${80 + i * 40}ms` }}
                        >
                          <SheetClose asChild>
                            <a
                              href={item.href}
                              aria-current={
                                activeId === item.href.replace('#', '') ? 'page' : undefined
                              }
                              className={cn(
                                'flex items-center justify-between rounded-md px-3 py-3 text-base font-medium',
                                'transition-colors duration-200',
                                activeId === item.href.replace('#', '')
                                  ? 'bg-secondary text-foreground'
                                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                              )}
                            >
                              <span>{item.label}</span>
                              <span
                                aria-hidden
                                className="font-mono text-[10px] text-muted-foreground/60"
                              >
                                {String(i + 1).padStart(2, '0')}
                              </span>
                            </a>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="border-t border-border px-6 py-5">
                    <Button asChild variant="primary" className="w-full">
                      <a href="#contact" onClick={() => setMobileOpen(false)}>
                        Hablemos
                      </a>
                    </Button>
                    <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      Disponible para nuevos proyectos
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
