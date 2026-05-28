import { faq } from "@/app/lib/author";

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="gf-faq" className="relative py-20 md:py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-10 md:gap-14">
        <header className="flex flex-col gap-4 max-w-3xl">
          <div className="section-label">
            <span className="section-label-num">05 / 05</span>
            <span className="section-label-bar" />
            <span className="section-label-text">Preguntas frecuentes</span>
          </div>
          <h2
            id="gf-faq"
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-[-0.035em] text-balance"
          >
            Lo que siempre me preguntan.
          </h2>
        </header>

        <ul className="flex flex-col">
          {faq.map((item, i) => (
            <li key={item.q} className="border-t border-white/[0.08] py-6 md:py-7 grid md:grid-cols-[200px_1fr] gap-3 md:gap-10 items-start">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35 tabular pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-2.5">
                <h3 className="font-display font-semibold text-lg md:text-xl text-white tracking-[-0.015em]">
                  {item.q}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl">
                  {item.a}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
