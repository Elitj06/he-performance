import Image from "next/image";
import Link from "next/link";
import { ArrowRight, UserRound } from "lucide-react";
import { clinic, navItems } from "@/lib/content";

/** Renders the fixed premium navigation for landing and portal entry points. */
export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obsidian/78 backdrop-blur-2xl">
      <nav className="section-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="HE Performance home">
          <Image src="/logo-white.svg" alt="Clínica HE Performance" width={154} height={42} priority />
        </Link>

        <div className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/[0.035] px-6 py-3 text-sm text-mist lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-champagne">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden h-11 items-center gap-2 rounded-full border border-white/12 px-4 text-sm text-ivory transition hover:border-gold/60 hover:text-champagne sm:flex"
          >
            <UserRound size={16} />
            Login
          </Link>
          <a
            href={clinic.whatsappUrl}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-gold px-4 text-sm font-semibold text-obsidian transition hover:bg-champagne"
            target="_blank"
            rel="noreferrer"
          >
            Agendar
            <ArrowRight size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}
