import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <motion.div
      className={cn("max-w-2xl", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && <p className="font-hand mb-1 text-2xl text-coral">{eyebrow}</p>}
      <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
