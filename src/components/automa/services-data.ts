import { Bot, Cog, Wrench } from "lucide-react";

import type { AutomaService } from "@/components/automa/types";

export const services: AutomaService[] = [
  {
    id: "attrezzature-jigs",
    title: "Attrezzature & Jigs",
    eyebrow: "Precisione produttiva",
    description:
      "Progettazione di orcini di bloccaggio e appoggio di alta precisione per linee produttive.",
    dashboardTitle: "Progettazione su Misura: Dall'Idea all'Automazione",
    dashboardDescription: [
      "Realizziamo attrezzature meccaniche speciali e macchinari personalizzati progettati interamente sulle specifiche necessita del cliente.",
      "Partendo dalle vostre esigenze di produzione, sviluppiamo soluzioni dedicate chiavi in mano: dallo studio di fattibilita al modello 3D fino alla messa in servizio, garantendo massima precisione, innovazione e affidabilita ottimizzata per i vostri processi industriali.",
    ],
    backgroundImage: "/attrezzature-background.png",
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
    dashboardTitle: "Impianti Speciali: Soluzioni Uniche per Sfide Complesse",
    dashboardDescription: [
      "Progettiamo e sviluppiamo impianti industriali speciali su misura, ingegnerizzati per rispondere a specifiche tecniche uniche e non standard.",
      "Dall'analisi preliminare alla configurazione finale, trasformiamo le vostre necessita operative in sistemi completi e integrati.",
      "Realizziamo soluzioni chiavi in mano capaci di superare i vincoli della produzione di serie, garantendo elevata automazione, ottimizzazione dei flussi e totale affidabilita nel tempo.",
    ],
    backgroundImage: "/impianti-speciali-background.png",
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
