import { specialties } from "@/lib/content";
import { Reveal } from "./Reveal";

/** Lists the core specialties available at the clinic. */
export function Specialties() {
  return (
    <section id="especialidades" className="bg-[#0a1422] py-24 sm:py-28">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Especialidades</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold text-ivory sm:text-5xl">
            Cuidado multidisciplinar para objetivos reais.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <Reveal key={specialty.title} delay={index * 0.04}>
                <article className="h-full rounded-[8px] border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.055]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-gold/12 text-gold">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-ivory">{specialty.title}</h3>
                  <p className="mt-3 leading-7 text-mist">{specialty.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
