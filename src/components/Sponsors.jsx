import React from 'react'
import sponsors from '../assets/Partner and sponsors section.png'

function Sponsors() {
  return (
    <div className=" w-full py-10 flex flex-col bg-[#150E28] text-white border-b border-[#903AFF]">
        <div>
            <div className='text-center px-2'>
                <h1 className='font-bold text-xl'>
                   Partners and Sponsors
                </h1>
                <p className='md:w-[500px] mx-auto text-sm mt-5'>
                    Getlinked Hackathon 1.0 is honored to have the following major 
                    companies as its partners and sponsors
                </p>
            </div>
            <div>
               <img src={sponsors} alt="" className='w-[90%] md:w-[80%] my-20 mx-auto'/>
            </div>
        </div>
    </div>
  )
}

export default Sponsors