import { motion } from "motion/react";
import { Briefcase, GraduationCap, Users, Store } from "lucide-react";

const businesses = [
  { name: "Малый бизнес с входящими заявками", icon: Briefcase },
  { name: "Сервисные компании", icon: Store },
  { name: "Консультационные услуги", icon: Users },
  { name: "Онлайн-школы и эксперты", icon: GraduationCap },
];

export function Trust() {
  return (
    <section className="bg-[#050505] py-16 lg:py-32 border-b border-white/5">
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
        
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {businesses.map((biz, index) => {
            const Icon = biz.icon;
            return (
              <motion.div 
                key={index}
                className="group flex items-center gap-5 p-3 pr-8 rounded-full bg-[#0a0a0a] border border-white/5 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:bg-[#111111] transition-all duration-500 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-500">
                  <Icon className="w-8 h-8 text-zinc-500 group-hover:text-blue-400 transition-colors duration-500" />
                </div>
                <span className="text-lg sm:text-xl font-medium text-zinc-300 group-hover:text-white transition-colors duration-500">{biz.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
