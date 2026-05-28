import { Header } from "@/app/components/header";
import { Hero } from "@/app/components/sections/hero";
import { TrustedStrip } from "@/app/components/sections/trusted-strip";
import { Services } from "@/app/components/sections/services";
import { Process } from "@/app/components/sections/process";
import { Work } from "@/app/components/sections/work";
import { About } from "@/app/components/sections/about";
import { FAQ } from "@/app/components/sections/faq";
import { Contact } from "@/app/components/sections/contact";
import { Footer } from "@/app/components/sections/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedStrip />
        <Services />
        <Process />
        <Work />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
