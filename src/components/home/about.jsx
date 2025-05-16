import React from 'react'

export default function About() {
  return (
    <section id='about-section' className='h-[70vh] w-full flex flex-col items-center justify-center'>
      <div className='w-full h-full flex flex-col gap-5 items-center justify-center'>
        <h2 className="text-base text-[#B632EA] font-semibold tracking-wide uppercase">About Us</h2>
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-3 w-full text-center">
          Made For Students, By Students.
        </h1>

        <p className='w-[80%] md:w-[40%] text-sm sm:text-xl mb-3 text-center text-gray-600'>
          We offer a centralised platform to allow you to manage your undergraduate
          opportunities from leading firms. Organise yourself this application season to
          focus on what really matters.
        </p>

        <a className='action-button' href="/about">Get To Know Us</a>
      </div>
    </section>
  )
}