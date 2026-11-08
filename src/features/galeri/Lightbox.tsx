"use client";

import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";
import { Modal } from "@/components/ui/Modal";
import { RemoteImage } from "@/components/ui/RemoteImage";
import { cn } from "@/lib/cn";
import type { GalleryItem } from "@/types";

type LightboxProps = {
  item: GalleryItem | null;
  onClose: () => void;
};

export function Lightbox({ item, onClose }: LightboxProps) {
  const [index, setIndex] = useState(0);
  const total = item?.photos.length ?? 0;
  const hasMultiple = total > 1;

  const goTo = useCallback(
    (next: number) => {
      if (total === 0) return;
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (!item || !hasMultiple) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goTo(index + 1);
      if (event.key === "ArrowLeft") goTo(index - 1);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [item, hasMultiple, index, goTo]);

  const photo = item?.photos[index] ?? item?.photos[0];

  return (
    <Modal
      open={item !== null}
      onClose={onClose}
      panelClassName="max-w-4xl"
      labelledBy="lightbox-title"
    >
      {item && photo && (
        <>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup pratinjau"
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition"
          >
            <FaXmark />
          </button>

          <div className="relative w-full h-[60vh] max-h-[75vh] bg-slate-900">
            <RemoteImage
              key={photo.src}
              src={photo.largeSrc ?? photo.src}
              fallbackSrc={item.fallbackImage}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-contain"
              priority
            />

            {hasMultiple && (
              <>
                <button
                  type="button"
                  onClick={() => goTo(index - 1)}
                  aria-label="Foto sebelumnya"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition"
                >
                  <FaChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(index + 1)}
                  aria-label="Foto berikutnya"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition"
                >
                  <FaChevronRight />
                </button>
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-semibold tabular-nums">
                  {index + 1} / {total}
                </span>
              </>
            )}
          </div>

          <div className="p-4 bg-white">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h4 id="lightbox-title" className="font-bold text-slate-800 text-base">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500">
                  {photo.caption ?? "Dokumentasi resmi RT 07 RW 21 Blok Inai"}
                </p>
              </div>
              <span
                className={cn(
                  "shrink-0 text-[11px] font-semibold px-2.5 py-0.5 rounded-full",
                  item.tone.tag,
                )}
              >
                {item.tag}
              </span>
            </div>

            {hasMultiple && (
              <div
                role="tablist"
                aria-label="Pilih foto"
                className="mt-4 flex gap-2 overflow-x-auto pb-1"
              >
                {item.photos.map((thumb, i) => (
                  <button
                    key={thumb.src}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Foto ${i + 1}: ${thumb.alt}`}
                    onClick={() => goTo(i)}
                    className={cn(
                      "relative shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition",
                      i === index
                        ? "border-emerald-500 ring-2 ring-emerald-500/20"
                        : "border-transparent opacity-60 hover:opacity-100",
                    )}
                  >
                    <RemoteImage
                      src={thumb.src}
                      fallbackSrc={item.fallbackImage}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </Modal>
  );
}
