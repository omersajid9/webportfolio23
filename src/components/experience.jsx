import React from 'react';
import { useInView } from 'react-intersection-observer';

const Experience = () =>
{
    const { ref, inView } = useInView({threshold:0.5, once: true});

    const experiences = [
        { position: "Software Engineer, Machine Learning", company: "Yabla", duration: "Oct '23 - Present", image: "/yabla1.png" },
        { position: "Quantum Algorithm Developer", company: "Fermi National Accelerator Laboratory", duration: "Aug '22 - Oct '23", image: "/fermilab_hd.png" },
        { position: "Summer Internship in Science & Technology", company: "Fermi National Accelerator Laboratory", duration: "May '22 - Aug '22", image: "/fermilab_hd.png" },
        // { position: "First Year Resident Assistant", company: "DePauw University", duration: "Jul '21 - Jun '22", image: "/depauw.png" },
        { position: "Teacher Assistant, Computer Science", company: "DePauw University", duration: "Jan '21 - May '21", image: "/depauw.png" },
        { position: "Information Technology Associate", company: "DePauw University", duration: "Aug '20 - May '21", image: "/depauw.png" },
        { position: "Research Assistant, Nuclear Physics", company: "DePauw University", duration: "Sep '20 - Aug '21", image: "/depauw.png" },
        { position: "Teacher Assistant, Modern Physics", company: "DePauw University", duration: "Jan '20 - May '20", image: "/depauw.png" },
        { position: "Research Assistant, Astro Physics", company: "DePauw University", duration: "May '20 - Aug '20", image: "/depauw.png" },
    ];

    // Group experiences by company (already sorted, so order is preserved)
    const groupedByCompany = experiences.reduce((acc, exp) => {
        if (!acc[exp.company]) {
            acc[exp.company] = [];
        }
        acc[exp.company].push(exp);
        return acc;
    }, {});

    // Convert to array - companies are already in correct order
    const companyGroups = Object.entries(groupedByCompany).map(([company, exps]) => ({
        company,
        experiences: exps,
        image: exps[0].image,
    }));

    // Color schemes for different companies
    const getCompanyColors = (company) => {
        const colorMap = {
            'Yabla': { 
                bg: 'bg-company-yabla-primary/10', 
                border: 'border-company-yabla-primary/70', 
                // text: 'text-company-yabla-dark', 
                divider: 'border-company-yabla-primary/50' ,
                ring: 'ring-company-yabla-primary/60 bg-company-yabla-primary/10'
            },
            'Fermi National Accelerator Laboratory': { 
                bg: 'bg-company-fermilab-primary/10', 
                border: 'border-company-fermilab-primary/70', 
                // text: 'text-company-fermilab-dark', 
                divider: 'border-company-fermilab-primary/50' ,
                ring: 'ring-company-fermilab-primary/60 bg-company-fermilab-primary/10'
            },
            'DePauw University': { 
                bg: 'bg-company-depauw-primary/10', 
                border: 'border-company-depauw-primary/70', 
                // text: 'text-company-depauw-dark', 
                divider: 'border-company-depauw-primary/50' ,
                ring: 'ring-company-depauw-primary/60 bg-company-depauw-primary/10'
            },
        };
        return colorMap[company] || { bg: 'bg-gray', border: 'border-gray-500', text: 'text-gray-700', divider: 'border-gray-200' };
    };

    const ExperienceItem = ({ experience, isNested = false }) => (
        <div className="flex items-start gap-4 transition-all duration-300 hover:translate-x-1 w-full">
            {/* <div className="flex-1 min-w-0 flex flex-col gap-0.5"> */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-2 w-full">
                    <h3 className={`font-bold text-black text-sm md:text-base font-text`}>
                        {experience.position}
                    </h3>
                    <span className={`text-gray-700 text-xs md:text-sm font-text whitespace-nowrap`}>
                        {experience.duration}
                    </span>
                </div>
            {/* </div> */}
        </div>
    );

    const CompanyGroup = React.memo(({ companyGroup }) => {
        const colors = getCompanyColors(companyGroup.company);

        return (
            <div className={`${colors.bg} rounded-xl p-2 md:p-4  border-t-2  ${colors.border} shadow-sm flex flex-col gap-2 backdrop-blur-sm`}>
                <div className={`flex items-center gap-3 pb-3 border-b-2 ${colors.divider}`}>
                    <div className={`rounded-lg ring-2 ${colors.ring} shadow-black shadow-inner p-2 aspect-square`}>
                        <div className="h-8 w-8 md:h-10 md:w-10 rounded overflow-hidden aspect-square flex items-center justify-center">
                            <img 
                                src={companyGroup.image} 
                                alt={companyGroup.company}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <h2 className={`text-xl md:text-2xl font-bold ${colors.text} font-text`}>
                        {companyGroup.company}
                    </h2>
                </div>
                <div className="flex flex-col gap-2">
                    {companyGroup.experiences.map((exp, idx) => (
                        <ExperienceItem 
                            key={`${exp.company}-${exp.position}-${exp.duration}`} 
                            experience={exp} 
                        />
                    ))}
                </div>
            </div>
        );
    });

    return (
        <div className={`flex h-auto bg-inherit justify-center items-center fade-in-slide ${inView ? 'visible' : ''}`} ref={ref}>
            <div className="bg-section-experience rounded-2xl p-2 md:p-4 border-b-8 border-richBlack shadow-md drop-shadow-md flex flex-col gap-4">
                <div className='flex bg-inherit ring-2 ring-section-experience shadow-black shadow-inner justify-center items-center rounded-2xl md:rounded-full w-fit mx-auto'>
                    <div className='text-center text-lg md:text-2xl lg:text-3xl font-text font-bold bg-none py-2 px-10 w-fit'>
                        Experience
                    </div>
                </div>
                
                <div className="flex flex-col gap-3 max-h-[70dvh] max-w-[clamp(500px,70dvw,800px)] overflow-y-auto scrollbar-thin scrollbar-thumb-section-experience/50 scrollbar-track-transparent ">
                    {companyGroups.map((companyGroup) => (
                        <CompanyGroup key={companyGroup.company} companyGroup={companyGroup} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;