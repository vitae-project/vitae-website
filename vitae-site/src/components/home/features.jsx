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
          {/* <h2 className="text-base text-[#B632EA] font-semibold tracking-wide uppercase">Features</h2> */}
          <p className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            Features
          </p>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Our platform provides all the tools and support you need to land your dream internship.
          </p>
        </div>

        {/* Features grid */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex-row items-center gap-6 lg:gap-24`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </div>

              {/* Image */}
              <div className="flex-1 relative">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative"
                >
                  {/* Image container */}
                  <div className="relative aspect-square w-full max-w-lg mx-auto">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      className="object-contain p-8"
                    />
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