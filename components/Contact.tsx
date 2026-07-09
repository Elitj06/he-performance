import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { clinic, contactItems, galleryImages } from "@/lib/content";
import { Reveal } from "./Reveal";

/** Renders contact channels, address, CTA and diverse lifestyle image strip. */
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

          <Reveal className="grid grid-cols-2 gap-4" delay={0.1}>
            {galleryImages.map((image, index) => (
              <div key={image.src} className={`relative min-h-[220px] overflow-hidden rounded-[8px] border border-white/10 ${index % 2 ? "mt-8" : ""}`}>
                <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
