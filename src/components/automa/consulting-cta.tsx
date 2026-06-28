import { Camera } from "lucide-react";
import Link from "next/link";

export function ConsultingCta() {
  return (
    <div className="absolute bottom-32 right-5 z-20 max-w-sm text-center md:right-14 md:bottom-24">
      <p className="mb-2 text-2xl font-bold lowercase text-[#c9f4cb] drop-shadow-[0_0_15px_rgba(95,255,140,0.9)]">
        consulenza gratuita
      </p>
      <Link
        href="/descrivi-idea"
        className="flex items-center justify-center gap-4 rounded-[18px] border-2 border-[#beffaf]/90 bg-[#3c5f32]/45 px-6 py-5 text-2xl font-bold leading-tight text-[#eaffdf] no-underline shadow-[0_0_25px_rgba(143,255,158,0.8),inset_0_0_20px_rgba(143,255,158,0.25)] transition hover:scale-[1.02] hover:bg-[#3c5f32]/60 md:text-[28px]"
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
