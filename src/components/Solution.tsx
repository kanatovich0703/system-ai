import { motion } from "motion/react";
import { Target, MessageCircle, Cpu, Database, TrendingUp, ArrowRight } from "lucide-react";

const pipeline = [
  {
    id: "01",
    title: "Привлекаем клиентов через рекламу",
    icon: Target,
  },
  {
    id: "02",
    title: "Клиент пишет",
    icon: MessageCircle,
  },
  {
    id: "03",
    title: "Заявка обрабатывается (AI или менеджер)",
    icon: Cpu,
  },
  {
    id: "04",
    title: "Данные фиксируются в CRM",
    icon: Database,
  },
  {
    id: "05",
    title: "Больше клиентов доходят до сделки",
    icon: TrendingUp,
  },
];

export function Solution() {
  return (
    <section className="bg-[#0a0a0a] py-24 lg:py-40 border-b border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6">
            Как выстраивается система
          </h2>
        </div>

        <div className="relative mt-16 lg:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
            {pipeline.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={step.id}
                  className="relative group flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-20 h-20 bg-[#050505] border border-white/10 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-8 relative z-10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300">
                    <Icon className="w-8 h-8 text-blue-500" />
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-black border border-white/10 flex items-center justify-center text-[10px] font-mono text-zinc-500">
                      {step.id}
                    </div>
                  </div>
                  
                  <h3 className="text-base font-medium text-zinc-300 leading-snug px-2">{step.title}</h3>

                  {/* Arrow connecting cards (Desktop only) */}
                  {index !== pipeline.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-6 z-0 -translate-y-1/2 text-white/10">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                  {/* Arrow connecting cards (Mobile only) */}
                  {index !== pipeline.length - 1 && (
                    <div className="block lg:hidden my-6 text-white/10">
                      <ArrowRight className="w-6 h-6 rotate-90" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
