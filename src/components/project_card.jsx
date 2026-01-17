import React, { useState } from 'react';
import { CaretCircleDown } from '@phosphor-icons/react/dist/csr/CaretCircleDown';
import { CaretCircleUp } from '@phosphor-icons/react/dist/csr/CaretCircleUp';
import { GithubLogo } from '@phosphor-icons/react/dist/csr/GithubLogo';




const ProjectCard = ({ Title, Video, Description, githubLink }) => {
    const [desbool, setDesBool] = useState(false)


    return (
        <div className='justify-center items-center flex flex-col mt-2'>
            <div className="bg-inherit h-48 md:h-46 md:h-10/12 md:w-full rounded-lg md:rounded-3xl p-1 bg-cover bg-center shadow-section-projects ring-0 ring-section-projects flex justify-center items-center">
                <iframe className='rounded-3xl ring-2 ring-section-projects p-2 shadow-inner shadow-black h-fit md:h-full  w-fit md:w-11/12 lg:h-11/12 z-10 ' frameBorder="0" seamless="seamless" src={Video} webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen loading="lazy"></iframe>
            </div>
            <div className=" max-w-[clamp(50px, 200px, 15dvw)] bg-white/40 backdrop-blur-sm border-black shadow-inner border -mt-5 md:-mt-10 ring-0 ring-section-projects shadow-section-projects rounded-lg overflow-hidden p-0 md:p-1 lg:p-2 z-50">
                <div className="text-sm md:text-lg lg:text-xl font-bold font-text text-center border-b-2 border-black p-2">
                    {Title}
                </div>

                {desbool ? (
                    <div className='p-2 md:p-0 md:pt-2'>
                        <div className="text-[0.8rem] md:text-[0.75rem] lg:text-[0.85rem] font-text text-center ">
                            {Description}
                        </div>
                        <div className='flex flex-row items-center justify-center gap-4 mt-2 md:mt-1'>
                            <button className="bg-inherit block rounded" onClick={() => setDesBool(false)}>
                                <CaretCircleUp weight="fill" className="h-6 w-6 rounded-full border-black border-2 cursor-pointer aspect-square flex items-center justify-center " />
                            </button>
                            <a href={githubLink} target='_blank'>
                                <button className="bg-inherit text-black block rounded text-sm">
                                    <GithubLogo weight="fill" className="h-6 w-6 rounded-full border-black border-2 cursor-pointer aspect-square flex items-center justify-center  " />
                                </button>
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className='p-2 md:p-0 md:pt-2'>
                        <div className='flex flex-row items-center justify-center gap-4 mt-2 md:mt-1'>
                            <button className="bg-inherit block rounded" onClick={() => setDesBool(true)}>
                                <CaretCircleDown weight="fill" className="h-6 w-6 rounded-full border-black border-2 cursor-pointer aspect-square flex items-center justify-center " />
                            </button>
                            <a href={githubLink} target='_blank'>
                                <button className="bg-inherit text-black block rounded text-sm">
                                    <GithubLogo weight="fill" className="h-6 w-6 rounded-full border-black border-2 cursor-pointer aspect-square flex items-center justify-center " />
                                </button>
                            </a>
                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}

export default ProjectCard;