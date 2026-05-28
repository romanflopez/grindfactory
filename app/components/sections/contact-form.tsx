"use client";

import { useState, useTransition } from "react";

type Status = "idle" | "ok" | "err";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [pending, startTransition] = useTransition();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);

    startTransition(async () => {
      setStatus("idle");
      setErrorMsg(null);
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          body: fd,
        });
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          setErrorMsg(data?.error || "No se pudo enviar. Intentá de nuevo.");
          setStatus("err");
          return;
        }
        setStatus("ok");
        formEl.reset();
      } catch {
        setErrorMsg("Error de red. Intentá de nuevo.");
        setStatus("err");
      }
    });
  }

  if (status === "ok") {
    return (
      <div className="flex flex-col gap-3 items-start text-left">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-400/30">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>
        <h3 className="font-display font-bold text-2xl">Mensaje enviado.</h3>
        <p className="text-white/60 text-sm leading-relaxed">
          Te respondo en menos de 24h hábiles. Si es urgente, escribime a{" "}
          <a className="underline" href="mailto:roman.francisc.lopez@gmail.com">
            roman.francisc.lopez@gmail.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="font-mono uppercase tracking-[0.2em] text-[10px] text-white/45">Nombre</span>
          <input
            name="name"
            type="text"
            required
            minLength={2}
            placeholder="Tu nombre"
            className="px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 focus:border-white/30 outline-none text-white placeholder:text-white/25 text-sm transition"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="font-mono uppercase tracking-[0.2em] text-[10px] text-white/45">Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="vos@empresa.com"
            className="px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 focus:border-white/30 outline-none text-white placeholder:text-white/25 text-sm transition"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="font-mono uppercase tracking-[0.2em] text-[10px] text-white/45">Proyecto</span>
        <textarea
          name="message"
          required
          minLength={20}
          rows={6}
          placeholder="Contame brevemente: qué necesitás, stack actual, plazos estimados, presupuesto si lo tenés."
          className="px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 focus:border-white/30 outline-none text-white placeholder:text-white/25 text-sm transition resize-none"
        />
      </label>

      {status === "err" && errorMsg && (
        <div role="alert" className="rounded-lg border border-red-400/30 bg-red-500/10 text-red-200 text-sm px-4 py-3">
          {errorMsg}
        </div>
      )}

      <button type="submit" disabled={pending} className="btn-primary justify-center py-3.5 mt-1 disabled:opacity-60 disabled:cursor-not-allowed">
        {pending ? "Enviando..." : "Enviar mensaje"}
        {!pending && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        )}
      </button>
    </form>
  );
}
