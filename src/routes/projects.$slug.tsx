import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { getProject } from "@/data/projects";
import { SeekerBotPage } from "@/components/projects/seekerbot";
import { ProjectPage } from "@/components/projects/ProjectPage";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    const t = `${loaderData.project.title} - Vania Pachas`;
    const d =
      loaderData.project.description ?? `${loaderData.project.title}, a project by Vania Pachas.`;
    const cover = loaderData.project.cover?.src;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(cover?.startsWith("https://")
          ? [
              { property: "og:image", content: cover },
              { name: "twitter:image", content: cover },
            ]
          : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-6xl px-5 py-24">
      <h1 className="text-4xl">Hmm, that project doesn't exist.</h1>
      <Link to="/projects" className="mt-6 inline-block underline">
        Back to projects
      </Link>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  if (project.slug === "seekerbot") return <SeekerBotPage project={project} />;
  return <ProjectPage project={project} />;
}
