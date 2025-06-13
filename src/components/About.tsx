import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <section id="/" className="mt-3 bg-black p-7 rounded-lg">
      <h1 className="px-5 py-2 text-xl text-[#eae6e6] font-serif">
        About Me
      </h1>
      <div className='flex gap-5 relative justify-center items-center mt-6 lg:mt-7 p-3'>
      <div className="transform rotate-6 hover:rotate-0 transition-all duration-500">
            <Image src="/assets/blue.jpg" alt="Laptop Project" width={220} height={220} className="rounded-lg shadow-lg" />
          </div>
          <div className="transform -rotate-6 hover:rotate-0 transition-all duration-500">
            <Image src="/assets/pink.jpg" alt="Phone Project" width={220} height={220} className="rounded-lg shadow-lg" />
          </div>
      </div>
      <div className='mt-3 lg:mt-4 p-2'>
        <p className='mb-4 text-[#eae6e6] font-sans'>
  I’m a 300-level Mathematics student at UNILAG with a strong passion for problem-solving, technology, and innovation. My background sharpens my analytical thinking and equips me to approach challenges with structure and precision.
</p>

<p className='mb-4 text-[#eae6e6] font-sans'>
  I’m also a web developer skilled in React.js, Next.js, TypeScript and Tailwind CSS. I create responsive, user-friendly interfaces that combine functionality with sleek design, focusing on performance and scalability.
</p>

<p className='mb-4 text-[#eae6e6] font-sans'>
  I love tackling complex problems, learning new technologies, and crafting digital products that make a real impact. Whether debugging code or optimizing UI/UX, I bring creativity and logic to every project.
</p>

<p className='mb-4 text-[#eae6e6] font-sans'>
  I’ve interned at <span className='font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text'>Prodigy Infotech</span> and <span className='font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text'>CodeAlpha Tech</span>, where I applied my skills in real-world projects and gained hands-on experience in front-end development and collaborative problem-solving.
</p>

<p className='mb-4 text-[#eae6e6] font-sans'>
  Driven by curiosity and adaptability, I’m always evolving and ready to take on diverse challenges that align with both technical and business goals.
</p>

       <p className='mb-4 text-[#eae6e6] font-sans'>Here are some key metrics i have improved in: </p>
      </div>

      <div className="bg-[#0e0e0e] text-white py-12 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Stat 1 */}
        <div>
          <h2 className="text-5xl  bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text font-sans">70%</h2>
          <p className="text-lg font-semibold mt-2">Increase in Project Efficiency</p>
          <p className="text-gray-300">By applying structured problem-solving techniques.</p>
        </div>

        {/* Stat 2 */}
        <div>
          <h2 className="text-5xl  bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text font-sans">73%</h2>
          <p className="text-lg font-semibold mt-2">Improved UI Performance</p>
          <p className="text-gray-300">Through optimized component structuring.</p>
        </div>

        {/* Stat 3 */}
        <div>
          <h2 className="text-5xl  bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text font-sans">80%</h2>
          <p className="text-lg font-semibold mt-2">Better Code Maintainability</p>
          <p className="text-gray-300">Using scalable and reusable components.</p>
        </div>

        {/* Stat 4 */}
        <div>
          <h2 className="text-5xl bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text font-sans">70%</h2>
          <p className="text-lg font-semibold mt-2">Higher Engagement</p>
          <p className="text-gray-300">By crafting visually appealing and responsive interfaces.</p>
        </div>
      </div>
    </div>
      </section>
  )
}

export default About