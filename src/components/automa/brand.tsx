import Image from "next/image";

export function Brand() {
  return (
    <div className="relative z-10 mx-auto mt-7 w-full max-w-[760px] text-center lg:mt-8">
      <div className="overflow-hidden px-2 drop-shadow-[0_0_18px_rgba(255,255,255,0.22)]">
        <Image
          src="/automa-transparent.png"
          alt="AUTOMA logo"
          width={640}
          height={116}
          priority
          className="mx-auto h-auto w-[103%] max-w-none -translate-x-[1.5%] scale-[1.04]"
        />
      </div>
      <h1 className="whitespace-nowrap text-[clamp(1.75rem,5.2vw,3.65rem)] font-black uppercase leading-none tracking-[0.04em] text-white drop-shadow-[0_0_14px_rgba(0,0,0,0.95)]">
        Ingegneria delle idee
      </h1>
    </div>
  );
}
