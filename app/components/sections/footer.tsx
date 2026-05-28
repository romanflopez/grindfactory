import Image from "next/image";
import { author } from "@/app/lib/author";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-sm px-5 md:px-12 py-5 md:py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Image src="/favicon.webp" alt="" width={24} height={24} className="rounded-md block" />
          <span className="font-display font-bold text-sm tracking-tight">Grind Factory</span>
          <span className="hidden md:inline text-white/25">·</span>
          <span className="hidden md:inline text-xs text-white/40">{author.location}</span>
        </div>
        <div className="flex items-center gap-4 md:gap-5 text-xs text-white/40">
          <span className="tabular">© {new Date().getFullYear()}</span>
          <span className="text-white/20">·</span>
          <a href={`mailto:${author.publicEmail}`} className="hover:text-white/80 transition-colors">
            {author.publicEmail}
          </a>
          <span className="text-white/20">·</span>
          <a
            href={author.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
