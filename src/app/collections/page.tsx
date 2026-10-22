
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchProducts } from '@/src/data/productData';
import type { Product } from '@/src/data/productData';

export default function CollectionsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearch(params.get('search') ?? '');

    fetchProducts().then(setProducts);
  }, []);

  const categories = [
    'All',
    ...new Set(products.map((p) => p.category)),
  ];

  const filtered = products.filter(
    (p) =>
      (p.title + ' ' + p.description)
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (category === 'All' || p.category === category)
  );

  return (
    <main className="min-h-screen bg-[#F9F8F6] px-4 py-12 sm:px-8 lg:px-16">
      <h1 className="mb-3 text-center text-4xl font-semibold text-[#5C2E00]">
        Our Collections
      </h1>

      <p className="mb-8 text-center text-neutral-600">
        Discover furniture for your beautiful home.
      </p>

      <div className="mb-8 flex flex-wrap justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-2 ${
                category === c
                  ? 'bg-[#964B00] text-white'
                  : 'border text-[#5C2E00]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search furniture..."
          className="rounded-full border px-4 py-2"
        />
      </div>

      <p className="mb-4 text-sm text-neutral-600">
        {filtered.length} products found
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((p) => (
          <Link
            key={p.id}
            href={`/products/${p.id}`}
            className="overflow-hidden rounded-xl border bg-white p-3 hover:shadow-lg"
          >
            <div className="relative h-56">
              <Image
                src={p.thumbnail || p.images[0]}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="rounded-lg object-cover"
              />
            </div>

            <p className="mt-3 text-sm text-[#964B00]">{p.category}</p>
            <h2 className="mt-1 font-medium text-[#5C2E00]">{p.title}</h2>

            <p className="mt-2 font-semibold text-[#964B00]">
              ₹{p.price.toLocaleString('en-IN')}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
