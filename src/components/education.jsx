import React from 'react';
import { useInView } from 'react-intersection-observer';

const Education = () =>
{
    const { ref, inView } = useInView({threshold:0.5, once: true});

    const education = [
        {
            degree: "Masters in Computer Science",
            university: "University of Illinois Urbana-Champaign",
            duration: "Jan '26 - Jul '27",
            image: "/uiuc.png",
            activities: []
        },
        {
            degree: "Bachelors in Computer Science & Physics",
            university: "DePauw University",
            duration: "Jan '20 - Dec '22",
            image: "/depauw.png",
            activities: [
                "Dean's List",
                "Resident Assistant",
                "Treasurer, International Computer Science Association",
                "President, Society of Physics Students",
                "Austin D. Sprague Award, Physics Department",
                "Sigma Pi Sigma, Physics Honor Society",
                "Vice President, DePauw Cricket Club",
            ]
        }
    ];

    // Color schemes for different universities
    const getUniversityColors = (university) => {
        // const colorMap = {
        //     'University of Illinois Urbana-Champaign': { 
        //         bg: 'bg-university-uiuc/10', 
        //         border: 'border-section-education/70', 
        //         // text: 'text-university-uiuc',
        //         divider: 'border-section-education/50',
        //         ring: 'ring-university-uiuc/60 bg-university-uiuc/10'
        //     },
        //     'DePauw University': { 
        //         // bg: 'bg-university-uiuc/10', 
        //         border: 'border-section-education/70', 
        //         // text: 'text-university-uiuc',
        //         divider: 'border-section-education/50',
        //         ring: 'ring-university-depauw/60 bg-university-depauw/10'
        //     },
        // };
        const colorMap = {
            'University of Illinois Urbana-Champaign': { 
                bg: 'bg-university-uiuc/10', 
                border: 'border-university-uiuc/70', 
                // text: 'text-university-uiuc',
                divider: 'border-university-uiuc/50',
                ring: 'ring-university-uiuc/60 bg-university-uiuc/10'
            },
            'DePauw University': { 
                bg: 'bg-university-depauw/10', 
                border: 'border-university-depauw/70', 
                // text: 'text-university-depauw',
                divider: 'border-university-depauw/50',
                ring: 'ring-university-depauw/60 bg-university-depauw/10'
            },
        };
        return colorMap[university] || { bg: 'from-gray-50 to-slate-50', border: 'border-gray-500', text: 'text-gray-700', divider: 'border-gray-200', ring: 'ring-gray-200/60 bg-gray-500/10' };
    };

    const EducationCard = React.memo(({ educationItem }) => {
        const colors = getUniversityColors(educationItem.university);

        return (
            <div className={`${colors.bg} rounded-xl p-2 md:p-4 border-t-2 ${colors.border} shadow-sm flex flex-col gap-2 backdrop-blur-sm`}>
                <div className={`flex items-center gap-3 pb-3 border-b-2 ${colors.divider}`}>
                    <div className={`rounded-lg ring-2 ${colors.ring} shadow-black shadow-inner p-2 aspect-square`}>
                        <div className="h-8 w-8 md:h-10 md:w-10 rounded overflow-hidden aspect-square flex items-center justify-center">
                            {educationItem.image && (
                                <img 
                                    src={educationItem.image} 
                                    alt={educationItem.university}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            )}
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className={`text-base md:text-xl font-bold ${colors.text} font-text`}>
                            {educationItem.university}
                        </h2>
                        <p className="text-sm md:text-base text-gray-700 font-text mt-0.5">
                            {educationItem.degree}
                        </p>
                    </div>
                    <span className="text-gray-700 text-xs md:text-sm font-text whitespace-nowrap">
                        {educationItem.duration}
                    </span>
                </div>
                
                {educationItem.activities && educationItem.activities.length > 0 && (
                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm md:text-base font-semibold text-gray-800 font-text">Activities & Awards</h3>
                        <div className="flex flex-wrap gap-1 lg:gap-2">
                            {educationItem.activities.map((activity, idx) => (
                                <span 
                                    key={idx}
                                    className="text-xs md:text-sm text-gray-700 bg-white/60 px-3 py-1.5 rounded-lg border border-gray-200/50 font-text"
                                >
                                    {activity}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    });

    return (
        <div className={`flex h-auto bg-inherit justify-center items-center fade-in-slide ${inView ? 'visible' : ''}`} ref={ref}>
            <div className="bg-section-education rounded-2xl p-2 md:p-4 border-b-8 border-richBlack shadow-md drop-shadow-md flex flex-col gap-4">
                <div className='flex bg-inherit ring-2 ring-section-education shadow-black shadow-inner justify-center items-center rounded-2xl md:rounded-full w-fit mx-auto'>
                    <div className='text-center text-lg md:text-2xl lg:text-3xl font-text font-bold bg-none py-2 px-10 w-fit'>
                        Education
                    </div>
                </div>
                <div className="flex flex-col gap-3 max-h-[70dvh] max-w-[clamp(500px,70dvw,800px)] overflow-y-auto scrollbar-thin scrollbar-thumb-section-education/50 scrollbar-track-transparent ">
                    {education.map((edu) => (
                        <EducationCard key={edu.university} educationItem={edu} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education;





