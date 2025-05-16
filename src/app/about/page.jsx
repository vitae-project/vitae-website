'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function AboutPage() {
    const circleVariants = (x_pos, y_pos, delay) => {
        return {
            animate: {
                x: [0, x_pos, 0],
                y: [0, y_pos, 0],
                transition: {
                    delay: delay || 0,
                    duration: 10,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: [0.76, 0, 0.24, 1]
                },
            }
        }
    }

    return (
        <main id='about-us' className='w-full min-h-screen flex flex-col items-center justify-center pt-16 md:pt-20'>
            <div className='absolute -z-10 w-full h-full overflow-hidden'>
                <motion.div 
                    className='w-[200px] md:w-[300px] xl:w-[400px] aspect-square absolute bottom-0 -z-20 rounded-full bg-purple-600 hidden lg:block' 
                    variants={circleVariants(200, -500, 0)} 
                    animate="animate" 
                />
                <motion.div 
                    className='w-[100px] md:w-[150px] xl:w-[200px] aspect-square absolute bottom-0 right-0 -z-20 rounded-full bg-[#8e25b1] hidden lg:block' 
                    variants={circleVariants(-600, -200, 1)} 
                    animate="animate" 
                />
            </div>
            
            <div id='about-us-top' className='w-full flex flex-col items-center justify-center px-4 md:px-8'>
                <div className='w-full max-w-4xl flex flex-col items-center justify-center my-8 md:my-16'>
                    <h1 id='title' className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-center'>About Us</h1>
                    <p id='subtitle' className='font-medium text-center text-sm sm:text-base md:text-xl lg:text-2xl italic max-w-2xl'>
                        Built for students, by students: the solution we have been looking for.
                    </p>
                </div>

                <div id='about-boxes' className='flex flex-col gap-4 md:gap-6 max-w-7xl mx-auto'>
                    <div id='about-boxes-top-row' className='flex flex-col sm:flex-row gap-4 md:gap-6 justify-center'>
                        <Vitae />
                        <FeaturedAboutBox
                            title="First Of Its Kind"
                            description="Our all in one platform combines all of your favourite features to a dashboard that allows you to track your applications via a website and a mobile application."
                        />
                    </div>
                    <div id='about-boxes-bottom-row' className='flex flex-col md:flex-row gap-4 md:gap-6 justify-center mb-16'>
                        <AboutBox 
                            title="Reliable and Simple"
                            description="As students, we recognise the importance of organisation and consistency throughout the busy application process. Rely on us to guide you through it all."
                        />
                        <AboutBox 
                            title="Made For You"
                            description="We recognise that each journey is personal, so we match you with the best opportunities that align with your aspirations."
                        />
                        <AboutBox 
                            title="It's Free!"
                            description="VITAE is a free tool that ensures accessibility for all. Our aim is to break down barriers and foster inclusivity. Everyone deserves the tools to succeed."
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

function AboutBox({ i, title, description }) {
    return (
        <div id={`about_box_${i}`} className='p-4 sm:p-5 rounded-md text-black bg-gray-100/80 hover:bg-gray-200/60 transition-colors duration-300 hover:cursor-pointer backdrop-blur-md w-full md:w-[300px] lg:w-[350px] xl:w-[400px]'>
            <h1 className='italic font-semibold text-xl sm:text-2xl mb-2 select-none'>{title}</h1>
            <p className='text-base sm:text-lg select-none'>{description}</p>
        </div>
    )
}

function FeaturedAboutBox({ i, title, description }) {
    return (
        <div id={`featured_about_box_${i}`} className='p-4 sm:p-5 rounded-md text-white bg-mainPurple/80 hover:bg-mainPurple/50 hover:text-black transition-colors duration-300 hover:cursor-pointer backdrop-blur-md w-full md:w-[300px] lg:w-[350px] xl:w-[400px]'>
            <h1 className='italic font-semibold text-xl sm:text-2xl mb-2 select-none'>{title}</h1>
            <p className='text-base sm:text-lg select-none'>{description}</p>
        </div>
    )
}

function Vitae() {
    return (
        <div id='vitae-definition' className='w-full md:w-[300px] lg:w-[350px] xl:w-[400px] py-6 sm:py-8 md:py-0 flex items-center justify-center'>
            <div id='inner' className='p-3 px-6 sm:px-8 md:px-12 w-full backdrop-blur-md h-full flex flex-col items-start justify-center rounded-md'>
                <div id='top-row' className='flex flex-row items-end w-full justify-start gap-4 sm:gap-7'>
                    <h1 id='title' className='text-4xl sm:text-5xl font-bold text-mainPurple select-none'>Vitae</h1>
                    <h2 id='word-type' className='text-[#3A3A3A] text-sm sm:text-base font-semibold italic select-none'>noun</h2>
                </div>
                <h3 id='pronunciation' className='text-xs sm:text-sm ml-1 select-none'>vē-ˌtī</h3>
                <p id='definition' className='text-sm sm:text-base mt-2 ml-1 select-none'>Life or pertaining to life.</p>
            </div>
        </div>
    )
}