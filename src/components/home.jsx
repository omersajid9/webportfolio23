import React from 'react';
import { useInView } from 'react-intersection-observer';
import { GithubLogo } from '@phosphor-icons/react/dist/csr/GithubLogo';
import { Phone } from '@phosphor-icons/react/dist/csr/Phone';

const Home = () => {
    const { ref, inView } = useInView({ threshold: 0.5, once: true });

    return (
        <div className={`flex bg-inherit justify-center items-center overflow-hidden fade-in-slide ${inView ? 'visible' : ''}`} ref={ref}>
            <div className="bg-section-home h-auto rounded-2xl p-4 border-b-8  border-richBlack shadow-md drop-shadow-md ">
                <div className="flex flex-row gap-4 ">
                    <div className='flex flex-col-reverse md:flex-col gap-4 justify-between md:justify-end'>
                        <div className=' h-36 w-36 md:h-48 md:w-48 lg:h-52 lg:w-52  bg-inherit ring-2 ring-section-home  shadow-black shadow-inner rounded-3xl self-center'>
                            <img className="object-cover rounded-full" src="/avatar.png" width="208" height="208" alt="Omer Sajid" />
                        </div>
                        <div className='bg-white opacity-75 ring-2 ring-section-home shadow-black shadow-inner rounded-3xl px-2 mx-auto max-w-max md:min-w-full md:mx-0 flex md:flex-row flex-col items-center py-2 md:justify-evenly gap-2'>
                            {/* <div className=''> */}
                                <a target="_blank" href="https://www.github.com/omersajid9">
                                    <GithubLogo weight="fill" className="h-8 w-8 rounded-full border-black border-2 cursor-pointer aspect-square flex items-center justify-center hover:bg-black hover:text-white transition" />
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/omersajid9"><p className='font-extrabold text-xl border-2 border-black rounded-full aspect-square w-8 flex items-center justify-center hover:bg-black hover:text-white transition'>in</p></a>
                                <a target="_blank" href="tel:+17653011753">
                                    <Phone weight="fill" className="h-8 w-8 rounded-full border-black border-2 cursor-pointer aspect-square flex items-center justify-center hover:bg-black hover:text-white transition" />
                                </a>
                                <a target="_blank" href="mailto:omersajid9@outlook.com"><p className='font-extrabold text-xl border-2 border-black rounded-full aspect-square w-8 flex items-center justify-center hover:bg-black hover:text-white transition'>@</p></a>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className='flex flex-col justify-between items-center gap-4'>
                        <div className='flex bg-inherit ring-2 ring-section-home shadow-black shadow-inner  justify-center items-center  rounded-2xl md:rounded-full '>
                            <div className=' text-center text-xl md:text-3xl font-text font-bold  bg-none  py-2 md:px-10 px-4 w-fit'>
                                Omer Sajid
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className=" max-w-[clamp(300px,330px,384px)] bg-white/40 backdrop-blur-sm  ring-2 ring-black shadow-black drop-shadow-lg rounded-2xl p-2 px-3">
                                <h1 className="text-sm md:text-base lg:text-base text-black font-semibold font-text"> Hey, I'm a full-stack machine learning engineer who designs, builds and ships products. </h1>
                            </div>
                            <div className=" max-w-[clamp(300px,330px,384px)] bg-white/40 backdrop-blur-sm  ring-2 ring-black shadow-black drop-shadow-lg rounded-2xl p-2 px-3">
                                <h1 className="text-sm md:text-base lg:text-base text-black font-semibold font-text"> In the past, I've worked across quantum computing, data analysis, blockchain and cloud infrastructure. </h1>
                            </div>
                            <div className=" max-w-[clamp(300px,330px,384px)] bg-white/40 backdrop-blur-sm  ring-2 ring-black shadow-black drop-shadow-lg rounded-tl-2xl rounded-tr-2xl rounded-br-2xl p-2 px-3">
                                <h1 className="text-sm md:text-base lg:text-base text-black font-semibold font-text"> Feel free to shoot me a text. Lets connect! </h1>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Home;