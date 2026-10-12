import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function CTA({
  to,
  children,
  variant = "solid",
}: {
  to: "/projects" | "/about";
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  return (
    <Link
      to={to}
      className={
        variant === "solid"
          ? "group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-6 py-3 font-semibold text-cream transition-all hover:-translate-y-0.5 hover:bg-coral hover:shadow-pop"
          : "group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-6 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:bg-sun hover:shadow-pop"
      }
    >
      {children}
      <ArrowUpRight
        className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden
      />
    </Link>
  );
}
