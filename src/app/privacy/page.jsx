'use client';

import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 pt-8">Privacy Policy</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              At Vitae, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1 Personal Information</h3>
            <p className="text-gray-600 mb-4">
              We collect information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Sign up for our mailing list</li>
              <li>Create an account</li>
              <li>Contact us</li>
            </ul>
            <p className="text-gray-600 mb-4">
              This may include your name, email address, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">2.2 Automatically Collected Information</h3>
            <p className="text-gray-600 mb-4">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device type</li>
              <li>Operating system</li>
              <li>Usage patterns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Provide and maintain our services</li>
              <li>Send you updates and marketing communications</li>
              <li>Improve our website and services</li>
              <li>Respond to your inquiries</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Protection</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600">
              Email: privacy@vitae.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 