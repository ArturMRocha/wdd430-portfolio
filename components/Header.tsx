import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-foreground bg-foreground text-background">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-10">
        <Link
          href="/"
          className="font-mono text-sm font-semibold uppercase tracking-[0.12em]"
        >
          WDD430 <span className="text-[#b8d7c7]">/</span> Portfolio
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link className="transition-colors hover:text-[#b8d7c7]" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-[#b8d7c7]"
                href="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}