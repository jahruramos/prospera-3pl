"use client";

import { useState } from "react";

export default function FacilityCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="group relative h-full w-full overflow-hidden rounded-[30px] bg-[#c6c6c6]">
      <img src={images[index]} alt={alt} className="h-full w-full object-cover" />
      <button
        type="button"
        onClick={prev}
        aria-label="Previous photo"
        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100"
      >
        <img src="/images/icon-arrow.svg" alt="" className="h-[47px] w-[47px]" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next photo"
        className="absolute right-4 top-1/2 -translate-y-1/2 rotate-180 opacity-0 transition-opacity group-hover:opacity-100"
      >
        <img src="/images/icon-arrow.svg" alt="" className="h-[47px] w-[47px]" />
      </button>
    </div>
  );
}
