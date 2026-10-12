import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-end px-5 py-4" aria-label="Main">
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="group relative py-1 font-medium"
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive ? (
                      <motion.span
                        layoutId="nav-marker"
                        className="absolute -bottom-0.5 left-0 h-2 w-full -rotate-1 rounded-full bg-sun -z-10"
                      />
                    ) : (
                      <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-coral transition-all group-hover:w-full" />
                    )}
                  </>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-3 text-lg font-medium data-[status=active]:bg-sun"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
