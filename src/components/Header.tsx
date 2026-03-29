import { useState, useEffect } from "react";
import { Layers } from "lucide-react";

interface HeaderProps {
  onCtaClick: () => void;
}

export function Header({ onCtaClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 border-b border-white/5 ${
        scrolled ? "bg-[#03040B]/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center bg-white text-black shrink-0">
            <Layers className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <span className="text-sm sm:text-lg font-medium text-white tracking-wide uppercase truncate">FlowSystems</span>
        </div>
        
        <div className="flex items-center shrink-0">
          <button
            onClick={onCtaClick}
            className="text-[10px] sm:text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 sm:px-5 sm:py-2 lg:hover:bg-blue-500/20 lg:hover:border-blue-500/40 lg:hover:text-blue-300 lg:hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] active:scale-95 active:bg-blue-500/30 transition-all duration-300 uppercase tracking-widest shrink-0"
          >
            Связаться
          </button>
        </div>
      </div>
    </header>
  );
}
