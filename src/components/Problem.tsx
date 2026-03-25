import { motion } from "motion/react";

const problems = [
  {
    id: "ERR_01",
    title: "Долгий ответ",
    description: "Клиент написал — не ответили вовремя. Каждая минута ожидания снижает шанс на продажу.",
  },
  {
    id: "ERR_02",
    title: "Слив диалога",
    description: "Нет скриптов, нет понимания, как закрывать возражения. Диалог обрывается.",
  },
  {
    id: "ERR_03",
    title: "Потеря контакта",
    description: "Менеджер забыл перезвонить или написать. Клиент остыл и ушел к конкурентам.",
  },
  {
    id: "ERR_04",
    title: "Слепая зона",
    description: "Нет системы, где всё фиксируется. Вы не знаете реальную конверсию из заявки в оплату.",
  },
];

export function Problem() {
  return (
    <section className="bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-zinc-500 text-xs font-mono tracking-[0.2em] uppercase mb-4">Анализ потерь</p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
              Где бизнес теряет деньги
            </h2>
          </div>
          <p className="text-zinc-400 font-light max-w-sm text-sm">
            Отсутствие системы на этапе обработки заявок приводит к потере до 60% потенциальной выручки.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div 
              key={problem.id} 
              className="bg-[#0a0a0a] border border-white/5 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-white/10 hover:shadow-[0_15px_40px_rgba(0,0,0,0.7)] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-2 h-2 rounded-full bg-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                <span className="text-zinc-600 font-mono text-xs">{problem.id}</span>
              </div>
              <h3 className="text-lg font-medium text-white mb-3 leading-snug">{problem.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
