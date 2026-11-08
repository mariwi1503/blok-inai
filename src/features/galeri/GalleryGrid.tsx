"use client";

import { useState } from "react";
import { FaImages, FaRegCalendar } from "react-icons/fa6";
import { RemoteImage } from "@/components/ui/RemoteImage";
import { cn } from "@/lib/cn";
import type { GalleryItem } from "@/types";
import { Lightbox } from "./Lightbox";

type GalleryGridProps = {
  items: GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => {
          const cover = item.photos[0];
          const photoCount = item.photos.length;

          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(item)}
              aria-label={`Buka galeri ${item.title} (${photoCount} foto)`}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-sm border border-slate-100 cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <div className="h-64 overflow-hidden relative">
                <RemoteImage
                  src={cover.src}
                  fallbackSrc={item.fallbackImage}
                  alt={cover.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                {photoCount > 1 && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold">
                    <FaImages className="text-xs" /> {photoCount} Foto
                  </span>
                )}
              </div>
              <div className="p-5">
                <span
                  className={cn(
                    "text-[11px] font-semibold px-2.5 py-0.5 rounded-full",
                    item.tone.tag,
                  )}
                >
                  {item.tag}
                </span>
                <h4
                  className={cn(
                    "font-bold text-slate-800 text-base mt-2 transition",
                    item.tone.hoverTitle,
                  )}
                >
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 flex items-center">
                  <FaRegCalendar className="mr-1.5" /> {item.meta}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Keyed by title so the photo index resets when a different activity opens. */}
      <Lightbox key={active?.title ?? "closed"} item={active} onClose={() => setActive(null)} />
    </>
  );
}
