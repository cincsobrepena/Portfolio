import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiFileDownloadFill } from "react-icons/ri";
import UserImage from '../assets/img/user.png'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center mb-20'>
		<div id='hero-header' className='max-w-[80%] mx-auto my-10'>
			<img
				src={UserImage}
				alt='UserImage'
				className='max-w-[70%] mx-auto mb-5 drop-shadow-2xl'
			/>
			<h1 className='text-4xl font-bold uppercase mb-2'>Carl Sobrepeña</h1>
			<h2 className='text-md uppercase mb-2'>Software Developer</h2>
		</div>
		<div
			id='hero-body'
			className='flex flex-row justify-between p-5 rounded-xl shadow-xl mb-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
		>
			<a
				href='https://github.com/cincsobrepena'
				rel='noreferrer'
				target='_blank'
				className='cursor-pointer mx-5 transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg'
			>
				<AiFillGithub size={35} />
			</a>
			<a
				href='https://www.linkedin.com/in/carl-sobrepena/'
				rel='noreferrer'
				target='_blank'
				className='cursor-pointer mx-5 transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg'
			>
				<AiFillLinkedin size={35} />
			</a>
			<a
				href='https://drive.google.com/drive/folders/1DoMzPUPSNUFKu9xX5CnMWAgWzfkFjnMh?usp=sharing'
				rel='noreferrer'
				target='_blank'
				className='cursor-pointer mx-5 transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg'
			>
				<RiFileDownloadFill size={35} />
			</a>
		</div>
	</div>
  )
}

export default Hero