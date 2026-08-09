import * as React from 'react';
import * as LucideIcons from 'lucide-react';

type IconComponent = React.ComponentType<{ size?: number; className?: string }>;

const iconRegistry = LucideIcons as unknown as Record<string, IconComponent>;

/** Render a lucide-react icon by its export name, with safe fallback. */
export function IconByName({
  name,
  size = 20,
  className,
  fallback = null,
}: {
  name: string;
  size?: number;
  className?: string;
  fallback?: React.ReactNode;
}) {
  const Icon = iconRegistry[name];
  if (!Icon) return <>{fallback}</>;
  return <Icon size={size} className={className} />;
}
