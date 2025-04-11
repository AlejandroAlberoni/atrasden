"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  montserrat,
  space_grotesk,
  ramabhadra,
} from "@/lib/fonts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
          title="Front-end Application"
          description="This project consisted of creating the front-end of an application that shows the comfort statistics of an environment, which are stored by sensors in various locations in an institution. The application required graphical visualization using the recharts library, various statistics were shown; also required user authentication with jwt tokens, cookies for session control. It was a great real-world experience."
          link="https://github.com/gaia-ufpel/confortimetro_klimaa_frontend"
          textlink="See on GitHub"
          techstack={[
            "React",
            "Next.js",
            "Typescript",
            "shadcn/ui",
          ]}
          imgsources={["/confortimetro1.png", "/confortimetro2.png"]}
        />

        <ProjectCard
          title="UI Design and Front-end"
          description="I designed this landing page entirely in Framer, focusing on smooth, responsive animations and interactions. For implementation, I used Next.js and deployed it via Vercel. The focus here was creating a visually appealing landind page for a crypto project."
          link="https://criptofides-landingpage.vercel.app"
          textlink="See live project"
          techstack={[
            "Framer",
            "Next.js",
            "Typescript",
            "React",
          ]}
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
        <CardDescription
          className={`${montserrat.className} text-justify text-sm`}
        >
          {description.length > 180
            ? `${description.slice(0, 180)}...`
            : description}
      <Link
        className="ml-2 inline-block bg-white px-3 rounded-sm text-violet-600 border-2 border-violet-600 hover:scale-105 transition-all mt-10 mb-4 -rotate-[90deg] float-right"
        href={`/expanded-project?${queryParams}`}
        rel="noopener noreferrer"
      >
        More
      </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 flex-grow">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              Show images
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-4 text-black">
                {title}
              </DialogTitle>
            </DialogHeader>
            {imgsources?.length > 0 && (
              <Carousel className="w-full mx-auto text-black">
                <CarouselContent>
                  {imgsources.map((value, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Image
                          src={value}
                          width={800}
                          height={400}
                          alt={`Project image ${index + 1}`}
                          className="rounded-lg object-cover w-full h-auto"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="translate-x-5 md:translate-x-0" />
                <CarouselNext className="-translate-x-5 md:translate-x-0" />
              </Carousel>
            )}
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" className="w-full text-black">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
      <CardFooter className="justify-center mt-auto">
        <Button asChild variant="outline" className="font-sans w-full">
          <Link href={link} target="_blank" rel="noopener noreferrer">
            {textlink}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
