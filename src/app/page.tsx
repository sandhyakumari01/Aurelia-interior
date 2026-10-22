
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { fetchProducts } from '../data/productData';
import Footer from '../components/cards/Footer';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/cards/ProductCard';
import ServiceCard from '../components/cards/ServiceCard';
import { servicesData } from '../data/serviceData';
import Testimonial from '../components/Testimonial';

export default async function LandingPage() {
  const products = await fetchProducts();

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#5C2E00]">
  
      <section className="bg-[#F9F8F6]">
        <HeroSection
          image="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
        />
      </section>

      <main className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:px-16">


        <section
          id="services"
          className="mb-16 rounded-xl bg-white p-5 sm:p-8 lg:p-10"
        >
          <div className="mb-6">
            <p className="mb-2 text-xs font-mono uppercase tracking-widest text-[#964B00]">
              01. Our Services
            </p>
            <h2 className="text-2xl font-semibold text-[#5C2E00] sm:text-3xl">
              Spaces Designed Around You
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600">
              Thoughtfully designed spaces for comfortable and modern living.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {['Interior Design', 'Custom Furniture', '3D Walkthroughs'].map(
              (title, i) => (
                <div
                  key={title}
                  className="group rounded-lg border border-[#964B00]/15 bg-[#F9F8F6] p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg bg-[#EFE7DF]">
                    <Image
                      src={`/images/service-${i + 1}.jpg`}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-[#5C2E00]">
                    {title}
                  </h3>

                  <p className="text-sm leading-6 text-neutral-600">
                    Thoughtfully designed spaces for modern living.
                  </p>
                </div>
              )
            )}
          </div>
        </section>


        <section
          id="collection"
          className="mb-16 rounded-xl bg-[#EFE7DF] p-5 sm:p-8 lg:p-10"
        >
          <div className="mb-6">
            <p className="mb-2 text-xs font-mono uppercase tracking-widest text-[#964B00]">
              02. The Considered Collection
            </p>

            <h2 className="text-2xl font-semibold text-[#5C2E00] sm:text-3xl">
              Furniture That Feels Like Home
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600">
              Explore timeless furniture designed to bring warmth and
              character to your space.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section
          id="service-details"
          className="mb-16 rounded-xl bg-white p-5 sm:p-8 lg:p-10"
        >
          <div className="mb-6">
            <p className="mb-2 text-xs font-mono uppercase tracking-widest text-[#964B00]">
              03. Our Expertise
            </p>

            <h2 className="text-2xl font-semibold text-[#5C2E00] sm:text-3xl">
              Designed With Purpose
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600">
              Discover services that help transform your ideas into beautiful
              spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </section>
        <section
          id="testimonials"
          className="mb-8 rounded-xl bg-[#5C2E00] px-5 py-10 text-white sm:px-8 lg:px-10"
        >
          <div className="mb-6">
            <p className="mb-2 text-xs font-mono uppercase tracking-widest text-[#E8C9A8]">
              04. Client Stories
            </p>

            <h2 className="text-2xl font-semibold sm:text-3xl">
              What Our Clients Say
            </h2>
          </div>

          <Testimonial />
        </section>
      </main>


    </div>
  );
}