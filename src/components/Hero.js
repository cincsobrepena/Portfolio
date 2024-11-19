import React from 'react'
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { RiFileDownloadFill } from "react-icons/ri";
import UserImage from '../assets/img/user.png'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center mb-20'>
			<div id='hero-header' className='max-w-[80%] mx-auto my-10'>
				<img src={UserImage} alt='UserImage' className='max-w-[70%] mx-auto mb-5 drop-shadow-2xl'/>
				<h1 className='text-4xl font-bold uppercase mb-2'>Carl Sobrepeña</h1>
				<h2 className='text-md uppercase mb-2'>Software Developer</h2>
			</div>
			<div id='hero-body' className='flex flex-row justify-between p-5 rounded-full shadow-xl mb-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
				<a href='https://www.instagram.com/ian.sobrepena' rel='noreferrer' target='_blank'><AiFillInstagram className='cursor-pointer mx-5' size={35}/></a>
				<a href='https://www.linkedin.com/in/carl-sobrepena/' rel='noreferrer' target='_blank'><AiFillLinkedin className='cursor-pointer mx-5' size={35}/></a>
				<a href='https://drive.google.com/file/d/1HJaizzuAK3hctEIdfPiSQ9LuOxr8pKzC/view?usp=sharing' rel='noreferrer' target='_blank'><RiFileDownloadFill  size={35} className='cursor-pointer mx-5'/></a>
			</div>
    </div>
  )
}

export default Hero