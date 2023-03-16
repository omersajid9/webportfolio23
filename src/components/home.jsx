import {react} from 'react';

const Home = () =>
{
    return(
        <div className="flex h-screen bg-inherit justify-center items-center overflow-hidden">
            <div className="   bg-[#8BCDF9] bg-opacity-25 h-auto w-11/12 md:w-10/12 lg:w-6/12 rounded-2xl p-2 border-b-8  border-richBlack shadow-2xl drop-shadow-2xl ">
                <div className="grid grid-cols-3 ">
                    <div className='col-span-1 flex justify-around flex-col-reverse lg:flex-col'>
                            <div className='bg-inherit ring-2 ring-[#8BCDF9]  shadow-black shadow-inner my-4 md:my-0 md:mx-0 rounded-3xl row-span-2 self-center'>
                                <img className=" w-40 md:h-48  h-40 md:w-48 lg:h-52 lg:w-52 object-cover rounded-full" src="https://i.ibb.co/sWQV2Wg/Avatar-Maker-1.png" />
                            </div>
                            
                            <div className='bg-white opacity-75 ring-2 ring-[#8BCDF9] shadow-black shadow-inner lg:m-1 rounded-3xl row-span-1 my-2 px-4 mx-auto max-w-max lg:min-w-full lg:mx-0'>
                                <div className='flex lg:flex-row flex-col items-center py-2 lg:justify-evenly'>
                                    <a target="_blank" href="https://www.github.com/omersajid9"><img className="h-7 w-7 object-cover rounded-full cursor-pointer lg:mt-0 lg:mb-0 mt-3" src="https://github.com/github.png" /></a>
                                    <a target="_blank" href="https://www.linkedin.com/in/omersajid9"><img className="h-7 w-7 object-cover rounded-full cursor-pointer lg:mt-0 lg:mb-0 mt-3" src="https://i.ibb.co/4VypHB3/linkedin.png" /></a>
                                    <a target="_blank" href="tel:+17653011753"><img className="h-7 w-7 object-cover rounded-full cursor-pointer bg-white opacity-75 lg:mt-0 lg:mb-0 mt-3" src="https://i.ibb.co/2y3df3F/phone.png" /></a>
                                    <a target="_blank" href="mailto:omersajid9@outlook.com"><img className="h-7 w-7 object-cover rounded-full cursor-pointer lg:mt-0 lg:mb-0 mt-3 mb-1" src="https://image.similarpng.com/very-thumbnail/2021/09/Outlook-icon-on-transparent-background-PNG.png" /></a>
                                </div>  
                            </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='flex bg-inherit ring-2 ring-[#8BCDF9] shadow-black shadow-inner  justify-center items-center  rounded-2xl md:rounded-full m-4 w-fit mx-auto'>
                            <div className=' text-center text-2xl font-text font-bold  bg-none  py-2 px-10 w-fit'>
                                Omer Sajid
                            </div>
                            
                            
                        </div>
                        <div className="bg-white opacity-80 ring-2 ring-[#8BCDF9] shadow-[#8BCDF9] shadow-sm rounded-bl-2xl rounded-tr-2xl rounded-br-2xl rounded-tl-2xl row-span-1 p-2 px-3 m-2"> 
                            <h1 className="text-[0.8rem] md:text-base text-black font-semibold font-text"> Hey, welcome! I am a recent Computer Science graduate from DePauw University, IN, and am currently working with Fermilab on a quantum computing research project. </h1>
                        </div>
                        <div className="bg-white opacity-80 ring-2 ring-[#8BCDF9] shadow-[#8BCDF9] shadow-sm rounded-bl-2xl rounded-tr-2xl rounded-br-2xl rounded-tl-2xl row-span-1 p-2 px-3 m-2"> 
                            <h1 className="text-[0.8rem] md:text-base text-black font-semibold font-text"> I am passionate about full-stack application development and solving complex mathematical algorithms using programming.</h1>
                        </div>
                        <div className="bg-white opacity-80 ring-2 ring-[#8BCDF9] shadow-[#8BCDF9] shadow-sm rounded-tl-2xl rounded-tr-2xl rounded-br-2xl row-span-1 p-2 px-3 m-2"> 
                            <h1 className="text-[0.8rem] md:text-base text-black font-semibold font-text"> Enjoy my portfolio! If you like it, and have curious ideas to share, I would love to chat with you. </h1>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Home;