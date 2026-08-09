import * as React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The H2 / H1 — carries its own weight; no kicker above it. */
  title: string;
  /** Optional supporting paragraph. */
  description?: string;
  /** Center vs left alignment. */
  align?: 'left' | 'center';
  /** H2 visual size. */
  size?: 'md' | 'lg';
  as?: 'h1' | 'h2';
}

const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  (
    {
      title,
      description,
      align = 'center',
      size = 'lg',
      as: Tag = 'h2',
      className,
      ...props
    },
    ref
  ) => {
    const titleClass = size === 'lg' ? 'text-display-lg' : 'text-display-md';

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col gap-4',
          align === 'center' ? 'items-center text-center' : 'items-start text-left',
          'max-w-3xl',
          align === 'center' && 'mx-auto',
          className
        )}
        {...props}
      >
        <Tag
          className={cn('font-semibold tracking-tight text-foreground', titleClass)}
        >
          {title}
        </Tag>
        {description ? (
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
            {description}
          </p>
        ) : null}
      </div>
    );
  }
);
SectionHeading.displayName = 'SectionHeading';

export { SectionHeading };
