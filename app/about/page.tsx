import FocusCard from "@/components/FocusCard";

export default function About() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12 md:px-10 md:py-20">
      <section className="max-w-3xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          About <span className="px-2 text-muted">/</span> WDD 430
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
          Learning by making the web more useful.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          This portfolio is a record of my work as I learn modern web
          development. I am building with Next.js, practicing reusable
          components, and exploring how a web app connects its interface to a
          backend.
        </p>
      </section>

      <section className="mt-12 max-w-3xl md:mt-16" aria-label="Learning focus">
        <FocusCard
          title="Thoughtful foundations"
          description="Right now I am focused on accessible page structure, well-typed React components, and understanding the App Router from page to API route."
        />
      </section>
    </main>
  );
}