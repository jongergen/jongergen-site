"use client";

import { useState } from "react";
import Image from "next/image";

/*
  PHOTO SLOT — shared component used across every page.

  WHY THIS EXISTS:
  Normally, if an <Image> can't find its file, the browser shows a small
  broken-image icon — looks like something is wrong with the site. This
  component catches that and shows a clean "photo coming soon" placeholder
  instead, so empty slots look intentional rather than broken.

  HOW TO USE:
  Just point "src" at the filename you've decided on (e.g. "/images/home-page-center.jpg").
  Nothing else to configure. Once you upload a real photo with that exact
  filename to /public/images/, it will replace the placeholder automatically.
*/

type PhotoSlotProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export default function PhotoSlot({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: PhotoSlotProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-stone-100 border border-dashed border-stone-300 text-stone-400 text-sm ${className}`}
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        Photo coming soon
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={`object-cover w-full h-full ${className}`}
      onError={() => setErrored(true)}
    />
  );
}
