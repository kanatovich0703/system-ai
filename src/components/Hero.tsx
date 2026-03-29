import { motion } from "motion/react";
import { ArrowRight, Target, MessageCircle, Cpu, Database, CheckCircle2 } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";

interface HeroProps {
  onCtaClick: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  const flowSteps = [
    { 
      icon: Target, 
      label: "Таргетированная реклама" 
    },
    { 
      icon: MessageCircle, 
      labelLogos: [
        { type: 'icon', component: FaWhatsapp, color: "#25D366" },
        { type: 'icon', component: FaInstagram, color: "#E1306C" },
        { type: 'icon', component: FaTelegramPlane, color: "#0088CC" },
      ],
      label: "сообщения" 
    },
    { 
      icon: Cpu, 
      labelLogos: [
        { type: 'icon', component: SiOpenai, color: "#FFFFFF" }
      ],
      label: "AI агент" 
    },
    { 
      icon: Database, 
      label: "CRM" 
    },
    { 
      icon: CheckCircle2, 
      label: "Сделка" 
    },
  ];

  return (
    <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-40 bg-transparent overflow-hidden border-b border-white/5">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center lg:items-start">
          
          {/* Left Side: Text & CTA */}
          <div className="max-w-2xl">
            <motion.h1 
              className="text-6xl sm:text-7xl lg:text-[5.5rem] font-medium tracking-tighter text-white mb-8 leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Система, которая <br/>
              <span className="text-blue-500 font-bold">не теряет</span> клиентов.
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl leading-relaxed text-zinc-400 mb-12 font-light max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Внедряю связку: таргетированная реклама + AI-обработка + CRM, 
              чтобы заявки не терялись и больше клиентов доходили до сделки.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={() => {
                  if (typeof (window as any).fbq === 'function') {
                    (window as any).fbq('trackCustom', 'ClickDiscussProject');
                  }
                  onCtaClick();
                }}
                className="bg-blue-600 text-white px-10 py-6 sm:px-12 sm:py-6 text-lg font-medium lg:hover:bg-blue-500 active:bg-blue-700 transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] lg:hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] active:shadow-[0_0_20px_rgba(37,99,235,0.4)] lg:hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] uppercase tracking-widest flex items-center gap-4 w-full sm:w-auto justify-center"
              >
                Связаться и обсудить проект
                <ArrowRight className="w-6 h-6" />
              </button>
              <p className="mt-5 text-sm text-zinc-500 font-light text-center sm:text-left max-w-sm">
                Покажу, где у вас сейчас теряются заявки и что можно улучшить
              </p>
            </motion.div>
          </div>

          {/* Right Side: Visual System */}
          <motion.div 
            className="relative w-full max-w-md mx-auto lg:ml-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative z-10 bg-[#050505] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-8 rounded-sm lg:scale-[1.15] xl:scale-[1.25] lg:origin-top lg:mt-2">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:1rem_1rem] pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-8 relative z-10">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                  <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                  <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                </div>
                <div className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">Pipeline Flow</div>
              </div>

              <div className="relative z-10 space-y-6">
                {/* Vertical connecting line */}
                <div className="absolute left-[1.15rem] top-4 bottom-4 w-px bg-white/10 z-0">
                  <motion.div 
                    className="w-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                    initial={{ height: "0%" }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                  />
                </div>

                {flowSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="relative z-10 flex items-center gap-6 group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center shrink-0 lg:group-hover:border-blue-500/50 lg:group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] group-active:border-blue-500/50 group-active:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                        <Icon className="w-4 h-4 text-zinc-400 lg:group-hover:text-blue-400 group-active:text-blue-400 transition-colors" />
                      </div>
                      <div className="text-sm font-medium text-zinc-300 lg:group-hover:text-white group-active:text-white transition-colors flex items-center gap-2 flex-wrap">
                        {step.labelLogos && (
                          <div className="flex items-center gap-1.5">
                            {step.labelLogos.map((logo, idx) => {
                              if (logo.type === 'icon' && logo.component) {
                                const LogoIcon = logo.component;
                                return <LogoIcon key={idx} className="w-4 h-4" style={{ color: logo.color }} />;
                              } else if (logo.type === 'image' && logo.src) {
                                return <img key={idx} src={logo.src} alt={logo.alt} className="w-4 h-4 object-contain rounded-sm" referrerPolicy="no-referrer" />;
                              }
                              return null;
                            })}
                          </div>
                        )}
                        <span>{step.label}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
