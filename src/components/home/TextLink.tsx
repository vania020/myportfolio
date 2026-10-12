import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function TextLink({
  to,
  children,
}: {
  to: "/projects" | "/about";
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-1 font-semibold underline decoration-coral decoration-2 underline-offset-4 hover:decoration-wavy"
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" aria-hidden />
    </Link>
  );
}
