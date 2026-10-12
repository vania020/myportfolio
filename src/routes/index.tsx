import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Featured } from "@/components/home/Featured";
import { Communities } from "@/components/home/Communities";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vania Pachas - robotics, electronics & quantum" },
      {
        name: "description",
        content:
          "Hi! I'm Vania, a Cornell engineering student building robots, circuits and quantum learning tools.",
      },
      { property: "og:title", content: "Vania Pachas - robotics, electronics & quantum" },
      {
        property: "og:description",
        content:
          "Projects and STEM communities by Vania, a first-year Cornell engineering student from Peru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: profile.photo.src },
      { name: "twitter:image", content: profile.photo.src },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Featured />
      <Communities />
    </>
  );
}
