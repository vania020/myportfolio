import { initiatives } from "@/data/communities";
import { InitiativeRow } from "@/components/cards";
import { SectionHeading } from "@/components/SectionHeading";

export function Communities() {
  return (
    <section className="border-t border-border bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="giving back"
          title="Initiatives"
          subtitle="I've had the opportunity to work with incredible people to launch and lead 
          STEM initiatives in Perú, aiming to expand access to quality education and technology."
        />
        <div className="mt-14 flex flex-col gap-10">
          {initiatives.map((it, i) => (
            <InitiativeRow key={it.name} item={it} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
