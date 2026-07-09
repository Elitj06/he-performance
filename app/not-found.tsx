import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/** Custom 404 page matching the premium dark aesthetic. */
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-obsidian px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-ivory sm:text-5xl">Página não encontrada</h1>
      <p className="mt-4 max-w-md text-mist">A página que você procura não existe ou foi movida.</p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-gold px-6 font-semibold text-obsidian transition hover:bg-champagne"
      >
        <ArrowLeft size={16} /> Voltar ao início
      </Link>
    </main>
  );
}
