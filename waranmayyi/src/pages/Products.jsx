import React from "react";
import {
  Flower,
  Heart,
  Package,
  Pill,
  ShoppingBag,
  Smile,
  Sparkles,
  Sprout,
  Bone,
} from "lucide-react";

function Products() {
  const categories = [
    {
      title: "Bio Fertilizers",
      icon: Sprout,
      cardClass:
        "from-green-50 to-emerald-50 border-green-100 hover:border-green-300 hover:shadow-green-100/60",
      iconClass: "from-green-400 to-emerald-500",
    },
    {
      title: "Oral Care",
      icon: Smile,
      cardClass:
        "from-blue-50 to-cyan-50 border-blue-100 hover:border-blue-300 hover:shadow-blue-100/60",
      iconClass: "from-blue-400 to-cyan-500",
    },
    {
      title: "Bio Enzyme Housekeeping",
      icon: Sparkles,
      cardClass:
        "from-purple-50 to-indigo-50 border-purple-100 hover:border-purple-300 hover:shadow-purple-100/60",
      iconClass: "from-purple-400 to-indigo-500",
    },
    {
      title: "Wellness Products",
      icon: Heart,
      cardClass:
        "from-pink-50 to-rose-50 border-pink-100 hover:border-pink-300 hover:shadow-pink-100/60",
      iconClass: "from-pink-400 to-rose-500",
    },
    {
      title: "Animal Feeds",
      icon: Bone,
      cardClass:
        "from-orange-50 to-yellow-50 border-orange-100 hover:border-orange-300 hover:shadow-orange-100/60",
      iconClass: "from-orange-400 to-yellow-500",
    },
    {
      title: "FMCG Products",
      icon: Package,
      cardClass:
        "from-teal-50 to-green-50 border-teal-100 hover:border-teal-300 hover:shadow-teal-100/60",
      iconClass: "from-teal-400 to-green-500",
    },
    {
      title: "Herbal Cosmetics",
      icon: Flower,
      cardClass:
        "from-lime-50 to-green-50 border-lime-100 hover:border-lime-300 hover:shadow-lime-100/60",
      iconClass: "from-lime-400 to-green-500",
    },
    {
      title: "Nutraceuticals",
      icon: Pill,
      cardClass:
        "from-indigo-50 to-purple-50 border-indigo-100 hover:border-indigo-300 hover:shadow-indigo-100/60",
      iconClass: "from-indigo-400 to-purple-500",
    },
  ];

  const featuredProducts = [
    {
      title: "Bio Fertilizers",
      description:
        "Natural plant nutrients for sustainable agriculture and enhanced crop yield.",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center",
      cardClass: "from-green-50 to-emerald-50 border-green-100",
      buttonClass: "from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
    },
    {
      title: "Oral Care",
      description:
        "Natural oral hygiene products for healthy smiles and fresh breath.",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop&crop=center",
      cardClass: "from-blue-50 to-cyan-50 border-blue-100",
      buttonClass: "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
    },
    {
      title: "Bio Enzyme Housekeeping",
      description:
        "Eco-friendly cleaning solutions for a spotless and healthy home.",
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&crop=center",
      cardClass: "from-purple-50 to-indigo-50 border-purple-100",
      buttonClass:
        "from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600",
    },
    {
      title: "Wellness Products",
      description:
        "Holistic health solutions for body, mind, and overall well-being.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      cardClass: "from-pink-50 to-rose-50 border-pink-100",
      buttonClass: "from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600",
    },
    {
      title: "Animal Feeds",
      description:
        "Nutritious feed for healthy livestock and companion animals.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
      cardClass: "from-orange-50 to-yellow-50 border-orange-100",
      buttonClass:
        "from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600",
    },
    {
      title: "FMCG Products",
      description:
        "Essential consumer goods for everyday convenience and quality.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
      cardClass: "from-teal-50 to-green-50 border-teal-100",
      buttonClass: "from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600",
    },
    {
      title: "Herbal Cosmetics",
      description:
        "Natural beauty products for radiant and healthy skin care.",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop&crop=center",
      cardClass: "from-lime-50 to-green-50 border-lime-100",
      buttonClass: "from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600",
    },
    {
      title: "Nutraceuticals",
      description:
        "Science-backed nutritional supplements for optimal health.",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop&crop=center",
      cardClass: "from-indigo-50 to-purple-50 border-indigo-100",
      buttonClass:
        "from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-emerald-950 to-green-900 text-white">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
        <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-lime-400/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-9rem)] max-w-7xl items-center justify-center px-6 py-20 text-center sm:px-10 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200 shadow-[0_0_0_10px_rgba(16,185,129,0.08)]">
              <ShoppingBag size={16} />
              Our Products
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Our Products
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-200 sm:text-xl lg:text-2xl">
              Discover sustainable, nature-driven products crafted for agriculture,
              wellness, and everyday living.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Our Product Categories
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              We offer a wide range of eco-friendly and innovative products across
              multiple categories.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(({ title, icon: Icon, cardClass, iconClass }) => (
              <div
                key={title}
                className={`group rounded-2xl border bg-linear-to-br p-6 text-center transition hover:shadow-lg ${cardClass}`}
              >
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br text-white shadow-lg transition-transform group-hover:scale-110 ${iconClass}`}
                >
                  <Icon size={32} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-gray-50 to-green-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Featured Products
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Discover our premium bio-based products designed for sustainable living
              and exceptional quality.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map(
              ({ title, description, image, cardClass, buttonClass }) => (
                <div
                  key={title}
                  className={`group overflow-hidden rounded-2xl border bg-linear-to-br shadow-lg transition hover:-translate-y-1 hover:shadow-xl ${cardClass}`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={image}
                      alt={title}
                      className="h-full w-full object-cover transition group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{description}</p>
                    <button
                      className={`mt-4 w-full rounded-lg bg-linear-to-r py-2 text-sm font-medium text-white transition ${buttonClass}`}
                    >
                      Explore Category
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
