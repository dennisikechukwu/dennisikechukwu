import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const projects = [
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
    name: "Task Master",
    desc: "A simple to-do app.",
    description:
      "Task Master is a to-do app that retains tasks even after refreshing using local storage.",
    image: "/assets/task.png",
    technology: "React.js, Tailwind CSS, Local Storage",
    live_link: "https://task-masterrs.vercel.app/",
  },
];

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  // Sync access (NO AWAIT)
  const { id } = context.params;

  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
