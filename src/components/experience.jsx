import {react, useEffect} from 'react';
import {motion, useAnimation} from "framer-motion";
import { useInView } from 'react-intersection-observer';
const boxVariants = {
    hidden: { scale: 0.7 , opacity: 0, x:-100},
    visible: {
      scale: 1,
      opacity: 1,
      x:0
    }
  }

import ExperienceCard from './experience_card';

const Experience = () =>
{


    const controls = useAnimation();
    const { ref, inView } = useInView({threshold:0.7});

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

    const a = " bg-inherit border-violet-800 rounded-l-3xl border-t-8"
    const experienceA = ["Fermi National Accelerator Laboratory", "Quantum theory division intern", "August '22 - Present", "https://pbs.twimg.com/profile_images/634856987465904128/mpfSh-t8.png", a]
    const a1 = " bg-inherit border-blue-800 rounded-3xl rounded-r-none rounded-l-3xl border-t-4 border-l-4 border-b-4 pb-1 md:border-t-8 md:border-l-8 md:border-b-8 md:pb-2 z-20"
    const experienceA1 = ["Undergraduate Researcher in Quantum Algorithms", "Fermi National Accelerator Laboratory", "August '22 - Present", "https://pbs.twimg.com/profile_images/634856987465904128/mpfSh-t8.png", a1]
    const a2 = " bg-inherit border-inherit rounded-l-3xl rounded-r-none rounded-3xl border-t-4 border-b-4 pb-3 -mt-2 md:border-t-8 md:border-b-8 md:pb-6 md:-mt-4 z-10"
    const experienceA2 = ["Summer Internship in Science & Technology", "Fermi National Accelerator Laboratory", "May '22 - August '22", "https://pbs.twimg.com/profile_images/634856987465904128/mpfSh-t8.png", a2]
    const a3 = " bg-inherit border-green-800 rounded-3xl rounded-r-none rounded-l-3xl  border-t-4 border-l-4 border-b-4 pb-5 -mt-4 md:border-t-8 md:border-l-8 md:border-b-8 md:pb-10 md:-mt-8 z-20"
    const experienceA3 = ["Research Assistant: UCNtau Experiment", "DePauw University", "September '20 - August '21", "https://www.onlinedegree.com/wp-content/uploads/2017/01/depauw-university-logo.jpg", a3]
    const a4 = " bg-inherit border-inherit rounded-3xl rounded-r-none rounded-l-3xl border-t-4 border-b-4 pb-7 -mt-6 md:border-t-8 md:border-b-8 md:pb-14 md:-mt-12"
    const experienceA4 = ["Research Assistant: Crab Nebula", "DePauw University", "May '20 - August '20", "https://www.onlinedegree.com/wp-content/uploads/2017/01/depauw-university-logo.jpg", a4]
    const a5 = " bg-inherit border-yellow-500 rounded-3xl rounded-r-none rounded-l-3xl rounded-br-3xl  border-t-4 border-l-4 border-b-4 pb-[2.25rem] -mt-8 md:border-t-8 md:border-l-8 md:border-b-8 md:pb-[4.5rem] md:-mt-16"
    const experienceA5 = ["Teacher Assistant, Modern Physics 1", "DePauw University", "January '20 - May '20", "https://www.onlinedegree.com/wp-content/uploads/2017/01/depauw-university-logo.jpg", a5]
    const b = "bg-inherit border-violet-800 rounded-3xl rounded-l-none rounded-r-3xl border-t-4 border-r-4 border-b-4 md:border-t-8 md:border-r-8 md:border-b-8"
    const experienceB = ["Fermi National Accelerator Laboratory", "Quantum theory division intern", "August '22 - Present", "https://pbs.twimg.com/profile_images/634856987465904128/mpfSh-t8.png", b]
    const b1 = "bg-inherit border-indigo-800 rounded-3xl rounded-l-none rounded-r-3xl border-t-4 pb-1 md:border-t-8 md:pb-2"
    const experienceB1 = ["Blockchain development mentorship", "Dr. Appolo Tankeh", "December '22 - March '23", "https://w7.pngwing.com/pngs/1006/534/png-transparent-mentorship-youth-mentoring-spark-career-mentors-blue-text-logo.png", b1]
    const b2 = "bg-inherit border-cyan-800 rounded-3xl rounded-l-none rounded-r-3xl border-t-4 border-r-4 border-b-4 pb-3 -mt-2 md:border-t-8 md:border-r-8 md:border-b-8 md:pb-6 md:-mt-4 z-20" 
    const experienceB2 = ["First Year Resident Assistant", "Housing & Residence Life", "July '21 - June '22", "https://www.onlinedegree.com/wp-content/uploads/2017/01/depauw-university-logo.jpg", b2]
    const b3 = "bg-inherit border-inherit rounded-3xl rounded-l-none rounded-r-3xl  border-t-4 border-b-4 pb-5 -mt-4 md:border-t-8 md:border-b-8 md:pb-10 md:-mt-8 z-10"
    const experienceB3 = ["Teacher Assistant, Computer Science 120", "DePauw University", "January '21 - May '21", "https://www.onlinedegree.com/wp-content/uploads/2017/01/depauw-university-logo.jpg", b3]
    const b4 = "bg-inherit border-orange-800 rounded-3xl rounded-l-none rounded-r-3xl border-t-4 border-r-4 border-b-4 -mt-6 pb-7 md:border-t-8 md:border-r-8 md:border-b-8 md:-mt-12 md:pb-14 z-20"
    const experienceB4 = ["Information Technology Associate", "Tenzer Technology Center", "August 2020 - May 2021", "https://www.onlinedegree.com/wp-content/uploads/2017/01/depauw-university-logo.jpg", b4]

    return (
        <motion.div className="flex h-auto bg-inherit justify-center items-center" ref={ref} initial="hidden" animate={controls} variants={boxVariants} transition={{ type: "spring", stiffness: 400, damping:50, duration: 0.8, delay: 0.3 }}>
             <div className=" bg-[#F2BAC9] bg-opacity-25 h-auto w-11/12 md:w-11/12 lg:w-8/12 rounded-2xl p-2 border-b-8 border-richBlack shadow-2xl drop-shadow-2xl">
                <div className='flex bg-inherit ring-2 ring-[#F2BAC9] shadow-black shadow-inner  justify-center items-center  rounded-2xl md:rounded-full m-4 w-fit mx-auto'>
                        <div className=' text-center text-lg md:text-2xl lg:text-3xl font-text font-bold  bg-none  py-2 px-10 w-fit'>
                        EXPERIENCE
                        </div>
                    </div>
                <div className="h-auto overflow-y-auto md:overflow-y-visible grid-flow-row grid-cols-2 grid justify-center md:space-x-0 gap-0 md:scrollbar-none scrollbar-thin scrollbar-thumb-yellow-800 md:py-2 py-1 px-2 md:px-2 ">
                    {/* <div className=' md:grid md:grid-rows-5 border-0 border-black gap-0 md:flex-none flex-auto-row flex space-x-3 md:space-x-0'> */}
                        {/* <div className='border-0 h-fit border-black m-0'>
                            <ExperienceCard CompanyName={experienceA[0]} Position={experienceA[1]} Duration={experienceA[2]} ImageSrc={experienceA[3]} additionalsetting={experienceA[4]}  />
                        </div> */}
                        <div className='border-0 h-full  border-black row-span-1'>
                            <ExperienceCard CompanyName={experienceA1[0]} Position={experienceA1[1]} Duration={experienceA1[2]} ImageSrc={experienceA1[3]} additionalsetting={experienceA1[4]} />
                        </div>
                        <div className='border-0 h-full border-black row-span-1'>
                            <ExperienceCard CompanyName={experienceB1[0]} Position={experienceB1[1]} Duration={experienceB1[2]} ImageSrc={experienceB1[3]} additionalsetting={experienceB1[4]}  />
                        </div>
                        <div className='border-0 h-full  border-black row-span-1'>
                            <ExperienceCard CompanyName={experienceA2[0]} Position={experienceA2[1]} Duration={experienceA2[2]} ImageSrc={experienceA2[3]} additionalsetting={experienceA2[4]}  />
                        </div>
                        <div className='border-0 h-full border-black row-span-1'>
                            <ExperienceCard CompanyName={experienceB2[0]} Position={experienceB2[1]} Duration={experienceB2[2]} ImageSrc={experienceB2[3]} additionalsetting={experienceB2[4]}  />
                        </div>
                        <div className='border-0 h-full  border-black row-span-1'>
                            <ExperienceCard CompanyName={experienceA3[0]} Position={experienceA3[1]} Duration={experienceA3[2]} ImageSrc={experienceA3[3]} additionalsetting={experienceA3[4]}  />
                        </div>
                        <div className='border-0 h-full border-black row-span-1'>
                            <ExperienceCard CompanyName={experienceB3[0]} Position={experienceB3[1]} Duration={experienceB3[2]} ImageSrc={experienceB3[3]} additionalsetting={experienceB3[4]}  />
                        </div>
                        <div className='border-0 h-full  border-black row-span-1'>
                            <ExperienceCard CompanyName={experienceA4[0]} Position={experienceA4[1]} Duration={experienceA4[2]} ImageSrc={experienceA4[3]} additionalsetting={experienceA4[4]}  />
                        </div>
                        <div className='border-0 h-full border-black row-span-1'>
                            <ExperienceCard CompanyName={experienceB4[0]} Position={experienceB4[1]} Duration={experienceB4[2]} ImageSrc={experienceB4[3]} additionalsetting={experienceB4[4]}  />
                        </div>
                        <div className='border-0 h-full  border-black row-span-1'>
                            <ExperienceCard CompanyName={experienceA5[0]} Position={experienceA5[1]} Duration={experienceA5[2]} ImageSrc={experienceA5[3]} additionalsetting={experienceA5[4]}  />
                        </div>
                    {/* </div>   */}
                    {/* <div className='md:grid md:grid-rows-5 border-0 border-black flex-auto-row flex md:flex-none space-x-3 md:space-x-0'> */}
                        {/* <div className='border-0 h-fit border-black'>
                            <ExperienceCard CompanyName={experienceB[0]} Position={experienceB[1]} Duration={experienceB[2]} ImageSrc={experienceB[3]} additionalsetting={experienceB[4]}  />
                        </div> */}
                        
                        
                        
                        
                        
                        
                    {/* </div> */}
                    


                </div>
             </div>
        </motion.div>
    )
}

export default Experience;