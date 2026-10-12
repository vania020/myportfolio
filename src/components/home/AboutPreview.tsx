import { motion } from "motion/react";
import { Photo } from "@/components/media";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { TextLink } from "./TextLink";
import { aboutPhotos } from "@/data/profile";

export function AboutPreview() {
  const photos = [
    { ...aboutPhotos.mision, rot: "-rotate-6", pos: "left-0 top-0 w-[58%]" },
    { ...aboutPhotos.rover, rot: "rotate-3", pos: "right-0 top-16 w-[52%]" },
    { ...aboutPhotos.tech, rot: "rotate-2", pos: "bottom-0 left-[18%] w-[46%]" },
  ];
  return (
    <section className="border-y border-border bg-cream">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 md:grid-cols-12">
        <div className="md:col-span-6">
          <SectionHeading eyebrow="hola!" title="A little about me" />
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed">
              I was born and raised in <span className="highlight">Peru</span>, where I developed a
              big interest in STEM education advocacy and giving back to my community.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              I'm a collaborative, hands-on autodidact who loves figuring things out. I've worked on
              robotics projects using Arduino and ESP32, explored CAD with Tinkercad and web
              development with React and Node.js. I also find quantum computing extremely
              interesting!
            </p>
            <div className="mt-6">
              <TextLink to="/about">More about me</TextLink>
            </div>
          </Reveal>
        </div>
        <div className="relative min-h-[420px] md:col-span-6">
          {photos.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`absolute ${p.pos} ${p.rot} bg-paper p-2 pb-6 shadow-paper transition-transform duration-500 hover:z-10 hover:rotate-0 hover:scale-105`}
            >
              <Photo media={{ src: p.src, alt: p.alt }} imgClassName="aspect-[4/3]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
