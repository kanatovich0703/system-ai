import { motion } from "motion/react";
import { Briefcase, GraduationCap, Scissors, Store } from "lucide-react";

const businesses = [
  { name: "Услуги", icon: Briefcase },
  { name: "Онлайн-школы", icon: GraduationCap },
  { name: "Салоны", icon: Scissors },
  { name: "Локальный бизнес", icon: Store },
];

export function Trust() {
  return (
    <section className="bg-[#050505] py-24 lg:py-32 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-2xl sm:text-3xl font-medium text-zinc-400 mb-16 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          С какими бизнесами работаю
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 lg:gap-24">
          {businesses.map((biz, index) => {
            const Icon = biz.icon;
            return (
              <motion.div 
                key={index}
                className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.7, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Icon className="w-6 h-6 text-zinc-500" />
                <span className="text-xl font-medium text-white">{biz.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
