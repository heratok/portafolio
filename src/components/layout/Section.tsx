import * as React from 'react';
import { cn } from '../../lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'section' | 'div' | 'article';
  /** Background tone relative to the page. */
  tone?: 'default' | 'muted' | 'subtle' | 'inverse';
  /** Pull the section flush with the header (remove top padding for hero-like surfaces). */
  flush?: boolean;
}

const toneMap: Record<NonNullable<SectionProps['tone']>, string> = {
  default: 'bg-background text-foreground',
  muted: 'bg-secondary/40 text-foreground',
  subtle: 'bg-muted text-foreground',
  inverse: 'bg-foreground text-background',
};

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ as: Tag = 'section', tone = 'default', flush = false, className, ...props }, ref) => (
    <Tag
      ref={ref as never}
      className={cn(
        toneMap[tone],
        flush ? 'pt-16 sm:pt-20 md:pt-24' : 'py-20 sm:py-24 md:py-32',
        className
      )}
      {...props}
    />
  )
);
Section.displayName = 'Section';

export { Section };
