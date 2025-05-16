'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="h-screen w-full flex items-center justify-center file:relative overflow-hidden">
      {/* Background shape */}
      <div className="hidden md:flex absolute w-[95%] h-[80%] bg-[#F4EBFF] rounded-3xl -rotate-1" />
      
      <div className="w-[90%] flex flex-col lg:flex-row items-center justify-between relative">
        {/* Left side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h2 className="text-sm text-[#B632EA] font-semibold tracking-wide uppercase mb-2">Apply, Track, Achieve</h2>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
            Redefine Your Path
            <br />
            to Success
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-xl">
            VITAE revolutionizes how you begin your professional journey.
            Discover internships, track your progress and stay organised this application season.
          </p>
          <Link
            href="/join"
            className="bg-[#B632EA] text-white hover:bg-[#a62bd6] px-4 py-2 rounded-md text-base font-medium"
          >
            Join Our Mailing List
          </Link>
        </div>

        {/* Right side - Image */}
        <div className="w-full lg:w-1/2 flex justify-end relative">
          <div className="relative w-[600px] lg:w-[800px]">
            <Image
              src="/iPhoneMockup.png"
              alt="Vitae App Interface"
              width={1080}
              height={1080}
              className="object-contain drop-shadow-[10px_15px_10px_rgba(0,0,0,0.2)]"
              priority
              quality={100}
              sizes="(max-width: 768px) 600px, 800px"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 