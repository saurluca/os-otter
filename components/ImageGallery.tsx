"use client";

import Image from "next/image";
import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

const GALERIE_IMAGES = [
  "images/main.jpeg",
  "images/main2.jpeg",
  "images/cross.jpeg",
  "images/f09aa62e-c82d-4bf3-965b-8c53286d71a1.jpeg",
  "images/8d1d191f-fd91-46c6-8ccb-6f72a8d31f66.jpeg",
  "images/8fd70895-76f0-48fb-b64b-a10e1fdbe026.jpeg",
  "images/39db513c-0021-4ec3-8dcf-c5288fe28d40.jpeg",
  "images/df965e88-e1d4-45ff-8bcf-8ca7d71a93ab.jpeg",
];

export default function ImageGallery() {
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {GALERIE_IMAGES.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() =>
              setLightboxImage({
                src: `/${src}`,
                alt: `Pfadfinder-Erlebnis ${i + 1}`,
              })
            }
            className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md ring-2 ring-amber-900/10 transition-transform hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#1b5e20] focus:ring-offset-2"
          >
            <Image
              src={`/${src}`}
              alt={`Pfadfinder-Erlebnis ${i + 1}`}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </button>
        ))}
      </div>

      <ImageLightbox
        src={lightboxImage?.src ?? ""}
        alt={lightboxImage?.alt ?? ""}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
}
