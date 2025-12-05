import React from 'react';
import { useInView } from 'react-intersection-observer';

const Home = () =>
{
    const { ref, inView } = useInView({threshold:0.5, once: true});
    
    return(
        <div className={`flex h-screen bg-inherit justify-center items-center overflow-hidden fade-in-slide ${inView ? 'visible' : ''}`} ref={ref}>
            <div className="   bg-[#8BCDF9] bg-opacity-25 h-auto w-11/12 md:w-10/12 lg:w-7/12 rounded-2xl p-2 border-b-8  border-richBlack shadow-2xl drop-shadow-2xl ">
                <div className="grid grid-cols-3 ">
                    <div className='col-span-1 flex justify-around flex-col-reverse lg:flex-col'>
                            <div className='bg-inherit ring-2 ring-[#8BCDF9]  shadow-black shadow-inner my-4 md:my-0 md:mx-0 rounded-3xl row-span-2 self-center'>
                                <img className=" w-40 md:h-48  h-40 md:w-48 lg:h-52 lg:w-52 object-cover rounded-full" src="/public/avatar.png" />
                            </div>
                            
                            <div className='bg-white opacity-75 ring-2 ring-[#8BCDF9] shadow-black shadow-inner rounded-3xl row-span-1 px-2 mx-auto max-w-max lg:min-w-full lg:mx-0'>
                                <div className='flex lg:flex-row flex-col items-center py-2 lg:justify-evenly gap-2'>
                                    <a target="_blank" href="https://www.github.com/omersajid9"><img className="h-8 w-8 object-cover rounded-full cursor-pointer aspect-square flex items-center justify-center hover:bg-black hover:text-white transition" src="https://github.com/github.png" /></a>
                                    <a target="_blank" href="https://www.linkedin.com/in/omersajid9"><p className='font-extrabold text-xl border-2 border-black rounded-full aspect-square w-8 flex items-center justify-center hover:bg-black hover:text-white transition'>in</p></a>
                                    <a target="_blank" href="tel:+17653011753"><i className="fa-solid fa-phone rounded-full text-lg cursor-pointer border-2 border-black aspect-square w-8 flex items-center justify-center hover:bg-black hover:text-white transition"></i></a>
                                    <a target="_blank" href="mailto:omersajid9@outlook.com"><i className="fa-solid fa-envelope text-lg rounded-full cursor-pointer border-2 border-black aspect-square w-8 flex items-center justify-center hover:bg-black hover:text-white transition"></i></a>
                                </div>  
                            </div>
                    </div>
                    <div className='col-span-2 flex flex-col justify-between'>
                        <div className='flex bg-inherit ring-2 ring-[#8BCDF9] shadow-black shadow-inner  justify-center items-center  rounded-2xl md:rounded-full m-4 w-fit mx-auto'>
                            <div className=' text-center text-2xl font-text font-bold  bg-none  py-2 px-10 w-fit'>
                                Omer Sajid
                            </div>
                            
                            
                        </div>
                        <div className='mb-4'>
                            <div className="bg-white opacity-80 ring-2 ring-[#8BCDF9] shadow-[#8BCDF9] shadow-sm rounded-bl-2xl rounded-tr-2xl rounded-br-2xl rounded-tl-2xl row-span-1 p-2 px-3 m-2"> 
                                <h1 className="text-[0.8rem] md:text-base text-black font-semibold font-text"> Hey, I'm a full-stack software engineer who builds and ships machine learning products. </h1>
                            </div>
                            <div className="bg-white opacity-80 ring-2 ring-[#8BCDF9] shadow-[#8BCDF9] shadow-sm rounded-bl-2xl rounded-tr-2xl rounded-br-2xl rounded-tl-2xl row-span-1 p-2 px-3 m-2"> 
                                <h1 className="text-[0.8rem] md:text-base text-black font-semibold font-text"> In the past, I've worked across quantum computing, data analysis, blockchain and infrastructure. </h1>
                            </div>
                            <div className="bg-white opacity-80 ring-2 ring-[#8BCDF9] shadow-[#8BCDF9] shadow-sm rounded-tl-2xl rounded-tr-2xl rounded-br-2xl row-span-1 p-2 px-3 m-2"> 
                                <h1 className="text-[0.8rem] md:text-base text-black font-semibold font-text"> Feel free to shoot me a text. Lets connect! </h1>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Home;