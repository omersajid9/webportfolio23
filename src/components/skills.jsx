import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';




const TitleHeading = ({titleName, buttonOnClick, enlight}) =>
{

    const [toggle, setToggle] = useState(enlight);
    const styling = enlight ? 'bg-black text-section-skills shadow-inner shadow-current' : 'bg-section-skills text-black shadow-inner shadow-black'

    return (
        <button key={titleName} className={"md:m-1 m-[0.2rem] w-fit px-2.5 py-1.5 md:py-1 md:px-2 lg:py-2 lg:px-4 rounded-2xl text-[0.8rem] md:text-base lg:text-lg shadow-md font-text " + styling} onClick={()=>{buttonOnClick(titleName)}}>
            {titleName}
        </button>
    )
}


const Skills = () => {
    const { ref, inView } = useInView({threshold:0.5, once: true});
    const skillsData = {
        'All': [],
        'Languages': ['Python', 'C++', 'JavaScript', 'TypeScript', 'PHP', 'Rust', 'Swift', 'Java', 'R', 'HTML5', 'CSS3',],
        'Machine Learning': ['NumPy', 'transformers', 'peft', 'trl', 'SciPy', 'PyTorch', 'Langchain', 'Pinecone', 'Weights And Biases'],
        'Web Dev': ['ReactJs', 'Express', 'jQuery', 'Bootstrap', 'NodeJs'],
        'Quantum Computing': ['Qiskit', 'Qutip', 'Pennylane'],
        'Testing': ['Chai', 'Mocha', 'Selenium'],
        'Simulation': ['Gymnasium', 'Root'],
        'Cloud Computing': ['AWS'],
        'Blockchain': ['Solidity', 'Hardhat', 'OpenZepplin', 'Alchemy', 'Metamask'],
        'Network': ['TCP/IP', 'UDP'],
        'DevOps': ['Linux', 'GitHub', 'Git', 'Docker', 'Kubernetes'],
        'Mobile Dev': ['Android Studio'],
        'Databases': ['MongoDB', 'MySQL', 'PostgreSQL']
    }
    const toggleData = {
        'All': false,
        'Languages': false,
        'Machine Learning': false,
        'Web Dev': false,
        'Quantum Computing': false,
        'Testing': false,
        'Simulation': false,
        'Cloud Computing': false,
        'Blockchain': false,
        'Network': false,
        'DevOps': false,
        'Mobile Dev': false,
        'Databases': false
    }
    let z = []
    for (let k in skillsData)
    {
        z = z.concat(skillsData[k]);
    }
    z = new Set(z);
    z = Array.from(z)
    skillsData['All'] = z

    const [selectedTitle, setSelectedTitle] = useState(['All']);
    const [skillsSet, setSkillsSet] = useState(['']);
    toggleData[selectedTitle] = true;

    const buttonClick = (name) =>
    {
        toggleData[selectedTitle[0]] = false
        setSelectedTitle([name])
        toggleData[selectedTitle[0]] = true
    }

    useEffect(()=>
    {
        
        var list = []
        for (let k in skillsData) 
        {
            for (let z in selectedTitle)
            {
                if (k == selectedTitle[z])
                {
                    list = list.concat(skillsData[k]);
                }
            }
        }
        let s = new Set(list);
        s = Array.from(s)
        s.sort()
        setSkillsSet(s);
    }, [selectedTitle])

    return (
            <div className={`flex h-auto bg-inherit justify-center items-center my-20 fade-in-slide ${inView ? 'visible' : ''}`} ref={ref}>
                <div className=" bg-section-skills rounded-2xl p-2 border-b-8 border-richBlack shadow-md drop-shadow-md shadow-seaShell">
                    <div className='flex bg-inherit ring-2 ring-section-skills shadow-black shadow-inner  justify-center items-center  rounded-2xl md:rounded-full m-4 w-fit mx-auto'>
                        <div className=' text-center text-lg md:text-2xl lg:text-3xl font-text font-bold  bg-none  py-2 px-10 w-fit'>
                        Skills
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center items-center overflow-hidden border-b-0 rounded-3xl border-black shadow-inner shadow-black ring-2 ring-section-skills py-1">
                        {
                            Object.keys(skillsData).map((ke, val) =>
                            {
                                return (<TitleHeading key={ke} titleName={ke} buttonOnClick={buttonClick} enlight={toggleData[ke]}/>)
                            })
                        }
                    </div>
                    <div className='flex flex-wrap md:flex md:flex-wrap justify-center items-center h-auto p-2 md:p-4'>
                        {
                            skillsSet.map((skill)=> 
                            (
                                <div key={skill} className="border-2 px-1 md:px-2 py-1 md:py-4 m-[0.1rem] text-xs sm:text-xs md:text-sm lg:text-base rounded-full font-text border-black text-black md:m-1 shadow-section-skills shadow-sm">
                                    {skill}
                                </div>
                            ))
                        }
                    </div>

                    


                    
                </div>
            </div>
    )
}

export default Skills;