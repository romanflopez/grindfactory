import { process } from "@/app/lib/author";

export function Process() {
  return (
    <section id="process" aria-labelledby="gf-process" className="relative py-20 md:py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-10 md:gap-14">
        <header className="flex flex-col gap-4 max-w-3xl">
          <div className="section-label">
            <span className="section-label-num">02 / 05</span>
            <span className="section-label-bar" />
            <span className="section-label-text">Cómo trabajo</span>
          </div>
          <h2
            id="gf-process"
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-[-0.035em] text-balance"
          >
            Cuatro pasos. Sin sorpresas.
          </h2>
          <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-2xl">
            Lo que vas a ver desde el primer call hasta el handoff.
          </p>
        </header>

        <ol className="grid md:grid-cols-2 gap-4 md:gap-5">
          {process.map((step) => (
            <li key={step.n} className="card flex flex-col gap-3 p-6 md:p-7">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-3xl md:text-4xl tabular text-white/85">
                  {step.n}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                  {step.duration}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl tracking-[-0.02em]">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
