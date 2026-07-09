import { processSteps } from "@/lib/content";
import { Reveal } from "./Reveal";

/** Shows the patient journey from consultation to measurable outcomes. */
export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-obsidian py-24 sm:py-28">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Como funciona</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold text-ivory sm:text-5xl">
            Um método claro para sair da intenção e chegar ao resultado.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.06}>
                <article className="relative h-full rounded-[8px] border border-white/10 bg-white/[0.035] p-6">
                  <span className="text-sm font-semibold text-gold">0{index + 1}</span>
                  <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-[8px] bg-champagne/10 text-champagne">
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-ivory">{step.title}</h3>
                  <p className="mt-3 leading-7 text-mist">{step.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
