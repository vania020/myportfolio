import { Link } from "@tanstack/react-router";
import { ArrowLeft, FileText } from "lucide-react";
import type { Project } from "@/data/projects";
import { Photo, GalleryViewer, VideoEmbed } from "@/components/media";
import { ProjectSection } from "./ProjectSection";

export function ProjectPage({ project }: { project: Project }) {
  return (
    <article>
      <header className="mx-auto max-w-5xl px-5 pb-16 pt-10">
        <Link to="/projects" className="group inline-flex items-center gap-2 font-medium">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to
          Projects
        </Link>
        <div className={`mt-10 grid items-center gap-10 ${project.cover ? "md:grid-cols-2" : ""}`}>
          <div>
            {project.category && (
              <p className="text-sm font-semibold uppercase text-coral">{project.category}</p>
            )}
            <h1 className="mt-2 break-words text-4xl md:text-5xl">
              <span className="highlight">{project.title}</span>
            </h1>
            {(project.pageDescription ?? project.description) && (
              <p className="mt-4 text-xl leading-relaxed">
                {project.pageDescription ?? project.description}
              </p>
            )}
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              {project.year && <p>{project.year}</p>}
              {project.context && <p>{project.context}</p>}
              {project.team && <p>Team: {project.team}</p>}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech?.map((tag) => (
                <span key={tag} className="rounded-full bg-sea px-3 py-1 text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
            {project.documentation && (
              <a
                href={project.documentation}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-5 py-2.5 font-medium hover:bg-sea"
              >
                <FileText className="h-4 w-4" /> Original documentation
              </a>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-5 py-2.5 font-medium hover:bg-sea"
              >
                Explore {project.title}
              </a>
            )}
          </div>
          {project.cover && (
            <div className="overflow-hidden rounded-2xl border-2 border-ink bg-paper">
              <Photo media={project.cover} imgClassName="h-auto max-h-[32rem] object-contain" />
            </div>
          )}
        </div>
      </header>
      {project.demo && (
        <ProjectSection>
          <VideoEmbed video={project.demo} className="border-2 border-ink" />
        </ProjectSection>
      )}
      {project.sections?.map((section) => (
        <ProjectSection key={section.title} heading={section.title}>
          <div
            className={
              section.sideVideo
                ? "grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_280px] lg:gap-12"
                : section.sidePhoto
                  ? "grid items-center gap-8 md:grid-cols-2"
                  : ""
            }
          >
            <div className="space-y-4 text-lg leading-8">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {section.sideVideo && (
              <figure className="mx-auto w-full max-w-[280px]">
                <VideoEmbed
                  video={section.sideVideo}
                  className="aspect-[9/16] border border-ink/15 shadow-paper"
                />
                <figcaption className="mt-2 text-sm text-muted-foreground">
                  {section.sideVideo.title}
                </figcaption>
              </figure>
            )}
            {section.sidePhoto && (
              <figure className={section.naturalPhotos ? "mx-auto w-full max-w-[340px]" : ""}>
                <div className="overflow-hidden rounded-xl border-2 border-ink bg-paper">
                  <Photo
                    media={section.sidePhoto}
                    imgClassName={
                      section.naturalPhotos ? "h-auto object-contain" : "aspect-[4/3] object-cover"
                    }
                  />
                </div>
                {section.sidePhoto.caption && (
                  <figcaption className="mt-2 text-sm text-muted-foreground">
                    {section.sidePhoto.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </div>
          {!!section.videos?.length && (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {section.videos.map((video) => (
                <figure key={video.title}>
                  <VideoEmbed video={video} />
                  <figcaption className="mt-2 text-sm text-muted-foreground">
                    {video.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
          {section.contributions && (
            <div className="mt-6 rounded-2xl border-2 border-ink bg-paper p-6">
              <h3 className="text-sm font-semibold uppercase text-coral">My main contributions</h3>
              <ul className="mt-4 space-y-3 text-lg">
                {section.contributions.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-sea ring-2 ring-ink" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {section.note && (
            <aside className="mt-6 border-l-4 border-sea pl-5 text-sm leading-relaxed text-muted-foreground">
              {section.note}
            </aside>
          )}
          {section.bullets && (
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {section.bullets.map((item) => (
                <li key={item} className="rounded-lg border-2 border-ink bg-paper px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          )}
          {section.mediaLayout === "side-by-side" ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {section.photos?.map((media) => (
                <figure key={media.src}>
                  <div className="overflow-hidden rounded-xl border-2 border-ink bg-paper">
                    <Photo media={media} imgClassName="aspect-[4/3] object-contain" />
                  </div>
                  {media.caption && (
                    <figcaption className="mt-2 text-sm text-muted-foreground">
                      {media.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
              {section.video && (
                <figure>
                  <VideoEmbed video={section.video} className="aspect-[4/3] border-2 border-ink" />
                  <figcaption className="mt-2 text-sm text-muted-foreground">
                    {section.video.title}
                  </figcaption>
                </figure>
              )}
            </div>
          ) : (
            !!section.photos?.length && (
              <div
                className={
                  section.fullWidthPhotos
                    ? "mx-auto mt-8 grid max-w-4xl gap-8"
                    : section.compactPhotos
                      ? "mx-auto mt-6 grid max-w-3xl gap-4 grid-cols-2 lg:grid-cols-4"
                      : "mt-8 grid gap-6 sm:grid-cols-2"
                }
              >
                {section.photos.map((media) => (
                  <figure key={media.src}>
                    <div className="overflow-hidden rounded-xl border-2 border-ink bg-paper">
                      <Photo
                        media={media}
                        imgClassName={
                          section.naturalPhotos
                            ? "h-auto object-contain"
                            : "aspect-[4/3] object-contain"
                        }
                      />
                    </div>
                    {media.caption && (
                      <figcaption className="mt-2 text-sm text-muted-foreground">
                        {media.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            )
          )}
          {section.video && section.mediaLayout !== "side-by-side" && (
            <figure className="mt-8">
              <VideoEmbed video={section.video} />
              <figcaption className="mt-3 text-sm text-muted-foreground">
                {section.video.title}
              </figcaption>
            </figure>
          )}
        </ProjectSection>
      ))}
      {!!project.videos?.length && (
        <ProjectSection>
          <div className="grid gap-8 md:grid-cols-2">
            {project.videos.map((video) => (
              <figure key={video.title}>
                <VideoEmbed video={video} />
                <figcaption className="mt-3 text-sm text-muted-foreground">
                  {video.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </ProjectSection>
      )}
      {!!project.gallery?.length && (
        <ProjectSection>
          <GalleryViewer items={project.gallery} />
        </ProjectSection>
      )}
      {!project.sections?.length && (
        <ProjectSection>
          <p className="font-hand text-2xl text-muted-foreground">Full write-up coming soon ✎</p>
        </ProjectSection>
      )}
    </article>
  );
}
