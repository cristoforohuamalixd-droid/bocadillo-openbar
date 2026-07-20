import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Events from "@/components/Events";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Preloader />
      <main>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Events />
        <Menu />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
