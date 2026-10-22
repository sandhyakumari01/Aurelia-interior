'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/src/data/productData';
import { useCart } from '@/src/context/cartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col bg-[#F9F8F6] p-4 rounded-lg group border border-[#964B00]/20 transition hover:shadow-md">

      <Link
        href={`/products/${product.id}`}
        className="relative h-64 w-full mb-4 overflow-hidden rounded bg-[#EFE7DF]"
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition duration-300 ease-out"
        />
      </Link>

      <div className="mb-3 flex-1">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[#964B00]/80 mb-1 block">
          {product.category}
        </span>

        <h3 className="text-base font-medium text-[#5C2E00] line-clamp-1">
          {product.title}
        </h3>

        <p className="text-sm font-semibold text-[#964B00] mt-1">
          ${product.price.toFixed(2)}
        </p>
      </div>

      <button
        onClick={() => addToCart(product)}
        aria-label={`Add ${product.title} to cart`}
        className="w-full bg-[#964B00] text-white py-2.5 text-xs uppercase tracking-wider rounded hover:bg-[#5C2E00] transition focus:ring-2 focus:ring-[#964B00] focus:outline-none"
      >
        Add to Cart
      </button>
    </div>
  );
}