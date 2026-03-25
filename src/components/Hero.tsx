import { motion } from "motion/react";
import { ArrowRight, Target, MessageSquare, Cpu, Database, TrendingUp } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-black overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text & CTA */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-blue-500 text-xs font-mono tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-blue-500"></span>
                Управление продажами
              </p>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-medium tracking-tighter text-white mb-8 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Система, которая <br/>
              <span className="text-zinc-500">не теряет</span> клиентов.
            </motion.h1>
            
            <motion.p 
              className="text-lg leading-relaxed text-zinc-400 mb-10 font-light max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Внедряем связку: Таргетированная реклама + AI-обработка + CRM. 
              Автоматизируем рутину, повышаем конверсию, делаем бизнес прозрачным.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={onCtaClick}
                className="bg-white text-black px-8 py-4 text-sm font-medium hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] uppercase tracking-widest flex items-center gap-3"
              >
                Внедрить систему
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Right Side: Visual System with Depth */}
          <motion.div 
            className="relative w-full max-w-lg mx-auto lg:ml-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Main Dashboard Panel */}
            <div className="relative z-10 bg-[#0a0a0a] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-6 sm:p-8 rounded-sm">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                </div>
                <div className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">Pipeline.Core</div>
              </div>

              {/* Flow Nodes */}
              <div className="space-y-4 relative">
                {/* Connecting Line */}
                <div className="absolute left-6 top-6 bottom-6 w-px bg-white/5 z-0"></div>

                {/* Node 1: Traffic */}
                <div className="relative z-10 flex items-center gap-4 p-4 bg-[#111111] border border-white/5 shadow-lg transition-transform hover:translate-x-1">
                  <div className="w-10 h-10 bg-black border border-white/10 flex items-center justify-center shrink-0">
                    <Target className="text-blue-500 w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm text-white font-medium">Таргетированная реклама</div>
                    <div className="text-xs text-zinc-500 font-light mt-0.5">Генерация целевых лидов</div>
                  </div>
                </div>

                {/* Node 2: AI Processing */}
                <div className="relative z-10 flex items-center gap-4 p-4 bg-blue-500/5 border border-blue-500/20 shadow-[0_10px_30px_rgba(59,130,246,0.05)] ml-4 transition-transform hover:translate-x-1">
                  <div className="w-10 h-10 bg-black border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Cpu className="text-blue-400 w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm text-white font-medium">AI-Квалификация</div>
                    <div className="text-xs text-blue-400/70 font-light mt-0.5">Мгновенный ответ и скоринг</div>
                  </div>
                </div>

                {/* Node 3: CRM */}
                <div className="relative z-10 flex items-center gap-4 p-4 bg-[#111111] border border-white/5 shadow-lg ml-8 transition-transform hover:translate-x-1">
                  <div className="w-10 h-10 bg-black border border-white/10 flex items-center justify-center shrink-0">
                    <Database className="text-zinc-300 w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm text-white font-medium">CRM Система</div>
                    <div className="text-xs text-zinc-500 font-light mt-0.5">Постановка задач менеджеру</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Metric Card 1 */}
            <motion.div 
              className="absolute -right-6 sm:-right-12 top-1/4 z-20 bg-[#0a0a0a] border border-white/10 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Конверсия</span>
              </div>
              <div className="text-2xl text-white font-medium">42.8%</div>
            </motion.div>

            {/* Floating Metric Card 2 */}
            <motion.div 
              className="absolute -left-6 sm:-left-12 bottom-1/4 z-20 bg-[#0a0a0a] border border-white/10 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="w-4 h-4 text-zinc-400" />
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Скорость ответа</span>
              </div>
              <div className="text-2xl text-white font-medium">&lt; 1 мин</div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
