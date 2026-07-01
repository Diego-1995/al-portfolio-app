"use client";

import { useState } from "react";

import { services } from "@/components/automa/services-data";
import { HeroPanel } from "@/components/automa/hero-panel";
import { ServicesSidebar } from "@/components/automa/services-sidebar";

export function AutomaLanding() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    null,
  );

  const selectedService =
    services.find((service) => service.id === selectedServiceId) ?? null;

  return (
    <main className="automa-grid min-h-screen text-white lg:h-dvh lg:overflow-hidden">
      <div className="grid min-h-screen lg:h-dvh lg:min-h-0 lg:grid-cols-[310px_1fr]">
        <ServicesSidebar
          selectedServiceId={selectedServiceId}
          onSelectService={setSelectedServiceId}
        />
        <HeroPanel service={selectedService} />
      </div>
    </main>
  );
}
