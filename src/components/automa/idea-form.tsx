"use client";

import { FormEvent, useState } from "react";
import { Paperclip, Send } from "lucide-react";

export function IdeaForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/idea", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Invio non riuscito.");
      }

      form.reset();
      setStatus("success");
      setMessage(result.message ?? "Richiesta inviata correttamente.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Si e verificato un errore durante l'invio.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
      <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
        La tua email
        <input
          required
          type="email"
          name="email"
          placeholder="nome@azienda.it"
          className="rounded-2xl border border-primary/25 bg-[#0c1713]/80 px-5 py-4 text-base normal-case tracking-normal text-white outline-none transition placeholder:text-[#7c9188] focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
        Descrizione
        <textarea
          required
          name="description"
          rows={8}
          placeholder="Descrivi obiettivo, vincoli tecnici, materiali, dimensioni, tempistiche o problema da risolvere..."
          className="resize-y rounded-2xl border border-primary/25 bg-[#0c1713]/80 px-5 py-4 text-base normal-case leading-7 tracking-normal text-white outline-none transition placeholder:text-[#7c9188] focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
        Allegato
        <span className="flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-primary/35 bg-primary/5 px-5 py-4 text-base normal-case tracking-normal text-[#d6dfdc] transition hover:border-primary hover:bg-primary/10">
          <Paperclip className="size-5 text-primary" aria-hidden="true" />
          <span>Carica un file tecnico, immagine o documento</span>
          <input name="file" type="file" className="sr-only" />
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-fit cursor-pointer items-center gap-3 rounded-xl bg-primary px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-primary-foreground shadow-[0_0_28px_rgba(141,255,156,0.52)] transition hover:scale-[1.02] hover:shadow-[0_0_34px_rgba(141,255,156,0.72)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Invio in corso" : "Invia"}
        <Send className="size-5" aria-hidden="true" />
      </button>

      {message ? (
        <p
          className={
            status === "error"
              ? "rounded-2xl border border-red-400/40 bg-red-950/30 px-5 py-4 text-sm text-red-100"
              : "rounded-2xl border border-primary/30 bg-primary/10 px-5 py-4 text-sm text-[#d6dfdc]"
          }
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
