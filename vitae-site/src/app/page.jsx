import Image from "next/image";

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
