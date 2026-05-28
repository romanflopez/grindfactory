import Link from "next/link";
import { author } from "@/app/lib/author";

const nav = [
  { href: "#services", label: "Servicios" },
  { href: "#work", label: "Trabajos" },
  { href: "#about", label: "Sobre mí" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 header-blur">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-14 md:h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group" aria-label="Inicio">
          <span className="flex items-center justify-center w-7 h-7 rounded-md bg-white text-black font-display font-bold text-xs tracking-tight">
            {author.initials}
          </span>
          <span className="hidden sm:block font-display font-semibold text-sm tracking-tight">
            {author.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-xs font-medium text-white/60 hover:text-white transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-primary text-xs px-4 py-2">
          Contratame
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </header>
  );
}
