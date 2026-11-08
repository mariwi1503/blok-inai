"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type RemoteImageProps = Omit<ImageProps, "src" | "onError"> & {
  src: string;
  /** Shown when the primary image fails to load. */
  fallbackSrc: string;
};

/**
 * next/image with a fallback source. Replaces the `onerror="this.src=..."`
 * pattern from the original HTML.
 */
export function RemoteImage({ src, fallbackSrc, alt, ...props }: RemoteImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      {...props}
      alt={alt}
      src={currentSrc}
      onError={() => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
      }}
    />
  );
}
