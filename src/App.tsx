import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Results } from "./components/Results";
import { Trust } from "./components/Trust";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";
import { CtaModal } from "./components/CtaModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#03040B] text-zinc-300 font-sans selection:bg-blue-500/30 relative">
      {/* Global Tech Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0B1026] via-[#03040B] to-[#03040B]"></div>
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Soft Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header onCtaClick={openModal} />
        
        <main className="flex-grow">
          <Hero onCtaClick={openModal} />
          <Problem />
          <Solution />
          <Results />
          <Trust />
          <CtaSection onCtaClick={openModal} />
        </main>

        <Footer />
      </div>
      
      <CtaModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
