import Link from "next/link";

import { Brand } from "@/components/automa/brand";
import { IdeaForm } from "@/components/automa/idea-form";

export default function DescriviIdeaPage() {
  return (
    <main className="automa-grid min-h-screen overflow-hidden px-5 py-6 text-white md:px-8">
      <Link
        href="/"
        className="relative z-10 inline-flex w-fit rounded-2xl border border-white/60 bg-[#192323]/65 px-6 py-3 text-sm uppercase tracking-[0.2em] text-[#b6e9bd] transition hover:border-primary hover:text-primary"
      >
        Torna alla home
      </Link>

      <Brand />

      <section className="relative z-10 mx-auto mt-10 w-full max-w-4xl rounded-3xl border border-primary/30 bg-black/40 p-6 shadow-[0_0_32px_rgba(95,255,140,0.16),inset_0_0_28px_rgba(95,255,140,0.06)] backdrop-blur-md md:p-8 lg:p-10">
        <p className="mb-3 text-sm uppercase tracking-[0.24em] text-primary">
          Consulenza gratuita
        </p>
        <h1 className="max-w-3xl text-4xl font-bold uppercase leading-tight text-white md:text-6xl">
          Descrivi la tua idea o il tuo problema
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-[#d6dfdc] md:text-lg">
          Carica un documento tecnico, uno schizzo o una specifica e aggiungi
          una descrizione. Riceveremo tutto via email per valutare la richiesta.
        </p>

        <IdeaForm />
      </section>
    </main>
  );
}
