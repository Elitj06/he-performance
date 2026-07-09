import Image from "next/image";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import { clinic, stats } from "@/lib/content";
import { Reveal } from "./Reveal";

/** Presents the first-viewport brand promise with CTA and lifestyle imagery. */
export function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden pt-24">
      <Image
        src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=2400&q=86"
        alt="Pessoa ativa treinando com foco em performance e saúde"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.96)_0%,rgba(7,17,31,0.78)_42%,rgba(7,17,31,0.28)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(200,164,93,0.22),transparent_32%)]" />

      <div className="section-shell relative z-10 grid min-h-[calc(92vh-96px)] items-center gap-10 py-12 lg:grid-cols-[1.02fr_0.78fr]">
        <Reveal className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm text-champagne">
            <CheckCircle2 size={16} />
            {clinic.area}
          </div>
          <Image src="/he-logo-circle.png" alt="Clínica HE Performance" width={120} height={120} className="mb-8" priority />
          <h1 className="text-balance max-w-4xl text-5xl font-semibold leading-[1.02] text-ivory sm:text-6xl lg:text-7xl">
            {clinic.slogan}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mist sm:text-xl">
            Avaliação 360 em saúde, metabologia, nutrição e performance para transformar dados clínicos em uma rotina possível.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={clinic.whatsappUrl}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gold px-6 font-semibold text-obsidian transition hover:bg-champagne"
              target="_blank"
              rel="noreferrer"
            >
              Agende sua avaliação 360
              <ArrowRight size={18} />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/14 px-6 font-semibold text-ivory transition hover:border-gold/70 hover:text-champagne"
            >
              <PlayCircle size={18} />
              Como funciona
            </a>
          </div>
        </Reveal>

        <Reveal className="glass-panel hidden rounded-[8px] p-5 lg:block" delay={0.15}>
          <div className="grid gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5">
                <div className="text-3xl font-semibold text-champagne">{stat.value}</div>
                <div className="mt-1 text-sm text-mist">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
