"use client";

import { useState } from "react";
import { GF_WHATSAPP } from "@/app/lib/grindfactory";

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px", height: 64,
        background: "rgba(10,10,11,.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1a1a1a",
      }}
    >
      <a
        href="#hero"
        style={{
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: ".06em",
          color: "#7a7a7a",
          transition: "color .2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#e8e6e1")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#7a7a7a")}
      >
        GrindFactory
      </a>

      <nav style={{ display: "flex", gap: 32, alignItems: "center" }} className="hidden md:flex">
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{ fontSize: 13, color: "#888", transition: "color .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e8e6e1")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <a href={GF_WHATSAPP} target="_blank" rel="noopener noreferrer" className="nav-cta hidden md:inline-flex">
        Arrancar proyecto →
      </a>

      {/* Mobile burger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen(!open)}
      >
        <span className={`block h-0.5 w-5 bg-white/60 transition-all duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block h-0.5 w-5 bg-white/60 transition-all duration-200 ${open ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-5 bg-white/60 transition-all duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {open && (
        <div
          className="md:hidden"
          style={{
            position: "absolute", top: 64, left: 0, right: 0,
            background: "rgba(10,10,11,.95)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid #1a1a1a",
            padding: "24px 24px",
            display: "flex", flexDirection: "column", gap: 20,
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: 14, color: "#888" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={GF_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            style={{ alignSelf: "flex-start", marginTop: 8 }}
          >
            Arrancar proyecto →
          </a>
        </div>
      )}
    </header>
  );
}
