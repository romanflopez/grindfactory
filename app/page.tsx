import { products } from "@/app/lib/products";
import { Hero } from "@/app/components/sections/hero";
import { ProductSection } from "@/app/components/sections/product";
import { About } from "@/app/components/sections/about";
import { HireMe } from "@/app/components/sections/hire-me";
import { Contact } from "@/app/components/sections/contact";
import { Footer } from "@/app/components/sections/footer";

export default function Page() {
  return (
    <div className="snap-container">
      <Hero />

      {products.map((p, i) => (
        <ProductSection key={p.slug} product={p} index={i} total={products.length} />
      ))}

      <About />
      <HireMe />
      <Contact />
      <Footer />
    </div>
  );
}
