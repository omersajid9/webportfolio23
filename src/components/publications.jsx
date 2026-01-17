import React from 'react';
import { useInView } from 'react-intersection-observer';
import PublicationCard from './publication_card';

import { Atom } from '@phosphor-icons/react/dist/csr/Atom';
import { NuclearPlant } from '@phosphor-icons/react/dist/csr/NuclearPlant';
import { Planet } from '@phosphor-icons/react/dist/csr/Planet';


const research1 = {
    title: "Lattice holography on a quantum computer",
    author: "Yin Yin Li, Omer Sajid, Judah Unmuth-Yockey",
    published: "Physical Review D Journal",
    link: {
        paper: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.110.034507",
        poster: null
    },
    icon: <Atom size={40} weight="bold" className='rounded-lg ring-2 ring-section-publications p-2 shadow-inner shadow-black z-10 w-auto h-full' />
}
const research2 = {
    title: "Using variational methods and hyperbolic lattices to find the ground state of gapless systems",
    author: "Omer Sajid, Judah Unmuth-Yockey",
    published: "Fermilab Poster Session",
    link: {
        poster: "https://lss.fnal.gov/archive/2022/poster/fermilab-poster-22-200-student.pdf",
        paper: "/fermilab_sist_paper.pdf"
    },
    icon: <Atom size={40} weight="bold" className='rounded-lg ring-2 ring-section-publications p-2 shadow-inner shadow-black z-10 w-auto h-full' />
}
const research3 = {
    title: "Extracting the Mean Lifetime of the Neutron",
    author: "Adam Forward, Omer Sajid, Alexander Komives",
    published: "DePauw Poster Session",
    link: {
        poster: "https://scholarship.depauw.edu/cgi/viewcontent.cgi?article=1063&context=srfposters",
        paper: null
    },
    icon: <NuclearPlant size={40} weight="bold" className='rounded-lg ring-2 ring-section-publications p-2 shadow-inner shadow-black z-10 w-auto h-full' />
}
const research4 = {
    title: "Very High Energy Studies of the Crab Nebula",
    author: "Madeline Claus, Ashna Coondiah, Omer Sajid",
    published: "DePauw Poster Session",
    link: {
        poster: "https://scholarship.depauw.edu/cgi/viewcontent.cgi?article=1050&context=srfposters",
        paper: null
    },
    icon: <Planet size={40} weight="bold" className='rounded-lg ring-2 ring-section-publications p-2 shadow-inner shadow-black z-10 w-auto h-full' />
}

const Publications = () =>
{
    const { ref, inView } = useInView({threshold:0.5, once: true});
    return (

        <div className={`flex h-full bg-inherit justify-center items-center fade-in-slide ${inView ? 'visible' : ''}`} ref={ref}>
            <div className="rounded-2xl p-2 border-b-8 border-richBlack drop-shadow-md shadow-md bg-section-publications pb-8">
                <div className='flex bg-inherit ring-2 ring-section-publications shadow-black shadow-inner  justify-center items-center  rounded-2xl md:rounded-full m-4 w-fit mx-auto'>
                    <div className=' text-center text-lg md:text-2xl lg:text-3xl font-text font-bold  bg-none  py-2 px-10 w-fit'>
                    Publications
                    </div>
                </div>

                <div className='snap-x snap-mandatory flex flex-col overflow-x-scroll gap-2 md:snap-none md:scrollbar-none scrollbar-thin scrollbar-thumb-violet-800 px-4'>
                    <div className="snap-center md:snap-none flex-shrink-0">
                        <PublicationCard  AppDetails={research1}/>
                    </div>
                    <div className="snap-center md:snap-none flex-shrink-0">
                        <PublicationCard  AppDetails={research2}/>
                    </div>
                    <div className="snap-center md:snap-none flex-shrink-0">
                        <PublicationCard  AppDetails={research3}/>
                    </div>
                    <div className="snap-center md:snap-none flex-shrink-0">
                        <PublicationCard  AppDetails={research4}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Publications;