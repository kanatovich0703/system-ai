import { Layers } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] py-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center bg-white text-black">
              <Layers className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium text-white tracking-wide uppercase">SystemPro</span>
          </div>
          
          <p className="text-xs text-zinc-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} SystemPro. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
