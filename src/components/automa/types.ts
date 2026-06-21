import type { LucideIcon } from "lucide-react";

export type AutomaService = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  dashboardTitle: string;
  dashboardDescription: string;
  highlights: string[];
  stats: string[];
  icon: LucideIcon;
};
