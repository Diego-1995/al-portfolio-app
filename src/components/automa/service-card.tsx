import type { AutomaService } from "@/components/automa/types";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: AutomaService;
  isSelected: boolean;
  onSelect: () => void;
};

export function ServiceCard({
  service,
  isSelected,
  onSelect,
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onSelect}
      className={cn(
        "group rounded-lg border border-primary/25 bg-card/80 px-4 py-6 text-center shadow-[inset_0_0_30px_rgba(95,255,140,0.05),0_0_18px_rgba(95,255,140,0.18)] transition hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary lg:flex lg:h-full lg:min-h-0 lg:flex-col lg:items-center lg:justify-center lg:px-3 lg:py-4",
        isSelected &&
          "border-primary/90 bg-primary/15 shadow-[inset_0_0_30px_rgba(95,255,140,0.12),0_0_26px_rgba(95,255,140,0.45)]",
      )}
    >
      <Icon className="mx-auto mb-4 size-10 text-primary drop-shadow-[0_0_14px_rgba(95,255,140,0.9)] transition group-hover:scale-110" />
      <h2 className="mb-2 text-xl font-medium text-white">{service.title}</h2>
      <p className="text-sm leading-relaxed text-[#d6dfdc]">
        {service.description}
      </p>
    </button>
  );
}
