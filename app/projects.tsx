import React from 'react'
import { Righteous } from "next/font/google";

const righteous = Righteous({
    subsets: ['latin'],
    weight: ['400'],
});


export default function Projects() {
    return (
        <section id='projects'>
            <h1 className={`${righteous.className} text-3xl lg:text-6xl font-bold text-center mb-20 tracking-widest opacity-100 animate-[fadeIn_0.5s_ease_forwards]`}>
                Projects
            </h1>
        </section>
    )
}
