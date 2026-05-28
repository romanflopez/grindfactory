import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="gf-contact"
      className="snap-section relative overflow-hidden flex flex-col"
    >
      <div className="aurora-mono" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <div className="relative z-10 flex-1 flex items-center justify-center px-5 md:px-12 py-12 md:py-16">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-6 md:gap-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-white/40 uppercase tabular">
              09 / 09
            </span>
            <span className="h-px w-10 md:w-16 bg-white/15" />
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-emerald-400">
              Contacto
            </span>
          </div>

          <h2
            id="gf-contact"
            className="font-display font-bold text-balance text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.035em] max-w-3xl"
          >
            ¿Tenés un nicho raro? <span className="text-white/45">Hablemos.</span>
          </h2>

          <p className="text-white/55 text-sm md:text-lg leading-relaxed max-w-xl text-balance">
            Construyo software para problemas puntuales que nadie más quiere resolver. Si el tuyo cae ahí, escribime.
          </p>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
