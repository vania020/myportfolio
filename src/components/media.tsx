import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ImageIcon, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Media, Video } from "@/data/projects";

/** Labeled placeholder for photos not uploaded yet. */
export function PhotoPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        "bg-grid flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-ink/30 bg-paper p-4 text-center text-muted-foreground",
        className,
      )}
    >
      <ImageIcon className="h-6 w-6" aria-hidden />
      <span className="font-hand text-xl leading-tight">{label}</span>
    </div>
  );
}

/** Image that opens a full-screen lightbox on click. */
export function Photo({
  media,
  className,
  imgClassName,
}: {
  media: Media;
  className?: string;
  imgClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn("block w-full cursor-zoom-in", className)}
        aria-label={`Enlarge: ${media.alt}`}
      >
        <img
          src={media.src}
          alt={media.alt}
          loading="lazy"
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={media.alt}
          >
            <button
              className="absolute right-4 top-4 rounded-full bg-cream p-2 text-ink"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.figure
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="max-h-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={media.src}
                alt={media.alt}
                className="max-h-[85vh] w-auto rounded-md object-contain"
              />
              {media.caption && (
                <figcaption className="font-hand mt-2 text-center text-2xl text-cream">
                  {media.caption}
                </figcaption>
              )}
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/** Interactive gallery: big photo with arrows, dots and keyboard navigation. */
export function GalleryViewer({ items, fill = false }: { items: Media[]; fill?: boolean }) {
  const [index, setIndex] = useState(0);
  const count = items.length;
  const go = useCallback(
    (dir: number) => {
      if (count > 0) setIndex((i) => (i + dir + count) % count);
    },
    [count],
  );
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);
  const current = items[index];
  if (!current) return null;
  return (
    <div className={cn(fill && "flex h-full flex-col")}>
      <div
        className={cn(
          "relative overflow-hidden",
          fill ? "h-full min-h-[260px] flex-1" : "rounded-2xl border-2 border-ink bg-ink",
        )}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={current.src}
            src={current.src}
            alt={current.alt}
            className={cn(
              fill
                ? "absolute inset-0 h-full w-full object-cover"
                : "mx-auto max-h-[60vh] w-auto object-contain",
            )}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25 }}
          />
        </AnimatePresence>
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border-2 border-ink bg-cream p-2 text-ink transition-transform hover:scale-110"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border-2 border-ink bg-cream p-2 text-ink transition-transform hover:scale-110"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <span className="absolute bottom-3 right-3 rounded-full bg-ink/80 px-3 py-1 text-sm font-medium text-cream">
              {index + 1} / {count}
            </span>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {items.map((m, i) => (
                <button
                  key={m.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show photo ${i + 1}: ${m.alt}`}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full border border-ink/60 transition-all",
                    i === index ? "scale-110 bg-coral" : "bg-cream/70 hover:bg-cream",
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {current.caption && (
        <p className="mt-3 text-center text-sm text-muted-foreground">{current.caption}</p>
      )}
    </div>
  );
}

export function PhotoGallery({ items }: { items: Media[] }) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {items.map((m) => (
        <div key={m.src} className="mb-4 break-inside-avoid overflow-hidden rounded-lg">
          <Photo media={m} imgClassName="h-auto object-contain" />
        </div>
      ))}
    </div>
  );
}

/** Large technical diagram with an expandable, zoomable viewer. */
export function DiagramViewer({ media }: { media: Media }) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <figure>
      <button
        type="button"
        onClick={() => {
          setZoom(1);
          setOpen(true);
        }}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border-2 border-ink bg-paper p-2"
        aria-label={`Open diagram: ${media.alt}`}
      >
        <img
          src={media.src}
          alt={media.alt}
          loading="lazy"
          className="h-auto w-full object-contain"
        />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1 text-sm font-medium text-cream transition-transform group-hover:scale-105">
          <ZoomIn className="h-4 w-4" /> Expand
        </span>
      </button>
      {media.caption && (
        <figcaption className="mt-2 text-sm font-semibold">{media.caption}</figcaption>
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col bg-ink/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={media.alt}
          >
            <div className="flex items-center justify-between gap-2 p-3 text-cream">
              <p className="truncate text-sm font-medium">{media.caption}</p>
              <div className="flex gap-2">
                <button
                  className="rounded-full bg-cream p-2 text-ink"
                  aria-label="Zoom out"
                  onClick={() => setZoom((z) => Math.max(1, z - 0.5))}
                >
                  <ZoomOut className="h-5 w-5" />
                </button>
                <button
                  className="rounded-full bg-cream p-2 text-ink"
                  aria-label="Zoom in"
                  onClick={() => setZoom((z) => Math.min(4, z + 0.5))}
                >
                  <ZoomIn className="h-5 w-5" />
                </button>
                <button
                  className="rounded-full bg-cream p-2 text-ink"
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <img
                src={media.src}
                alt={media.alt}
                style={{ width: `${zoom * 100}%` }}
                className="mx-auto h-auto max-w-none rounded-md bg-paper transition-[width]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </figure>
  );
}

/** YouTube (no-cookie) or local MP4. Never autoplays with sound. */
export function VideoEmbed({ video, className }: { video: Video; className?: string }) {
  return (
    <div className={cn("aspect-video overflow-hidden rounded-lg bg-ink", className)}>
      {video.type === "youtube" ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.id}`}
          title={video.title}
          loading="lazy"
          allow="encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video
          className="h-full w-full object-contain"
          src={video.src}
          poster={video.poster}
          controls
          muted
          playsInline
          preload="metadata"
          aria-label={video.title}
        />
      )}
    </div>
  );
}
