import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { initiatives } from "@/data/communities";
import { socials } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { GalleryViewer, Photo, VideoEmbed } from "@/components/media";

export const Route = createFileRoute("/communities/$slug")({
  loader: ({ params }) => {
    const initiative = initiatives.find((item) => item.slug === params.slug);
    if (!initiative) throw notFound();
    return { initiative };
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.initiative.name} - Vania Pachas`
      : "Community not found - Vania Pachas";
    const description = loaderData?.initiative.description ?? "This community could not be found.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(!loaderData ? [{ name: "robots", content: "noindex" }] : []),
      ],
    };
  },
  component: CommunityPage,
});

function CommunityPage() {
  const { initiative } = Route.useLoaderData();
  const highlightColors = ["bg-sun/45", "bg-blush/40", "bg-coral/15", "bg-sea/15"];
  return (
    <article className="mx-auto max-w-5xl px-5 py-16 md:py-24">
      <Button asChild variant="link" className="px-0">
        <Link to="/">
          <ArrowLeft /> Back to home
        </Link>
      </Button>
      <div
        className={`mt-10 grid items-center gap-8 ${initiative.photo ? "lg:grid-cols-[1.1fr_1fr] lg:gap-12" : ""}`}
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-coral">
            Community · {initiative.role}
          </p>
          <h1 className="mt-4 text-4xl leading-tight md:text-6xl">
            <span className="highlight">{initiative.name}</span>
          </h1>
          {initiative.date && (
            <time
              dateTime={initiative.date.dateTime}
              className="mt-4 inline-flex rounded-full bg-sea/10 px-4 py-1.5 text-sm font-semibold text-ink"
            >
              {initiative.date.label}
            </time>
          )}
          <p className="mt-6 text-lg leading-relaxed md:text-xl">
            {initiative.descriptionHighlight
              ? initiative.description.split(initiative.descriptionHighlight).map((part, index) => (
                  <span key={index}>
                    {index > 0 && (
                      <strong className="highlight font-semibold">
                        {initiative.descriptionHighlight}
                      </strong>
                    )}
                    {part}
                  </span>
                ))
              : initiative.description}
          </p>
        </div>
        {initiative.photo && (
          <img
            src={initiative.photo}
            alt={initiative.name}
            className="h-auto w-full rounded-2xl border border-ink/10 shadow-paper"
          />
        )}
      </div>
      {initiative.highlights && (
        <div className="mt-8 md:mt-10">
          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {initiative.highlights.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col gap-3 rounded-2xl border border-ink/10 p-5 text-ink ${highlightColors[index % highlightColors.length]}`}
              >
                <dt className="text-sm leading-snug">{item.label}</dt>
                <dd className="-order-1 text-3xl font-bold leading-tight tracking-tight">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
          {initiative.impactNote && (
            <p className="mt-3 text-sm text-muted-foreground">{initiative.impactNote}</p>
          )}
        </div>
      )}
      {initiative.instagram && (
        <section className="mt-10 overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-paper">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 bg-blush/15 px-5 py-4">
            <h2 className="text-2xl">On Instagram</h2>
            <Button asChild variant="outline">
              <a
                href={`https://www.instagram.com/${initiative.instagram}/`}
                target="_blank"
                rel="noreferrer"
              >
                @{initiative.instagram}
                <ArrowUpRight />
              </a>
            </Button>
          </div>
          <div className="w-full bg-white">
            <iframe
              key={initiative.instagram}
              src={`https://www.instagram.com/${initiative.instagram}/embed/`}
              title={`${initiative.name} on Instagram`}
              loading="lazy"
              className="block h-[420px] w-full border-0 md:h-[380px]"
              allow="encrypted-media"
            />
          </div>
        </section>
      )}
      {initiative.sections?.map((section) => (
        <section key={section.title} className="mt-12">
          <h2 className="text-3xl">{section.title}</h2>
          <div
            className={`mt-5 grid items-center gap-6 ${section.textPhoto ? "lg:grid-cols-2 lg:gap-10" : ""}`}
          >
            <div className="space-y-4 text-lg leading-relaxed">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {section.textPhoto && (
              <div className="overflow-hidden rounded-2xl border border-ink/10 shadow-paper">
                <Photo media={section.textPhoto} imgClassName="h-auto w-full" />
              </div>
            )}
          </div>
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
          {(section.photos?.length || section.video) && (
            <div
              className={`mt-8 grid gap-6 ${section.photoColumns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : section.photos?.length === 3 && !section.video ? "md:grid-cols-3" : "md:grid-cols-2"}`}
            >
              {section.photos?.map((media, index) => (
                <figure
                  key={media.src}
                  className={
                    section.naturalPhotos && (section.photos?.length ?? 0) % 2 === 1 && index === 0
                      ? "md:col-span-2 mx-auto w-full max-w-3xl"
                      : section.photos?.length === 1 && !section.video
                        ? "md:col-span-2 mx-auto w-full max-w-3xl"
                        : ""
                  }
                >
                  <div className="overflow-hidden rounded-xl border-2 border-ink bg-paper">
                    <Photo
                      media={media}
                      imgClassName={
                        section.naturalPhotos
                          ? "h-auto w-full object-contain"
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
              {section.video && (
                <figure>
                  <VideoEmbed video={section.video} className="aspect-[4/3] border-2 border-ink" />
                  <figcaption className="mt-2 text-sm text-muted-foreground">
                    {section.video.title}
                  </figcaption>
                </figure>
              )}
            </div>
          )}
          {section.bullets && (
            <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-relaxed">
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {!!section.videos?.length && (
            <div className="mx-auto mt-8 grid w-full max-w-xl gap-6 sm:grid-cols-2">
              {section.videos.map((video) => (
                <figure
                  key={video.type === "mp4" ? video.src : video.id}
                  className="mx-auto w-full max-w-[280px]"
                >
                  <VideoEmbed
                    video={video}
                    className="aspect-[9/16] border border-ink/15 shadow-paper"
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground">
                    {video.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </section>
      ))}
      {initiative.photos && initiative.photos.length > 1 && (
        <section className="mt-12">
          <GalleryViewer
            items={initiative.photos.map((src) => ({ src, alt: `${initiative.name} activities` }))}
          />
        </section>
      )}
      {initiative.press && (
        <section className="mt-12">
          <h2 className="text-3xl">Press Coverage</h2>
          <div className="mt-5 flex flex-wrap gap-6">
            {initiative.press.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-medium underline decoration-coral underline-offset-4"
              >
                {item.name}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </section>
      )}
      <div className="mt-10 flex flex-wrap gap-3">
        {initiative.documentation && (
          <Button asChild size="lg" variant="outline">
            <a href={initiative.documentation} target="_blank" rel="noreferrer">
              Read the media kit (PDF)
            </a>
          </Button>
        )}
        {initiative.url && (
          <Button asChild size="lg">
            <a href={initiative.url} target="_blank" rel="noreferrer">
              Visit {initiative.name}
              <ArrowUpRight />
            </a>
          </Button>
        )}
        <Button asChild size="lg" variant="outline">
          <a href={`mailto:${socials.email}?subject=${encodeURIComponent(initiative.name)}`}>
            Get in touch
          </a>
        </Button>
      </div>
    </article>
  );
}
