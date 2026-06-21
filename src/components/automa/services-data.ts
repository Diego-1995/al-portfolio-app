import { Bot, Cog, Wrench } from "lucide-react";

import type { AutomaService } from "@/components/automa/types";

export const services: AutomaService[] = [
  {
    id: "attrezzature-jigs",
    title: "Attrezzature & Jigs",
    eyebrow: "Precisione produttiva",
    description:
      "Progettazione di orcini di bloccaggio e appoggio di alta precisione per linee produttive.",
    dashboardTitle: "Attrezzature dedicate alla tua linea",
    dashboardDescription:
      "Trasformiamo vincoli produttivi, ergonomia e tolleranze in attrezzature robuste, replicabili e facili da integrare in reparto.",
    highlights: [
      "Analisi pezzo e ciclo di lavorazione",
      "Sistemi di bloccaggio, controllo e appoggio",
      "Disegni costruttivi pronti per officina e fornitori",
    ],
    stats: ["0.02 mm", "CAD 3D", "Linee lean"],
    icon: Wrench,
  },
  {
    id: "impianti-speciali",
    title: "Impianti Speciali",
    eyebrow: "Automazione su misura",
    description:
      "Sviluppo di macchine, sistemi e automazioni dedicate a esigenze produttive specifiche.",
    dashboardTitle: "Macchine speciali dalla specifica al collaudo",
    dashboardDescription:
      "Progettiamo architetture meccaniche e sistemi automatici quando le soluzioni standard non bastano o rallentano il processo.",
    highlights: [
      "Concept meccanico e layout impianto",
      "Integrazione sensori, attuatori e sicurezza",
      "Documentazione tecnica per costruzione e manutenzione",
    ],
    stats: ["Layout", "Safety", "FAT/SAT"],
    icon: Cog,
  },
  {
    id: "isole-robotizzate",
    title: "Isole Robotizzate",
    eyebrow: "Robotica industriale",
    description:
      "Integrazione di sistemi robotizzati per movimentazione, assemblaggio e picking.",
    dashboardTitle: "Celle robotiche per processi ripetibili",
    dashboardDescription:
      "Definiamo prese, percorsi, asservimenti e interfacce per rendere stabile il processo e ridurre interventi manuali a basso valore.",
    highlights: [
      "Studio gripper e cinematica di cella",
      "Movimentazione, assemblaggio e picking",
      "Layout con accessibilità, protezioni e manutenzione",
    ],
    stats: ["Gripper", "Picking", "ROI"],
    icon: Bot,
  },
];
