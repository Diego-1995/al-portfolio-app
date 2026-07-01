import Link from "next/link";
import Image from "next/image";
import {
  ClipboardList,
  Cuboid,
  DraftingCompass,
  FileSpreadsheet,
  FileText,
  FileType,
  type LucideIcon,
} from "lucide-react";

import { Brand } from "@/components/automa/brand";
import { BusinessFooter } from "@/components/automa/business-footer";

const workflowSteps = [
  {
    title: "Studio di Fattibilita",
    description:
      "Analisi preliminare, calcoli strutturali e valutazione delle soluzioni cinematiche per garantire la riuscita del progetto.",
  },
  {
    title: "Progettazione e Modellazione 3D",
    description:
      "Sviluppo del gruppo meccanico o dell'impianto speciale secondo le vostre specifiche richieste.",
  },
  {
    title: "Messa in Tavola e Documentazione",
    description:
      "Redazione di disegni costruttivi bidimensionali di dettaglio con tolleranze geometriche e dimensionali precise.",
  },
  {
    title: "Distinta Base (BOM)",
    description:
      "Creazione di distinte componenti accurate per ottimizzare gli acquisti e la gestione della produzione.",
  },
  {
    title: "Project Management e Supporto al Fornitore",
    description:
      "Seguiamo direttamente tutte le fasi della costruzione e del montaggio, risolvendo ogni criticita fino al collaudo finale.",
  },
];

const deliverables: { label: string; className: string; icon: LucideIcon }[] = [
  { label: "CAD", className: "bg-[#e46f00]", icon: DraftingCompass },
  { label: "PDF", className: "bg-[#d91b08]", icon: FileText },
  { label: "STEP", className: "bg-[#12adc3]", icon: Cuboid },
  { label: "DWG", className: "bg-[#8d4079]", icon: DraftingCompass },
  { label: "XLSX", className: "bg-[#27c94f]", icon: FileSpreadsheet },
  { label: "DOCX", className: "bg-[#4d99ed]", icon: FileText },
  { label: "TXT", className: "bg-[#b8b8b8]", icon: FileType },
  { label: "BOM", className: "bg-[#e5b400]", icon: ClipboardList },
];

export default function CosaFacciamoPage() {
  return (
    <main className="automa-grid relative min-h-screen overflow-hidden px-5 py-6 pb-40 text-white md:px-8">
      <Image
        src="/background-cosa-facciamo.jpg"
        alt=""
        fill
        priority
        unoptimized
        aria-hidden="true"
        className="pointer-events-none z-0 object-cover opacity-12 mix-blend-screen"
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_26%,rgba(95,255,140,0.12),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.38),rgba(0,0,0,0.82)_42%,rgba(0,0,0,0.58))]" />

      <Link
        href="/"
        className="relative z-10 inline-flex rounded-2xl border border-white/60 bg-[#192323]/65 px-6 py-3 text-sm uppercase tracking-[0.2em] text-[#b6e9bd] transition hover:border-primary hover:text-primary"
      >
        Torna alla home
      </Link>

      <Brand />

      <section className="relative z-10 mx-auto mt-10 w-full max-w-6xl overflow-hidden rounded-3xl border border-primary/30 bg-black/40 p-6 shadow-[0_0_32px_rgba(95,255,140,0.16),inset_0_0_28px_rgba(95,255,140,0.06)] backdrop-blur-md md:p-8 lg:p-10">
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-primary">
              Cosa facciamo
            </p>
            <h1 className="max-w-4xl text-4xl font-bold uppercase leading-tight text-white md:text-6xl">
              Ingegneria Meccanica: dal concetto alla messa in servizio
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d6dfdc] md:text-xl">
              Offriamo un servizio completo di{" "}
              <strong className="font-black text-primary">
                progettazione meccanica su misura
              </strong>
              , trasformando le vostre idee e specifiche tecniche in soluzioni
              industriali concrete e pronte per la produzione.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#b9c8c3] md:text-lg">
              Affianchiamo il cliente passo dopo passo attraverso un workflow
              strutturato e trasparente.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="overflow-hidden rounded-3xl border border-primary/25 bg-[#122018]/60 p-3 shadow-[0_0_24px_rgba(95,255,140,0.16)]">
              <Image
                src="/background-cosa-facciamo.jpg"
                alt="Progettazione meccanica AUTOMA"
                width={1024}
                height={256}
                priority
                unoptimized
                className="h-auto w-full rounded-2xl object-contain opacity-85 mix-blend-screen"
              />
            </div>

            <div className="rounded-3xl border border-primary/25 bg-[#122018]/60 p-5 shadow-[0_0_24px_rgba(95,255,140,0.16)]">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">
                Output di progetto
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                {deliverables.map((file) => {
                  const Icon = file.icon;

                  return (
                    <div
                      key={file.label}
                      className={`${file.className} relative flex h-24 flex-col items-center justify-end overflow-hidden rounded-lg pb-3 text-lg font-black text-white shadow-[0_8px_20px_rgba(0,0,0,0.32)] before:absolute before:right-0 before:top-0 before:border-l-[22px] before:border-t-[22px] before:border-l-white/55 before:border-t-white`}
                    >
                      <Icon
                        aria-hidden="true"
                        className="mb-2 size-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]"
                        strokeWidth={2.4}
                      />
                      {file.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-10 grid gap-4">
          {workflowSteps.map((step, index) => (
            <article
              key={step.title}
              className="grid gap-4 rounded-3xl border border-primary/20 bg-[#0c1713]/70 p-5 shadow-[inset_0_0_24px_rgba(95,255,140,0.05)] md:grid-cols-[72px_1fr] md:p-6"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl border border-primary/60 bg-primary/10 text-xl font-black text-primary shadow-[0_0_22px_rgba(95,255,140,0.35)]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{step.title}</h2>
                <p className="mt-3 text-base leading-7 text-[#d6dfdc] md:text-lg">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <BusinessFooter />
    </main>
  );
}
