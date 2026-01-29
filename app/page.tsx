import { Header } from "@/components/molecules/Header";
import { ProductCard } from "@/components/molecules/ProductCard";

const PRODUCTS = [
  {
    name: "Casque Audio Premium",
    description: "Son cristallin, réduction de bruit active et autonomie de 30h.",
    category: "Audio",
    emoji: "🎧",
    color: "from-violet-400 to-purple-500",
  },
  {
    name: "Montre Connectée",
    description: "Suivi santé, notifications et design minimaliste en acier.",
    category: "Accessoires",
    emoji: "⌚",
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "Enceinte Portable",
    description: "Basses profondes, étanche IPX7 et autonomie de 20h.",
    category: "Audio",
    emoji: "🔊",
    color: "from-emerald-400 to-teal-500",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-12 md:px-12">
        <section className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-indigo-900">
            Nos produits 🛍️
          </h2>
          <p className="mt-2 text-sm text-indigo-600">
            Une sélection de produits essentiels.
          </p>
        </section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
