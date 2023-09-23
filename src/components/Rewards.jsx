import React from 'react'
import trophy from '../assets/cup.png';
import prize from '../assets/Rewards.png'

function Rewards() {
  return (
    <div className=" w-full py-24 flex flex-col bg-[#100B20] text-white">
        <div className='text-center md:text-left py-5 md:mb-10 md:w-[400px] md:ml-[800px]'>
            <h1 className='text-3xl font-bold py-5'>
             Prizes and <br />
             <span className="text-[#D434FE]">Rewards</span> 
            </h1>
            <p>
            Highlight of the prizes or rewards for winners 
            and for participants.
            </p>
        </div>
        <div className='flex flex-col md:flex-row px-5 gap-5'>
            <div>
                <img src={trophy} alt="" />
            </div>
            <div>
                <img src={prize} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Rewards