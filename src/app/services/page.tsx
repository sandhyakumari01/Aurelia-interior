
import Link from 'next/link';
import ServiceCard from '@/src/components/cards/ServiceCard';

const services = [
  {
    title: 'Interior Design',
    description:
      'Transform your space with thoughtful layouts, elegant colors, and personalized interior design solutions.',
    image: '/images/interior-design.jpg',
    linkText: 'Explore service →',
    linkHref: '/services/interior-design',
  },
  {
    title: 'Custom Furniture',
    description:
      'Discover custom-made furniture designed to match your style, comfort, and everyday needs.',
    image: '/images/custom-furniture.jpg',
    linkText: 'Explore service →',
    linkHref: '/services/custom-furniture',
  },
  {
    title: 'Space Planning',
    description:
      'Make the most of every corner with smart space planning and functional furniture arrangements.',
    image: '/images/space-planning.jpg',
    linkText: 'Explore service →',
    linkHref: '/services/space-planning',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F9F8F6]">

      <section className="px-4 py-16 text-center sm:py-20 lg:py-24">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#964B00]">
          What We Offer
        </p>

        <h1 className="mx-auto max-w-3xl text-3xl font-semibold text-[#5C2E00] sm:text-4xl lg:text-5xl">
          Thoughtful Design for Beautiful Living
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
          From personalized interiors to custom furniture, we help you create
          spaces that feel comfortable, functional, and uniquely yours.
        </p>

        <Link
          href="#our-services"
          className="mt-8 inline-flex rounded-full bg-[#964B00] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#5C2E00]"
        >
          Explore Our Services
        </Link>
      </section>


      <section
        id="our-services"
        className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-8 lg:px-16 lg:pb-24"
      >
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold text-[#5C2E00] sm:text-3xl">
            Our Services
          </h2>
          <p className="mt-3 text-sm text-neutral-600 sm:text-base">
            Everything you need to create your ideal space.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              linkText={service.linkText}
              linkHref={service.linkHref}
            />
          ))}
        </div>
      </section>


      <section className="bg-[#EFE7DF] px-4 py-14 text-center sm:py-16">
        <h2 className="text-2xl font-semibold text-[#5C2E00] sm:text-3xl">
          Let’s Create Your Dream Space
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
          Have a project in mind? Get in touch with us to discuss your ideas
          and find the right solution for your space.
        </p>

        <Link
          href="/contact"
          className="mt-7 inline-flex rounded-full bg-[#964B00] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#5C2E00]"
        >
          Contact Us →
        </Link>
      </section>
    </main>
  );
}
