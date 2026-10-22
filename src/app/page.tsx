import Image from 'next/image';
import Navbar from '../components/Navbar';
import { fetchProducts } from '../data/productData';
import Footer from '../components/cards/Footer';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/cards/ProductCard';
import ServiceCard from '../components/cards/ServiceCard';
import { servicesData } from '../data/serviceData';

export default async function LandingPage() {

  const products = await fetchProducts();
console.log(products)
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
<HeroSection
 image = "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"/>

      <main className="px-4 sm:px-8 lg:px-16 py-8 max-w-[1440px] mx-auto">
   
        <section id="services" className="mb-16">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-sm font-mono text-gray-500">01. Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Interior Design', 'Custom Furniture', '3D Walkthroughs'].map((title, i) => (
              <div key={i} className="bg-[#F9F8F6] p-4 rounded-lg">
                <div className="relative h-48 w-full mb-4 rounded overflow-hidden bg-neutral-200">
                  <Image src={`/images/service-${i+1}.jpg`} alt={title} fill className="object-cover" />
                </div>
                <h3 className="font-medium text-lg mb-1">{title}</h3>
                <p className="text-sm text-gray-600">Thoughtfully designed spaces for modern living.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="collection" className="mb-16">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-sm font-mono text-gray-500">02. The Considered Collection</h2>
          </div>
          
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
    <section id="collection" className="mb-16">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-sm font-mono text-gray-500">03. Our Services</h2>
          </div>
          
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
           {servicesData.map((service) => (
          <ServiceCard title={service?.title} description={service?.description}
           image={service?.image} />
   ))}
   </div>
   </section>
      </main>

      <Footer />
    </div>
  );
}

