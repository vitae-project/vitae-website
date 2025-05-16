'use client'
import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { motion } from 'framer-motion';

const FAQAnimation = {
    initial: {
        height: 0,
        margin: "8px"
    },
    open: {
        height: "auto",
        margin: "12px"
    },
    closed: {
        height: 0,
        margin: "8px"
    }
}

export default function FAQAccordian({ faqs }) {
    const [activeSegment, setActiveSegment] = useState(null);

    return (
        <div className='h-fit w-full flex flex-col items-center'>
            <div className='w-full max-w-3xl px-4 sm:px-8 flex flex-col'>
                {faqs.map(({ question, answer }, i) => (
                    <div 
                        key={"q"+i} 
                        className='w-full flex flex-col justify-between border-b-2 border-gray-300 mt-5'
                    >
                        <button 
                            className='flex items-center justify-between p-3 hover:bg-gray-50 rounded-sm transition-colors duration-200'
                            onClick={() => setActiveSegment(prev => prev === i ? null : i)}
                        >
                            <h2 className='text-left text-base sm:text-lg font-medium pr-8'>
                                {question}
                            </h2>
                            <div className='flex-shrink-0 p-1 rounded-sm'>
                                {activeSegment === i ? <FaMinus className="w-4 h-4" /> : <FaPlus className="w-4 h-4" />}
                            </div>
                        </button>
                        <motion.div 
                            variants={FAQAnimation} 
                            initial="initial" 
                            animate={activeSegment === i ? "open" : "closed"} 
                            className="overflow-hidden"
                        >
                            <p className="text-sm sm:text-base text-gray-600 px-3 pb-3">
                                {answer}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}