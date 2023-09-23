import React from 'react'
import lady from '../assets/lady sitting.png'
import flare from "../assets/Purple-Lens-Flare-PNG.png"

function Rules() {
  return (
    <div className=' w-full py-10 flex bg-[#150E28] text-white border-b border-[#903AFF]'>
        <div className='relative md:grid grid-cols-2 justify-between gap-10 max-w-[1000px] mx-auto mt-10'>
            <div className='md:col-start-2'>
                 <img src={lady} alt="" className='w-[80%] mx-auto md:w-[100%]'/>
            </div>
            <div  className=' md:ml-20 md:mt-24 text-center md:text-left my-10 p-1 md:col-start-1 md:row-start-1'>
                <h1 className='text-xl md:text-1xl my-2 font-bold'>
                   Rules and <br />
                <span className='text-[#D434FE]'>Guidelines</span>
                </h1>
                <img src={flare} alt="" className="absolute md:-top-80 md:-left-48 -top-40 -left-20" />
                <p className='px-5 md:px-0'>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a 
                    design maverick, or a concept wizard, you'll have the chance to transform 
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!
                </p>
                <img src={flare} alt="" className="absolute bottom-72 md:hidden left-36" />
            </div>
        </div>
    </div>
  )
}

export default Rules