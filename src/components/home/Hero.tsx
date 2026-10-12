import { useState } from "react";
import { motion } from "motion/react";
import { Atom, Bot } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/data/profile";

export function Hero() {
  const [smile, setSmile] = useState(":)");
  const item = (d: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: d, ease: [0.2, 0.8, 0.2, 1] as const },
  });
  return (
    <section className="bg-grid relative overflow-hidden">
      <div
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sun/50 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-sea/30 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-12 md:grid-cols-2 md:gap-12 md:pt-20 lg:grid-cols-[32rem_minmax(0,1fr)] lg:gap-16">
        <div>
          <motion.h1 {...item(0)} className="text-[clamp(3rem,6vw,5rem)] leading-[1.05]">
            <span className="block">Hi! I'm</span>
            <span className="inline-flex items-baseline gap-3 whitespace-nowrap">
              <span className="highlight">Vania</span>
              <button
                type="button"
                onClick={() => setSmile((s) => (s === ":)" ? ":D" : s === ":D" ? ";)" : ":)"))}
                className="inline-block text-[0.7em] text-coral transition-transform hover:rotate-12"
                aria-label="Change the smiley"
              >
                {smile}
              </button>
            </span>
          </motion.h1>
          <motion.p {...item(0.25)} className="mt-6 max-w-lg text-lg leading-relaxed md:text-xl">
            I'm a first-year engineering student at <strong>Cornell University</strong>, hoping to
            major in Electrical and Computer Engineering.
          </motion.p>
          <motion.p
            {...item(0.4)}
            className="mt-3 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            I'm into robotics, electronics, quantum computing and innovation with purpose!
          </motion.p>
          <motion.div {...item(0.7)} className="mt-6">
            <SocialLinks />
          </motion.div>
        </div>

        <div className="relative flex justify-center md:justify-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-[62%] max-w-[280px] sm:w-[52%] md:w-[80%] lg:w-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
              className="absolute -left-6 -top-6 z-10 grid h-14 w-14 place-items-center rounded-full border-2 border-ink bg-sun"
              aria-hidden
            >
              <Bot className="h-7 w-7" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75, type: "spring", stiffness: 200, damping: 15 }}
              className="absolute -bottom-5 -right-5 z-10 grid h-12 w-12 place-items-center rounded-full border-2 border-ink bg-blush"
              aria-hidden
            >
              <Atom className="h-6 w-6" />
            </motion.div>
            <figure className="relative overflow-hidden rounded-[2rem] border-2 border-ink bg-paper shadow-pop">
              <img
                src={profile.photo.src}
                alt={profile.photo.alt}
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
