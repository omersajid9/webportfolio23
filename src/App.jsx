import React, { useState, useRef, useEffect, forwardRef } from 'react'
import './App.css'

import particlesConfig from './configParticles';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";




import Navigation from './components/navigation'
import Home from './components/home'
import Education from './components/education'
import Experience from './components/experience'
import Skills from './components/skills'

// import './components/particle'

function App() {
  const [count, setCount] = useState(0)
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const bigPage = useRef(null);
  const particles = useRef(null);

  const scrollToSection = (elementRef) =>
  {
    elementRef.current.scrollIntoView({behavior: 'smooth'});
  }
  console.log(particlesConfig)

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div ref={bigPage} className="App items-center justify-center bg-fixed overflow-hidden">
      <Particles className="overflow-hidden"
      id="tsparticles"
      init={particlesInit}

      options={particlesConfig}
    />
<div className="grid md:grid-cols-12 w-full md:w-11/12 md:mx-auto grid-cols-1  bg-white">
        <div className="md:flex justify-center md:col-span-1 items-center md:col-start-4 md:col-end-5 flex-row">
        <div className=" bg-inherit rounded-br-xl rounded-bl-xl justify-between md:justify-center fixed w-full md:w-fit px-6 md:items-center py-6 z-10">
        <ul className="flex  md:flex-col justify-between items-center">
            <li className="md:mx-10 md:my-5">
              <a className="hover:text-black hover:bg-[#8BCDF9] hover:bg-opacity-50 rounded-full bg-black bg-opacity-100 p-2 text-white cursor-pointer font-bold font-base px-4 font-text  border-b-4 border-black " onClick={()=>scrollToSection(homeRef)}>Home</a>
            </li>
            <li className="md:mx-10 md:my-5">
              <a className="hover:text-black hover:bg-[#BAF2BB] hover:bg-opacity-50 rounded-full bg-black bg-opacity-100 p-2 text-white cursor-pointer font-bold font-base px-4 font-text  border-b-4 border-black " onClick={()=>scrollToSection(projectsRef)}>Projects</a>
            </li>
            <li className="md:mx-10 md:my-5">
              <a className="hover:text-black hover:bg-[#F2BAC9] hover:bg-opacity-50 rounded-full bg-black bg-opacity-100 p-2 text-white cursor-pointer font-bold font-base px-4 font-text  border-b-4 border-black " onClick={()=>scrollToSection(experienceRef)}>Experience</a>
            </li>
            <li className="md:mx-10 md:my-5">
              <a className="hover:text-black hover:bg-[#F2E2BA] hover:bg-opacity-50 rounded-full bg-black bg-opacity-100 p-2 text-white cursor-pointer font-bold font-base px-4 font-text   border-b-4 border-black "  onClick={()=>scrollToSection(skillsRef)}>Skills</a>
            </li>
        </ul>
      </div>
        </div>
        <div className='snap-y h-screen  overflow-y-scroll scrollbar-none snap-mandatory md:col-span-8 md:col-start-5 md:col-end-11'>
          <div ref={homeRef} id="Home" className="snap-center">
            <Home />
            
          </div>
          <div className='h-1/3 bg-inherit'></div>
          <div ref={projectsRef} id="Projects" className="snap-center">
            <Education />
          </div>
          <div className='h-1/3 bg-inherit'></div>
          <div ref={experienceRef} id="Experience" className="snap-center">
              <Experience/>
          </div>
          <div className='h-full bg-none'></div>
          <div  ref={skillsRef} id="Skills" className="snap-center">
            <Skills/>
          </div>
          <div className='h-1/3 bg-inherit'></div>
        </div>
        
        

      </div>
    </div>
  )
}

export default App

