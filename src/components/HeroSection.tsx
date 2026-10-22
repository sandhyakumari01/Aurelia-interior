
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
  title = "Live in rooms that feel like you",
  subtitle = "PREMIUM INTERIOR & FURNITURE",
  description = "Bespoke interiors and handcrafted furniture for modern homes.",
  image = "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
  primaryCtaText = "Book a consultation",
  primaryCtaLink = "#",
  secondaryCtaText = "Explore Collection",
  secondaryCtaLink = "#collection",
}: HeroCardProps) {
  return (
    <section className="w-full bg-[#F7F4EC] rounded-2xl p-6 sm:p-10 lg:p-16 my-8">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Side: Text & Buttons */}
        <div className="flex flex-col justify-center">
          {subtitle && (
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">
              {subtitle}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-neutral-900 leading-tight mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-sm sm:text-base text-neutral-600 mb-8 max-w-md">
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {primaryCtaText && (
              <Link 
                href={primaryCtaLink}
                className="bg-[#8B5A2B] hover:bg-[#704822] text-white text-xs uppercase tracking-wider px-6 py-3.5 rounded-md font-medium transition shadow-sm"
              >
                {primaryCtaText}
              </Link>
            )}
            {secondaryCtaText && (
              <Link 
                href={secondaryCtaLink}
                className="bg-transparent hover:bg-neutral-200/50 text-neutral-900 border border-neutral-300 text-xs uppercase tracking-wider px-6 py-3.5 rounded-md font-medium transition"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] w-full rounded-xl overflow-hidden shadow-md bg-neutral-200">
          <Image 
            src={image} 
            alt="Hero Interior" 
            fill 
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}

