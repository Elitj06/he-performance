import Image from "next/image";
import { team } from "@/lib/content";
import { Reveal } from "./Reveal";

/** Introduces the clinic leadership with concise credentials. */
export function Team() {
  return (
    <section id="equipe" className="bg-obsidian py-24 sm:py-28">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Equipe</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold text-ivory sm:text-5xl">
            Liderança clínica com visão integrada.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <article className="grid overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] sm:grid-cols-[220px_1fr]">
                <div className="relative min-h-[260px]">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(min-width: 768px) 220px, 100vw" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-ivory">{member.name}</h3>
                  <p className="mt-2 text-sm font-medium text-champagne">{member.role}</p>
                  <p className="mt-5 leading-7 text-mist">{member.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
