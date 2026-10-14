import { featuredProjects, orderedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/cards";
import { Squiggle } from "@/components/doodles";
import { SectionHeading } from "@/components/SectionHeading";
import { CTA } from "./CTA";

export function Featured() {
  const homeProjects = [
    ...featuredProjects,
    ...orderedProjects.filter(
      (project) => !featuredProjects.some((item) => item.slug === project.slug),
    ),
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="projects"
          title={
            <>
              Some cool things{" "}
              <span className="relative inline-block">
                I've worked on!
                <Squiggle className="absolute -bottom-2 left-0 text-coral" />
              </span>
            </>
          }
        />
      </div>
      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {homeProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            size="sm"
            tilt={index % 2 === 0 ? -1 : 1}
            accent={index % 3 === 0 ? "bg-sun" : index % 3 === 1 ? "bg-sea" : "bg-blush"}
          />
        ))}
      </div>
      <div className="mt-14 flex items-center gap-3">
        <CTA to="/projects" variant="outline">
          Explore all projects
        </CTA>
      </div>
    </section>
  );
}
