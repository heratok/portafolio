import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        '2xl': '72rem',
      },
    },
    extend: {
      colors: {
        border: 'oklch(var(--border) / <alpha-value>)',
        input: 'oklch(var(--input) / <alpha-value>)',
        ring: 'oklch(var(--ring) / <alpha-value>)',
        background: 'oklch(var(--background) / <alpha-value>)',
        foreground: 'oklch(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
          foreground: 'oklch(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
          foreground: 'oklch(var(--secondary-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
          foreground: 'oklch(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
          foreground: 'oklch(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
          foreground: 'oklch(var(--accent-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'oklch(var(--popover) / <alpha-value>)',
          foreground: 'oklch(var(--popover-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'oklch(var(--card) / <alpha-value>)',
          foreground: 'oklch(var(--card-foreground) / <alpha-value>)',
        },
        success: {
          DEFAULT: 'oklch(var(--success) / <alpha-value>)',
          foreground: 'oklch(var(--success-foreground) / <alpha-value>)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(2.5rem, 6vw + 0.5rem, 5.25rem)', { lineHeight: '1.04', letterSpacing: '-0.035em', fontWeight: '600' }],
        'display-xl': ['clamp(2.25rem, 4.5vw + 0.5rem, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-lg': ['clamp(1.875rem, 3.5vw + 0.5rem, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-md': ['clamp(1.5rem, 2.25vw + 0.5rem, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
      },
      boxShadow: {
        'soft-sm': '0 1px 2px 0 oklch(0.18 0.012 250 / 0.04), 0 1px 1px 0 oklch(0.18 0.012 250 / 0.02)',
        soft: '0 2px 4px 0 oklch(0.18 0.012 250 / 0.04), 0 4px 12px -2px oklch(0.18 0.012 250 / 0.05)',
        'soft-md': '0 4px 8px -2px oklch(0.18 0.012 250 / 0.06), 0 8px 24px -4px oklch(0.18 0.012 250 / 0.08)',
        'soft-lg': '0 8px 16px -4px oklch(0.18 0.012 250 / 0.08), 0 16px 40px -8px oklch(0.18 0.012 250 / 0.10)',
        'inset-border': 'inset 0 0 0 1px oklch(var(--border))',
        glow: '0 0 0 1px oklch(var(--primary) / 0.18), 0 8px 24px -8px oklch(var(--primary) / 0.25)',
        'dark-soft': '0 1px 2px 0 rgb(0 0 0 / 0.30), 0 2px 8px -2px rgb(0 0 0 / 0.30)',
        'dark-soft-md': '0 4px 8px -2px rgb(0 0 0 / 0.40), 0 12px 28px -4px rgb(0 0 0 / 0.40)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-soft': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      transitionDuration: {
        250: '250ms',
        350: '350ms',
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.97)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 600ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 500ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'scale-in': 'scale-in 400ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-in-right': 'slide-in-right 350ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-out-right': 'slide-out-right 250ms cubic-bezier(0.16, 1, 0.3, 1)',
        marquee: 'marquee 38s linear infinite',
        shimmer: 'shimmer 1.6s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [animate],
};
