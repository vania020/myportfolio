import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/** Hand-drawn arrow that draws itself in. */
export function Arrow({
  className,
  delay = 0,
  d = "M5 40 C 30 5, 70 5, 92 30 M80 22 L93 31 L82 42",
}: {
  className?: string;
  delay?: number;
  d?: string;
}) {
  return (
    <svg viewBox="0 0 100 50" fill="none" className={cn("h-12 w-24", className)} aria-hidden>
      <motion.path
        d={d}
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay, ease: "easeInOut" }}
      />
    </svg>
  );
}

/** Squiggle underline drawn under text. */
export function Squiggle({ className, delay = 0.3 }: { className?: string; delay?: number }) {
  return (
    <svg
      viewBox="0 0 200 14"
      preserveAspectRatio="none"
      fill="none"
      className={cn("h-3 w-full", className)}
      aria-hidden
    >
      <motion.path
        d="M2 8 Q 20 1, 38 8 T 74 8 T 110 8 T 146 8 T 198 7"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
      />
    </svg>
  );
}

export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-6 w-6", className)} aria-hidden>
      <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor" />
    </svg>
  );
}
