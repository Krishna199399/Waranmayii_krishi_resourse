
import React from 'react'
import { Package, Truck, Users, Sprout, Smile, Sparkles, Heart, Bone, Flower, Pill } from 'lucide-react'

function Home() {
  return (
    <div>
      <section className='relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900'>
        <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />  

        <div className='relative z-10 mx-auto flex min-h-screen items-center px-6 py-14 sm:px-10 lg:px-16'>
          <div className='mx-auto w-full max-w-4xl text-center text-white'>
            <span className='inline-flex rounded-full border border-emerald-400 bg-emerald-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200'>
              Eco-friendly agriculture, wellness, and lifestyle
            </span>

            <h1 className='mt-8 text-5xl font-extrabold leading-tight text-white sm:text-6xl'>
              Empowering Nature, <br /> Enhancing Life
            </h1>

            <p className=' text-lg text-slate-200 sm:text-xl'>
              Sustainable bio-based solutions for agriculture, wellness, and everyday living.
            </p>

            <p className='mt-2 text-base text-slate-200/90 sm:text-lg'>
              Waranamayii brings eco-friendly products designed to improve health, productivity, and sustainability across industries.
            </p>

            <div className='mt-10 flex flex-wrap justify-center gap-4'>
              <button className='inline-flex items-center justify-center rounded-full bg-gradient-to-r from-lime-500 to-green-500 px-8 py-3 text-base font-semibold text-white transition hover:from-lime-600 hover:to-green-600 hover:shadow-lg hover:shadow-lime-500/40'>
                Explore Products
              </button>
              <button className='inline-flex items-center justify-center rounded-full border border-emerald-400 bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3 text-base font-semibold text-white transition hover:from-emerald-600 hover:to-teal-600 hover:shadow-lg hover:shadow-emerald-500/40'>
                Join Our Network
              </button>
            </div>

            <div className='mt-12 grid gap-4 sm:grid-cols-3'>
              <div className='rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 px-5 py-4 backdrop-blur-sm transition hover:border-emerald-400/60 hover:bg-gradient-to-br hover:from-emerald-500/20 hover:to-emerald-600/10'>
                <p className='text-lg font-semibold text-white'>Plant-based formulas</p>
                <p className='mt-2 text-sm text-slate-300'>Naturally sourced products for better yield and wellness.</p>
              </div>
              <div className='rounded-3xl border border-lime-400/30 bg-gradient-to-br from-lime-500/10 to-green-500/5 px-5 py-4 backdrop-blur-sm transition hover:border-lime-400/60 hover:bg-gradient-to-br hover:from-lime-500/20 hover:to-green-500/10'>
                <p className='text-lg font-semibold text-white'>Health & productivity</p>
                <p className='mt-2 text-sm text-slate-300'>Balanced solutions that support people and planet together.</p>
              </div>
              <div className='rounded-3xl border border-teal-400/30 bg-gradient-to-br from-teal-500/10 to-cyan-500/5 px-5 py-4 backdrop-blur-sm transition hover:border-teal-400/60 hover:bg-gradient-to-br hover:from-teal-500/20 hover:to-cyan-500/10'>
                <p className='text-lg font-semibold text-white'>Sustainable growth</p>
                <p className='mt-2 text-sm text-slate-300'>Designed for long-term impacts across industries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                <Package size={16} />
                About Waranamayii
              </div>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Empowering Sustainable <br /> Living Through Nature
              </h2>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Waranamayii is committed to delivering high-quality bio-based and natural products that support a healthier lifestyle and sustainable environment.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                From agriculture to personal care, our solutions are designed to create long-term value for people and the planet.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="/about" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-lime-500 to-green-500 px-8 py-3 text-base font-semibold text-white transition hover:from-lime-600 hover:to-green-600 hover:shadow-lg hover:shadow-lime-500/40">
                  Learn More
                  <Truck size={18} className="ml-2" />
                </a>
                <button className="inline-flex items-center justify-center rounded-full border border-green-300 bg-white px-8 py-3 text-base font-semibold text-green-700 transition hover:bg-green-50 hover:border-green-400">
                  Our Mission
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-green-100 via-emerald-50 to-lime-100 rounded-3xl shadow-2xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <Package size={120} className="text-green-600 drop-shadow-lg" />
                </div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-lime-400 to-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Truck size={36} className="text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center shadow-md">
                  <Users size={24} className="text-emerald-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Our Product Categories
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of eco-friendly and innovative products across multiple categories.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6 text-center transition hover:border-green-300 hover:shadow-lg hover:shadow-green-100/50">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Sprout size={32} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Bio Fertilizers</h3>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 text-center transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Smile size={32} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Oral Care</h3>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-purple-50 to-indigo-50 p-6 text-center transition hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100/50">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Sparkles size={32} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Bio Enzyme Housekeeping</h3>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-pink-50 to-rose-50 p-6 text-center transition hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100/50">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-rose-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Heart size={32} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Wellness Products</h3>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-orange-50 to-yellow-50 p-6 text-center transition hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100/50">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Bone size={32} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Animal Feeds</h3>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-teal-50 to-green-50 p-6 text-center transition hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100/50">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-green-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Package size={32} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">FMCG Products</h3>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-lime-50 to-green-50 p-6 text-center transition hover:border-lime-300 hover:shadow-lg hover:shadow-lime-100/50">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-lime-400 to-green-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Flower size={32} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Herbal Cosmetics</h3>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 text-center transition hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100/50">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Pill size={32} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Nutraceuticals</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Featured Products
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our premium bio-based products designed for sustainable living and exceptional quality.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 shadow-lg transition hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-green-100 to-green-200">
                <img
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center"
                  alt="Bio Fertilizers"
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Bio Fertilizers</h3>
                <p className="mt-2 text-sm text-gray-600">Natural plant nutrients for sustainable agriculture and enhanced crop yield.</p>
                <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 py-2 text-sm font-medium text-white transition hover:from-green-600 hover:to-emerald-600">
                  Explore Category
                </button>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 shadow-lg transition hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                <img
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop&crop=center"
                  alt="Oral Care"
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Oral Care</h3>
                <p className="mt-2 text-sm text-gray-600">Natural oral hygiene products for healthy smiles and fresh breath.</p>
                <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 py-2 text-sm font-medium text-white transition hover:from-blue-600 hover:to-cyan-600">
                  Explore Category
                </button>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 shadow-lg transition hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200">
                <img
                  src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&crop=center"
                  alt="Bio Enzyme Housekeeping"
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Bio Enzyme Housekeeping</h3>
                <p className="mt-2 text-sm text-gray-600">Eco-friendly cleaning solutions for a spotless and healthy home.</p>
                <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 py-2 text-sm font-medium text-white transition hover:from-purple-600 hover:to-indigo-600">
                  Explore Category
                </button>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 shadow-lg transition hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center"
                  alt="Wellness Products"
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Wellness Products</h3>
                <p className="mt-2 text-sm text-gray-600">Holistic health solutions for body, mind, and overall well-being.</p>
                <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 py-2 text-sm font-medium text-white transition hover:from-pink-600 hover:to-rose-600">
                  Explore Category
                </button>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-100 shadow-lg transition hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"
                  alt="Animal Feeds"
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Animal Feeds</h3>
                <p className="mt-2 text-sm text-gray-600">Nutritious feed for healthy livestock and companion animals.</p>
                <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 py-2 text-sm font-medium text-white transition hover:from-orange-600 hover:to-yellow-600">
                  Explore Category
                </button>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-gradient-to-br from-teal-50 to-green-50 border border-teal-100 shadow-lg transition hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-teal-100 to-teal-200">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center"
                  alt="FMCG Products"
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">FMCG Products</h3>
                <p className="mt-2 text-sm text-gray-600">Essential consumer goods for everyday convenience and quality.</p>
                <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-teal-500 to-green-500 py-2 text-sm font-medium text-white transition hover:from-teal-600 hover:to-green-600">
                  Explore Category
                </button>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-gradient-to-br from-lime-50 to-green-50 border border-lime-100 shadow-lg transition hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-lime-100 to-lime-200">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop&crop=center"
                  alt="Herbal Cosmetics"
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Herbal Cosmetics</h3>
                <p className="mt-2 text-sm text-gray-600">Natural beauty products for radiant and healthy skin care.</p>
                <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-lime-500 to-green-500 py-2 text-sm font-medium text-white transition hover:from-lime-600 hover:to-green-600">
                  Explore Category
                </button>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 shadow-lg transition hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-indigo-100 to-indigo-200">
                <img
                  src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop&crop=center"
                  alt="Nutraceuticals"
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Nutraceuticals</h3>
                <p className="mt-2 text-sm text-gray-600">Science-backed nutritional supplements for optimal health.</p>
                <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 py-2 text-sm font-medium text-white transition hover:from-indigo-600 hover:to-purple-600">
                  Explore Category
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="rounded-full bg-gradient-to-r from-lime-500 to-green-500 px-8 py-3 text-base font-semibold text-white transition hover:from-lime-600 hover:to-green-600 hover:shadow-lg hover:shadow-lime-500/40">
              View All Products
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home;
