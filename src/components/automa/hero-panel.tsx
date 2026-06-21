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
    <section className="relative min-h-[820px] overflow-hidden px-5 py-6 md:px-8 lg:h-screen lg:min-h-0">
      <Link
        href="/cosa-facciamo"
        className="inline-flex rounded-2xl border border-white/60 bg-[#192323]/65 px-6 py-3 text-2xl uppercase text-[#b6e9bd] transition hover:border-primary hover:text-primary md:text-3xl"
      >
        Cosa facciamo
      </Link>

      <Brand />
      <ServiceDashboard service={service} />
      <ConsultingCta />
      <BusinessFooter />
    </section>
  );
}
