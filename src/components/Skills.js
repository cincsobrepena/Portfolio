import React from 'react'
import { FaHtml5, FaCss3Alt,FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript,IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill, RiFlutterFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
		<div id='skills-header' className='max-w-[80%] mx-auto my-20'> 
			<h1 className='text-7xl uppercase font-bold'>SKILLS</h1>
		</div>
		<div id='skills-body' className='max-w-[80%] flex flex-row flex-wrap justify-center items-center'>
			<FaHtml5 size={100} className='m-5'/>
			<FaCss3Alt size={100}/>
			<RiTailwindCssFill size={100} className='m-5'/>
			<IoLogoJavascript size={100} className='m-5'/>
			<FaReact size={100} className='m-5'/>
			<FaNodeJs size={100} className='m-5'/>
			<RiFlutterFill size={100} className='m-5'/>
			<IoLogoFirebase size={100} className='m-5'/>
		</div>
    </div>
  )
}

export default Skills