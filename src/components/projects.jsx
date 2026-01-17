import React from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './project_card';

const experience1 = ["Peer2Peer message", "https://www.youtube-nocookie.com/embed/yqWX86uT5jM?rel=0&autoplay=1&mute=1&loop=1&playlist=yqWX86uT5jM&modestbranding=1&controls=0", "Developing a peer-to-peer messaging application in C using socket programming and multi-threading. The application, in future, would include encryption services mimicking a blockchain on a local network", "https://github.com/omersajid9"]
const experience2 = ["Clipboard Manager", "https://www.youtube-nocookie.com/embed/4h41PJFcmLc?si=heTrjTM4yp1xxQ9e&rel=0&autoplay=1&mute=1&loop=1&modestbranding=1&controls=0", " Developed a clipboard manager app for software developers using Electron.js and react-native, enabling a 25% increase in coding productivity through enhanced copy-paste management.", "https://github.com/omersajid9/cavi"]
const experience3 = ["Computer Vision", "https://www.youtube-nocookie.com/embed/WUACGwcPg8M?rel=0&autoplay=1&mute=1&loop=1&playlist=WUACGwcPg8M&modestbranding=1&controls=0", "Wrote a Convolutional Neural Network library in Python, from scratch, implementing gradient descent algorithm through matrix manipulation to train for image recognition. Used the library to make a custom CNN and trained it on the MNIST dataset with 94% train/89% test accuracy.", "https://github.com/omersajid9/CNN_MNIST"]
const experience4 = ["Tree-walk interpreter", "https://www.youtube-nocookie.com/embed/f5R2EgZd76s?rel=0&autoplay=1&mute=1&loop=1&playlist=f5R2EgZd76s&modestbranding=1&controls=0", "Designed an OOP application in Java to scan, parse and interpret syntax of the dynamically typed Lox Language. The application, optimized by recursive descent, facilitated class, function and variable declarations, resolved environment scoping, and handled runtime and compiler errors.", "https://github.com/omersajid9/InterpreterWilson"]
const experience5 = ["NFT Marketplace", "https://www.youtube-nocookie.com/embed/20ekO3yLyUE?rel=0&autoplay=1&mute=1&loop=1&playlist=20ekO3yLyUE&modestbranding=1&controls=0", " Designed a full-stack web3 application with the functionality to mint and purchase NFTs. Leveraged inheritance in Solidity to build my smart contracts and used Inter-Planatary File System for storage. Used frameworks like React.Js, Node.Js, Hardhat, and TailwindCSS.", "https://github.com/omersajid9/NFT-marketplace"]
const experience6 = ["Personal Blogpost", "https://www.youtube-nocookie.com/embed/YrRedU2RLCg?rel=0&autoplay=1&mute=1&loop=1&playlist=YrRedU2RLCg&modestbranding=1&controls=0", "Designed a personal blogpost website with user authentication. Implemented JWT Token authorization and encrypted user's passwords for security. Used the MERN framework for front-end, back-end and database management. ", "https://github.com/omersajid9/Personal-Blogpost-website"]


const Projects = () =>
{
    const { ref, inView } = useInView({threshold:0.1, once: true});
    
    return (
        <div className={`flex h-max bg-inherit justify-center items-center fade-in-slide ${inView ? 'visible' : ''}`} ref={ref}>
            <div className=" h-auto rounded-2xl p-2 border-b-8 border-richBlack drop-shadow-md shadow-md bg-section-projects pb-8">
                <div className='flex bg-inherit ring-2 ring-section-projects shadow-black shadow-inner  justify-center items-center  rounded-2xl md:rounded-full m-4 w-fit mx-auto'>
                    <div className=' text-center text-lg md:text-2xl lg:text-3xl font-text font-bold  bg-none  py-2 px-10 w-fit'>
                    Projects
                    </div>
                </div>

                <div className='max-w-[90dvw] snap-x snap-mandatory md:flex-none flex flex-row overflow-x-auto md:grid md:grid-cols-3 gap-4 md:gap-2 lg:gap-4 md:snap-none md:scrollbar-none scrollbar-thin scrollbar-thumb-violet-800'>
                    <div className="snap-start md:snap-none ">
                        <ProjectCard  Title={experience1[0]} Video={experience1[1]} Description={experience1[2]} githubLink={experience1[3]}/>
                    </div>
                    <div className="snap-center md:snap-none ">
                        <ProjectCard  Title={experience2[0]} Video={experience2[1]} Description={experience2[2]} githubLink={experience2[3]}/>
                    </div>
                    <div className="snap-center md:snap-none ">
                        <ProjectCard  Title={experience3[0]} Video={experience3[1]} Description={experience3[2]} githubLink={experience3[3]}/>
                    </div>
                    <div className="snap-center md:snap-none ">
                        <ProjectCard  Title={experience4[0]} Video={experience4[1]} Description={experience4[2]} githubLink={experience4[3]}/>
                    </div>
                    <div className="snap-center md:snap-none ">
                        <ProjectCard  Title={experience5[0]} Video={experience5[1]} Description={experience5[2]} githubLink={experience5[3]}/>
                    </div>
                    <div className="snap-end md:snap-none ">
                        <ProjectCard  Title={experience6[0]} Video={experience6[1]} Description={experience6[2]} githubLink={experience6[3]}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects;

