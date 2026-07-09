import Link from "next/link";
import { ArrowLeft, BarChart3, BrainCircuit, UsersRound } from "lucide-react";

const modules = [
  { title: "Pacientes", icon: UsersRound },
  { title: "IA clínica", icon: BrainCircuit },
  { title: "Indicadores", icon: BarChart3 },
];

/** Renders the medical dashboard placeholder for clinicians. */
export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-obsidian px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-mist transition hover:text-champagne">
          <ArrowLeft size={16} />
          Voltar
        </Link>
        <section className="mt-10 rounded-[8px] border border-white/10 bg-white/[0.04] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Portal médico</p>
          <h1 className="mt-4 text-4xl font-semibold text-ivory">Em breve</h1>
          <p className="mt-4 max-w-2xl leading-8 text-mist">
            Painel para acompanhar pacientes, organizar prescrições e visualizar evolução clínica com suporte de IA.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <div key={module.title} className="rounded-[8px] border border-white/10 bg-obsidian/50 p-5">
                  <Icon className="text-gold" size={24} />
                  <p className="mt-4 font-medium text-ivory">{module.title}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
