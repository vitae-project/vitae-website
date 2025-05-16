import FAQAccordian from '@/components/faq/faq'
import React from 'react'
import { general_faqs, application_faqs } from '@/data/faqs'

export default function FAQPage() {
  return (
    <main id='faq-page' className='w-full h-full min-h-screen items-center justify-center pt-16 md:pt-20'>
      <section id='faq-hero' className='w-full min-h-[40vh] md:h-[50vh] flex items-center justify-center px-4 md:px-8'>
        <div className='w-full max-w-5xl flex flex-col gap-2 items-center md:items-start'>
          <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center md:text-left'>
            Frequently Asked Questions
          </h1>
        </div>
      </section>
      <section id='faq-accordion' className='w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center gap-12 md:gap-20 mb-20'>
        <div className='w-full flex flex-col items-center justify-center'>
          <h1 className='font-bold text-xl sm:text-2xl md:text-3xl text-center mb-6'>General</h1>
          <FAQAccordian faqs={general_faqs} />
        </div>

        <div className='w-full flex flex-col items-center justify-center'>
          <h1 className='font-bold text-xl sm:text-2xl md:text-3xl text-center mb-6'>Applications</h1>
          <FAQAccordian faqs={application_faqs} />
        </div>
      </section>
    </main>
  )
}
