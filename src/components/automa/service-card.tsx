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
        "group cursor-pointer rounded-lg border-2 border-primary/55 bg-card/80 px-5 py-4 text-center shadow-[0_0_24px_rgba(143,255,158,0.48),inset_0_0_24px_rgba(143,255,158,0.12)] transition hover:-translate-y-0.5 hover:border-primary/90 hover:bg-primary/10 hover:shadow-[0_0_30px_rgba(143,255,158,0.68),inset_0_0_26px_rgba(143,255,158,0.16)] focus-visible:ring-2 focus-visible:ring-primary md:py-6 lg:flex lg:h-full lg:min-h-0 lg:flex-col lg:items-center lg:justify-center lg:px-5 lg:py-4",
        isSelected &&
          "border-[#beffaf]/95 bg-primary/15 shadow-[0_0_34px_rgba(143,255,158,0.8),inset_0_0_24px_rgba(143,255,158,0.24)]",
      )}
    >
      <Icon className="mx-auto mb-3 size-8 text-primary drop-shadow-[0_0_14px_rgba(95,255,140,0.9)] transition group-hover:scale-110 md:mb-4 md:size-10" />
      <h2 className="mb-2 text-lg font-medium text-white md:text-xl">
        {service.title}
      </h2>
      <p className="text-xs leading-relaxed text-[#d6dfdc] md:text-sm">
        {service.description}
      </p>
    </button>
  );
}
