import Image from "next/image";
import { Award, HeartPulse, ShieldCheck } from "lucide-react";
import { stats } from "@/lib/content";
import { Reveal } from "./Reveal";

const pillars = [
  { title: "Médico", icon: HeartPulse, text: "Investigação ampla com foco em causas, não só sintomas." },
  { title: "Nutricional", icon: ShieldCheck, text: "Plano alimentar conectado aos exames, rotina e treinos." },
  { title: "Performance", icon: Award, text: "Estratégia para energia, composição corporal e longevidade." },
];

/** Explains the clinical positioning and credibility of HE Performance. */
export function About() {
  return (
    <section id="sobre" className="bg-obsidian py-24 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal className="relative min-h-[480px] overflow-hidden rounded-[8px] border border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1500&q=82"
            alt="Pessoa em meditação — equilíbrio de corpo e espírito"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[8px] border border-white/12 bg-obsidian/70 p-4 backdrop-blur-xl">
                <div className="text-xl font-semibold text-champagne">{stat.value}</div>
                <div className="mt-1 text-xs leading-4 text-mist">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Sobre a clínica</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold text-ivory sm:text-5xl">
            Um centro integrado para quem quer saúde, estética e performance com precisão.
          </h2>
          <p className="mt-6 text-lg leading-8 text-mist">
            A HE Performance une endocrinologia, medicina ortomolecular, medicina esportiva e nutrição para construir protocolos personalizados. O objetivo é transformar exames, histórico e metas em decisões clínicas claras.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="rounded-[8px] border border-white/10 bg-white/[0.035] p-5">
                  <Icon className="text-gold" size={24} />
                  <h3 className="mt-4 font-semibold text-ivory">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-mist">{pillar.text}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
