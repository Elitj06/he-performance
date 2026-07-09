import { ArrowRight } from "lucide-react";
import { clinic, contactItems } from "@/lib/content";
import { Reveal } from "./Reveal";

/** Renders contact channels, address and CTA. */
export function Contact() {
  return (
    <section id="contato" className="bg-obsidian py-24 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Contato</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold text-ivory sm:text-5xl">
              Agende sua avaliação 360 na Barra da Tijuca.
            </h2>
            <p className="mt-6 text-lg leading-8 text-mist">
              Entre em contato pelo WhatsApp, Instagram ou visite a clínica na Av. Evandro Lins e Silva.
            </p>

            <div className="mt-8 space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-4 rounded-[8px] border border-white/10 bg-white/[0.035] p-5">
                    <Icon className="shrink-0 text-gold" size={23} />
                    <div>
                      <p className="text-sm text-mist">{item.label}</p>
                      <p className="mt-1 font-medium text-ivory">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href={clinic.whatsappUrl}
              className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gold px-6 font-semibold text-obsidian transition hover:bg-champagne"
              target="_blank"
              rel="noreferrer"
            >
              Falar com a equipe
              <ArrowRight size={18} />
            </a>
          </Reveal>

          {/* SECTION: Decorative CTA panel */}
          <Reveal className="glass-panel flex flex-col justify-center rounded-[8px] p-8 lg:p-12" delay={0.1}>
            <p className="text-3xl font-semibold leading-tight text-ivory sm:text-4xl">
              Sua melhor versão começa com uma conversa.
            </p>
            <p className="mt-5 text-lg leading-8 text-mist">
              Avaliação completa, plano personalizado e acompanhamento contínuo — tudo em um só lugar.
            </p>
            <a
              href={clinic.whatsappUrl}
              className="mt-8 inline-flex h-14 w-fit items-center justify-center gap-2 rounded-full border border-gold/40 px-6 font-semibold text-champagne transition hover:bg-gold/10"
              target="_blank"
              rel="noreferrer"
            >
              Agendar agora
              <ArrowRight size={18} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
