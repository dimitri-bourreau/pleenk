"use client";

import { useState } from "react";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Price } from "@/components/atoms/Price";

interface Product {
  name: string;
  description: string;
  category: string;
  emoji: string;
  color: string;
}

interface ProductCardProps {
  product: Product;
}

async function handleBuy() {
  const res = await fetch("/api/payment", { method: "POST" });
  const { url } = await res.json();
  window.location.href = url;
}

export function ProductCard({ product }: ProductCardProps) {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    setLoading(true);
    await handleBuy();
  };

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-white/60 bg-white shadow-lg hover:shadow-xl transition-shadow">
      <div
        className={`flex aspect-square w-full items-center justify-center bg-linear-to-br ${product.color}`}
      >
        <span className="text-8xl">{product.emoji}</span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <Badge text={product.category} />
          <Price amount={42} />
        </div>
        <h2 className="text-base font-semibold text-gray-800">
          {product.name}
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          {product.description}
        </p>
        <div className="mt-auto pt-3">
          <Button
            label={loading ? "Redirection..." : "Acheter"}
            onClick={onClick}
            disabled={loading}
          />
        </div>
      </div>
    </article>
  );
}
