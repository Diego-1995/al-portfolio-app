import { Camera } from "lucide-react";
import Link from "next/link";

export function ConsultingCta() {
  return (
    <div className="relative z-20 mx-auto mt-8 max-w-sm text-center md:absolute md:bottom-24 md:right-14 md:mt-0">
      <p className="mb-2 text-2xl font-bold lowercase text-[#c9f4cb] drop-shadow-[0_0_15px_rgba(95,255,140,0.9)]">
        consulenza gratuita
      </p>
      <Link
        href="/descrivi-idea"
        className="flex items-center justify-center gap-4 rounded-[18px] border-2 border-[#beffaf]/90 bg-[#3c5f32]/45 px-5 py-4 text-xl font-bold leading-tight text-[#eaffdf] no-underline shadow-[0_0_25px_rgba(143,255,158,0.8),inset_0_0_20px_rgba(143,255,158,0.25)] transition hover:scale-[1.02] hover:bg-[#3c5f32]/60 md:px-6 md:py-5 md:text-[28px]"
      >
        <Camera className="size-10 shrink-0" />
        <span>
          descrivi la tua idea
          <br />o il tuo problema
        </span>
      </Link>
    </div>
  );
}
