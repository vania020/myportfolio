import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { initiatives } from "@/data/communities";
import { socials } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { GalleryViewer } from "@/components/media";

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
  return (
    <article className="mx-auto max-w-4xl px-5 py-16 md:py-24">
      <Button asChild variant="link" className="px-0">
        <Link to="/">
          <ArrowLeft /> Back to home
        </Link>
      </Button>
      <p className="mt-12 text-sm font-semibold uppercase text-coral">
        Community · {initiative.role}
      </p>
      <h1 className="mt-4 text-4xl leading-tight md:text-6xl">
        <span className="highlight">{initiative.name}</span>
      </h1>
      <p className="mt-8 max-w-2xl text-xl leading-relaxed">{initiative.description}</p>
      {initiative.photo && (
        <img
          src={initiative.photo}
          alt={initiative.name}
          className="mt-10 aspect-[4/3] w-full rounded-lg object-cover"
        />
      )}
      {initiative.highlights && (
        <div className="mt-10">
          <dl className="grid gap-4 sm:grid-cols-2">
            {initiative.highlights.map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-paper p-5">
                <dt className="text-sm text-muted-foreground">{item.label}</dt>
                <dd className="mt-2 text-3xl font-semibold">{item.value}</dd>
              </div>
            ))}
          </dl>
          {initiative.impactNote && (
            <p className="mt-3 text-sm text-muted-foreground">{initiative.impactNote}</p>
          )}
        </div>
      )}
      {initiative.sections?.map((section) => (
        <section key={section.title} className="mt-12">
          <h2 className="text-3xl">{section.title}</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {section.bullets && (
            <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-relaxed">
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
