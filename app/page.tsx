import { Header } from "@/app/components/header";
import { ScrollInit } from "@/app/components/scroll-init";
import { Hero } from "@/app/components/sections/hero";
import { Portfolio } from "@/app/components/sections/work";
import { Services } from "@/app/components/sections/services";
import { Process } from "@/app/components/sections/process";
import { Results } from "@/app/components/sections/results";
import { CTAFinal } from "@/app/components/sections/contact";
import { References } from "@/app/components/sections/references";
import { FAQ } from "@/app/components/sections/faq";
import { Footer } from "@/app/components/sections/footer";

export default function Page() {
  return (
    <>
      <Header />
      <ScrollInit />
      <main>
        <Hero />
        <Portfolio />
        <hr className="divider" style={{ margin: "0 48px" }} />
        <Services />
        <Process />
        <Results />
        <CTAFinal />
        <References />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
