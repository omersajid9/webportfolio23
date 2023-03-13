import {react, useState, useEffect, forwardRef} from 'react';



const TitleHeading = ({titleName, buttonOnClick, enlight}) =>
{

    const [toggle, setToggle] = useState(enlight);

    const styling = toggle ? 'bg-black text-white shadow-lg shadow-white' : 'bg-white text-black shadow-lg shadow-black'

    return (
        <button key={titleName} className={"md:m-1 m-[0.2rem] w-fit px-2.5 py-1.5 md:py-1 md:px-2 lg:py-2 lg:px-4 rounded-2xl text-[0.8rem] md:text-xs lg:text-lg shadow-lg font-text " + styling} onClick={()=>{setToggle(!toggle);buttonOnClick(titleName)}}>
            {titleName}
        </button>
    )
}


const Skills = () => {
    const skillsData = {
        'Quantum Computing': ['Python', 'Qiskit', 'Qutip', 'Pennylane'],
        'Machine Learning': ['Python', 'NumPy', 'SciPy', 'TensorFlow'],
        'Website Development': ['JavaScript', 'ReactJs', 'Express', 'jQuery', 'Bootstrap', 'HTML5', 'CSS3', 'NodeJs', 'MongoDB', 'SQL'],
        'Testing': ['JavsScript', 'Chai', 'Mocha'],
        'Data Analysis': ['R', 'Python', 'FermiScienceTools', 'Root', 'C++'],
        'Cloud Computing': ['AWS CLI', 'AWS S3', 'AWS EC2'],
        'BlockChain': ['Solidity', 'Hardhat', 'OpenZepplin', 'Alchemy', 'Metamask'],
        'Socket Programming': ['C'],
        'Version Control': ['GitHub', 'Git'],
        'Mobile Development': ['Java', 'Android Studio', 'MySQL', 'PHP']
    }

    const [selectedTitle, setSelectedTitle] = useState(['Website Development']);
    const [skillsSet, setSkillsSet] = useState(['OLLALA']);


    const buttonClick = (name) =>
    {
        console.log(name)
        if (selectedTitle.includes(name))
        {
            let a = selectedTitle.filter((item)=> {return item!== name;});
            setSelectedTitle(a);
        }
        else
        {
            let a = [...selectedTitle];
            a.push(name);
            setSelectedTitle(a);
        }
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
        console.log(skillsSet)
    }, [selectedTitle])

    useEffect(()=>
    {
        console.log("AAA")
        console.log(skillsSet);
    }, [skillsSet])


    return (
            <div className="flex h-auto bg-inherit justify-center items-center my-20">
                <div className=" bg-[#F2E2BA] bg-opacity-25 h-auto w-10/12 md:10/12 lg:w-8/12 rounded-2xl p-2 border-b-8 border-richBlack shadow-2xl drop-shadow-2xl shadow-seaShell">
                    <div className='flex bg-none justify-center items-center md:mb-8'>
                        <div className='text-center text-lg md:text-3xl font-semibold font-text m-4 bg-inherit rounded-full py-2 px-4 shadow-black shadow-sm'>
                            SKILLS
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center items-center overflow-hidden border-b-4 rounded-b-3xl border-black ">
                        {
                            Object.keys(skillsData).map((ke, val) =>
                            {
                                return ke == selectedTitle[0] ? (<TitleHeading key={ke} titleName={ke} buttonOnClick={buttonClick} enlight={true}/>) : (<TitleHeading key={ke} titleName={ke} buttonOnClick={buttonClick} enlight={false}/>)
                            }

                            )
                        }
                    </div>
                    <div className='flex flex-wrap md:flex md:flex-wrap justify-center items-center h-auto p-2 md:p-4'>
                        {
                            skillsSet.map((skill)=> 
                            (
                                <div key={skill} className="border-2 px-1 md:px-2 py-1 md:py-4 m-[0.1rem] text-xs sm:text-xs md:text-xs lg:text-base rounded-full font-text border-black text-black md:m-1">
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