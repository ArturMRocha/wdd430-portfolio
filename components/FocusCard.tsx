interface FocusCardProps {
  title: string;
  description: string;
}

export default function FocusCard({ title, description }: FocusCardProps) {
  return (
    <article className="border-l-4 border-accent bg-surface p-6 sm:p-8">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
        Current focus
      </p>
      <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
      <p className="mt-3 max-w-2xl leading-7 text-muted">{description}</p>
    </article>
  );
}