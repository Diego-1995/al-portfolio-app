import { services } from "@/components/automa/services-data";
import { ServiceCard } from "@/components/automa/service-card";
import { Button } from "@/components/ui/button";

type ServicesSidebarProps = {
  selectedServiceId: string;
  onSelectService: (serviceId: string) => void;
};

export function ServicesSidebar({
  selectedServiceId,
  onSelectService,
}: ServicesSidebarProps) {
  return (
    <aside className="relative z-10 border-b border-sidebar-border bg-sidebar/95 px-5 py-5 shadow-[10px_0_40px_rgba(0,0,0,0.45)] lg:border-b-0 lg:border-r">
      <Button
        variant="outline"
        className="mb-5 h-11 w-full rounded-[7px] border-primary/70 bg-transparent text-xs uppercase tracking-[0.18em] text-[var(--automa-green-soft)] shadow-[0_0_18px_rgba(95,255,140,0.45)] hover:bg-primary/10 hover:text-primary"
      >
        Scopri i nostri progetti
      </Button>

      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isSelected={service.id === selectedServiceId}
            onSelect={() => onSelectService(service.id)}
          />
        ))}
      </div>
    </aside>
  );
}
