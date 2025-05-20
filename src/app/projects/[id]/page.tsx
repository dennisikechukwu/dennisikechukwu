"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import { MoveRight } from 'lucide-react';

const localProjects = [
  {
    id: 1,
    name: "Endura Fit",
    desc: "A fitness website with API integration.",
    description:
      "Endura Fit helps users track workouts and find exercise routines. It integrates with RapidAPI to fetch real-time fitness data and tutorials.",
    image: "/assets/endura.png",
    technology: "React.js, Tailwind CSS, RapidAPI, Material UI",
    live_link: "https://endura-fit.vercel.app/",
  },
  {
    id: 2,
    name: "Spectra Reality",
    desc: "A tech landing page for developers.",
    description:
      "Spectra Reality is a modern landing page tailored for developers and digital businesses.",
    image: "/assets/spectra.png",
    technology: "React.js, Tailwind CSS",
    live_link: "https://spectra-reality.vercel.app/",
  },
  {
    id: 3,
    name: "Serrena",
    desc: "An e-commerce site for clothing.",
    description:
      "Serrena is a React-powered e-commerce platform offering a seamless shopping experience.",
    image: "/assets/serrena.png",
    technology: "React.js, Tailwind CSS",
    live_link: "https://serrenna.vercel.app/",
  },
  {
    id: 4,
    name: "Watch Wave",
    desc: "A video streaming site using YouTube API.",
    description:
      "Watch Wave fetches and displays content from the YouTube API with a fast UI built on Vite.",
    image: "/assets/wave.png",
    technology: "React.js, YouTube API, Tailwind CSS, Vite, Material UI",
    live_link: "https://watch-waves.vercel.app/",
  },
  {
    id: 5,
    name: "Stellar",
    desc: "An api security landing page",
    description:
      "Stellar is a landing page that  works on all devices, so you only have to set it up once.",
    image: "/assets/stellar.png",
    technology: "Next.js, Tailwind CSS",
    live_link: "https://stellar-beta-rust.vercel.app/",
  },
  {
    id: 6,
    name: "Breezy",
    desc: "A weather app with live api.",
    description:
      "Breezy is a weather app that produces real time weather information for a specific location or area.",
    image: "/assets/breezy.png",
    technology: "React.js, CSS, Local Storage",
     live_link: "https://breezy-three.vercel.app/",
  },
  
  {
    id: 7,
    name: "Task Master",
    desc: "A simple to-do app.",
    description:
      "Task Master is a to-do app that retains tasks even after refreshing using local storage.",
    image: "/assets/task.png",
    technology: "React.js, Tailwind CSS, Local Storage",
    live_link: "https://task-masterrs.vercel.app/",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = Number(id);
  const project = localProjects.find((proj) => proj.id === projectId);
  const [shuffle, setShuffle] = useState<Array<typeof localProjects[number]>>([]);

  useEffect(() => {
    const filteredProjects = localProjects.filter((proj) => proj.id !== projectId);
    const shuffled = filteredProjects.sort(() => Math.random() - 0.5).slice(0, 2);
    setShuffle(shuffled);
  }, [projectId]);

  if (!project) {
    return (
      <div className="text-center text-white mt-10">
        <h2 className="text-2xl">Project Not Found</h2>
        <Link href="/">
          <button className="mt-4 bg-blue-600 px-4 py-2 rounded">Back to Home</button>
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto">
      <Nav />
      <div className="mt-3 bg-black p-7 rounded-md">
        <h1 className="text-center text-lg md:text-4xl text-[#cec9c9] font-semibold font-sans">{project.name}</h1>
        <p className="text-center font-sans text-lg mt-4 text-[#cec9c9]">{project.desc}</p>
        <div className="flex justify-center items-center mt-5 p-1 md:p-4  rounded-md  transition-all">
          <Image
            src={project.image}
            alt={project.name}
            width={300}
            height={450}
            className="w-full rounded-md md:h-[500px] max-sm:h-[230px]"
          />
        </div>
        <div className="mt-5 bg-[#0e0e0e] p-7 rounded-md flex justify-between items-center flex-wrap max-sm:gap-5">
          <div className="flex flex-col gap-3">
            <p className=" text-white text-[20px]">Technologies Used</p>
            <p className="text-[#9b9595] text-lg">{project.technology}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className=" text-white text-[20px]">Link</p>
            <a href={project.live_link} className="p-1 bg-[#0e0e0e] border-[#a3a2a2] border px-1.5 rounded-lg">
              <div className="flex justify-between items-center gap-2.5">
                <p className="text-white text-lg hover:text-white transition-all">View Live</p>
                <MoveRight className="text-white font-semibold" />
              </div>
            </a>
          </div>
        </div>
        <div className="mt-5 lg:mt-7">
          <p className="text-lg md:text-xl text-white font-sans">{project.description}</p>
        </div>
      </div>

      {/* More Projects Section */}
      <div className="mt-3 rounded-lg bg-black p-4">
        <h1 className="px-5 py-2 text-2xl text-[#eae6e6] font-sans">More Projects</h1>
        <div className="flex flex-wrap justify-center">
          {shuffle.map((proj) => (
            <Link key={proj.id} href={`/projects/${proj.id}`} className="p-4 text-white rounded-lg cursor-pointer">
              <Image src={proj.image} alt={proj.name} width={430} height={600} className="h-52 max-sm:h-48 rounded-tl-md rounded-tr-md" />
              <div className="p-3 bg-[#0e0e0e] rounded-bl-md rounded-br-md">
                <h2 className="text-xl font-bold mt-2 text-[white] font-sans">{proj.name}</h2>
                <p className="text-[white] font-sans mt-2">{proj.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
