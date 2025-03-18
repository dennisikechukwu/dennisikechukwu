import React from 'react'
//import LaptopImage from '/assets/blue.jpg'; // Adjust the path accordingly
//import PhoneImage from '/assets/blue.jpg'; // Adjust the path accordingly
import Image from 'next/image';


const About = () => {
  return (
    <section id="/" className="mt-3 bg-[#151414] p-7 rounded-lg">
      <h1 className="px-5 py-2 text-xl text-[#eae6e6] font-serif">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="relative flex gap-6">
          <div className="transform rotate-6 hover:rotate-0 transition-all duration-500">
            <Image src="/assets/blue.jpg" alt="Laptop Project" width={200} height={200} className="rounded-lg shadow-lg" />
          </div>
          <div className="transform -rotate-6 hover:rotate-0 transition-all duration-500">
            <Image src="/assets/pink.jpg" alt="Phone Project" width={200} height={200} className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-white max-w-2xl">
          <p className="mb-4">
            I am a **problem solver** passionate about tackling challenges through logic and creativity.  
            Currently, I am a **300-level Bachelor of Science in Mathematics student at UNILG**,  
            honing my analytical and computational skills while diving deep into the world of Web Development.  
          </p>
          <p className="mb-6">
            With expertise in **React.js, Next.js, and Tailwind CSS**, I craft sleek and functional interfaces  
            while optimizing performance and user experience.  
          </p>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-purple-400 text-3xl font-bold">40%</div>
            <div className="text-purple-400 text-3xl font-bold">30%</div>
            <div className="text-purple-400 text-3xl font-bold">35%</div>
            <div className="text-purple-400 text-3xl font-bold">50%</div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300 mt-2">
            <div>
              <h3 className="font-semibold">Increase in Project Efficiency</h3>
              <p>By applying structured problem-solving techniques.</p>
            </div>
            <div>
              <h3 className="font-semibold">Improved UI Performance</h3>
              <p>Through optimized component structuring.</p>
            </div>
            <div>
              <h3 className="font-semibold">Better Code Maintainability</h3>
              <p>Using scalable and reusable components.</p>
            </div>
            <div>
              <h3 className="font-semibold">Higher Engagement</h3>
              <p>By crafting visually appealing and responsive interfaces.</p>
            </div>
          </div>
        </div>
      </div>
      </section>
  )
}

export default About