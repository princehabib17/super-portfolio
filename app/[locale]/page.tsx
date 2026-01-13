import Hero from '@/components/Hero';
import CaseStudies from '@/components/CaseStudies';
import ProcessCards from '@/components/ProcessCards';
import BentoWhy from '@/components/BentoWhy';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ServicesSticky from '@/components/ServicesSticky/ServicesSticky';

export default function HomePage() {
  return (
    <>
      <Hero />
      <main className="container">
        <ServicesSticky />
        <CaseStudies />
        <ProcessCards />
        <BentoWhy />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
