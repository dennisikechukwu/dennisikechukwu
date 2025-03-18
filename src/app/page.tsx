import React from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skill from '@/components/Skill'
import Process from '@/components/Process'
import About from '@/components/About'
import Contact from '@/components/Contact'

const Home = () => {
  return (
    <div className='max-w-5xl mx-auto'> 
        <Nav/>
        <Hero/>
        <Projects/>
        <Skill/>
        <Process/>
        <About/>
        <Contact/>
    </div>
  )
}

export default Home

