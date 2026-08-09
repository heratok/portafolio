import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes safely.
 * Later classes win on conflicts; falsy values are dropped.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
