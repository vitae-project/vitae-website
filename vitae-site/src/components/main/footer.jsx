import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Vitae
            </Link>
            <p className="text-gray-600 text-sm">
              Revolutionizing how students begin their professional journey.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#B632EA] transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#B632EA] transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#B632EA] transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-gray-600 hover:text-[#B632EA] transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                {/* <Link href="/pricing" className="text-gray-600 hover:text-[#B632EA] transition-colors text-sm">
                  Pricing
                </Link> */}
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-[#B632EA] transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#B632EA] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link href="/blog" className="text-gray-600 hover:text-[#B632EA] transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-[#B632EA] transition-colors text-sm">
                  Careers
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#B632EA] transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-600 hover:text-[#B632EA] transition-colors text-sm">
                  Support
                </Link>
              </li>
              <li>
                <a href="mailto:hello@vitae.com" className="text-gray-600 hover:text-[#B632EA] transition-colors text-sm">
                  hello@vitae.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Vitae. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-500 hover:text-[#B632EA] transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-[#B632EA] transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-[#B632EA] transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
