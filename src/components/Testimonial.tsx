'use client';

interface TestimonialProps {
  quote?: string;
  subText?: string;
}

export default function Testimonial({
  quote = "A home that feels unmistakably ours.",
  subText = "A thoughtful space, crafted around the way we live."
}: TestimonialProps) {
  return (
    <section className="bg-[#F4F1EA] text-neutral-900 px-6 sm:px-12 py-12 sm:py-16 my-16 rounded-2xl text-center max-w-[1440px] mx-auto border border-neutral-200/60 shadow-sm">
      <div className="max-w-xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-widest text-[#964B00] mb-3 font-semibold">
          Kind Words
        </p>
        <blockquote className="text-2xl sm:text-3xl font-serif italic mb-4 text-neutral-800 leading-snug">
          “{quote}”
        </blockquote>
        <p className="text-sm text-neutral-600 font-medium">
          {subText}
        </p>
      </div>
    </section>
  );
}