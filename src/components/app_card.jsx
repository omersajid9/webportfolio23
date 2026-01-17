import React, { useState } from 'react';
import { CaretCircleDown } from '@phosphor-icons/react/dist/csr/CaretCircleDown';
import { CaretCircleUp } from '@phosphor-icons/react/dist/csr/CaretCircleUp';
import { GithubLogo } from '@phosphor-icons/react/dist/csr/GithubLogo';




const AppCard = ({ AppDetails }) => {
    const [desbool, setDesBool] = useState(false)


    return (
        <div className='justify-center items-center flex flex-col mt-2'>
            <div className="rounded-3xl flex justify-center h-[calc(70dvh-4rem)] items-center p-1 mx-2 md:mx-4">
                <img className='rounded-3xl ring-2 ring-section-applications p-2 shadow-inner shadow-black z-10 w-auto h-full object-contain flex-shrink-0' src={AppDetails.image}  loading="lazy" />
            </div>
            <div className="w-48 bg-white/60 backdrop-blur-sm border-black shadow-inner border -mt-5 md:-mt-10 ring-0 ring-section-applications  shadow-black/20 rounded-lg overflow-hidden p-0 md:p-1 lg:p-2 z-50">
                <div className="text-sm md:text-lg lg:text-xl font-bold font-text text-center border-b-2 border-black p-2">
                    {AppDetails.title}
                </div>

                {desbool ? (
                    <div className='p-2 md:p-0 md:pt-2'>
                        <div className="text-[0.8rem] md:text-[0.75rem] lg:text-[0.85rem] font-text text-center ">
                            {AppDetails.description}
                        </div>
                        <div className='flex flex-row items-center justify-center gap-4 mt-2 md:mt-1'>
                            <button className="bg-inherit block rounded" onClick={() => setDesBool(false)}>
                                <CaretCircleUp weight="fill" className="h-6 w-6 rounded-full border-black border-2 cursor-pointer aspect-square flex items-center justify-center " />
                            </button>
                            <a href={AppDetails.github} target='_blank'>
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
                            <a href={AppDetails.github} target='_blank'>
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

export default AppCard;