import { Hero } from "@/app/components/sections/hero";
import { Services } from "@/app/components/sections/services";
import { About } from "@/app/components/sections/about";
import { Work } from "@/app/components/sections/work";
import { Contact } from "@/app/components/sections/contact";
import { Footer } from "@/app/components/sections/footer";

export default function Page() {
  return (
    <div className="snap-container">
      <Hero />
      <Services />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
