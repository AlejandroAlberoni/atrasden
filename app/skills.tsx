"use client"
import React from 'react';
import { FaReact, FaJsSquare } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiPython, SiTailwindcss } from "react-icons/si";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
});

const skillsData = [
  { icon: <FaReact size={80} className="text-cyan-300" />, name: "React" },
  { icon: <SiTypescript size={80} className="text-blue-500" />, name: "Typescript" },
  { icon: <SiNextdotjs size={80} className="text-black" />, name: "Next.js" },
  { icon: <SiPython size={80} className="text-blue-600" />, name: "Python" },
  { icon: <FaJsSquare size={80} className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiTailwindcss size={80} className="text-cyan-500" />, name: "TailwindCSS" },
];

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 py-20">
      <h1
        className={`${righteous.className} text-3xl lg:text-6xl font-bold text-center mb-20 tracking-widest
                    opacity-0 animate-[fadeIn_0.5s_ease_forwards]`}
      >
        Skill Stack
      </h1>
      
      <div className="flex flex-wrap justify-center gap-6 lg:gap-12 justify-items-center">
        {skillsData.map((skill, index) => (
          <SkillCard
            icon={skill.icon}
            name={skill.name}
            index={index}
            key={index}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

function SkillCard({ icon, name, index }: { icon: React.ReactNode, name: string, index: number }) {
  return (
    <figure
      className="group relative w-32 h-40 lg:w-60 lg:h-40 rounded-md lg:rounded-xl overflow-hidden cursor-pointer bg-white shadow-lg
                 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
      style={{
        animation: `fadeIn 0.5s ease forwards ${index * 0.2}s`,
        opacity: 0,
        transform: 'translateY(20px)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 group-hover:to-black/20 transition-all duration-500" />
      
      <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500 animate-pulse" />
      
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:filter group-hover:brightness-110">
        {icon}
      </div>

      <div className="absolute font-sans text-xl font-bold lg:hidden text-black bottom-2 left-1/2 -translate-x-1/2">
        {name}
      </div>

      <div className="hidden lg:block absolute inset-0">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/90 to-white/80 backdrop-blur-sm transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500" />
          
          <div className="relative z-10">
            <h3 className="font-sans text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
              {name}
            </h3>
            
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-emerald-600 to-transparent transition-all duration-700 mt-2" />
          </div>
        </div>
      </div>
    </figure>
  );
}
