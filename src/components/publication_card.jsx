import React from 'react';

const PublicationCard = ({ AppDetails }) => {
    return (
        <div className='justify-start items-start flex flex-row w-full gap-3 md:gap-4 p-2'>
            <div className="flex justify-center items-center flex-shrink-0">
                {AppDetails.icon}
            </div>

            <div className='flex flex-col gap-1'>
                <div className='text-sm md:text-base lg:text-lg font-text font-bold text-black border-b-2 border-black'>
                    {AppDetails.title}
                </div>
                <div className='text-xs md:text-sm lg:text-base font-text text-black'>
                    {AppDetails.published}
                </div>
                <div className='flex flex-row gap-2 text-xs md:text-sm font-text text-black'>
                    {AppDetails.link.poster && (
                        <a 
                            href={AppDetails.link.poster} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:font-black transition-colors"
                        >
                            Poster
                        </a>
                    )}
                    {AppDetails.link.poster && AppDetails.link.paper && <span className=' text-center'>•</span>}
                    {AppDetails.link.paper && (
                        <a 
                            href={AppDetails.link.paper} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:font-black transition-colors"
                        >
                            Paper
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PublicationCard;