import React from "react";

function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen items-center px-6 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-4xl text-center text-white">
          <span className="inline-flex rounded-full border border-emerald-400 bg-emerald-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
            Eco-friendly agriculture, wellness, and lifestyle
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white sm:text-6xl">
            Empowering Nature, <br /> Enhancing Life
          </h1>

          <p className=" text-lg text-slate-200 sm:text-xl">
            Sustainable bio-based solutions for agriculture, wellness, and
            everyday living.
          </p>

          <p className="mt-2 text-base text-slate-200/90 sm:text-lg">
            Waranamayii brings eco-friendly products designed to improve health,
            productivity, and sustainability across industries.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-lime-500 to-green-500 px-8 py-3 text-base font-semibold text-white transition hover:from-lime-600 hover:to-green-600 hover:shadow-lg hover:shadow-lime-500/40">
              Explore Products
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-emerald-400 bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3 text-base font-semibold text-white transition hover:from-emerald-600 hover:to-teal-600 hover:shadow-lg hover:shadow-emerald-500/40">
              Join Our Network
            </button>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 px-5 py-4 backdrop-blur-sm transition hover:border-emerald-400/60 hover:bg-gradient-to-br hover:from-emerald-500/20 hover:to-emerald-600/10">
              <p className="text-lg font-semibold text-white">
                Plant-based formulas
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Naturally sourced products for better yield and wellness.
              </p>
            </div>
            <div className="rounded-3xl border border-lime-400/30 bg-gradient-to-br from-lime-500/10 to-green-500/5 px-5 py-4 backdrop-blur-sm transition hover:border-lime-400/60 hover:bg-gradient-to-br hover:from-lime-500/20 hover:to-green-500/10">
              <p className="text-lg font-semibold text-white">
                Health & productivity
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Balanced solutions that support people and planet together.
              </p>
            </div>
            <div className="rounded-3xl border border-teal-400/30 bg-gradient-to-br from-teal-500/10 to-cyan-500/5 px-5 py-4 backdrop-blur-sm transition hover:border-teal-400/60 hover:bg-gradient-to-br hover:from-teal-500/20 hover:to-cyan-500/10">
              <p className="text-lg font-semibold text-white">
                Sustainable growth
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Designed for long-term impacts across industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
