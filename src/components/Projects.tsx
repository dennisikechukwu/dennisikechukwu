"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Local projects as fallback
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
    name: "Stellar",
    desc: "An api security landing page",
    description:
      "Stellar is a landing page that  works on all devices, so you only have to set it up once.",
    image: "/assets/stellar.png",
    technology: "Next.js, Tailwind CSS",
  },
  {
    id: 6,
    name: "Breezy",
    desc: "A weather app with live api.",
    description:
      "Breezy is a weather app that produces real time weather information for a specific location or area.",
    image: "/assets/breezy.png",
    technology: "React.js, CSS, Local Storage",
  },
  {
    id: 7,
    name: "Task Master",
    desc: "A simple to-do app.",
    description:
      "Task Master is a to-do app that retains tasks even after refreshing using local storage.",
    image: "/assets/task.png",
    technology: "React.js, Tailwind CSS, Local Storage",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(localProjects);
  const [visibleCount, setVisibleCount] = useState(2);
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  const handleLoadToggle = () => {
    if (expanded) {
      setVisibleCount(2);
    } else {
      setVisibleCount(projects.length);
    }
    setExpanded(!expanded);
  };

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => console.warn("API failed, using local projects."));
  }, []);

  return (
    <section id="projects" className="mt-3 bg-black p-7 rounded-lg">
      <h1 className="px-5 py-2 text-2xl text-[#eae6e6] font-sans font-semibold">
        Live Projects
      </h1>
      <div className="flex flex-wrap justify-center">
        {projects.slice(0, visibleCount).map((project) => (
          <div
            key={project.id}
            className="p-4 text-white rounded-lg cursor-pointer"
            onClick={() => router.push(`/projects/${project.id}`)}
          >
            <Image
              src={project.image || "/assets/default.png"}
              alt={project.name}
              width={450}
              height={600}
              className="h-52 max-sm:h-48 rounded-tl-md rounded-tr-md "
            />
            <div className="p-3 bg-[#0e0e0e] rounded-bl-md rounded-br-md">
              <h3 className="text-xl font-bold mt-2 text-[white] font-sans">
                {project.name}
              </h3>
              <p className="text-[white] font-sans mt-2">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 lg:px-9 py-2 mt-4 ">
        <button
          onClick={handleLoadToggle}
          className="px-5 py-3 bg-[#1A1A1A] text-white rounded-full hover:bg-[#272626] transition border border-[#a3a2a2]"
        >
          {expanded ? "Show Less" : "Load More"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
