import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import type { Initiative } from "@/data/communities";
import { GalleryViewer, PhotoPlaceholder } from "./media";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  size = "md",
  tilt = 0,
  accent = "bg-sun",
  collection = false,
}: {
  project: Project;
  size?: "lg" | "md" | "sm";
  tilt?: number;
  accent?: string;
  collection?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ rotate: 0, y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative h-full"
    >
      {!collection && (
        <div
          className={cn("absolute inset-0 translate-x-3 translate-y-3 rounded-2xl", accent)}
          aria-hidden
        />
      )}
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className={cn(
          "relative block h-full overflow-hidden border-2 border-ink bg-paper",
          collection ? "rounded-lg" : "rounded-2xl",
        )}
      >
        <div
          className={cn(
            "overflow-hidden border-b-2 border-ink",
            size === "lg" ? "aspect-[4/3] md:aspect-[16/11]" : "aspect-[4/3]",
          )}
        >
          {project.cover ? (
            <img
              src={project.cover.src}
              alt={project.cover.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <PhotoPlaceholder label={project.title} />
          )}
        </div>
        <div className={cn("p-5", size === "lg" && "md:p-7", size === "sm" && "p-4")}>
          <div className="mt-2 flex items-start justify-between gap-4">
            <h3
              className={cn(
                size === "lg" ? "text-3xl md:text-4xl" : size === "sm" ? "text-xl" : "text-2xl",
              )}
            >
              {project.title}
            </h3>
            <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-ink transition-all duration-300 group-hover:rotate-45 group-hover:bg-sun">
              <ArrowUpRight className="h-5 w-5" aria-hidden />
            </span>
          </div>
          {project.description && (
            <p
              className={cn(
                "mt-3 leading-relaxed text-muted-foreground",
                size === "sm" && "line-clamp-4 text-sm",
              )}
            >
              {project.description}
            </p>
          )}
          {project.tech && <p className="mt-4 text-sm font-medium">{project.tech.join("  ·  ")}</p>}
        </div>
      </Link>
    </motion.article>
  );
}

const bgMap = { sun: "bg-sea", coral: "bg-coral", blush: "bg-blush" } as const;

export function InitiativeCard({ item }: { item: Initiative }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      className="h-full"
    >
      <Link
        to="/communities/$slug"
        params={{ slug: item.slug }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-ink bg-paper transition-all hover:-translate-y-1 hover:shadow-pop"
      >
        <div className="relative overflow-hidden border-b-2 border-ink">
          {item.photo ? (
            <img
              src={item.photo}
              alt={item.name}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <PhotoPlaceholder label={item.photoLabel} />
          )}
          <span
            className={cn(
              "absolute left-4 top-4 rounded-full border-2 border-ink px-3 py-1 text-xs font-bold uppercase tracking-wide",
              bgMap[item.color],
            )}
          >
            {item.role}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="flex items-center justify-between gap-2 text-2xl">
            {item.name}
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-ink transition-all duration-300 group-hover:rotate-45 group-hover:bg-sun">
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </span>
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

/** Full-width card with an interactive photo gallery beside the text. */
export function InitiativeRow({ item, flip = false }: { item: Initiative; flip?: boolean }) {
  const photos = (item.photos?.length ? item.photos : item.photo ? [item.photo] : []).map(
    (src) => ({
      src,
      alt: item.name,
    }),
  );
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-3xl border-2 border-ink bg-paper shadow-paper"
    >
      <div className="grid items-stretch md:grid-cols-12">
        <div
          className={cn(
            "relative min-h-[280px] border-ink md:col-span-5",
            flip ? "md:order-2 md:border-l-2" : "md:border-r-2",
          )}
        >
          {photos.length > 0 ? (
            <GalleryViewer items={photos} fill autoPlay />
          ) : (
            <div className="h-full overflow-hidden">
              <PhotoPlaceholder label={item.photoLabel} />
            </div>
          )}
        </div>
        <div
          className={cn(
            "flex flex-col justify-center p-7 md:col-span-7 md:p-10 lg:p-12",
            flip && "md:order-1",
          )}
        >
          <span
            className={cn(
              "inline-block w-fit rounded-full border-2 border-ink px-3 py-1 text-xs font-bold uppercase tracking-wide",
              bgMap[item.color],
            )}
          >
            {item.role}
          </span>
          <h3 className="mt-4 text-3xl md:text-4xl">{item.name}</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">{item.description}</p>
          <Link
            to="/communities/$slug"
            params={{ slug: item.slug }}
            className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full border-2 border-ink px-5 py-2.5 font-semibold transition-all hover:-translate-y-0.5 hover:bg-sun hover:shadow-pop"
          >
            Learn more
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:rotate-45"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
