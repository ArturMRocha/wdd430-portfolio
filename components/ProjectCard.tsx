interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="group flex min-h-64 flex-col justify-between border border-line bg-surface p-6 transition-transform hover:-translate-y-1 sm:p-7">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
          Project <span aria-hidden="true">/</span> WDD 430
        </p>
        <h3 className="mt-5 text-2xl font-semibold">{title}</h3>
        <p className="mt-3 max-w-xl leading-7 text-muted">{description}</p>
      </div>
      <div className="mt-8 flex flex-wrap items-end justify-between gap-5 border-t border-line pt-4">
        <p className="max-w-md text-sm leading-6 text-muted">
          <span className="mr-2 font-semibold text-foreground">Stack</span>
          {technologies.join(" / ")}
        </p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors group-hover:text-accent"
          >
            View source -&gt;
          </a>
        )}
      </div>
    </article>
  );
}