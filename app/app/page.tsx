import Link from "next/link";
import { ArrowLeft, Bell, ClipboardList, HeartPulse } from "lucide-react";

const features = [
  { title: "Prescrições", icon: ClipboardList },
  { title: "Lembretes", icon: Bell },
  { title: "Evolução", icon: HeartPulse },
];

/** Renders the patient portal placeholder for the PWA application. */
export default function PatientAppPage() {
  return (
    <main className="min-h-screen bg-obsidian px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-mist transition hover:text-champagne">
          <ArrowLeft size={16} />
          Voltar
        </Link>
        <section className="mt-10 rounded-[8px] border border-white/10 bg-white/[0.04] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Portal do paciente</p>
          <h1 className="mt-4 text-4xl font-semibold text-ivory">Em breve</h1>
          <p className="mt-4 max-w-2xl leading-8 text-mist">
            O app HE Performance reunirá prescrições, lembretes e acompanhamento para transformar o plano clínico em rotina.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-[8px] border border-white/10 bg-obsidian/50 p-5">
                  <Icon className="text-gold" size={24} />
                  <p className="mt-4 font-medium text-ivory">{feature.title}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
