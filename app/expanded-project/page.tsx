"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { rubik } from "@/lib/fonts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";

const Page = () => {
  const params = useSearchParams();
  const title = params.get("title");
  const description = params.get("description");
  const link = params.get("link");
  const textlink = params.get("textlink");
  const imgsources: string[] = params.get("imgsources")
    ? JSON.parse(params.get("imgsources") || "[]")
    : [];
  const techstack: string[] = params.get("techstack")
    ? JSON.parse(params.get("techstack") || "[]")
    : [];

  return (
    <div className="text-white flex flex-col items-center space-y-2 md:space-y-10">
      <Link
        className="fixed left-4 top-2 font-mono font-extrabold group border-[1px] border-white px-2 rounded-sm "
        href={`/#projects`}
      >
        <ArrowBigLeft className="hidden md:inline-block w-6 h-6 text-violet-600 group-hover:-translate-x-2 transition-all" />
        Back
      </Link>
      <h2 className={`${rubik.className} text-xl md:text-3xl`}>{title}</h2>
      <p className="mt-10 md:w-1/4 text-center text-sm md:text-lg font-sans">
        {description}
      </p>
      <Button variant={'link'} className="font-sans text-white">
          <Link href={link ? link : ""} target="_blank" rel="noopener noreferrer">
            {textlink}
          </Link>
      </Button>
      <div>
        <h2 className="text-center">Stack in this project:</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {techstack
            ? techstack.map((value, index) => (
                <Badge key={index} variant="secondary" className="font-mono">
                  {value}
                </Badge>
              ))
            : ""}
        </div>
      </div>
      <div className="w-[100vw] h-auto flex flex-col items-center">
        {imgsources.map((value, index) => (
          <div key={index} className="w-full">
            <Image
              src={value}
              alt={`Image ${index + 1}`}
              width={1920}
              height={1080}
              className="w-full h-auto object-cover mt-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
