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
    <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-blue-500/30">
      <Header onCtaClick={openModal} />
      
      <main>
        <Hero onCtaClick={openModal} />
        <Problem />
        <Solution />
        <Results />
        <Trust />
        <CtaSection onCtaClick={openModal} />
      </main>

      <Footer />
      
      <CtaModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
