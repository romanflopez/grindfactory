export function Differential() {
  return (
    <section
      id="diferencial"
      aria-labelledby="gf-diff"
      className="relative py-20 md:py-28 border-t border-white/[0.06] overflow-hidden"
      style={{ background: "#161618" }}
    >
      {/* Texture bg */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none bg-texture"
        aria-hidden="true"
      />

      {/* Decorative left lime line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] opacity-25"
        style={{ background: "linear-gradient(to bottom, transparent, #F97316 30%, #F97316 70%, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl flex flex-col gap-8 md:gap-10">
          <div className="flex items-center gap-3">
            <span className="eyebrow">[ 04 ]</span>
            <span className="h-px w-8 bg-white/15" aria-hidden="true" />
            <span className="eyebrow">Diferencial</span>
          </div>

          <h2
            id="gf-diff"
            className="font-display text-balance"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", lineHeight: 0.9 }}
          >
            No somos<br />
            una agencia<br />
            <span style={{ color: "#F97316" }}>de slides.</span>
          </h2>

          <div className="flex flex-col gap-5 text-white/60 text-base md:text-xl leading-relaxed max-w-2xl">
            <p>
              La mayoría te entrega un PDF lindo y desaparece. Nosotros
              operamos nuestros propios productos en producción, facturando.
            </p>
            <p>
              El mismo equipo que diseña, programa — y lo que construimos,
              lo construimos para que aguante.
            </p>
          </div>

          <ul className="flex flex-col gap-4 mt-2">
            {[
              "Grovly, Vera y regateaTuMulta: tres productos propios en producción, con usuarios reales.",
              "El mismo estándar que usamos para nuestro código lo usamos para el tuyo.",
              "No freelancers que desaparecen. No agencias con 8 intermediarios.",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm md:text-base text-white/55">
                <span
                  className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#F97316" }}
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
