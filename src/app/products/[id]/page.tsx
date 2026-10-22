
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProducts, Product } from "@/src/data/productData";
import { useCart } from "@/src/context/cartContext";

export default function ProductDetailPage() {
  const { cart, addToCart } = useCart();

  const [productId, setProductId] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProductId(window.location.pathname.split("/").pop() ?? null);
  }, []);

  useEffect(() => {
    if (!productId) return;

    async function loadProduct() {
      try {
        const products = await fetchProducts();
        const found = products.find(
          (p) => p.id === Number(productId)
        );
        setProduct(found ?? null);
      } catch (error) {
        console.error("Failed to load product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [productId]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F9F8F6] p-10 text-center">
        Loading product...
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-[#F9F8F6] p-10 text-center">
        <h1 className="text-2xl font-semibold text-[#5C2E00]">
          Product Not Found
        </h1>
        <Link
          href="/collections"
          className="mt-4 inline-block text-[#964B00] underline"
        >
          Back to Collections
        </Link>
      </main>
    );
  }

  const cartItem = cart.find((item) => item.id === product.id);
  const isInCart = Boolean(cartItem);
  const mainImage = product.images?.[0] || product.thumbnail;
  const rating = Math.max(
    0,
    Math.min(5, Math.round(product.rating || 0))
  );

  return (
    <main className="min-h-screen bg-[#F9F8F6] px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#964B00]">
            Home
          </Link>
          {" / "}
          <Link href="/collections" className="hover:text-[#964B00]">
            Collections
          </Link>
          {" / "}
          <span className="text-[#5C2E00]">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#EFE7DF]">
              {mainImage ? (
                <Image
                  src={mainImage}
                  alt={product.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-5 transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-gray-500">
                  Image not available
                </div>
              )}
            </div>

            <p className="mt-3 text-sm text-gray-500">
              {product.images?.length || 1} product image
              {(product.images?.length || 1) > 1 ? "s" : ""}
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#964B00]">
              {product.category}
            </p>

            <h1 className="mb-4 text-3xl font-semibold text-[#5C2E00] md:text-4xl">
              {product.title}
            </h1>

            <p className="mb-5 text-2xl font-semibold text-[#964B00]">
              ${product.price.toFixed(2)}
            </p>

            <div className="mb-6 flex items-center gap-2">
              <span className="text-amber-500">
                {"★".repeat(rating)}
                {"☆".repeat(5 - rating)}
              </span>
              <span className="text-sm text-gray-600">
                {product.rating} / 5 rating
              </span>
            </div>

            <div className="mb-7 border-y border-[#E5D9CC] py-6">
              <h2 className="mb-2 text-lg font-medium text-[#5C2E00]">
                Product Description
              </h2>
              <p className="leading-7 text-gray-600">
                {product.description}
              </p>
            </div>

            <div className="mb-8 space-y-3 text-sm text-gray-700">
              <p>✓ Elegant furniture design</p>
              <p>✓ Designed for everyday use</p>
              <p>✓ A timeless addition to your home</p>
            </div>

            <button
              type="button"
              onClick={() => addToCart(product)}
              className={`w-full rounded-lg px-6 py-3.5 font-medium text-white transition ${
                isInCart
                  ? "bg-green-700 hover:bg-green-800"
                  : "bg-[#964B00] hover:bg-[#5C2E00]"
              }`}
            >
              {isInCart ? "✓ Added to Cart" : "Add to Cart"}
            </button>

            {isInCart && (
              <p className="mt-3 text-sm font-medium text-green-700">
                Added to cart! Quantity: {cartItem?.quantity}
              </p>
            )}

            <Link
              href="/cart"
              className="mt-3 block rounded-lg border border-[#964B00] px-6 py-3.5 text-center font-medium text-[#964B00] transition hover:bg-[#EFE7DF]"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
