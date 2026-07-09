import { Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Reveal } from "./Reveal";

/** Provides testimonial placeholders ready to be replaced by approved patient quotes. */
export function Testimonials() {
  return (
    <section className="bg-[#0a1422] py-24 sm:py-28">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Depoimentos</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold text-ivory sm:text-5xl">
            Experiências que serão curadas pela equipe.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.quote} delay={index * 0.06}>
              <blockquote className="h-full rounded-[8px] border border-white/10 bg-white/[0.035] p-6">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={17} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-6 leading-7 text-ivory">&ldquo;{testimonial.quote}&rdquo;</p>
                <footer className="mt-6 text-sm text-mist">{testimonial.author}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
