import React, { useState, useRef, useEffect } from 'react'
import './App.css'

import particlesConfig from './particlesConfig';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Home from './components/home'
import Projects from './components/projects'
import Applications from './components/applications'
import Experience from './components/experience'
import Skills from './components/skills'

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const applicationsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const bigPage = useRef(null);
  const scrollPage = useRef(null);

  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  const scrollToSection = (elementRef) =>
  {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({behavior: 'smooth', block:'start'});
    }
  }

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Scroll debouncing to prevent multiple rapid scrolls
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    };

    const scrollContainer = scrollPage.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isScrolling) return;
      
      const sections = [homeRef, applicationsRef, projectsRef, experienceRef, skillsRef];
      const currentIndex = sections.findIndex(ref => {
        if (!ref.current) return false;
        const rect = ref.current.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight / 2;
      });

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        const nextIndex = Math.min(currentIndex + 1, sections.length - 1);
        if (sections[nextIndex].current) {
          scrollToSection(sections[nextIndex]);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        const prevIndex = Math.max(currentIndex - 1, 0);
        if (sections[prevIndex].current) {
          scrollToSection(sections[prevIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isScrolling]);

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
              <button className="btn-press text-black ring-2 ring-[#8BCDF9] shadow-inner shadow-black bg-[#8BCDF9] bg-opacity-50 rounded-full py-1 cursor-pointer font-bold md:text-base lg:text-2xl px-2 md:px-4 font-text  border-b-0 border-black " onClick={()=>scrollToSection(homeRef)}>Home</button>
            </li>
            <li className="md:mx-10 md:my-5">
              <button className="btn-press text-black ring-2 ring-[#BAF2BB] shadow-inner shadow-black bg-[#BAF2BB] bg-opacity-50 rounded-full py-1 cursor-pointer font-bold md:text-base lg:text-2xl px-2 md:px-4 font-text  border-b-0 border-black " onClick={()=>scrollToSection(applicationsRef)}>Apps</button>
            </li>
            <li className="md:mx-10 md:my-5">
              <button className="btn-press text-black ring-2 ring-[#BAF2BB] shadow-inner shadow-black bg-[#BAF2BB] bg-opacity-50 rounded-full py-1 cursor-pointer font-bold md:text-base lg:text-2xl px-2 md:px-4 font-text  border-b-0 border-black " onClick={()=>scrollToSection(projectsRef)}>Projects</button>
            </li>
            <li className="md:mx-10 md:my-5">
              <button className="btn-press text-black ring-2 ring-[#F2BAC9] shadow-inner shadow-black bg-[#F2BAC9] bg-opacity-50 rounded-full py-1 cursor-pointer font-bold md:text-base lg:text-2xl px-2 md:px-4 font-text  border-b-0 border-black " onClick={()=>scrollToSection(experienceRef)}>Experience</button>
            </li>
            <li className="md:mx-10 md:my-5">
              <button className="btn-press text-black ring-2 ring-[#F2E2BA] shadow-inner shadow-black bg-[#F2E2BA] bg-opacity-50 rounded-full py-1 cursor-pointer font-bold md:text-base lg:text-2xl px-2 md:px-4 font-text   border-b-0 border-black "  onClick={()=>scrollToSection(skillsRef)}>Skills</button>
            </li>
        </ul>
      </div>
        </div>
        
        <div ref={scrollPage} className='snap-y h-screen my-0 overflow-y-scroll scrollbar-none snap-mandatory md:col-span-9 md:col-start-3 md:col-end-13 lg:col-span-7 lg:col-start-3 lg:col-end-12 overflow-hidden'>
            <div ref={homeRef} id="Home" className="snap-start min-h-screen flex items-center justify-center">
                <Home />
            </div>
            <div ref={applicationsRef} id="Applications" className="snap-start min-h-screen flex items-center justify-center">
              <Applications />
            </div>
            <div ref={projectsRef} id="Projects" className="snap-start min-h-screen flex items-center justify-center">
              <Projects />
            </div>
            <div ref={experienceRef} id="Experience" className="snap-start min-h-screen flex items-center justify-center">
                <Experience/>
            </div>
            <div ref={skillsRef} id="Skills" className="snap-start min-h-screen flex items-center justify-center">
              <Skills/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
