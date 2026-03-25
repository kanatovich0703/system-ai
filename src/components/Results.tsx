import { motion } from "motion/react";
import { ShieldCheck, Zap, LayoutDashboard, TrendingUp } from "lucide-react";

const results = [
  {
    icon: ShieldCheck,
    title: "Ни одна заявка не теряется",
    desc: "Каждый клиент фиксируется и остаётся под контролем",
  },
  {
    icon: Zap,
    title: "Мгновенная обработка",
    desc: "Клиенты получают ответ сразу, без ожидания",
  },
  {
    icon: LayoutDashboard,
    title: "Прозрачная система",
    desc: "Вся работа с клиентами в CRM, без хаоса",
  },
  {
    icon: TrendingUp,
    title: "Рост конверсии",
    desc: "Больше клиентов доходят до оплаты",
  },
];

export function Results() {
  return (
    <section className="bg-black py-24 lg:py-40 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 lg:mb-28 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white">
            Результат внедрения
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <motion.div 
                key={index}
                className="bg-[#0a0a0a] border border-white/5 p-10 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-white/10 hover:shadow-[0_30px_60px_rgba(0,0,0,0.7)] transition-all duration-300 flex flex-col sm:flex-row gap-8 items-start group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-[#111111] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300">
                  <Icon className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-white mb-4">{result.title}</h3>
                  <p className="text-lg text-zinc-400 font-light leading-relaxed">{result.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
