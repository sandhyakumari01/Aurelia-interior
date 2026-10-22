'use client';

import Image from 'next/image';
import Link from 'next/link';

interface HeroCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function HeroSection({
  title = 'Live in rooms that feel like you',
  subtitle = 'PREMIUM INTERIOR & FURNITURE',
  description = 'Bespoke interiors and timeless furniture designed to bring warmth, comfort, and elegance to your home.',
  image,
  primaryCtaText = 'Book a Consultation',
  primaryCtaLink = '#services',
  secondaryCtaText = 'Explore Collection',
  secondaryCtaLink = '#collection',
}: HeroCardProps) {
  return (
    <section className="bg-[#F9F8F6] px-4 py-8 sm:px-8 sm:py-12 lg:px-16 lg:py-16">
      <div className="mx-auto grid max-w-[1440px] items-center gap-8 overflow-hidden rounded-2xl border border-[#964B00]/10 bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">

        {/* Hero Content */}
        <div className="py-2 lg:py-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#964B00]">
            {subtitle}
          </p>

          <h1 className="max-w-xl font-serif text-4xl font-medium leading-tight text-[#5C2E00] sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-600 sm:text-base">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {primaryCtaText && (
              <Link
                href={primaryCtaLink}
                className="rounded-md bg-[#964B00] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#5C2E00] focus:outline-none focus:ring-2 focus:ring-[#964B00] focus:ring-offset-2"
              >
                {primaryCtaText}
              </Link>
            )}

            {secondaryCtaText && (
              <Link
                href={secondaryCtaLink}
                className="rounded-md border border-[#964B00]/30 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#5C2E00] transition hover:bg-[#F9F8F6] focus:outline-none focus:ring-2 focus:ring-[#964B00] focus:ring-offset-2"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[280px] overflow-hidden rounded-xl bg-[#EFE7DF] sm:h-[380px] lg:h-[480px]">
          <Image
            src={
              image ||
              'https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp'
            }
            alt="Elegant furniture in a thoughtfully designed interior"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#5C2E00]/20 to-transparent" />
        </div>

      </div>
    </section>
  );
}