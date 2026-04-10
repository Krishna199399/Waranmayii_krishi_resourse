import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl text-slate-100 shadow-xl shadow-slate-950/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 text-lg font-bold text-slate-950 shadow-lg shadow-emerald-500/20">
            W
          </span>
          <div>
            <p className="text-lg font-semibold tracking-tight text-white">Waranmayii</p>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">Green agriculture</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="/" className="transition hover:text-emerald-300">Home</a>
          <a href="/about" className="transition hover:text-emerald-300">About Us</a>
          <a href="/products" className="transition hover:text-emerald-300">Products</a>
          <a href="/contact" className="transition hover:text-emerald-300">Contact</a>
          <button className="inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-2 text-slate-300 transition hover:border-emerald-400 hover:text-white">
            More <ChevronDown size={16} />
          </button>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full border border-emerald-500/20 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-400 hover:text-white">
            Login
          </button>
          <button className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
            Register
          </button>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-200 transition hover:border-emerald-400 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-slate-800 bg-slate-950 px-4 py-5 text-slate-200 md:hidden">
          <div className="space-y-4">
            <a href="/" className="block rounded-2xl px-4 py-3 transition hover:bg-slate-900/80 hover:text-emerald-300">Home</a>
            <a href="/about" className="block rounded-2xl px-4 py-3 transition hover:bg-slate-900/80 hover:text-emerald-300">About Us</a>
            <a href="/products" className="block rounded-2xl px-4 py-3 transition hover:bg-slate-900/80 hover:text-emerald-300">Products</a>
            <a href="/contact" className="block rounded-2xl px-4 py-3 transition hover:bg-slate-900/80 hover:text-emerald-300">Contact</a>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <button className="w-full rounded-full border border-emerald-500/20 px-4 py-3 text-sm text-slate-200 transition hover:border-emerald-400 hover:text-white">
              Login
            </button>
            <button className="w-full rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
