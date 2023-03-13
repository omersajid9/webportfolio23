import {react, useState} from 'react';
// import {BsFillArrowDownCircleFill} from 'react-icons'
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';


const ProjectCard = ({Title, Video, Description, githubLink}) =>
{
    const [desbool, setDesBool] = useState(false)


    return (
        <div className='justify-center items-center flex flex-col'>
                        <div className="bg-black h-48 md:h-56 md:w-11/12 rounded-lg md:rounded-3xl p-1 md:p-3 shadow-md bg-cover bg-center z-1">
                        {/* <video id="video" class="w-full h-full" autoPlay muted loop>
                            <source src="https://youtu.be/20ekO3yLyUE" type="video/mp4"></source>
                        </video> */}
                            <iframe className='h-fit md:h-full w-fit md:w-full' frameBorder="0" seamless="seamless" src={Video} title="20230302_214149 (online-video-cutter.com).mp4" webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen></iframe>
                        </div>
                        <div className=" md:w-9/12 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-2 md:p-5">
                        
                            <div className="test-sm md:text-base font-medium font-text text-center border-b-2 border-black ">{Title}</div>

                            {desbool ? (
                                <div className='w-12/12 '>
                                    <div className="text-[0.5rem] md:text-xs font-text text-center ">
                                        {Description}
                                    </div>
                                    <div className='flex justify-around mt-2 md:mt-0'>
                                        <button className="bg-inherit text-blue-900 md:mt-4 block rounded md:p-2 text-sm" onClick={()=>setDesBool(false)}><BsFillArrowUpCircleFill/></button>
                                        <a href={githubLink} target='_blank'><button className="bg-inherit text-blue-500 md:mt-4 block rounded md:p-2 text-sm"><img className="h-5 w-5 object-cover rounded-3xl cursor-pointer" src="https://github.com/github.png" /></button></a>
                                    </div>
                                </div>
                            ) : (
                                <div className='min-w-max md:w-full'>
                                    <div className='flex justify-around mt-2 md:mt-0'>
                                        <button className="bg-inherit text-green-500 md:mt-4 block rounded p-2 text-sm" onClick={()=>setDesBool(true)}><BsFillArrowDownCircleFill/></button>
                                        <a href={githubLink} target='_blank'><button className="bg-inherit text-black md:mt-4 block rounded p-2 text-sm"><img className="h-5 w-5 object-cover rounded-full cursor-pointer" src="https://github.com/github.png" /></button></a>
                                    </div>
                                </div>
                                
                            )}

                            
                           
                        </div>
                    </div>
    )
}

export default ProjectCard;