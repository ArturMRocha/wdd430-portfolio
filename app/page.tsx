import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Portfolio site",
    description:
      "A responsive Next.js portfolio composed from shared server components, with Home and About routes.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
    link: "https://github.com/ArturMRocha/wdd430-portfolio",
  },
  {
    title: "Hello API endpoint",
    description:
      "A small App Router endpoint that returns a JSON greeting using the standard Web Response API.",
    technologies: ["Next.js Route Handlers", "TypeScript", "Web APIs"],
    link: "https://github.com/ArturMRocha/wdd430-portfolio/blob/main/app/api/hello/route.ts",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-20 pt-12 md:px-10 md:pt-20">
      <section className="grid gap-12 border-b border-line pb-14 md:grid-cols-[1.4fr_0.6fr] md:items-end md:pb-20">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            WDD 430 <span className="px-2 text-muted">/</span> Portfolio 2026
          </p>
          <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.06] sm:text-6xl">
            Building useful things for the web.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            I am learning to create clear, responsive experiences with Next.js,
            React, and TypeScript. Here is the work taking shape along the way.
          </p>
        </div>
        <aside
          aria-label="Portfolio overview"
          className="relative overflow-hidden border border-foreground bg-foreground p-6 text-background sm:p-8"
        >
          <div className="absolute -right-7 -top-8 h-28 w-28 rotate-12 border border-[#b8d7c7]" />
          <div className="absolute -right-2 -top-3 h-28 w-28 rotate-12 border border-accent" />
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#b8d7c7]">
            Current index
          </p>
          <p className="mt-8 font-mono text-5xl font-semibold">02</p>
          <p className="mt-3 max-w-48 text-sm leading-6 text-[#d0d9d4]">
            Two pieces of work, built and documented in this repository.
          </p>
          <p className="mt-8 border-t border-white/20 pt-4 font-mono text-xs text-[#b8d7c7]">
            NEXT.JS <span className="px-2">/</span> APP ROUTER
          </p>
        </aside>
      </section>

      <section aria-labelledby="projects-title" className="pt-12 md:pt-16">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Selected work <span className="px-1 text-accent">/</span> 01-02
            </p>
            <h2 id="projects-title" className="mt-2 text-3xl font-semibold">
              Built in this portfolio
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">
            Each entry links directly to its source in the project repository.
          </p>
        </div>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
