import { Link } from "@tanstack/react-router";
import { ArrowLeft, FileText, Play } from "lucide-react";

import { Photo, DiagramViewer, VideoEmbed, GalleryViewer } from "@/components/media";
import {
  heroPhoto,
  intro,
  design,
  build,
  electronics,
  programming,
  challenges,
  gallery,
  links,
  videos,
} from "@/data/seekerbot";
import type { Media, Project, Video } from "@/data/projects";
import { ProjectSection as Section } from "./ProjectSection";

/** One photo with an optional caption. */
function Fig({
  media,
  className,
  frameClassName,
}: {
  media: Media;
  className?: string;
  frameClassName?: string;
}) {
  return (
    <figure className={className}>
      <div
        className={`overflow-hidden rounded-xl border-2 border-ink bg-paper ${frameClassName ?? ""}`}
      >
        <Photo
          media={media}
          className={frameClassName ? "h-full" : ""}
          imgClassName={frameClassName ? "h-full object-contain" : "h-auto object-contain"}
        />
      </div>
      {media.caption && (
        <figcaption className="mt-2 text-sm text-muted-foreground">{media.caption}</figcaption>
      )}
    </figure>
  );
}

function LinkButton({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Play;
  label: string;
}) {
  if (!href)
    return (
      <span
        className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border-2 border-dashed border-ink/40 px-5 py-2.5 font-medium text-muted-foreground"
        title="Link coming soon"
      >
        <Icon className="h-4 w-4" /> {label} · soon
      </span>
    );
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-5 py-2.5 font-medium transition-colors hover:bg-sea"
    >
      <Icon className="h-4 w-4" /> {label}
    </a>
  );
}

const youtubeId = (url: string) => url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/)?.[1];

function Demo({ video }: { video: Video }) {
  return (
    <figure className="mt-8">
      <VideoEmbed video={video} className="border-2 border-ink" />
      <figcaption className="mt-3 text-sm text-muted-foreground">{video.title}</figcaption>
    </figure>
  );
}

export function SeekerBotPage({ project }: { project: Project }) {
  const vid = youtubeId(links.demoVideo);
  return (
    <article>
      {/* Hero */}
      <header className="mx-auto max-w-5xl px-5 pb-16 pt-10">
        <Link to="/projects" className="group inline-flex items-center gap-2 font-medium">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to
          Projects
        </Link>
        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase text-coral">{project.category}</p>
            <h1 className="mt-2 text-5xl md:text-6xl">
              <span className="highlight">{project.title}</span>
            </h1>
            <p className="mt-4 text-xl">{project.pageDescription ?? project.description}</p>
            {project.year && <p className="mt-3 text-sm text-muted-foreground">{project.year}</p>}
            {project.context && (
              <p className="mt-2 text-sm text-muted-foreground">{project.context}</p>
            )}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech?.map((t) => (
                <span key={t} className="rounded-full bg-sea px-3 py-1 text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton
                href={project.documentation ?? ""}
                icon={FileText}
                label="Technical Documentation"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border-2 border-ink bg-ink">
            <Photo media={heroPhoto} imgClassName="h-auto object-contain" />
          </div>
        </div>
      </header>

      {vid && (
        /** DEMO  VIDEO */
        <Section>
          <VideoEmbed
            video={{ type: "youtube", id: vid, title: "SeekerBot demo" }}
            className="border-2 border-ink"
          />
        </Section>
      )}

      <Section heading="How it started">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed">
            {intro.paragraphs.map((p, i) => (
              <p key={i} className={i === intro.paragraphs.length ? "font-semibold" : undefined}>
                {p}
              </p>
            ))}
          </div>
          <div className="rounded-2xl border-2 border-ink bg-paper p-6">
            <p className="text-sm font-semibold uppercase text-coral">My main contributions</p>
            <ul className="mt-4 space-y-2 text-lg">
              {intro.contributions.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-sea ring-2 ring-ink" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section heading="Mechanical Design">
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl">{design.chassis.title}</h3>
            <p className="mt-4 text-lg leading-relaxed">{design.chassis.text}</p>
            <Fig media={design.photos.rockerBogie} className="mx-auto mt-6 max-w-xl" />
          </div>
          <div>
            <h3 className="text-2xl">{design.roboticArm.title}</h3>
            <div className="mt-4 space-y-4 text-lg leading-relaxed">
              {design.roboticArm.text.split("\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <figure>
                <div className="h-80 md:h-96 overflow-hidden rounded-xl border-2 border-ink bg-paper">
                  <Photo
                    media={design.photos.armPhoto}
                    className="h-full"
                    imgClassName="h-full object-cover"
                  />
                </div>
                {design.photos.armPhoto.caption && (
                  <figcaption className="mt-2 text-sm text-muted-foreground">
                    {design.photos.armPhoto.caption}
                  </figcaption>
                )}
              </figure>
              <figure>
                <VideoEmbed
                  video={videos.roboticArm}
                  className="h-80 md:h-96 aspect-auto border-2 border-ink"
                />
                <figcaption className="mt-2 text-sm text-muted-foreground">
                  {videos.roboticArm.title}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </Section>

      <Section heading="3D-Modeling and Manufacturing">
        <p className="text-lg leading-relaxed">{build.text}</p>

        <div className="mt-10 space-y-10">
          <div>
            <h3 className="text-2xl">Sketches</h3>
            <div className="mx-auto mt-5 grid max-w-3xl gap-6 sm:grid-cols-2">
              <Fig media={design.photos.armSketch} frameClassName="h-80 md:h-96" />
              <Fig media={design.photos.roverSketch} frameClassName="h-80 md:h-96" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl">3D models</h3>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <Fig media={design.photos.tinkercadAssembly} frameClassName="aspect-[4/3]" />
              <Fig media={design.photos.tinkercadParts} frameClassName="aspect-[4/3]" />
            </div>
            <aside className="mt-8 border-l-4 border-sea pl-5 text-sm leading-relaxed text-muted-foreground">
              {design.note}
            </aside>
          </div>
          <div>
            <h3 className="text-2xl">Printing</h3>
            <div className="mt-5 grid gap-6 sm:grid-cols-3">
              {build.photos.map((p) => (
                <Fig key={p.src} media={p} frameClassName="aspect-[4/3]" />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section heading="Electronics & Circuits">
        <p className="text-lg leading-relaxed">{electronics.text}</p>
        <div className="mt-10 space-y-12">
          {electronics.circuits.map((circuit) => (
            <div key={circuit.title}>
              <h3 className="text-2xl">{circuit.title}</h3>
              <p className="mt-4 text-lg leading-relaxed">
                {circuit.text} {circuit.power}
              </p>
              <div className="mt-6">
                <DiagramViewer media={circuit.diagram} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-sea/10 p-6 md:p-8">
          <h3 className="text-2xl">Components</h3>
          <ul className="mt-5 grid gap-x-10 gap-y-3 text-sm leading-relaxed md:grid-cols-2">
            {electronics.components.map((component) => (
              <li key={component.name}>
                <span className="font-semibold">{component.name}</span>
                <span className="text-muted-foreground"> - {component.purpose}</span>
              </li>
            ))}
          </ul>
        </div>
        <Fig media={electronics.sensors} className="mx-auto mt-6 max-w-sm" />
      </Section>

      <Section heading="Programming & Control">
        <p className="mb-8 text-lg leading-relaxed">{intro.integrationNote}</p>
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl">{programming.arduino.title}</h3>
            <p className="mt-4 text-lg leading-relaxed">{programming.arduino.text}</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Fig media={programming.photos.arduinoMotors} frameClassName="h-80 md:h-96" />
              <Fig media={programming.photos.arduinoSensors} frameClassName="h-80 md:h-96" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl">{programming.wifi.title}</h3>
            <p className="mt-4 text-lg leading-relaxed">{programming.wifi.text}</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Fig media={programming.photos.controlApp} frameClassName="h-80" />
              <Fig media={programming.photos.controlReal} frameClassName="h-80" />
            </div>
            <Demo video={videos.driving} />
          </div>
          <div>
            <h3 className="text-2xl">{programming.android.title}</h3>
            <p className="mt-4 text-lg leading-relaxed">{programming.android.text}</p>
            <div className="mt-8">
              <h4 className="text-xl font-semibold">{programming.android.sensorTitle}</h4>
              <p className="mt-3 text-lg leading-relaxed">{programming.android.sensorText}</p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <Fig media={programming.photos.sensorBlocks} frameClassName="aspect-video" />
                <figure>
                  <VideoEmbed video={videos.sensors} className="aspect-video border-2 border-ink" />
                  <figcaption className="mt-2 text-sm text-muted-foreground">
                    {videos.sensors.title}
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-10">
              <h4 className="text-xl font-semibold">{programming.android.armTitle}</h4>
              <p className="mt-3 text-lg leading-relaxed">{programming.android.armText}</p>
              <Fig media={programming.photos.armApp} className="mx-auto mt-6 max-w-xl" />
            </div>
          </div>
        </div>
      </Section>

      <Section heading="Challenges & Lessons Learned">
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
          {challenges.lessons.map((lesson, index) => (
            <div key={lesson.title} className="flex flex-col">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sea/30 text-sm font-medium">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-medium">{lesson.title}</h3>
              </div>
              {lesson.photo && <Fig media={lesson.photo} frameClassName="aspect-[4/3]" />}
              {lesson.video && (
                <figure>
                  <VideoEmbed video={lesson.video} className="aspect-[4/3] border-2 border-ink" />
                  <figcaption className="mt-2 text-sm text-muted-foreground">
                    {lesson.video.title}
                  </figcaption>
                </figure>
              )}
              <p className="mt-5 text-lg leading-relaxed">{lesson.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section heading="Testing the rover outdoors">
        <Demo video={videos.outdoors} />
      </Section>

      <Section heading="Gallery">
        <GalleryViewer items={gallery} />
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <Link to="/projects" className="group ml-auto inline-flex items-center gap-2 font-medium">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back
            to Projects
          </Link>
        </div>
      </Section>
    </article>
  );
}
