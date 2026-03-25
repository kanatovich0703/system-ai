import { motion } from "motion/react";
import { Check } from "lucide-react";

const results = [
  "Ни одна заявка не теряется",
  "Мгновенная обработка 24/7",
  "Прозрачная аналитика в CRM",
  "Рост конверсии в оплату",
];

export function ResultsAndCTA({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section className="bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-12">
              Результат внедрения
            </h2>
            <ul className="flex flex-col gap-6">
              {results.map((result, index) => (
                <motion.li 
                  key={result} 
                  className="flex items-center gap-4 text-lg text-zinc-300 font-light"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/20 shrink-0">
                    <Check className="w-3 h-3 text-blue-400" />
                  </div>
                  {result}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div 
            className="bg-[#0a0a0a] border border-white/10 p-10 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-6">
                Готовы масштабировать продажи?
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-10">
                Оставьте заявку на аудит. Мы разберем вашу текущую воронку и покажем, как автоматизация увеличит вашу прибыль.
              </p>
              <button
                onClick={onCtaClick}
                className="w-full bg-white text-black px-8 py-5 text-sm font-medium hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] uppercase tracking-widest text-center"
              >
                Начать работу
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
