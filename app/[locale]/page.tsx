'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Hero from '@/components/Hero';
import CaseStudies from '@/components/CaseStudies';
import ProcessCards from '@/components/ProcessCards';
import BentoWhy from '@/components/BentoWhy';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ServicesSticky = dynamic(() => import('@/components/ServicesSticky/ServicesSticky'), { ssr: false });

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
