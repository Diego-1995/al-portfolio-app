import Link from "next/link";

import type { AutomaService } from "@/components/automa/types";
import { Brand } from "@/components/automa/brand";
import { BusinessFooter } from "@/components/automa/business-footer";
import { ConsultingCta } from "@/components/automa/consulting-cta";
import { ServiceDashboard } from "@/components/automa/service-dashboard";

type HeroPanelProps = {
  service: AutomaService;
};

export function HeroPanel({ service }: HeroPanelProps) {
  return (
    <section className="relative flex h-screen min-h-[720px] flex-col overflow-hidden px-5 py-6 md:px-8">
      <Link
        href="/cosa-facciamo"
        className="inline-flex w-fit shrink-0 rounded-2xl border border-white/60 bg-[#192323]/65 px-6 py-3 text-2xl uppercase text-[#b6e9bd] transition hover:border-primary hover:text-primary md:text-3xl"
      >
        Cosa facciamo
      </Link>

      <Brand />
      <div className="theme-scrollbar relative z-10 mt-6 min-h-0 flex-1 overflow-y-auto overflow-x-hidden pb-56 pr-2 md:pr-4">
        <ServiceDashboard service={service} />
      </div>
      <ConsultingCta />
      <BusinessFooter />
    </section>
  );
}
