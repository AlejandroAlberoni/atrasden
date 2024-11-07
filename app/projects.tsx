"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Righteous, Montserrat, Space_Grotesk } from "next/font/google";
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button';

const righteous = Righteous({
    subsets: ['latin'],
    weight: ['400'],
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600'],
})

const space_grotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['700'],
})

export default function Projects() {
    return (
        <section id='projects' className="container mx-auto">
            <h1 className={`${righteous.className} text-3xl lg:text-6xl font-bold text-center mb-12 tracking-widest opacity-100 select-none`}>
                Projects
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4'>
                <ProjectCard
                    title='Confortímetro (Front-end)'
                    description='Este projeto foi feito na Universidade Federal de Pelotas (UFPEL) e consistiu na criação do front-end de um aplicativo que mostra estatísticas de conforto de um ambiente, e são armazenadas por sensores que estão em diversos locais de uma instituição. O aplicativo demandou, visualização de gráficos: utilizando a biblioteca recharts vários gráficos eram geradas mostrando diversas métricas. Autenticação de usuários por meio de tokens (JWT): controle de sessões por meio de cookies e middleware que protegiam as funcionalidades exclusivas para administradores. Usuários comuns demandavam somente a visualização de gráficos, administradores demandavam gerenciamento dos usuários comuns e gerenciamento dos sensores. O aplicativo em si demandou toda uma integração com o back-end.'
                    link='https://github.com/gaia-ufpel/confortimetro_klimaa_frontend'
                    techstack={['React', 'Next.js', 'Typescript', 'TailwindCSS', 'shadcn/ui', 'axios', 'recharts', 'zod']}
                    imgsources={['/confortimetro1.png', '/confortimetro2.png']} />

                <ProjectCard
                    title='Front-end portfolio'
                    description='Este é o meu portfolio anterior, feito com fins de aprendizagem. O projeto consistia em um brainstorm criativo do design usando o figma, e depois implementação. Este foi o meu primeiro projeto front-end e utilizando Next.js'
                    link='https://github.com/AlejandroAlberoni/frontend-portfolio'
                    techstack={['React', 'Next.js', 'Typescript', 'TailwindCSS']}
                    imgsources={['/legacyportfolio1.png', '/legacyportfolio4.png', '/legacyportfolio2.png', '/legacyportfolio3.png']} />
            </div>
        </section>
    );
}

function ProjectCard({ title, description, link, imgsources, techstack }: { title: string, description: string, link: string, imgsources: string[], techstack: string[] }) {
    return (
        <Card className="flex flex-col h-full">
            <CardHeader>
                <CardTitle className={`${space_grotesk.className} font-bold text-center text-2xl mb-4`}>{title}</CardTitle>
                <CardDescription className={`${montserrat.className} text-justify text-sm`}>{description}</CardDescription>
            </CardHeader>
            <CardContent className='space-y-6 flex-grow'>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline" className="w-full">Mostrar imagens</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="max-w-3xl">
                        <AlertDialogHeader>
                            <AlertDialogTitle className="text-2xl font-bold mb-4 text-black">{title}</AlertDialogTitle>
                        </AlertDialogHeader>
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
                                <CarouselPrevious className='translate-x-5 md:translate-x-0'/>
                                <CarouselNext className='-translate-x-5 md:translate-x-0'/>
                            </Carousel>
                        )}
                        <AlertDialogFooter>
                            <AlertDialogCancel className='text-black'>Fechar</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                <div className='flex flex-wrap gap-2 justify-center'>
                    {techstack.map((value, index) => (
                        <Badge key={index} variant="secondary">{value}</Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className='justify-center mt-auto'>
                <Button asChild variant='outline' className='font-sans w-full'>
                    <Link href={link} target='_blank' rel="noopener noreferrer">
                        Ver no GitHub
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}