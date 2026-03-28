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
    <section className="bg-[#050505] py-16 lg:py-40 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 lg:mb-28 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white">
            Где бизнес теряет клиентов
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24 lg:mb-32">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div 
                key={index} 
                className="bg-[#0a0a0a] border border-white/5 p-10 lg:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.5)] lg:hover:bg-[#111111] lg:hover:border-white/10 lg:hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] active:bg-[#111111] active:scale-[0.98] transition-all duration-300 flex flex-col items-center text-center group animate-breathe lg:animate-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-black border border-white/10 flex items-center justify-center mb-8 lg:group-hover:border-red-500/40 lg:group-hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] group-active:border-red-500/40 group-active:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-300">
                  <Icon className="w-7 h-7 text-zinc-500 lg:group-hover:text-red-400 group-active:text-red-400 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-medium text-white leading-snug lg:group-hover:text-red-50 group-active:text-red-50 transition-colors duration-300">{problem.title}</h3>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="max-w-5xl mx-auto text-center bg-[#1a0505] border border-red-500/30 p-16 sm:p-24 shadow-[0_0_100px_rgba(220,38,38,0.15)] relative overflow-hidden rounded-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full scale-150 pointer-events-none"></div>
          <p className="relative z-10 text-3xl sm:text-5xl font-medium text-white tracking-tight leading-tight">
            В итоге часть клиентов просто <br className="hidden sm:block" />
            <span className="text-red-500 font-bold">не доходит до сделки</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
