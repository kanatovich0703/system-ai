import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Loader2, MessageSquare } from "lucide-react";

interface CtaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CtaModal({ isOpen, onClose }: CtaModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !businessType) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after a few seconds and close
      setTimeout(() => {
        setIsSuccess(false);
        setName("");
        setPhone("");
        setBusinessType("");
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 p-4"
          >
            <div className="relative overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 p-2 text-zinc-500 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-8 sm:p-10 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center bg-blue-500/10 text-blue-500">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-medium text-white tracking-tight">Обсудим ваш проект</h3>
                </div>
                
                <p className="text-sm text-zinc-400 font-light mb-8 leading-relaxed">
                  Оставьте контакты — свяжусь с вами и подскажу, как выстроить систему заявок под ваш бизнес
                </p>

                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-widest">
                        Имя
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#050505] border border-white/10 px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors font-light"
                        placeholder="Как к вам обращаться?"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-widest">
                        Телефон / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#050505] border border-white/10 px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors font-light"
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="business" className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-widest">
                        Вид бизнеса
                      </label>
                      <input
                        type="text"
                        id="business"
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className="w-full bg-[#050505] border border-white/10 px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors font-light"
                        placeholder="Например: салон красоты, онлайн-школа"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white px-8 py-4 text-sm font-medium hover:bg-blue-500 transition-colors uppercase tracking-widest disabled:opacity-70 flex justify-center items-center gap-3 mt-4 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Отправка...
                        </>
                      ) : (
                        "Связаться со мной"
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-medium text-white">Заявка отправлена</h4>
                    <p className="text-zinc-400 font-light">
                      Я свяжусь с вами в ближайшее время для обсуждения проекта.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
