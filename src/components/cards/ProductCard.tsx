
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/src/data/productData';
import { useCart } from '@/src/context/cartContext';


export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col bg-[#F9F8F6] p-4 rounded-lg group border border-neutral-200/60 transition hover:shadow-md">

      <Link href={`/products/${product.id}`} className="relative h-64 w-full mb-4 overflow-hidden rounded bg-gray-100">
        <Image 
          src={product.thumbnail} 
          alt={product.title} 
          fill 
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition duration-300 ease-out"
        />
      </Link>


      <div className="mb-3 flex-1">
        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1 block">
          {product.category}
        </span>
        <h3 className="text-base font-medium text-neutral-900 line-clamp-1">{product.title}</h3>
        <p className="text-sm font-semibold text-neutral-800 mt-1">${product.price.toFixed(2)}</p>
      </div>

      <button 
        onClick={() => addToCart(product)}
        aria-label={`Add ${product.title} to cart`}
        className="w-full bg-[#964B00] text-white py-2.5 text-xs uppercase tracking-wider rounded hover:bg-neutral-800 transition focus:ring-2 focus:ring-black"
      >
        Add to Cart
      </button>
    </div>
  );
}
