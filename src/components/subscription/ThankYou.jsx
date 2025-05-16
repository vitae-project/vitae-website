'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home after 3 seconds
    const timeout = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background shape */}
      <div className="hidden md:flex absolute w-[95%] h-[80%] bg-[#F4EBFF] rounded-3xl -rotate-1" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="w-[90%] flex flex-col items-center justify-center relative text-center"
      >
        <h2 className="text-sm text-[#B632EA] font-semibold tracking-wide uppercase mb-2">Thank You!</h2>
        <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
          Welcome to the
          <br />
          VITAE Community
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-xl">
          You've successfully joined our mailing list. We'll keep you updated with the latest news and opportunities.
        </p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-16 h-16 bg-[#B632EA] rounded-full flex items-center justify-center"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
} 