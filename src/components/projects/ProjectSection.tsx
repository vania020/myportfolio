import type { ReactNode } from "react";

export function ProjectSection({ heading, children }: { heading?: string; children: ReactNode }) {
  return (
    <section className="py-10 md:py-12">
      <div className="mx-auto max-w-5xl px-5">
        {heading && <h2 className="mb-5 max-w-3xl text-2xl md:text-3xl">{heading}</h2>}
        {children}
      </div>
    </section>
  );
}
