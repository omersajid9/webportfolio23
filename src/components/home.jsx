import {react} from 'react';

const Home = () =>
{
    return(
        <div className="flex h-screen bg-inherit justify-center items-center overflow-hidden">
            <div className="   bg-[#8BCDF9] bg-opacity-25 h-auto w-11/12 md:w-7/12 rounded-2xl p-2 border-b-8  border-richBlack shadow-2xl drop-shadow-2xl ">
                <div className="grid grid-cols-3 ">
                    <div className='col-span-1 flex justify-between flex-col-reverse md:flex-col'>
                            <div className='bg-inherit my-4 md:my-6 md:mx-1 rounded-3xl row-span-2'>
                                <img className="h-52 w-52 object-cover rounded-full" src="https://i.ibb.co/sWQV2Wg/Avatar-Maker-1.png" />
                            </div>
                            
                            <div className='bg-white opacity-75 md:m-1 rounded-3xl row-span-1 my-2 mx-1.5'>
                                <div className='flex md:flex-row flex-col items-center py-2 md:justify-evenly'>
                                    <a target="_blank" href="https://www.github.com/omersajid9"><img className="h-7 w-7 object-cover rounded-full cursor-pointer md:mt-0 md:mb-0 mt-3" src="https://github.com/github.png" /></a>
                                    <a target="_blank" href="https://www.linkedin.com/in/omersajid9"><img className="h-7 w-7 object-cover rounded-full cursor-pointer md:mt-0 md:mb-0 mt-3" src="https://i.ibb.co/4VypHB3/linkedin.png" /></a>
                                    <a target="_blank" href="tel:+17653011753"><img className="h-7 w-7 object-cover rounded-full cursor-pointer bg-white opacity-75 md:mt-0 md:mb-0 mt-3" src="https://i.ibb.co/2y3df3F/phone.png" /></a>
                                    <a target="_blank" href="mailto:omersajid9@outlook.com"><img className="h-7 w-7 object-cover rounded-full cursor-pointer md:mt-0 md:mb-0 mt-3 mb-1" src="https://image.similarpng.com/very-thumbnail/2021/09/Outlook-icon-on-transparent-background-PNG.png" /></a>
                                </div>  
                            </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='flex bg-white opacity-80 justify-center items-center mb-1 border-b-4 border-r-4 border-l-4 rounded-b-2xl md:rounded-b-full border-black -my-2 m-4'>
                            <div className=' text-center text-lg font-text font-bold  bg-none md:rounded-b-3xl py-2 px-4 shadow-black '>
                                Omer Sajid
                            </div>
                            
                            
                        </div>
                        <div className="bg-white opacity-80 rounded-bl-2xl rounded-tr-2xl rounded-br-2xl rounded-tl-2xl row-span-1 p-2 px-3 m-2"> 
                            <h1 className="text-[0.8rem] md:text-base text-black font-semibold font-text"> Hey, welcome! I am a recent Computer Science graduate from DePauw University, IN, and am currently working with Fermilab on a quantum computing research project. </h1>
                        </div>
                        <div className="bg-white opacity-80 rounded-bl-2xl rounded-tr-2xl rounded-br-2xl rounded-tl-2xl row-span-1 p-2 px-3 m-2"> 
                            <h1 className="text-[0.8rem] md:text-base text-black font-semibold font-text"> I am passionate about full-stack application development and solving complex mathematical algorithms using programming.</h1>
                        </div>
                        <div className="bg-white opacity-80 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl row-span-1 p-2 px-3 m-2"> 
                            <h1 className="text-[0.8rem] md:text-base text-black font-semibold font-text"> Enjoy my portfolio! If you like it, and have curious ideas to share, I would love to chat with you. </h1>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Home;