import React, { useState, useRef, useEffect, forwardRef } from 'react'
import './App.css'

import particlesConfig from './configParticles';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import {AnimatePresence, motion, useAnimation} from "framer-motion";
import { useInView } from 'react-intersection-observer';
const boxVariants = {
    hidden: { scale: 0.7 },
    visible: {
      scale: 1,
    }
  }



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
  const scrollPage = useRef(null);

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);


  const scrollToSection = (elementRef) =>
  {
    // scrollPage.current.scrollTo({top: elementRef.current.offsetTop, behavior:'smooth'})
    elementRef.current.scrollIntoView({behavior: 'smooth', block:'center'});
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
    <div ref={bigPage} className="App items-center justify-center bg-fixed overflow-hidden select-none">
      <Particles className="overflow-hidden"
      id="tsparticles"
      init={particlesInit}

      options={particlesConfig}
    />
<div className="grid md:grid-cols-12 w-full md:w-11/12 lg:w-12/12 md:mx-auto grid-cols-1  bg-white overflow-hidden">
        <div className="md:flex justify-center md:col-span-1 items-center md:col-start-1 md:col-end-3 lg:col-start-2 lg:col-end-3 flex-row">
        <div className=" bg-inherit rounded-br-xl rounded-bl-xl justify-between md:justify-center fixed w-full md:w-fit px-6 md:items-center py-6 z-10">
        <ul className="flex  md:flex-col justify-between items-center">
            <li className="md:mx-10 md:my-5">
              <motion.button whileTap={{scale:2, transition: { duration: 2 }}} className="text-black ring-2 ring-[#8BCDF9] shadow-inner shadow-black bg-[#8BCDF9] bg-opacity-50 rounded-full py-1 cursor-pointer font-bold md:text-base lg:text-2xl px-2 md:px-4 font-text  border-b-0 border-black " onClick={()=>scrollToSection(homeRef)}>Home</motion.button>
            </li>
            <li className="md:mx-10 md:my-5">
              <motion.button whileTap={{scale:2, transition: { duration: 2 }}} className="text-black ring-2 ring-[#BAF2BB] shadow-inner shadow-black bg-[#BAF2BB] bg-opacity-50 rounded-full py-1 cursor-pointer font-bold md:text-base lg:text-2xl px-2 md:px-4 font-text  border-b-0 border-black " onClick={()=>scrollToSection(projectsRef)}>Projects</motion.button>
            </li>
            <li className="md:mx-10 md:my-5">
              <motion.button whileTap={{scale:2, transition: { duration: 2 }}} className="text-black ring-2 ring-[#F2BAC9] shadow-inner shadow-black bg-[#F2BAC9] bg-opacity-50 rounded-full py-1 cursor-pointer font-bold md:text-base lg:text-2xl px-2 md:px-4 font-text  border-b-0 border-black " onClick={()=>scrollToSection(experienceRef)}>Experience</motion.button>
            </li>
            <li className="md:mx-10 md:my-5">
              <motion.button whileTap={{scale:2, transition: { duration: 2 }}} className="text-black ring-2 ring-[#F2E2BA] shadow-inner shadow-black bg-[#F2E2BA] bg-opacity-50 rounded-full py-1 cursor-pointer font-bold md:text-base lg:text-2xl px-2 md:px-4 font-text   border-b-0 border-black "  onClick={()=>scrollToSection(skillsRef)}>Skills</motion.button>
            </li>
        </ul>
      </div>
        </div>
        
        <div ref={scrollPage} className='snap-y h-screen my-0 overflow-y-scroll scrollbar-none snap-mandatory md:col-span-9 md:col-start-3 md:col-end-13 lg:col-span-7 lg:col-start-3 lg:col-end-12 overflow-hidden'>
            <div ref={homeRef} id="Home" className="snap-center">
                {/* <motion.div ref={ref} className='Box' initial="hidden" animate={controls} variants={boxVariants} transition={{ type: "spring", stiffness: 400, damping:17, duration: 0.8, delay: 0.2 }}> */}
                <Home />
                {/* </motion.div> */}
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

