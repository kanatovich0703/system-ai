import { Layers } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] py-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-white tracking-wide uppercase">FlowSystems</span>
          </div>
          
          <p className="text-xs text-zinc-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} FlowSystems. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
