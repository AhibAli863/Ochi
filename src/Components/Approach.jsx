import React from 'react';
import Pic from '../assets/Images/Ali.png.jpeg'
import  '../Components/style/Approach.css'
import { FaArrowUpLong } from "react-icons/fa6";



const Approach = () => {
  return (
    <div className='bg-[#CDEA68] flex items-center justify-between flex-wrap'>
        <div className='px-[3vw] -mt-'>
            <h1 className='text-5xl text-nowrap text-zinc-950 py-2 approach'>Our approach:</h1>
            <button className='btn uppercase bg-zinc-900 text-white flex items-center px-5 py-4 text-lg gap-10 rounded-full mt-10'>Read More
                <div className='btn-div bg-white rounded-full p-1'>
                  <FaArrowUpLong className='arrow'/>
                </div>
            </button>
        </div>

        <div className='py-10 px-16 pic overflow-hidden'>
          <img src={Pic} alt="pic" className='pic rounded-lg w-[40rem] h-[35rem]' />
        </div>
        
    </div>
  )
}

export default Approach