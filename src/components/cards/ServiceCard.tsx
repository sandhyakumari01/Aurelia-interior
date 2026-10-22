 'use client';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  linkText?: string;
  linkHref?: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  linkText = "View details →",
  linkHref = "#"
}: ServiceCardProps) {
  return (
    <div className="flex flex-col bg-[#F9F8F6] p-4 rounded-lg group border border-neutral-200/60 transition hover:shadow-md">

      <div className="relative h-48 sm:h-56 w-full mb-4 rounded overflow-hidden bg-neutral-200">
        <Image 
          src={image} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition duration-300 ease-out"
        />
      </div>


      <div className="flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-medium text-neutral-900 mb-1">{title}</h3>
          <p className="text-sm text-neutral-600 mb-4">{description}</p>
        </div>

        {linkHref && (
          <Link 
            href={linkHref}
            className="text-xs uppercase tracking-wider font-medium text-neutral-900 hover:text-black inline-flex items-center gap-1 group-hover:translate-x-1 transition duration-200"
          >
            {linkText}
          </Link>
        )}
      </div>
    </div>
  );
}

