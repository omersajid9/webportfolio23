import {react, useState, useEffect, forwardRef} from 'react';
import {motion, useAnimation} from "framer-motion";
import { useInView } from 'react-intersection-observer';
const boxVariants = {
    hidden: { scale: 0.7 },
    visible: {
      scale: 1,
    }
  }



const TitleHeading = ({titleName, buttonOnClick, enlight}) =>
{

    const [toggle, setToggle] = useState(enlight);

    const styling = toggle ? 'bg-black text-[#F2E2BA] shadow-inner shadow-current' : 'bg-[#F2E2BA] text-black shadow-inner shadow-black'

    return (
        <button key={titleName} className={"md:m-1 m-[0.2rem] w-fit px-2.5 py-1.5 md:py-1 md:px-2 lg:py-2 lg:px-4 rounded-2xl text-[0.8rem] md:text-base lg:text-lg shadow-lg font-text " + styling} onClick={()=>{setToggle(!toggle);buttonOnClick(titleName)}}>
            {titleName}
        </button>
    )
}


const Skills = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({threshold:0.5});

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);
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
            <motion.div className="flex h-auto bg-inherit justify-center items-center my-20" ref={ref} initial="hidden" animate={controls} variants={boxVariants} transition={{ type: "spring", stiffness: 400, damping:50, duration: 0.8, delay: 0.2 }}>
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
                                return ke == selectedTitle[0] ? (<TitleHeading key={ke} titleName={ke} buttonOnClick={buttonClick} enlight={true}/>) : (<TitleHeading key={ke} titleName={ke} buttonOnClick={buttonClick} enlight={false}/>)
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