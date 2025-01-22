import React from 'react'
import { FaGithub } from "react-icons/fa";
import CodeRunner from '../assets/img/coderunner.jpg'
import Sphere from '../assets/img/sphere.png'
import Tugunan from '../assets/img/tugunan.png'

const Projects = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
			<div id='projects-header' className='max-w-[80%] mx-auto my-20'> 
				<h1 className='text-7xl uppercase font-bold'>PROJECTS</h1>
			</div>
			<div id='projects-body' className='max-w-[80%] flex flex-row flex-wrap justify-center items-center'>
				<div id='tugunan' className='flex flex-row justify-around my-5 p-7 rounded-2xl bg-slate-750 shadow-2xl'>
					<div className='mr-5'>
						<img src={Tugunan} alt='Tugunan.png' className='max-w-28'/>
					</div>
					<div className='flex flex-col justify-between text-left'>
						<h2 className='text-3xl font-bold '>Tugunan</h2>
						<p className='text-sm text-slate-400'>React, Tailwind CSS, Socket.IO  </p>
						<p>
							This is a real-time chat app where users join rooms by entering their name and room number.
						</p>
						<div className='flex flex-row w-fit py-2 px-5 items-center justify-between bg-slate-900 rounded-r-3xl rounded-l-md shadow-2xl'>
							<a target='_blank' rel='noreferrer' href='https://github.com/cincsobrepena/Tugunan'  className='flex flex-row w-fit py-2 px-5 items-center justify-between bg-slate-900 rounded-r-3xl rounded-l-md shadow-2xl'>
								<FaGithub size={20}  className='mr-4'/>
								<p className='font-semibold'>Learn More</p>
							</a>
						</div>
					</div>
				</div>
				<div id='sphere' className='flex flex-row justify-around my-5 p-7 rounded-2xl bg-slate-750 shadow-2xl'>
					<div className='mr-5'>
						<img src={Sphere} alt='sphere.png' className='max-w-28'/>
					</div>
					<div className='flex flex-col justify-between text-left'>
						<h2 className='text-3xl font-bold '>Sphere</h2>
						<p className='text-sm text-slate-400'>React, WeatherAPI.com  </p>
						<p>
							This project combines the power of the Pomodoro technique, an intuitive to-do list manager, and real-time weather forecasts.
						</p>
						<a target='_blank' rel='noreferrer' href='https://github.com/cincsobrepena/Sphere'  className='flex flex-row w-fit py-2 px-5 items-center justify-between bg-slate-900 rounded-r-3xl rounded-l-md shadow-2xl'>
							<FaGithub size={20}  className='mr-4'/>
							<p className='font-semibold'>Learn More</p>
						</a>
					</div>
				</div>
				<div id='coderunner' className='flex flex-row justify-around my-5 p-7 rounded-2xl bg-slate-750 shadow-2xl'>
					<div className='mr-5'>
						<img src={CodeRunner} alt='coderunner.jpg' className='max-w-28'/>
					</div>
					<div className='flex flex-col justify-between text-left'>
						<h2 className='text-3xl font-bold '>CodeRunner </h2>
						<p className='text-sm text-slate-400'>Dart, Flutter  </p>
						<p>
							 This project helps reinforce the user’s coding skills and familiarization with a specific programming language’s syntax in a gamified format.
						</p>
						<a target='_blank' rel='noreferrer' href='https://github.com/cincsobrepena/CodeRunner'  className='flex flex-row w-fit py-2 px-5 items-center justify-between bg-slate-900 rounded-r-3xl rounded-l-md shadow-2xl'>
							<FaGithub size={20}  className='mr-4'/>
							<p className='font-semibold'>Learn More</p>
						</a>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Projects