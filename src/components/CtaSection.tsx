import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface CtaSectionProps {
  onCtaClick: () => void;
}

export function CtaSection({ onCtaClick }: CtaSectionProps) {
  return (
    <section className="bg-transparent py-20 lg:py-48 border-t border-blue-900/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
          className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Готовы перестать <br className="hidden sm:block" />
          терять клиентов?
        </motion.h2>
        
        <motion.p 
          className="text-xl sm:text-2xl text-zinc-400 font-light mb-16 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Разберём, где у вас теряются заявки и как выстроить систему, которая будет привлекать и обрабатывать клиентов без потерь
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={onCtaClick}
            className="bg-blue-600 text-white px-12 py-6 sm:px-16 sm:py-8 text-lg sm:text-xl font-medium lg:hover:bg-blue-500 active:bg-blue-700 transition-all shadow-[0_0_50px_rgba(37,99,235,0.5)] lg:hover:shadow-[0_0_80px_rgba(37,99,235,0.7)] active:shadow-[0_0_30px_rgba(37,99,235,0.5)] lg:hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] uppercase tracking-widest flex items-center gap-4 mx-auto"
          >
            Связаться и обсудить проект
            <ArrowRight className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
