'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
    return (
        <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
            <div className="text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-9xl font-bold text-mainPurple mb-4">404</h1>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        The page you're looking for doesn't exist or has been moved. 
                        Let's get you back on track.
                    </p>
                    <Link 
                        href="/"
                        className="action-button inline-block"
                    >
                        Return Home
                    </Link>
                </motion.div>
            </div>
        </main>
    )
} 