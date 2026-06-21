"use client";

import { useState } from "react";

import { services } from "@/components/automa/services-data";
import { HeroPanel } from "@/components/automa/hero-panel";
import { ServicesSidebar } from "@/components/automa/services-sidebar";

export function AutomaLanding() {
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);

  const selectedService =
    services.find((service) => service.id === selectedServiceId) ?? services[0];

  return (
    <main className="automa-grid min-h-screen overflow-hidden text-white">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <ServicesSidebar
          selectedServiceId={selectedService.id}
          onSelectService={setSelectedServiceId}
        />
        <HeroPanel service={selectedService} />
      </div>
    </main>
  );
}
