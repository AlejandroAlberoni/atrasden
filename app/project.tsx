"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { ArrowBigRightDash } from "lucide-react";
import { space_grotesk, ramabhadra } from "@/lib/fonts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Project() {
  return (
    <section id="projects" className="container mx-auto">
      <h1
        className={`${ramabhadra.className} text-3xl lg:text-6xl font-bold text-center mb-12 tracking-widest opacity-100 select-none`}
      >
        Projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        <ProjectCard
          title="Full-Stack - RAG Chat"
          description="Full-stack application using Next.js and NestJS implementing semantic search (RAG) over PDF résumés. Allows upload and editing of résumés, extracts structured sentences via Gemini API, generates embeddings with Cohere AI, and answers questions based on cosine similarity. Authentication is restricted to a single administrator(me) via magic link. Front-end hosted on Vercel, back-end on Railway, with MongoDB as the database."
          link="https://ragchat-frontend.vercel.app "
          textlink="See production project"
          techstack={["React", "Next.js", "Typescript", "shadcn/ui", "NestJS", "MongoDB"]}
          imgsources={["/RagchatChat.png", "/RagchatAdmin.png", "/RagchatCurriculo.png", "/RagchatHome.png"]}
        />
        <ProjectCard
          title="Front-end Application"
          description="This project consisted of creating the front-end of an application that shows the comfort statistics of an environment, which are stored by sensors in various locations in an institution. The application required graphical visualization using the recharts library, various statistics were shown; also required user authentication with jwt tokens, cookies for session control. It was a great real-world experience."
          link="https://github.com/gaia-ufpel/confortimetro_klimaa_frontend"
          textlink="See on GitHub"
          techstack={["React", "Next.js", "Typescript", "shadcn/ui"]}
          imgsources={["/confortimetro1.png", "/confortimetro2.png"]}
        />

        <ProjectCard
          title="UI Design and Front-end"
          description="I designed this landing page entirely in Framer, focusing on smooth, responsive animations and interactions. For implementation, I used Next.js and deployed it via Vercel. The focus here was creating a visually appealing landind page for a crypto project."
          link="https://criptofides-landingpage.vercel.app"
          textlink="See live project"
          techstack={["Framer", "Next.js", "Typescript", "React"]}
          imgsources={[
            "/CriptoFidesLP01.png",
            "/CriptoFidesLP02.png",
            "/CriptoFidesLP03.png",
            "/CriptoFidesLP04.png",
          ]}
        ></ProjectCard>

        <ProjectCard
          title="Front-end portfolio"
          description="This was my very first web project, done for learning purposes. The project consisted of a creative design brainstorm using figma, and then implementation using Next.js. It was intended to be a blog, and at the same time exploring React and other tools, but was discontinued."
          link="https://github.com/AlejandroAlberoni/frontend-portfolio"
          textlink="See on GitHub"
          techstack={["React", "Next.js", "Typescript"]}
          imgsources={[
            "/legacyportfolio1.png",
            "/legacyportfolio4.png",
            "/legacyportfolio2.png",
            "/legacyportfolio3.png",
          ]}
        />
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  link,
  textlink,
  imgsources,
  techstack,
}: {
  title: string;
  description: string;
  link: string;
  textlink: string;
  imgsources: string[];
  techstack: string[];
}) {
  const queryParams = new URLSearchParams({
    title,
    description,
    link,
    textlink,
    imgsources: JSON.stringify(imgsources), // Serializa arrays como strings
    techstack: JSON.stringify(techstack), // Serializa arrays como strings
  }).toString();

  return (
    <Card className="flex flex-col h-full rounded-[30px] border-2 border-gray-600">
      <CardHeader>
        <CardTitle
          className={`${space_grotesk.className} font-bold text-center text-2xl mb-4`}
        >
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 md:p-4">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={10}
          slidesPerView={1}
          className="w-full"
        >
          {imgsources.map((value, index) => (
            <SwiperSlide key={index}>
              <div className="p-1">
                <Image
                  src={value}
                  width={800}
                  height={400}
                  alt={`Project image ${index + 1}`}
                  className="md:rounded-sm object-cover w-full h-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardContent>
      <CardFooter className="flex items-center justify-center space-x-3">
        <Button asChild variant="outline" className="font-sans">
          <Link href={link} target="_blank" rel="noopener noreferrer">
            {textlink}
          </Link>
        </Button>
        <Button asChild variant="secondary" className="font-sans">
          <Link
            className="ml-2 inline-block bg-white hover:bg-violet-100 px-3 rounded-sm text-violet-600 border-2 border-violet-600 group"
            href={`/expanded-project?${queryParams}`}
            rel="noopener noreferrer"
          >
            Full description
            <ArrowBigRightDash className="ml-1 group-hover:translate-x-2 transition-all duration-200 ease-out" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
