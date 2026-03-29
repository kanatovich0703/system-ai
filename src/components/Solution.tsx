import { motion } from "motion/react";
import { Target, MessageCircle, Cpu, Database, Phone, ArrowRight } from "lucide-react";

const pipeline = [
  {
    id: "01",
    title: "Привлекаем клиентов через рекламу",
    sub: "входящий поток заявок",
    icon: Target,
  },
  {
    id: "02",
    title: "Клиент пишет",
    sub: "первичный контакт",
    icon: MessageCircle,
  },
  {
    id: "03",
    title: "Заявка обрабатывается",
    sub: "AI или менеджер отвечает",
    icon: Cpu,
  },
  {
    id: "04",
    title: "Данные фиксируются в CRM",
    sub: "контроль и аналитика",
    icon: Database,
  },
  {
    id: "05",
    title: "Менеджер связывается с клиентом",
    sub: "закрытие на сделку",
    icon: Phone,
  },
];

export function Solution() {
  return (
    <section className="bg-transparent py-16 lg:py-40 border-b border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
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
                  <div className="w-24 h-24 bg-[#050505] border border-white/10 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-8 relative z-10 lg:group-hover:border-blue-500/50 lg:group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] group-active:border-blue-500/50 group-active:shadow-[0_0_40px_rgba(59,130,246,0.3)] group-active:scale-95 transition-all duration-300 animate-breathe lg:animate-none">
                    <Icon className="w-10 h-10 text-blue-500" />
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-black border border-white/10 flex items-center justify-center text-[10px] font-mono text-zinc-500">
                      {step.id}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium text-zinc-200 leading-snug px-2 mb-3">{step.title}</h3>
                  <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider px-2">({step.sub})</p>

                  {/* Arrow connecting cards (Desktop only) */}
                  {index !== pipeline.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-8 z-0 -translate-y-1/2 text-white/10 lg:group-hover:text-blue-500/30 transition-colors duration-300">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                  {/* Arrow connecting cards (Mobile only) */}
                  {index !== pipeline.length - 1 && (
                    <div className="block lg:hidden my-8 text-white/10">
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
