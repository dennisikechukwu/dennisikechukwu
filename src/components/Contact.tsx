import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className="mt-3 bg-[#151414] p-7 rounded-lg">
      <p className='text-center lg:text-xl text-lg font-serif text-white mt-5 lg:mt-10'>Get in touch</p>
      <div className='mt-4'>
        <p className='text-4xl max-sm:text-2xl lg:text-6xl text-center font-semibold text-white'>Need A Game Changing</p>
        <p className='text-center text-white lg:text-2xl text-xl'>Website?</p>

        {/* Contact Me Button */}
        <div className='mt-5 lg:mt-8 flex justify-center'>
          <a href="mailto:okwuchukwudennis001@gmail.com">
            <button className='py-3 px-4 bg-[#d4d0d0] text-black rounded-full font-sans hover:bg-[#757373] transition-all'>
              Contact Me
            </button>
          </a>
        </div>

        {/* Social Links */}
        <div className='flex justify-center gap-6 mt-5 lg:mt-8'>
          <a href="mailto:okwuchukwudennis001@gmail.com" className='text-xl text-white font-sans hover:underline'>
            E-mail
          </a>
          <a href="https://www.linkedin.com/in/ikechukwu-dennis-a17489259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className='text-xl text-white font-sans hover:underline'>
            LinkedIn
          </a>
          <a href="https://x.com/D52769Dennis?t=8sqUlQycLgTH1q54CIINIg&s=09" target="_blank" rel="noopener noreferrer" className='text-xl text-white font-sans hover:underline'>
            X
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
