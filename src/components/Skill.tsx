import React from 'react'
import { Code, Braces, Brush, Database, Layers, Package } from "lucide-react";

const skills = [
    {
      icon: <Code size={40} />, 
      title: "HTML & CSS",
      description: "Crafting semantic, accessible, and visually appealing web interfaces."
    },
    {
      icon: <Braces size={40} />, 
      title: "JavaScript & TypeScript",
      description: "Developing robust and scalable applications with JavaScript (ES6+) and TypeScript."
    },
    {
      icon: <Layers size={40} />, 
      title: "React & Next.js",
      description: "Creating dynamic, interactive, and server-side rendered applications."
    },
    {
      icon: <Brush size={40} />, 
      title: "Tailwind CSS & Material UI",
      description: "Building beautiful, responsive UI designs efficiently."
    },
    {
      icon: <Package size={40} />, 
      title: "NPM & Package Management",
      description: "Managing dependencies and optimizing workflows for scalable development."
    },
];

const Skill = () => {
  return (
    <section id="skills" className="mt-3 bg-[#151414] p-7 rounded-lg">
      <div className='mt-4 lg:mt-7 p-3'>
        <h2 className="lg:text-3xl text-lg font-bold mb-4 text-center text-[white] font-serif">
          I build engaging, high-performance web applications.
        </h2>
        <p className="text-[#cecdcd] mb-8 text-center">
          Leveraging modern front-end technologies to craft seamless user experiences.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="bg-[#151414] p-6 rounded-lg flex flex-col items-start border-[0.8px] border-[#323232] hover:border-[#494949] transition-all">
            <div className="text-white mb-4 text-xl">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#f0eaea] ">{skill.title}</h3>
            <p className="text-[#f0eaea] ">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skill;
