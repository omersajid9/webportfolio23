import React, { useState } from 'react';
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';




const ProjectCard = ({Title, Video, Description, githubLink}) =>
{
    const [desbool, setDesBool] = useState(false)


    return (
        <div className='justify-center items-center flex flex-col w-full mt-2'>
                        <div className="bg-inherit h-48 md:h-46 md:h-10/12 md:w-full rounded-lg md:rounded-3xl p-1 md:p-1  bg-cover bg-center shadow-[#BAF2BB] ring-0 ring-[#BAF2BB] flex justify-center items-center">
                            <iframe className='rounded-3xl ring-2 ring-[#BAF2BB] p-2 shadow-inner shadow-black h-fit md:h-full lg:w-11/12  w-fit md:w-11/12 lg:h-11/12 z-10 ' frameBorder="0" seamless="seamless" src={Video} title="20230302_214149 (online-video-cutter.com).mp4" webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen loading="lazy"></iframe>
                        </div>
                        <div className="w-8/12 md:w-9/12 bg-white -mt-5 md:-mt-10 ring-0 ring-[#BAF2BB]  shadow-2xl shadow-[#BAF2BB] rounded-lg overflow-hidden p-0 md:p-1 lg:p-2 z-50">
                        
                            <div className="test-sm md:text-lg font-bold font-text text-center border-b-2 border-black p-2">{Title}</div>

                            {desbool ? (
                                <div className='w-12/12 p-2 md:p-0 md:pt-2'>
                                    <div className="text-[0.8rem] md:text-[0.75rem] lg:text-[0.85rem] font-text text-center ">
                                        {Description}
                                    </div>
                                    <div className='flex justify-around mt-2 md:mt-0'>
                                        <button className="bg-inherit text-blue-900 md:mt-1 block rounded md:p-2 text-sm" onClick={()=>setDesBool(false)}><BsFillArrowUpCircleFill/></button>
                                        <a href={githubLink} target='_blank'><button className="bg-inherit text-blue-500 md:mt-1 block rounded md:p-2 text-sm"><img className="h-5 w-5 object-cover rounded-3xl cursor-pointer" src="https://github.com/github.png" /></button></a>
                                    </div>
                                </div>
                            ) : (
                                <div className='min-w-max md:w-full'>
                                    <div className='flex justify-around mt-2 md:mt-0'>
                                        <button className="bg-inherit text-green-500 md:mt-1 block rounded p-2 text-sm" onClick={()=>setDesBool(true)}><BsFillArrowDownCircleFill/></button>
                                        <a href={githubLink} target='_blank'><button className="bg-inherit text-black md:mt-1 block rounded md:p-2 text-sm"><img className="h-5 w-5 object-cover rounded-full cursor-pointer" src="https://github.com/github.png" /></button></a>
                                    </div>
                                </div>
                                
                            )}

                            
                           
                        </div>
                    </div>
    )
}

export default ProjectCard;