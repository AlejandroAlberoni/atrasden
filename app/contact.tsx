import React from 'react'
import { Righteous } from 'next/font/google'

const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
})

const Contact = () => {
  return (
    <section id='contact'>
      <h1 className={`${righteous.className} text-3xl lg:text-6xl font-bold text-center mb-20 tracking-widest opacity-100 animate-[fadeIn_0.5s_ease_forwards]`}>
        
      </h1>
    </section>
  )
}

export default Contact