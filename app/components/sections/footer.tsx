import { author } from "@/app/lib/author";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-6 h-6 rounded bg-white text-black font-display font-bold text-[10px] tracking-tight">
              {author.initials}
            </span>
            <span className="font-display font-semibold text-sm">{author.name}</span>
          </div>
          <span className="font-mono text-[10px] text-white/35 uppercase tracking-[0.2em]">
            {author.role} · {author.location}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/45">
          <a href={`mailto:${author.publicEmail}`} className="hover:text-white transition-colors">
            {author.publicEmail}
          </a>
          <a href={author.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href={author.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <span className="tabular">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
