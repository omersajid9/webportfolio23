import {react, useState, useEffect, forwardRef} from 'react';
import {motion, useAnimation} from "framer-motion";
import { useInView } from 'react-intersection-observer';
const boxVariants = {
    hidden: { scale: 0.7 , opacity: 0, x:-100},
    visible: {
      scale: 1,
      opacity: 1,
      x:0
    }
  }




const TitleHeading = ({titleName, buttonOnClick, enlight}) =>
{

    const [toggle, setToggle] = useState(enlight);
    console.log("Inside")
    console.log(titleName)
    console.log(enlight)
    const styling = enlight ? 'bg-black text-[#F2E2BA] shadow-inner shadow-current' : 'bg-[#F2E2BA] text-black shadow-inner shadow-black'

    return (
        <button key={titleName} className={"md:m-1 m-[0.2rem] w-fit px-2.5 py-1.5 md:py-1 md:px-2 lg:py-2 lg:px-4 rounded-2xl text-[0.8rem] md:text-base lg:text-lg shadow-lg font-text " + styling} onClick={()=>{buttonOnClick(titleName)}}>
            {titleName}
        </button>
    )
}


const Skills = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({threshold:0.7});

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);
    const skillsData = {
        'All': [],
        'Quantum Computing': ['Python', 'Qiskit', 'Qutip', 'Pennylane'],
        'Machine Learning': ['Python', 'NumPy', 'SciPy', 'TensorFlow', 'Langchain', 'OpenAI', 'Pinecone'],
        'Web Development': ['JavaScript', 'ReactJs', 'Express', 'jQuery', 'Bootstrap', 'HTML5', 'CSS3', 'NodeJs', 'MongoDB', 'SQL'],
        'Testing': ['JavsScript', 'Chai', 'Mocha'],
        'Data Analysis': ['R', 'Python', 'FermiScienceTools', 'Root', 'C++'],
        'Cloud Computing': ['AWS CLI', 'AWS S3', 'AWS EC2'],
        'BlockChain': ['Solidity', 'Hardhat', 'OpenZepplin', 'Alchemy', 'Metamask'],
        'Networking': ['C', 'TCP/IP'],
        'DevOps': ['GitHub', 'Git', 'Docker', 'Kubernetes'],
        'Mobile Development': ['Java', 'Android Studio', 'MySQL', 'PHP']
    }
    const toggleData = {
        'All': false,
        'Quantum Computing': false,
        'Machine Learning': false,
        'Web Development': false,
        'Testing': false,
        'Data Analysis': false,
        'Cloud Computing': false,
        'BlockChain': false,
        'Socket Programming': false,
        'DevOps': false,
        'Mobile Development': false
    }
    let z = []
    for (let k in skillsData)
    {
        z = z.concat(skillsData[k]);
        // console.log("AS")
        // console.log(skillsData[k])
        // console.log(z)
    }
    // console.log("BS")
    // console.log(z)
    z = new Set(z);
    z = Array.from(z)
    skillsData['All'] = z
    // console.log("SSSS")
    // console.log(z)

    const [selectedTitle, setSelectedTitle] = useState(['All']);
    const [skillsSet, setSkillsSet] = useState(['']);
    toggleData[selectedTitle] = true;

    const buttonClick = (name) =>
    {
        toggleData[selectedTitle[0]] = false
        console.log(selectedTitle)
        console.log(toggleData)
        console.log(name)
        setSelectedTitle([name])
        toggleData[selectedTitle[0]] = true
        // if (selectedTitle.includes(name))
        // {
        //     let a = selectedTitle.filter((item)=> {return item!== name;});
        //     setSelectedTitle(a);
        // }
        // else
        // {
        //     let a = [...selectedTitle];
        //     a.push(name);
        //     setSelectedTitle(a);
        // }
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

    // useEffect(()=>
    // {
    // }, [skillsSet])


    return (
            <motion.div className="flex h-auto bg-inherit justify-center items-center my-20" ref={ref} initial="hidden" animate={controls} variants={boxVariants} transition={{ type: "spring", stiffness: 400, damping:50, duration: 0.8, delay: 0.3 }}>
                <div className=" bg-[#F2E2BA] bg-opacity-25 h-auto w-10/12 md:10/12 lg:w-8/12 rounded-2xl p-2 border-b-8 border-richBlack shadow-2xl drop-shadow-2xl shadow-seaShell">
                    <div className='flex bg-inherit ring-2 ring-[#F2E2BA] shadow-black shadow-inner  justify-center items-center  rounded-2xl md:rounded-full m-4 w-fit mx-auto'>
                        <div className=' text-center text-lg md:text-2xl lg:text-3xl font-text font-bold  bg-none  py-2 px-10 w-fit'>
                        SKILLS
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center items-center overflow-hidden border-b-0 rounded-3xl border-black shadow-inner shadow-black ring-2 ring-[#F2E2BA] py-1">
                        {
                            Object.keys(skillsData).map((ke, val) =>
                            {
                                console.log(ke)
                                console.log(toggleData[ke])
                                return selectedTitle.includes(ke) ? (<TitleHeading key={ke} titleName={ke} buttonOnClick={buttonClick} enlight={toggleData[ke]}/>) : (<TitleHeading key={ke} titleName={ke} buttonOnClick={buttonClick} enlight={toggleData[ke]}/>)
                            }

                            )
                        }
                    </div>
                    <div className='flex flex-wrap md:flex md:flex-wrap justify-center items-center h-auto p-2 md:p-4'>
                        {
                            skillsSet.map((skill)=> 
                            (
                                <div key={skill} className="border-2 px-1 md:px-2 py-1 md:py-4 m-[0.1rem] text-xs sm:text-xs md:text-sm lg:text-base rounded-full font-text border-black text-black md:m-1 shadow-[#F2E2BA] shadow-sm">
                                    {skill}
                                </div>
                            ))
                        }
                    </div>

                    


                    
                </div>
            </motion.div>
    )
}

export default Skills;