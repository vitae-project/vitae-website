'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Personalised opportunities to suit your goals.',
        description: "Discover life-changing opportunities from leading firms that are tailored to your personal interests.",
        image: '/features/phone-mockups/opportunities.png',
        alt: 'Opportunity Exploration Feature'
    },
    {
        title: 'Stay on schedule.',
        description: 'Organise upcoming events effortlessly with a seamless calendar view that integrates with you existing schedule',
        image: '/features/phone-mockups/calendar.png',
        alt: 'Calendar Feature'
    },
    {
        title: 'Your progress at a glance.',
        description: 'Monitor your application season progress with automated insights that display key metrics to keep you on track.',
        image: '/features/phone-mockups/dashboard.png',
        alt: 'Dashboard Feature'
    },
    {
        title: 'Never miss an update.',
        description: "Learn from peers and professionals while staying updated with an active news feature designed to keep you informed and inspired.",
        image: '/features/phone-mockups/news.png',
        alt: 'Community Support Feature'
    }
];

export default function Features() {
  return (
    <section className="w-full py-20 overflow-hidden">
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-base text-[#B632EA] font-semibold tracking-wide uppercase mb-2">Discover Our Features</h2>
          <p className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Everything You Need
          </p>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Our platform provides all the tools and support you need to land your dream internship.
          </p>
        </div>

        {/* Features grid */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex-row items-center gap-8 lg:gap-24`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left order-2 lg:order-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 lg:text-4xl mb-4 sm:mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {feature.description}
                  </p>
                </motion.div>
              </div>

              {/* Image */}
              <div className="flex-1 relative order-1 lg:order-none w-full max-w-[280px] sm:max-w-[320px] lg:max-w-lg mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative"
                >
                  {/* Background blur effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#F4EBFF] to-transparent rounded-full filter blur-3xl opacity-60 transform scale-150" />
                  
                  {/* Image container */}
                  <div className="relative aspect-[4/5] w-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full max-w-[80%] mx-auto">
                        <Image
                          src={feature.image}
                          alt={feature.alt}
                          fill
                          className="object-contain drop-shadow-xl"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 