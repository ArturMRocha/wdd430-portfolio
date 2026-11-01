import { io } from "next/cache";
import { Suspense } from "react";

async function CurrentYear() {
  await io();
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  return (
    <footer className="border-t border-foreground bg-foreground text-background">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-between gap-3 px-6 py-6 text-sm md:px-10">
        <p>
          Copyright &copy; <Suspense fallback="----"><CurrentYear /></Suspense>{" "}
          WDD 430 Portfolio
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#b8d7c7]">
          Designed and built with Next.js
        </p>
      </div>
    </footer>
  );
}