'use client';

import React from 'react';

export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 pt-8">Terms of Service</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing or using Vitae's website and services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily access and use our services for personal, non-commercial purposes. 
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Modify or copy our materials</li>
              <li>Use materials for commercial purposes</li>
              <li>Remove any copyright or proprietary notations</li>
              <li>Transfer the materials to another person</li>
              <li>Attempt to decompile or reverse engineer any software</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600 mb-4">As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Not use the service for unlawful purposes</li>
              <li>Not interfere with or disrupt the service</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              Our services are provided "as is". We make no warranties, expressed or implied, and hereby 
              disclaim all warranties, including without limitation, implied warranties or conditions of:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of intellectual property</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitations</h2>
            <p className="text-gray-600 mb-4">
              In no event shall Vitae or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising 
              out of the use or inability to use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Modifications</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify or replace these Terms at any time. We will provide 
              notice of any changes by posting the new Terms on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-600">
              Email: legal@vitae.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 