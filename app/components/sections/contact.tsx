import { author } from "@/app/lib/author";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="gf-contact" className="relative py-20 md:py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-10 md:gap-14 items-start">
        <div className="flex flex-col gap-6">
          <div className="section-label">
            <span className="section-label-num">·</span>
            <span className="section-label-bar" />
            <span className="section-label-text">Contacto</span>
          </div>
          <h2
            id="gf-contact"
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-[-0.035em] text-balance"
          >
            ¿Tenés un proyecto?<br />
            <span className="text-white/45">Hablemos.</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md">
            Respondo en menos de 24h hábiles. Si preferís un call de 30 min en vez de mail, lo agendamos directo.
          </p>

          <div className="flex flex-col gap-3 mt-2">
            <a
              href={`mailto:${author.publicEmail}`}
              className="inline-flex items-center gap-2 text-white hover:text-white/70 transition-colors text-base md:text-lg"
            >
              <span className="font-mono text-xs text-white/40 uppercase tracking-[0.2em] mr-2">Email</span>
              {author.publicEmail}
            </a>
            <a
              href={author.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/85 hover:text-white transition-colors text-base"
            >
              <span className="font-mono text-xs text-white/40 uppercase tracking-[0.2em] mr-2">LinkedIn</span>
              /in/romanflopez
            </a>
            <a
              href={author.links.workana}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/85 hover:text-white transition-colors text-base"
            >
              <span className="font-mono text-xs text-white/40 uppercase tracking-[0.2em] mr-2">Workana</span>
              /freelancer/romanflopez
            </a>
          </div>
        </div>

        <div className="card p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
