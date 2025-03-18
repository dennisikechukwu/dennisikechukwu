import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <section id="/" className="mt-3 bg-[#151414] p-7 rounded-lg">
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
        <p className='mb-4 text-[#eae6e6] font-sans '>I am a passionate problem solver with a deep love for mathematics, technology, and innovation. Currently, I am a 300-level Bachelor of Science in Mathematics student at UNILAG, where I develop strong analytical and logical reasoning skills that enhance my ability to tackle complex problems efficiently. My background in mathematics not only sharpens my critical thinking but also provides me with a structured approach to breaking down challenges and finding optimal solutions.</p>
        <p className='mb-4 text-[#eae6e6] font-sans'>Beyond academics, I am a dedicated web developer with expertise in React.js, Next.js, and Tailwind CSS. I specialize in creating intuitive, responsive, and visually appealing user interfaces that enhance user experience and engagement. My ability to blend logic with creativity allows me to craft web applications that are not only functional but also highly efficient and scalable.</p>

        <p className='mb-4 text-[#eae6e6] font-sans'>I thrive on challenges and continuously push myself to learn new technologies and refine my problem-solving techniques. Whether its debugging a tricky piece of code, optimizing performance, or designing a seamless user interface, I am always eager to explore innovative solutions. My goal is to build impactful digital products that simplify complex ideas and make technology more accessible to users.</p>

        <p className='mb-4 text-[#eae6e6] font-sans'>As someone who is always learning and evolving, I take pride in my adaptability and ability to work on diverse projects. From mathematics to web development, I approach every task with a mindset of curiosity and determination, ensuring that I deliver high-quality work that meets both technical and business objectives.</p>
       <p className='mb-4 text-[#eae6e6] font-sans'>Here are some key metrics i have improved in: </p>
      </div>

      <div className="bg-[#151414] text-white py-12 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Stat 1 */}
        <div>
          <h2 className="text-5xl  text-purple-500 font-sans">70%</h2>
          <p className="text-lg font-semibold mt-2">Increase in Project Efficiency</p>
          <p className="text-gray-400">By applying structured problem-solving techniques.</p>
        </div>

        {/* Stat 2 */}
        <div>
          <h2 className="text-5xl  text-purple-500 font-sans">73%</h2>
          <p className="text-lg font-semibold mt-2">Improved UI Performance</p>
          <p className="text-gray-400">Through optimized component structuring.</p>
        </div>

        {/* Stat 3 */}
        <div>
          <h2 className="text-5xl  text-purple-500 font-sans">80%</h2>
          <p className="text-lg font-semibold mt-2">Better Code Maintainability</p>
          <p className="text-gray-400">Using scalable and reusable components.</p>
        </div>

        {/* Stat 4 */}
        <div>
          <h2 className="text-5xl  text-purple-500 font-sans">70%</h2>
          <p className="text-lg font-semibold mt-2">Higher Engagement</p>
          <p className="text-gray-400">By crafting visually appealing and responsive interfaces.</p>
        </div>
      </div>
    </div>
      </section>
  )
}

export default About