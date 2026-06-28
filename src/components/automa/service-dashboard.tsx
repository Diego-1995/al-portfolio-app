import type { AutomaService } from "@/components/automa/types";
type ServiceDashboardProps = {
  service: AutomaService | null;
};

export function ServiceDashboard({ service }: ServiceDashboardProps) {
  if (!service) {
    return <div className="relative z-10 h-full w-full" />;
  }

  return (
    <div className="relative z-10 flex h-full min-h-[min(620px,72dvh)] w-full items-end p-5 md:p-8 lg:min-h-0 lg:items-center">
      <div className="w-full max-w-2xl rounded-[28px] border border-primary/35 bg-black/58 p-6 shadow-[0_0_34px_rgba(95,255,140,0.22),inset_0_0_30px_rgba(95,255,140,0.08)] backdrop-blur-md md:p-8 lg:max-w-[58%]">
        <h2 className="mb-3 text-3xl font-bold leading-tight text-white md:text-5xl">
          {service.dashboardTitle}
        </h2>
        <p className="text-base leading-7 text-[#d6dfdc] md:text-lg">
          {service.dashboardDescription}
        </p>
      </div>
    </div>
  );
}
