import React, { useState, useRef, useEffect, Suspense, lazy } from 'react'
import './App.css'

import Home from './components/home'
import Projects from './components/projects'
import Applications from './components/applications'
const Experience = lazy(() => import('./components/experience'))
const Education = lazy(() => import('./components/education'))
const Skills = lazy(() => import('./components/skills'))
import NavButton from './components/nav_button'
import Publications from './components/publications'


import { BuildingOffice } from '@phosphor-icons/react/dist/csr/BuildingOffice';
import { GraduationCap } from '@phosphor-icons/react/dist/csr/GraduationCap';
import { House } from '@phosphor-icons/react/dist/csr/House';
import { DeviceMobile } from '@phosphor-icons/react/dist/csr/DeviceMobile';
import { AppWindow } from '@phosphor-icons/react/dist/csr/AppWindow';
import { Article } from '@phosphor-icons/react/dist/csr/Article';
import { GearSix } from '@phosphor-icons/react/dist/csr/GearSix';


function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const applicationsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const publicationsRef = useRef(null);
  const skillsRef = useRef(null);
  const bigPage = useRef(null);
  const scrollPage = useRef(null);

  const scrollToSection = (elementRef) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


  return (
    <div ref={bigPage} className="App items-center justify-center bg-fixed overflow-hidden select-none">

      <div className='w-full h-full flex md:flex-row flex-col md:px-10 justify-around'>
        <div id='sidebar' className='
        flex flex-row justify-around items-center my-2
        md:flex-col  md:justify-center md:items-start start-px md:h-screen md:gap-4 
        md:absolute lg:left-28 md:left-2
        z-10
        bg-transparent
       '>
          <NavButton color="section-home" reference={homeRef} icon={<House size={32} weight="bold" />} title="Home" scrollToSection={scrollToSection} />
          <NavButton color="section-education" reference={educationRef} icon={<GraduationCap size={32} weight="bold" />} title="Education" scrollToSection={scrollToSection} />
          <NavButton color="section-experience" reference={experienceRef} icon={<BuildingOffice size={32} weight="bold" />} title="Experience" scrollToSection={scrollToSection} />
          <NavButton color="section-applications" reference={applicationsRef} icon={<DeviceMobile size={32} weight="bold" />} title="App" scrollToSection={scrollToSection} />
          <NavButton color="section-projects" reference={projectsRef} icon={<AppWindow size={32} weight="bold" />} title="Project" scrollToSection={scrollToSection} />
          <NavButton color="section-publications" reference={publicationsRef} icon={<Article size={32} weight="bold" />} title="Publication" scrollToSection={scrollToSection} />
          <NavButton color="section-skills" reference={skillsRef} icon={<GearSix size={32} weight="bold" />} title="Skill" scrollToSection={scrollToSection} />
        </div>

        <div id='content' ref={scrollPage} className='
        snap-y h-screen overflow-y-scroll scrollbar-none snap-mandatory overflow-hidden mx-2 md:mx-12 max-w-7xl
        lg:ml-28 md:ml-2 ml-0
      '>
          <div ref={homeRef} id="Home" className="snap-start min-h-screen flex items-center justify-center">
            <Home />
          </div>
          <div ref={educationRef} id="Education" className="snap-start min-h-screen flex items-center justify-center">
              <Education />
          </div>
          <div ref={experienceRef} id="Experience" className="snap-start min-h-screen flex items-center justify-center">
              <Experience />
          </div>
          <div ref={applicationsRef} id="Applications" className="snap-start min-h-screen flex items-center justify-center">
            <Applications />
          </div>
          <div ref={projectsRef} id="Projects" className="snap-start min-h-screen flex items-center justify-center">
            <Projects />
          </div>
          <div ref={publicationsRef} id="Publications" className="snap-start min-h-screen flex items-center justify-center">
            <Publications />
          </div>
          <div ref={skillsRef} id="Skills" className="snap-start min-h-screen flex items-center justify-center">
              <Skills />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
