import {react} from 'react';
import { Link } from "react-scroll";

const Navigation = ({refer}) =>
{
    return (
      <div className=" bg-inherit rounded-br-xl rounded-bl-xl justify-center fixed w-fit px-6 items-center z-10 py-6">
        <ul className="flex flex-col shadow-black shadow-b-lg">
            <li className="mx-10 my-5">
              <a className="text-black bg-white bg-opacity-25 rounded-full hover:bg-white hover:bg-opacity-100 p-2 hover:text-indigo-800 font-bold font-base px-4 font-text  border-b-4 border-black " href="#">Home</a>
            </li>
            <li className="mx-10 my-5">
              <a className="text-black bg-white bg-opacity-25 rounded-full hover:bg-white hover:bg-opacity-100 p-2 hover:text-indigo-800 font-bold font-base px-4 font-text  border-b-4 border-black " href="#">Projects</a>
            </li>
            <li className="mx-10 my-5">
              <a className="text-black bg-white bg-opacity-25 rounded-full hover:bg-white hover:bg-opacity-100 p-2 hover:text-indigo-800 font-bold font-base px-4 font-text  border-b-4 border-black " href="#">Experience</a>
            </li>
            <li className="mx-10 my-5">
              <Link className="text-black bg-white bg-opacity-25 rounded-full hover:bg-white hover:bg-opacity-100 p-2 hover:text-indigo-800 font-bold font-base px-4 font-text   border-b-4 border-black " to={refer.current}>Skills</Link>
            </li>
        </ul>
      </div>
        
    )
}

export default Navigation;