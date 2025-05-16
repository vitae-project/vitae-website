import React from 'react';
import Hero from "@/components/home/hero";
import CompanyCarousel from "@/components/home/companies";
import About from "@/components/home/about";
import Features from "@/components/home/features";
import Mailing from "@/components/mailing/mailing";

export default function Home() {
  return (
    <main id="main" className='pt-20 lg:pt-0'>
      <Hero />
      <CompanyCarousel />
      <About />
      <Features />
      <Mailing />
    </main>
  );
}
