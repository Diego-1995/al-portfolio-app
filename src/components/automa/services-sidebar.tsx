import { services } from "@/components/automa/services-data";
import { ServiceCard } from "@/components/automa/service-card";
import { Button } from "@/components/ui/button";

type ServicesSidebarProps = {
  selectedServiceId: string | null;
  onSelectService: (serviceId: string | null) => void;
};

export function ServicesSidebar({
  selectedServiceId,
  onSelectService,
}: ServicesSidebarProps) {
  return (
    <aside className="relative z-10 border-b-2 border-primary bg-sidebar/95 px-5 py-5 shadow-[10px_0_40px_rgba(0,0,0,0.45)] lg:flex lg:h-dvh lg:flex-col lg:overflow-hidden lg:border-b-0 lg:border-r-4">
      <Button
        variant="outline"
        onClick={() => onSelectService(null)}
        className="mb-5 h-11 w-full shrink-0 cursor-pointer rounded-[7px] border-primary/70 bg-transparent text-xs uppercase tracking-[0.18em] text-[var(--automa-green-soft)] shadow-none hover:bg-primary/10 hover:text-primary"
      >
        Scopri i nostri progetti
      </Button>

      <div className="grid gap-4 sm:grid-cols-3 lg:min-h-0 lg:flex-1 lg:grid-cols-1 lg:grid-rows-3">
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
