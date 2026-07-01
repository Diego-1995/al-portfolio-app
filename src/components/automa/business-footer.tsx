export function BusinessFooter() {
  return (
    <footer className="relative z-10 mt-8 px-4 pb-4 text-center text-[#c7c7c7] drop-shadow-[0_0_12px_#000] md:absolute md:inset-x-4 md:bottom-4 md:mt-0 md:p-0">
      <h2 className="mb-1 text-lg font-normal md:text-[23px]">
        Progettazione Meccanica e Automazione Industriale su Misura
      </h2>
      <p className="text-sm text-[#aaa] md:text-[17px]">
        AUTOMA via Vincenzo Chiarugi, 166 - 45100 Rovigo -{" "}
        <a
          className="text-[#8edfa5] underline-offset-4 hover:underline"
          href="mailto:info@automaprogetti.com"
        >
          info@automaprogetti.com
        </a>{" "}
        - cell.3336872605
      </p>
    </footer>
  );
}
