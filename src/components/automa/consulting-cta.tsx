import { PenLine } from "lucide-react";

export function ConsultingCta() {
  return (
    <div className="relative z-10 mx-auto mt-10 max-w-sm text-center lg:absolute lg:bottom-24 lg:right-6 lg:mt-0">
      <p className="mb-2 text-2xl font-bold lowercase text-[#c9f4cb] drop-shadow-[0_0_15px_rgba(95,255,140,0.9)]">
        consulenza gratuita
      </p>
      <a
        href="mailto:info@automaprogetti.com"
        className="flex items-center justify-center gap-4 rounded-[18px] border-2 border-[#beffaf]/90 bg-[#3c5f32]/45 px-6 py-5 text-2xl font-bold leading-tight text-[#eaffdf] no-underline shadow-[0_0_25px_rgba(143,255,158,0.8),inset_0_0_20px_rgba(143,255,158,0.25)] transition hover:scale-[1.02] hover:bg-[#3c5f32]/60 md:text-[28px]"
      >
        <PenLine className="size-10 shrink-0" />
        <span>
          descrivi la tua idea
          <br />o il tuo problema
        </span>
      </a>
    </div>
  );
}
