import {react} from 'react';


const ExperienceCard = ({CompanyName, Position, Duration, ImageSrc, additionalsetting}) =>
{
    return (
        <div className='justify-center items-center flex flex-col h-full'>
            <div className={" h-full w-full md:max-w-full md:w-full lg:max-w-full lg:w-full  shadow-[#F2BAC9] shadow-sm  bg-white bg-opacity-50  " + additionalsetting}>
                <div className='flex flex-col md:flex-row m-2 rounded-3xl row-span-2 md:justify-around justify-center items-center bg-none'>
                    <img className="lg:h-12 self-center lg:w-12 h-6 w-6 my-1 md:my-2 object-cover rounded-lg md:inline " src={ImageSrc} />
                    <div className="text-[0.75rem] md:text-[0.85rem] lg:text-base text-black font-bold font-text align-middle text-center">{CompanyName}</div>
                </div>
                <div className='flex rounded-3xl md:m-2 row-span-2 md:justify-between justify-center items-center bg-none px-2'>
                    <div className="text-[0.6rem] md:text-[0.7rem] lg:text-xs text-black font-text  align-middle md:text-start text-center">{Position}</div>
                    <div className="text-[0.6rem] md:text-[0.7rem] lg:text-xs text-black font-text  align-middle hidden md:inline">{Duration}</div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;