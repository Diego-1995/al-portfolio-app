import type { AutomaService } from "@/components/automa/types";
import { MachineIllustration } from "@/components/automa/machine-illustration";

type ServiceDashboardProps = {
  service: AutomaService;
};

export function ServiceDashboard({ service }: ServiceDashboardProps) {
  const Icon = service.icon;

  return (
    <div className="relative z-10 mx-auto mt-10 grid w-full max-w-5xl gap-6 lg:mt-14 lg:grid-cols-[1fr_360px] lg:items-center">
      <section className="rounded-3xl border border-primary/30 bg-black/35 p-6 shadow-[0_0_32px_rgba(95,255,140,0.16),inset_0_0_28px_rgba(95,255,140,0.06)] backdrop-blur-md md:p-8">
        <div className="mb-5 flex items-center gap-4">
          <div className="flex size-16 items-center justify-center rounded-2xl border border-primary/60 bg-primary/10 shadow-[0_0_22px_rgba(95,255,140,0.45)]">
            <Icon className="size-9 text-primary" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-primary">
              {service.eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              {service.title}
            </h2>
          </div>
        </div>

        <h3 className="mb-3 text-2xl font-semibold text-[#eaffdf] md:text-3xl">
          Pagina in manutenzione
        </h3>
        <p className="max-w-2xl text-base leading-7 text-[#d6dfdc] md:text-lg">
          La sezione dedicata a {service.title} e in aggiornamento. Stiamo
          preparando una pagina con dettagli tecnici, esempi di progetto e
          materiali dedicati.
        </p>

        <div className="mt-7 grid gap-3 md:grid-cols-3">
          {[
            "Contenuti tecnici in revisione",
            "Case study in preparazione",
            "Schede servizio in arrivo",
          ].map((highlight) => (
            <div
              key={highlight}
              className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm leading-6 text-[#d6dfdc]"
            >
              {highlight}
            </div>
          ))}
        </div>
      </section>

      <aside className="rounded-3xl border border-primary/25 bg-[#122018]/55 p-5 shadow-[0_0_24px_rgba(95,255,140,0.22)] backdrop-blur-sm">
        <p className="mb-4 text-sm uppercase tracking-[0.24em] text-[#bfffd0]">
          Dashboard
        </p>
        <div className="grid gap-3">
          {["WIP", "Soon", "Update"].map((stat) => (
            <div
              key={stat}
              className="rounded-2xl border border-primary/30 bg-black/30 px-4 py-5 text-center text-2xl font-bold text-primary shadow-[inset_0_0_18px_rgba(95,255,140,0.08)]"
            >
              {stat}
            </div>
          ))}
        </div>
      </aside>

      <MachineIllustration />
    </div>
  );
}
