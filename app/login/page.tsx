"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, LockKeyhole, Mail } from "lucide-react";

/** Renders a functional placeholder login screen for patients. */
export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-obsidian px-4 py-12">
      <div className="w-full max-w-md rounded-[8px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-mist transition hover:text-champagne">
          <ArrowLeft size={16} />
          Voltar
        </Link>
        <Image src="/logo-white.svg" alt="Clínica HE Performance" width={188} height={56} className="mb-8" />
        <h1 className="text-3xl font-semibold text-ivory">Login do paciente</h1>
        <p className="mt-3 leading-7 text-mist">Acesse sua rotina, prescrições, lembretes e próximos passos.</p>

        <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <label className="block">
            <span className="text-sm font-medium text-ivory">E-mail</span>
            <span className="mt-2 flex h-12 items-center gap-3 rounded-[8px] border border-white/10 bg-obsidian/60 px-4 text-mist">
              <Mail size={18} />
              <input className="w-full bg-transparent text-ivory outline-none placeholder:text-mist/60" placeholder="seu@email.com" type="email" />
            </span>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-ivory">Senha</span>
            <span className="mt-2 flex h-12 items-center gap-3 rounded-[8px] border border-white/10 bg-obsidian/60 px-4 text-mist">
              <LockKeyhole size={18} />
              <input className="w-full bg-transparent text-ivory outline-none placeholder:text-mist/60" placeholder="Sua senha" type="password" />
            </span>
          </label>
          <button type="submit" className="h-12 w-full rounded-full bg-gold font-semibold text-obsidian transition hover:bg-champagne">
            Entrar
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-mist">Portal em fase de ativação para pacientes convidados.</p>
      </div>
    </main>
  );
}
