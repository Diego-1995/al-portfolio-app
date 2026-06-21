export function MachineIllustration() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[92%] z-0 hidden h-[260px] opacity-55 md:block lg:top-[86%]">
      <RobotArm />

      <div className="neon-line absolute left-[24%] top-[19%] w-[34%]" />
      <div className="neon-line absolute left-[29%] top-[29%] w-[41%]" />
      <div className="neon-line absolute left-[27%] top-[40%] w-[49%]" />
      <div className="neon-line absolute left-[32%] top-[53%] w-[45%]" />
      <div className="neon-line absolute left-[41%] top-[70%] w-[38%]" />

      <div className="neon-gear absolute left-[49%] top-[12%] size-28 lg:size-32" />
      <div className="neon-gear absolute left-[63%] top-[24%] size-24 lg:size-28" />
      <div className="neon-gear absolute bottom-[6%] right-[11%] size-24 lg:size-28" />

      <div className="absolute right-[5%] top-[31%] h-7 w-[42%] rotate-[-18deg] border-2 border-primary/75 shadow-[0_0_18px_rgba(95,255,140,0.65)]" />
      <div className="absolute right-[2%] top-[42%] h-20 w-[43%] rotate-[-18deg] border-2 border-primary/65" />
      <div className="absolute bottom-[5%] left-[16%] h-[74px] w-[34%] rotate-[-12deg] border-2 border-primary/65 shadow-[0_0_18px_rgba(95,255,140,0.35)]" />
    </div>
  );
}

function RobotArm() {
  return (
    <div className="absolute bottom-[9%] left-[3%] h-[240px] w-[220px] drop-shadow-[0_0_18px_rgba(95,255,140,0.55)]">
      <div className="robot-part absolute bottom-0 left-9 h-[54px] w-[120px] rounded-[50%]" />
      <div className="robot-part absolute bottom-[44px] left-24 h-[126px] w-[34px] rotate-[28deg] rounded-[20px]" />
      <div className="robot-part absolute bottom-[142px] left-[128px] size-[48px] rounded-full" />
      <div className="robot-part absolute bottom-[142px] left-[155px] h-[126px] w-[34px] rotate-[-55deg] rounded-[20px]" />
    </div>
  );
}
