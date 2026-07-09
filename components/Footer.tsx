import Image from "next/image";
import Link from "next/link";
import { clinic, navItems } from "@/lib/content";

/** Displays brand, quick links and legal footer details. */
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050b14] py-12">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Image src="/he-logo-circle.png" alt="Clínica HE Performance" width={48} height={48} />
          <p className="mt-4 max-w-md leading-7 text-mist">{clinic.slogan}. Saúde, metabologia e performance no Rio de Janeiro.</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-mist">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-champagne">
              {item.label}
            </a>
          ))}
          <Link href="/login" className="transition hover:text-champagne">
            Login
          </Link>
        </div>
      </div>
      <div className="section-shell mt-8 border-t border-white/10 pt-6 text-sm text-mist">
        © 2026 Clínica HE Performance. Informações institucionais, sem substituir consulta médica.
      </div>
    </footer>
  );
}
