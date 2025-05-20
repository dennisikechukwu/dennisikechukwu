import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='mt-3 bg-black p-7 rounded-lg'>
      <div className='flex justify-between items-center'>
        <div className="group flex gap-3 md:gap-6 items-center">
          <Image
            src="/assets/dennis.jpg"
            alt="description"
            width={180}
            height={180}
            className='rounded-full border-[2px] border-[#a3a2a2] transition-transform duration-300 group-hover:scale-110 max-sm:w-[120px] max-sm:h-[120px]'
          />
           <h2 className="text-xl md:text-3xl font-semibold text-white font-sans">Hi, I am Ikechukwu Dennis.</h2>
        </div>
        <div className="items-center space-x-2 mt-2 hidden md:flex ">
                <span className="w-5 h-5 bg-green-500 rounded-full"></span>
                <span className="italic font-sans text-gray-300 md:text-xl">Available</span>
              </div>
        </div>
        <div className='p-5 mt-2'>
            <h2 className='md:text-5xl text-3xl bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text font-semibold font-sans'>Frontend <span className='font-sans'>Developer</span></h2>
        </div>
        <div>
          <p className='px-5 py-3 text-[#dad9d9] text-lg font-sans'>Lagos, Nigeria.</p>
        </div>
    </section>
  )
}

export default Hero
