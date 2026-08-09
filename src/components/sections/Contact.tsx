import * as React from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { SectionHeading } from '../layout/SectionHeading';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { useReveal } from '../../hooks/useReveal';
import { cn } from '../../lib/utils';

type Status =
  | { kind: 'idle' }
  | { kind: 'submitting' }
  | { kind: 'success'; message: string }
  | { kind: 'error'; message: string };

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hectorincon0502@gmail.com',
    href: 'mailto:hectorincon0502@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Valledupar, Colombia',
    href: 'https://www.google.com/maps?q=Valledupar%2C+Colombia',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+57 320 740 3002',
    href: 'tel:+573207403002',
  },
] as const;

const Contact: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();
  const [form, setForm] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = React.useState<Status>({ kind: 'idle' });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        kind: 'error',
        message: 'Por favor completá nombre, email y mensaje antes de enviar.',
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setStatus({
        kind: 'error',
        message: 'El email no parece válido. Revisalo y volvé a intentar.',
      });
      return;
    }

    setStatus({ kind: 'submitting' });
    // Simulated submit — wire to your backend / Formspree / Resend here.
    setTimeout(() => {
      setStatus({
        kind: 'success',
        message: '¡Mensaje enviado! Te respondo en menos de 24 horas.',
      });
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const isSubmitting = status.kind === 'submitting';

  return (
    <Section id="contact" aria-label="Contacto">
      <Container ref={ref}>
        <div data-reveal>
          <SectionHeading
            title="¿Tenés algo en mente?"
            description="Estoy disponible para proyectos freelance, oportunidades full-time y conversaciones sobre tecnología. Escribime y te respondo pronto."
            align="center"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Left column: contact info + CTA */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <ul className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.label}
                    data-reveal
                    style={{ transitionDelay: `${100 + i * 70}ms` }}
                  >
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-secondary/50"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                          {item.label}
                        </span>
                        <span className="truncate text-sm font-medium text-foreground">
                          {item.value}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Availability card */}
            <div
              data-reveal
              className="relative overflow-hidden rounded-xl border border-border surface-highlight p-6 shadow-soft-md"
              style={{ transitionDelay: '320ms' }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 bg-glow-primary"
              />
              <div className="relative flex items-center gap-2 text-xs">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                </span>
                <span className="font-mono uppercase tracking-[0.16em] opacity-70">
                  Disponible
                </span>
              </div>
              <h3 className="relative mt-3 text-lg font-semibold tracking-tight">
                Trabajemos juntos.
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed opacity-75">
                Acepto proyectos cortos y medianos. Si tenés algo entre 2 y 12
                semanas, escribime.
              </p>
            </div>
          </div>

          {/* Right column: form */}
          <form
            onSubmit={handleSubmit}
            data-reveal
            noValidate
            className="lg:col-span-3 flex flex-col gap-5 rounded-xl border border-border bg-card p-6 sm:p-8"
            style={{ transitionDelay: '180ms' }}
            aria-busy={isSubmitting}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="name">
                  Nombre <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Tu nombre"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="tu@email.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="subject">Asunto</Label>
              <Input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={update('subject')}
                placeholder="¿De qué se trata?"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="message">
                Mensaje <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                value={form.message}
                onChange={update('message')}
                placeholder="Contame un poco sobre el proyecto, plazos y objetivos."
                rows={5}
                required
              />
            </div>

            {/* Status feedback */}
            {status.kind === 'error' && (
              <div
                role="alert"
                className="flex items-start gap-2.5 rounded-md border border-destructive/30 bg-destructive/10 px-3.5 py-2.5 text-sm text-destructive"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{status.message}</span>
              </div>
            )}
            {status.kind === 'success' && (
              <div
                role="status"
                className="flex items-start gap-2.5 rounded-md border border-success/30 bg-success/10 px-3.5 py-2.5 text-sm text-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span>{status.message}</span>
              </div>
            )}

            <div className="mt-1 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                Te respondo en menos de{' '}
                <span className="font-medium text-foreground">24h</span>.
              </p>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className={cn(isSubmitting && 'opacity-80')}
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Enviando
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
