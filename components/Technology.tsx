import Image from "next/image";
import { technologyItems } from "@/lib/content";
import { Reveal } from "./Reveal";

/** Highlights the PWA and AI layer planned for patient follow-up. */
export function Technology() {
  return (
    <section id="tecnologia" className="overflow-hidden bg-[#0a1422] py-24 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Tecnologia</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold text-ivory sm:text-5xl">
            IA para tornar o tratamento mais simples de seguir.
          </h2>
          <p className="mt-6 text-lg leading-8 text-mist">
            A plataforma organiza prescrições, lembretes e acompanhamento para que o paciente entenda o plano e a equipe acompanhe a evolução com mais contexto.
          </p>

          <div className="mt-8 space-y-4">
            {technologyItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[8px] border border-white/10 bg-white/[0.035] p-5">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-gold/12 text-gold">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ivory">{item.title}</h3>
                      <p className="mt-1 leading-7 text-mist">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="relative min-h-[560px]" delay={0.12}>
          <div className="absolute inset-0 rounded-[8px] border border-white/10 bg-[linear-gradient(155deg,rgba(200,164,93,0.20),rgba(135,215,223,0.08),rgba(255,255,255,0.03))]" />
          <div className="absolute left-5 right-5 top-5 rounded-[8px] border border-white/10 bg-obsidian/76 p-5 backdrop-blur-xl sm:left-12 sm:right-12 sm:top-12">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-sm text-mist">Plano de hoje</span>
              <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-champagne">Em dia</span>
            </div>
            <div className="mt-5 space-y-3">
              {["Suplementação matinal", "Treino de força", "Consulta de retorno"].map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-[8px] bg-white/[0.045] p-4">
                  <div>
                    <p className="font-medium text-ivory">{item}</p>
                    <p className="mt-1 text-sm text-mist">{index === 0 ? "07:30" : index === 1 ? "18:00" : "Sexta, 11:00"}</p>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-gold" />
                </div>
              ))}
            </div>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=82"
            alt="Alimentos saudáveis organizados para plano nutricional"
            width={520}
            height={360}
            className="absolute bottom-5 right-5 hidden rounded-[8px] border border-white/10 object-cover shadow-2xl sm:block"
          />
        </Reveal>
      </div>
    </section>
  );
}
