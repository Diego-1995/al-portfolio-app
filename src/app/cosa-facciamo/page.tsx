import Link from "next/link";

import { Brand } from "@/components/automa/brand";
import { BusinessFooter } from "@/components/automa/business-footer";
import { services } from "@/components/automa/services-data";

export default function CosaFacciamoPage() {
  return (
    <main className="automa-grid min-h-screen overflow-hidden px-5 py-6 text-white md:px-8">
      <Link
        href="/dashboard"
        className="inline-flex rounded-2xl border border-white/60 bg-[#192323]/65 px-6 py-3 text-sm uppercase tracking-[0.2em] text-[#b6e9bd] transition hover:border-primary hover:text-primary"
      >
        Vai alla dashboard
      </Link>

      <Brand />

      <section className="relative z-10 mx-auto mt-10 w-full max-w-6xl rounded-3xl border border-primary/30 bg-black/35 p-6 shadow-[0_0_32px_rgba(95,255,140,0.16),inset_0_0_28px_rgba(95,255,140,0.06)] backdrop-blur-md md:p-8">
        <p className="mb-3 text-sm uppercase tracking-[0.24em] text-primary">
          Cosa facciamo
        </p>
        <h1 className="max-w-3xl text-4xl font-bold uppercase leading-tight text-white md:text-6xl">
          Progettazione meccanica e automazione industriale su misura
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-[#d6dfdc] md:text-lg">
          AUTOMA sviluppa soluzioni tecniche per aziende che devono migliorare
          precisione, affidabilita e produttivita dei propri processi. Dal
          concept alla documentazione costruttiva, trasformiamo un problema di
          reparto in una soluzione meccanica realizzabile.
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="rounded-3xl border border-primary/25 bg-[#122018]/55 p-5 shadow-[0_0_24px_rgba(95,255,140,0.16)]"
              >
                <div className="mb-5 flex size-14 items-center justify-center rounded-2xl border border-primary/60 bg-primary/10 shadow-[0_0_22px_rgba(95,255,140,0.45)]">
                  <Icon className="size-8 text-primary" />
                </div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-primary">
                  {service.eyebrow}
                </p>
                <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#d6dfdc]">
                  {service.dashboardDescription}
                </p>
                <div className="mt-5 grid gap-2">
                  {service.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-[#d6dfdc]"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <BusinessFooter />
    </main>
  );
}
