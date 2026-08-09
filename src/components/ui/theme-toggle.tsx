import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from './button';
import { cn } from '../../lib/utils';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
  className?: string;
  /** Show only the icon, no padding box (for inline placement in nav). */
  bare?: boolean;
}

export function ThemeToggle({ theme, onToggle, className, bare = false }: ThemeToggleProps) {
  const isDark = theme === 'dark';
  const label = isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';

  const button = (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className={cn(
        'relative inline-flex h-11 w-11 items-center justify-center rounded-md',
        'text-foreground/70 hover:text-foreground hover:bg-secondary',
        'transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className
      )}
    >
      <Sun
        className={cn(
          'h-4 w-4 transition-all duration-300 ease-out-expo',
          isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        )}
        aria-hidden
      />
      <Moon
        className={cn(
          'absolute h-4 w-4 transition-all duration-300 ease-out-expo',
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        )}
        aria-hidden
      />
    </button>
  );

  if (bare) return button;
  return (
    <Button variant="ghost" size="icon" className="!h-11 !w-11" asChild>
      {button}
    </Button>
  );
}
