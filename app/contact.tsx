import React from 'react'
import { Space_Grotesk, Righteous } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['700'],
})
const righteous = Righteous({
    subsets: ['latin'],
    weight: ['400'],
})

const Contact = () => {
  return (
    <section id='contact'>
        <h1>Contact</h1>
    </section>
  )
}

export default Contact