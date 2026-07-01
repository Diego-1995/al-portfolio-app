import Image from "next/image";
import Link from "next/link";

import type { AutomaService } from "@/components/automa/types";
import { Brand } from "@/components/automa/brand";
import { BusinessFooter } from "@/components/automa/business-footer";
import { ConsultingCta } from "@/components/automa/consulting-cta";
import { ServiceDashboard } from "@/components/automa/service-dashboard";

type HeroPanelProps = {
  service: AutomaService | null;
};

export function HeroPanel({ service }: HeroPanelProps) {
  const isHome = service === null;

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden px-5 py-4 md:px-8 md:py-5">
      {isHome && (
        <Image
          src="/home.png"
          alt="Illustrazione AUTOMA"
          fill
          priority
          unoptimized
          className="pointer-events-none z-0 translate-y-8 -translate-x-8 scale-105 object-contain mix-blend-screen md:translate-y-10 md:-translate-x-12"
        />
      )}

      <Link
        href="/cosa-facciamo"
        className="relative z-10 inline-flex w-fit shrink-0 rounded-2xl border border-white/60 bg-[#192323]/65 px-6 py-3 text-2xl uppercase text-[#b6e9bd] transition hover:border-primary hover:text-primary md:text-3xl"
      >
        Cosa facciamo
      </Link>

      {isHome && <Brand />}
      <div className="theme-scrollbar relative z-10 mt-2 flex-1 overflow-hidden pb-8 pr-2 md:pb-36 md:pr-4 lg:min-h-0">
        {service?.backgroundImage && (
          <div className="pointer-events-none absolute inset-x-0 bottom-32 -top-2.5 z-0 md:bottom-16">
            <Image
              src={service.backgroundImage}
              alt={service.title}
              fill
              priority
              unoptimized
              className="object-contain object-center opacity-35 mix-blend-screen"
            />
          </div>
        )}
        <ServiceDashboard service={service} />
      </div>
      {isHome && <ConsultingCta />}
      <BusinessFooter />
    </section>
  );
}
