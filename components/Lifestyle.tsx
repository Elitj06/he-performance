import Image from "next/image";
import { galleryImages } from "@/lib/content";
import { Reveal } from "./Reveal";

/** Displays lifestyle imagery in an organic, distributed layout — not a uniform grid. */
export function Lifestyle() {
  return (
    <section id="estilo-de-vida" className="bg-obsidian py-24 sm:py-28">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Equilíbrio</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold text-ivory sm:text-5xl">
            Corpo e mente em harmonia.
          </h2>
          <p className="mt-5 text-lg leading-8 text-mist">
            Performance não é só intensidade. É encontrar o ponto exato entre movimento, descanso, nutrição e presença.
          </p>
        </Reveal>

        {/* SECTION: Masonry-style layout with varied heights and offsets */}
        <div className="mt-14 columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
          {galleryImages.map((image, index) => (
            <Reveal
              key={image.src}
              delay={(index % 3) * 0.08}
              className={`group relative overflow-hidden rounded-[8px] border border-white/10 ${index % 3 === 1 ? "lg:mt-10" : ""} ${index % 3 === 2 ? "mt-6 lg:mt-0" : ""}`}
            >
              <div className={`relative ${index % 2 === 0 ? "min-h-[280px]" : "min-h-[340px]"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-ivory/90">
                  {image.alt}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
