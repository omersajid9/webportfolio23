import React from 'react';
import { useInView } from 'react-intersection-observer';
import AppCard from './app_card';


const app1 = {
    title: "mact",
    logo: "mact_icon.jpg",
    image: "mact.png",
    description: "Sports meetup app for hobbyists, built in React and Rust, promoting local community sports engagement.",
    github: "https://github.com/omersajid9/sporty_backend"
}
const app2 = {
    title: "sudoku",
    logo: "sudoku_icon.jpg",
    image: "colorsudoku.png",
    description: "Color-guided Sudoku using SwiftUI",
    github: "https://github.com/omersajid9/colorsudoku"
}


const Applications = () =>
{
    const { ref, inView } = useInView({threshold:0.5, once: true});
    return (

        <div className={`flex h-full bg-inherit justify-center items-center fade-in-slide ${inView ? 'visible' : ''}`} ref={ref}>
            <div className="rounded-2xl p-2 border-b-8 border-richBlack drop-shadow-md shadow-md bg-section-applications pb-8">
                <div className='flex bg-inherit ring-2 ring-section-applications shadow-black shadow-inner  justify-center items-center  rounded-2xl md:rounded-full m-4 w-fit mx-auto'>
                    <div className=' text-center text-lg md:text-2xl lg:text-3xl font-text font-bold  bg-none  py-2 px-10 w-fit'>
                    Applications
                    </div>
                </div>

                <div className='snap-x snap-mandatory flex flex-row overflow-x-scroll gap-2 md:snap-none md:scrollbar-none scrollbar-thin scrollbar-thumb-violet-800'>
                    <div className="snap-center md:snap-none flex-shrink-0">
                        <AppCard  AppDetails={app1}/>
                    </div>
                    <div className="snap-center md:snap-none flex-shrink-0">
                        <AppCard  AppDetails={app2}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Applications;