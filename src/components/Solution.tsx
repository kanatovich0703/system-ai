import { motion } from "motion/react";
import { Target, MessageCircle, Cpu, Database, CheckCircle2, ArrowRight } from "lucide-react";

const pipeline = [
  {
    id: "01",
    title: "Реклама",
    icon: Target,
    desc: "Генерация целевого трафика из соцсетей и поиска.",
  },
  {
    id: "02",
    title: "Сообщения",
    icon: MessageCircle,
    desc: "Сбор всех входящих заявок в единое окно.",
  },
  {
    id: "03",
    title: "Обработка",
    icon: Cpu,
    desc: "AI-бот отвечает за секунды и квалифицирует лида.",
  },
  {
    id: "04",
    title: "CRM",
    icon: Database,
    desc: "Автоматическое создание карточки сделки и задачи.",
  },
  {
    id: "05",
    title: "Сделка",
    icon: CheckCircle2,
    desc: "Менеджер закрывает теплого клиента на оплату.",
  },
];

export function Solution() {
  return (
    <section className="bg-[#050505] py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-6">
            Бесперебойный конвейер продаж
          </h2>
          <p className="text-zinc-400 font-light text-lg">
            Мы выстраиваем архитектуру, в которой каждый этап логично перетекает в следующий. Никаких ручных переносов и потерянных данных.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {pipeline.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={step.id}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-full bg-[#0a0a0a] border border-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:border-white/10 transition-all duration-300 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-10 h-10 bg-[#111111] border border-white/10 flex items-center justify-center shadow-inner">
                        <Icon className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-xs font-mono text-zinc-600">{step.id}</span>
                    </div>
                    
                    <h3 className="text-lg font-medium text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed flex-grow">{step.desc}</p>
                  </div>

                  {/* Arrow connecting cards (Desktop only) */}
                  {index !== pipeline.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 z-20 -translate-y-1/2 text-zinc-600">
                      <ArrowRight className="w-5 h-5" />
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
