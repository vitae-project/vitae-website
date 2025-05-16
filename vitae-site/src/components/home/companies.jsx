'use client'
import React, { useRef } from 'react'
import { companies } from '../data/dummy_companies'
import { useScroll, motion, useTransform } from 'framer-motion'

export default function CompanyCarousel() {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })

  const xPosition = useTransform(scrollYProgress, [0, 1], [-2000, 0])

  return (
    <section id='company-carousel' className='w-full h-fit overflow-hidden pt-20'>
        <h1 id='section-title' className='font-bold text-4xl text-center'>Find your dream company</h1>

        <motion.div id='logo-carousel' style={{ x: xPosition }} className='flex flex-row gap-5 sm:gap-10 my-5'>
          {
            [...companies, ...companies].map(({ name, source }, i) => {
                return (
                    <img key={i} src={source} alt={name} className='w-[80px] sm:w-[150px] aspect-square object-contain' />
                )
            })
          }
        </motion.div>
    </section>
  )
}