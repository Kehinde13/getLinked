import React from 'react'
import bigIdea from'../assets/The big idea.png'

function Introduction() {
  return (
    <div name="Overview" className=' w-full py-10 flex bg-[#150E28] text-white border-b border-[#903AFF]'>
        <div className='md:grid grid-cols-2 justify-between gap-10 max-w-[1000px] mx-auto mt-10'>
            <div>
                 <img src={bigIdea} alt="" className='w-[80%] mx-auto md:w-[100%]'/>
            </div>
            <div  className='md:ml-20 md:mt-24 text-center md:text-left my-10 p-1'>
                <h1 className='text-xl md:text-1xl my-2 font-bold'>
                Introduction to getlinked <br />
                <span className='text-[#D434FE]'>tech Hackathon 1.0</span>
                </h1>
                <p className='px-5 md:px-0'>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a 
                    design maverick, or a concept wizard, you'll have the chance to transform 
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!
                </p>
            </div>
        </div>
    </div>
  )
}

export default Introduction