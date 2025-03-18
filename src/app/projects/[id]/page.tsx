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
  },
  {
    id: 2,
    name: "Spectra Reality",
    desc: "A tech landing page for developers.",
    description:
      "Spectra Reality is a modern landing page tailored for developers and digital businesses.",
    image: "/assets/spectra.png",
    technology: "React.js, Tailwind CSS",
  },
  {
    id: 3,
    name: "Serrena",
    desc: "An e-commerce site for clothing.",
    description:
      "Serrena is a React-powered e-commerce platform offering a seamless shopping experience.",
    image: "/assets/serrena.png",
    technology: "React.js, Tailwind CSS",
  },
  {
    id: 4,
    name: "Watch Wave",
    desc: "A video streaming site using YouTube API.",
    description:
      "Watch Wave fetches and displays content from the YouTube API with a fast UI built on Vite.",
    image: "/assets/wave.png",
    technology: "React.js, YouTube API, Tailwind CSS, Vite, Material UI",
  },
  {
    id: 5,
    name: "Task Master",
    desc: "A simple to-do app.",
    description:
      "Task Master is a to-do app that retains tasks even after refreshing using local storage.",
    image: "/assets/task.png",
    technology: "React.js, Tailwind CSS, Local Storage",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shuffle, setShuffle] = useState([]);

  useEffect(() => {
    fetch(`/api/projects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setProject(null);
        } else {
          setProject(data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    // Exclude the current project
    const filteredProjects = localProjects.filter((proj) => proj.id !== Number(id));

    // Shuffle and pick 2 random projects
    const shuffled = filteredProjects.sort(() => Math.random() - 0.5).slice(0, 2);

    setShuffle(shuffled);
  }, [id]);

  if (loading) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  if (!project) {
    return (
      <div className="text-center text-white mt-10">
        <h2 className="text-2xl">Project Not Found</h2>
        <Link href="/">
          <button className="mt-4 bg-blue-600 px-4 py-2 rounded">
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto">
      <Nav />
      <div className="mt-3 bg-[#151414] p-7 rounded-md">
        <h1 className="text-center text-lg md:text-4xl text-[#cec9c9] font-semibold font-sans">{project.name}</h1>
        <p className="text-center text-lg mt-4 text-[#cec9c9]">{project.desc}</p>
        <div className="flex justify-center items-center mt-5 p-4 hover:border-[1.4px]  rounded-md hover:border-[#737375] transition-all">
          <Image
            src={project.image}
            alt="image"
            width={300}
            height={450}
            className="w-full rounded-md md:h-[500px]"
          />
        </div>
        <div className="mt-5 bg-[#1A1A1A] p-7 rounded-md flex justify-between items-center flex-wrap max-sm:gap-5">
          <div className="flex flex-col gap-3">
            <p className=" text-white text-[20px]">Technologies Used</p>
            <p className="text-[#9b9595] text-lg">{project.technology}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className=" text-white text-[20px]">Link</p>
            <a href={project.live_link}>
              <div className="flex justify-between items-center gap-2.5">
                <p className="text-[#d1d1d1] text-lg hover:text-white transition-all">View Live</p>
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
      <div className="mt-3 rounded-lg bg-[#151414] p-4">
        <h1 className="px-5 py-2 text-xl text-[#eae6e6] font-serif">
          More Projects
        </h1>
        <div className="flex flex-wrap justify-center ">
          {shuffle.map((proj) => (
            <Link key={proj.id} href={`/projects/${proj.id}`} className="p-4 text-white rounded-lg cursor-pointer">
              <Image src={proj.image} alt={proj.name} width={430} height={600} className="h-52 max-sm:h-48 rounded-tl-md rounded-tr-md "/>
              <div className="p-3 bg-[#2d2b2b] rounded-bl-md rounded-br-md">
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
