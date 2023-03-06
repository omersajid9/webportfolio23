import {react} from 'react';


const ExperienceCard = ({CompanyName, Position, Duration, ImageSrc, additionalsetting}) =>
{
    return (
        <div className='justify-center items-center flex flex-col'>
            <div className={" h-auto max-w-min md:max-w-full md:w-full p-2  shadow-sm shadow-black bg-white bg-opacity-50 md:mb-0 mb-2  " + additionalsetting}>
                <div className='flex  m-2 rounded-3xl row-span-2 justify-around items-center bg-none'>
                    <img className="h-12 w-12 object-cover rounded-lg md:inline hidden" src={ImageSrc} />
                    <div className="text-[0.5rem] md:text-sm text-black font-bold font-text align-middle">{CompanyName}</div>
                </div>
                <div className='flex  m-2 rounded-3xl row-span-2 justify-between items-center bg-none'>
                    <div className="text-[0.4rem] md:text-xs text-black font-text align-middle">{Position}</div>
                    <div className="text-xs text-black font-text align-middle hidden md:inline">{Duration}</div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;