import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, X } from "lucide-react";
import { ProjectCard } from "@/components/cards";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { orderedProjects } from "@/data/projects";

const t = "Projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: t },
      { property: "og:title", content: t },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Robotics", "Quantum", "Development"];
  const visible = orderedProjects.filter((p) => {
    const text = `${p.category ?? ""} ${p.title}`.toLowerCase();
    const ok =
      filter === "All" ||
      (filter === "Development"
        ? p.software === true
        : filter === "Robotics"
          ? /robot|ro-boat|eco-explorer/.test(text)
          : /quantum|qaoa/.test(text));
    return ok && text.includes(query.trim().toLowerCase());
  });
  return (
    <>
      <PageHeader eyebrow="Projects" title="Projects" />
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="mt-6 flex flex-col justify-between gap-5 border-y border-border py-5 lg:flex-row lg:items-center">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <Button
                key={f}
                variant={filter === f ? "secondary" : "ghost"}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </Button>
            ))}
          </div>
          <div className="flex h-11 w-full items-center gap-2 rounded-md border border-input bg-background px-3 lg:w-72">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
            <input
              aria-label="Search projects"
              placeholder="Search projects…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="min-w-0 flex-1 bg-transparent text-sm outline-none"
            />
            {query && (
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                aria-label="Clear search"
                onClick={() => setQuery("")}
              >
                <X />
              </Button>
            )}
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProjectCard key={p.slug} project={p} collection />
          ))}
        </div>
        {visible.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="text-2xl">No projects found</h3>
            <Button
              variant="link"
              className="mt-4"
              onClick={() => {
                setQuery("");
                setFilter("All");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </section>
    </>
  );
}
