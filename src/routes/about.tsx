import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Vania Pachas" },
      {
        name: "description",
        content:
          "Get to know Vania: Cornell engineering student from Peru who loves building things.",
      },
      { property: "og:title", content: "About - Vania Pachas" },
      {
        property: "og:description",
        content:
          "Get to know Vania: Cornell engineering student from Peru who loves building things.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <section className="bg-grid">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h1 className="text-5xl md:text-6xl">
          <span className="highlight">About me</span>
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed">
          I truly love learning new things and being resourceful. I also love crocheting, walking with my dog Clifford, learning by binge-watching YouTube
          videos (one of my{" "}
          <a
            href="https://www.youtube.com/watch?v=AF8d72mA41M"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline decoration-coral decoration-2 underline-offset-4"
          >
            favs
          </a>
          ), dancing salsa, karaoke with friends, baking apple pie, reggaeton, going to the gym,
          biking around, rating movies on Letterboxd, going to the beach, and Bad Bunny!
        </p>
      </div>
    </section>
  ),
});
