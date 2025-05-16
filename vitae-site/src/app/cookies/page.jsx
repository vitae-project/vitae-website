'use client';

import React from 'react';

export default function CookiePolicy() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 pt-8">Cookie Policy</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit 
              our website. They are widely used to make websites work more efficiently and provide useful 
              information to website owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Essential cookies: Required for the website to function properly</li>
              <li>Analytics cookies: To understand how visitors interact with our website</li>
              <li>Preference cookies: To remember your settings and preferences</li>
              <li>Marketing cookies: To deliver more relevant advertisements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">3.1 Essential Cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies are necessary for the website to function and cannot be switched off. They are 
              usually only set in response to actions you take, such as setting your privacy preferences, 
              logging in, or filling in forms.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">3.2 Analytics Cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies allow us to count visits and traffic sources so we can measure and improve the 
              performance of our site. They help us know which pages are the most and least popular.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">3.3 Functional Cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies enable enhanced functionality and personalization, such as remembering your 
              preferences and settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Managing Cookies</h2>
            <p className="text-gray-600 mb-4">
              Most web browsers allow you to control cookies through their settings preferences. However, 
              limiting cookies may impact your experience of our website.
            </p>
            <p className="text-gray-600 mb-4">
              You can manage your cookie preferences through our cookie consent banner or your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Cookies</h2>
            <p className="text-gray-600 mb-4">
              We may use third-party services that use cookies. These services include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Google Analytics</li>
              <li>Social media plugins</li>
              <li>Payment processors</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our Cookie Policy, please contact us at:
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