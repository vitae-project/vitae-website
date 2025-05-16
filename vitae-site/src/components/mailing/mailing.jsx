'use client'
import React, { useState } from 'react'

export default function mailing() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/mailing', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (!response.ok) {
                throw new Error('Failed to join waitlist');
            }

            setStatus('success');
            setEmail('');
        } catch (error) {
            setStatus('error');
        }
    };

    return (
    <section className="min-h-[80vh] pt-20 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sign up for success
          </h1>
          <p className="text-base text-gray-600 mb-4">
            Sign up to be the first to know when we launch and get exclusive access to our beta!
          </p>

          <div className="rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#B632EA] focus:border-[#B632EA]"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full py-3 px-4 rounded-lg font-medium text-white ${
                  status === 'loading'
                    ? 'bg-[#a62bd6] cursor-not-allowed'
                    : 'bg-[#B632EA] hover:bg-[#a62bd6]'
                } transition-colors`}
              >
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-sm">
                  Thanks for joining! We'll be in touch soon.
                </p>
              )}

              {status === 'error' && (
                <p className="text-red-600 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>By joining, you agree to receive updates about Vitae.</p>
            <p>We respect your privacy and will never share your information.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
