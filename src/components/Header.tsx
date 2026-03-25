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
        scrolled ? "bg-[#050505]/95 backdrop-blur-md py-4" : "bg-[#050505] py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center bg-white text-black">
            <Layers className="h-5 w-5" />
          </div>
          <span className="text-lg font-medium text-white tracking-wide uppercase">SystemPro</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={onCtaClick}
            className="text-xs font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
          >
            Связаться
          </button>
        </div>
      </div>
    </header>
  );
}
