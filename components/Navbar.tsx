"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, UserRound, X } from "lucide-react";
import { clinic, navItems } from "@/lib/content";
import { AnimatePresence, motion } from "framer-motion";

// SECTION: Mobile menu animation variants
const menuVariants = {
  closed: { opacity: 0, y: -12 },
  open: { opacity: 1, y: 0 },
};

/** Renders the fixed premium navigation for landing and portal entry points. */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obsidian/78 backdrop-blur-2xl">
      <nav className="section-shell flex h-20 items-center justify-between gap-4">
        {/* SECTION: Brand */}
        <Link href="/" className="flex items-center gap-3" aria-label="HE Performance home">
          <Image src="/logo-white.svg" alt="Clínica HE Performance" width={154} height={42} priority />
        </Link>

        {/* SECTION: Desktop nav links */}
        <div className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/[0.035] px-6 py-3 text-sm text-mist lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-champagne">
              {item.label}
            </a>
          ))}
        </div>

        {/* SECTION: Desktop actions */}
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
            <span>Agendar</span>
            <ArrowRight size={16} />
          </a>

          {/* SECTION: Mobile hamburger toggle */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-ivory transition hover:border-gold/60 hover:text-champagne lg:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* SECTION: Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-white/10 bg-obsidian/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="section-shell flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-[8px] px-4 py-3 text-sm text-mist transition hover:bg-white/[0.05] hover:text-champagne"
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center gap-2 rounded-[8px] px-4 py-3 text-sm text-mist transition hover:bg-white/[0.05] hover:text-champagne"
              >
                <UserRound size={16} />
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
