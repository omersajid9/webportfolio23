import react from 'react';

import ProjectCard from './project_card';

const experience1 = ["Peer2Peer message", "https://www.youtube.com/embed/yqWX86uT5jM?rel=0&autoplay=1&mute=1&loop=1&playlist=yqWX86uT5jM&modestbranding=1&controls=0", "Developing a peer-to-peer messaging application in C using socket programming and multi-threading. The application, in future, would include encryption services mimicking a blockchain on a local network"]
const experience2 = ["NFT Marketplace", "https://www.youtube.com/embed/20ekO3yLyUE?rel=0&autoplay=1&mute=1&loop=1&playlist=20ekO3yLyUE&modestbranding=1&controls=0", " Designed a full-stack web3 application with the functionality to mint and purchase NFTs. Leveraged inheritance in Solidity to build my smart contracts and used Inter-Planatary File System for storage. Used frameworks like React.Js, Node.Js, Hardhat, and TailwindCSS."]
const experience3 = ["Computer Vision", "https://www.youtube.com/embed/WUACGwcPg8M?rel=0&autoplay=1&mute=1&loop=1&playlist=WUACGwcPg8M&modestbranding=1&controls=0", "Wrote a Convolutional Neural Network library in Python, from scratch, implementing gradient descent algorithm through matrix manipulation to train for image recognition. Used the library to make a custom CNN and trained it on the MNIST dataset with 94% train/89% test accuracy."]
const experience4 = ["Tree-walk interpreter", "https://www.youtube.com/embed/f5R2EgZd76s?rel=0&autoplay=1&mute=1&loop=1&playlist=f5R2EgZd76s&modestbranding=1&controls=0", "Designed an OOP application in Java to scan, parse and interpret syntax of the dynamically typed Lox Language. The application, optimized by recursive descent, facilitated class, function and variable declarations, resolved environment scoping, and handled runtime and compiler errors."]
const experience5 = ["Repair shop", "https://www.youtube.com/embed/fR7DWL1fK8s?rel=0&autoplay=1&mute=1&loop=1&playlist=fR7DWL1fK8s&modestbranding=1&controls=0", "Developed a full-stack repair shop mobile application in Java to keep track of user owned cars and their maintenance costs. Used SQLite to perform the query the database."]
const experience6 = ["Personal Blogpost", "https://www.youtube.com/embed/YrRedU2RLCg?rel=0&autoplay=1&mute=1&loop=1&playlist=YrRedU2RLCg&modestbranding=1&controls=0", "Designed a personal blogpost website with user authentication. Implemented JWT Token authorization and encrypted user's passwords for security. Used the MERN framework for front-end, back-end and database management. "]


const ytube = ""

const Education = () =>
{
    return (
        <div className="flex h-max bg-inherit justify-center items-center">
            <div className=" h-auto w-11/12 rounded-2xl p-2 border-b-8 border-richBlack drop-shadow-2xl shadow-2xl bg-[#BAF2BB] bg-opacity-25 pb-8">
                <div className='flex bg-none justify-center items-center mb-8 '>
                    <div className='text-center text-lg md:text-3xl font-semibold font-text m-4 bg-inherit rounded-full py-2 px-4 shadow-black shadow-sm text-black'>
                        PROJECTS
                    </div>
                </div>
                
                <div className='snap-x snap-mandatory md:flexn md:flex-none flex flex-auto-row overflow-x-auto w-full md:grid md:grid-cols-3 gap-4 md:snap-none'>
                    <div className="snap-center md:snap-none">
                        <ProjectCard  Title={experience1[0]} Video={experience1[1]} Description={experience1[2]}/>
                    </div>
                    <div className="snap-center md:snap-none">
                        <ProjectCard  Title={experience2[0]} Video={experience2[1]} Description={experience2[2]}/>
                    </div>
                    <div className="snap-center md:snap-none">
                        <ProjectCard  Title={experience3[0]} Video={experience3[1]} Description={experience3[2]}/>
                    </div>
                    <div className="snap-center md:snap-none">
                        <ProjectCard  Title={experience4[0]} Video={experience4[1]} Description={experience4[2]}/>
                    </div>
                    <div className="snap-center md:snap-none">
                        <ProjectCard  Title={experience5[0]} Video={experience5[1]} Description={experience5[2]}/>
                    </div>
                    <div className="snap-center md:snap-none">
                        <ProjectCard  Title={experience6[0]} Video={experience6[1]} Description={experience6[2]}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Education;