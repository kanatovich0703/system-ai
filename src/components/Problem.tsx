import { motion } from "motion/react";
import { Clock, UserMinus, MessageSquareOff, ShieldAlert } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Не ответили вовремя",
  },
  {
    icon: UserMinus,
    title: "Клиент задал вопрос и пропал",
  },
  {
    icon: MessageSquareOff,
    title: "Переписка потерялась",
  },
  {
    icon: ShieldAlert,
    title: "Нет контроля заявок",
  },
];

export function Problem() {
  return (
    <section className="bg-[#050505] py-24 lg:py-32 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 lg:mb-24 text-center">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white">
            Где бизнес теряет клиентов
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div 
                key={index} 
                className="bg-[#0a0a0a] border border-white/5 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-white/10 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:border-red-500/30 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] transition-all">
                  <Icon className="w-6 h-6 text-zinc-500 group-hover:text-red-400 transition-colors" />
                </div>
                <h3 className="text-lg font-medium text-white leading-snug">{problem.title}</h3>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="max-w-3xl mx-auto text-center bg-red-500/5 border border-red-500/10 p-8 sm:p-10 shadow-[0_10px_40px_rgba(239,68,68,0.05)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xl sm:text-2xl font-medium text-white tracking-tight">
            В итоге часть клиентов просто <span className="text-red-400">не доходит до сделки</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
