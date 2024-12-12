import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import './style/MidContainer.css';

const MidContainer = () => {
  return (
    <div className='bg-zinc-100 border-b-2 pb-[8vw]'>
      <div className='pt-[6vw]'>
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className='w-full flex px-[3vw] leading-none justify-start items-center flex-wrap'>
              {index === 1 && <div className='mid-image w-52 h-24  ml-14 bg-purple-500 flex mt-3 rounded-md py-11 tracking-tighter sm:w-32 sm:h-12'>
              </div>}
              <h1 className='text-[7vw] uppercase font-bold pl-[3.5vw] leading-[6vw] tracking-tighter'>{item}</h1>

            </div>
          )
        })}

      </div>
      <div className='border-t-[1px] border-zinc-400 mt-[10vw] flex flex-wrap items-center justify-between w-full px-[2vw]'>
        {["For public and private companies", "From the first pitch to IPO"].map((e, index) => {
          return (
            <div className='flex'>
              {index === 2 && <FaArrowUpLong />}
              <p className={`text-lg py-5 ${index === 2 & "border flex border-zinc-950 p-2 rounded-lg bg-red-500"} font-normal tracking-tighter`}>{e}</p>
              </div>
            )
            })}
                <div className=' icon-box flex items-center gap-3 capitalize font-normal   cursor-pointer ease-in-out duration-1000 '>
                <span className='border-black border px-3 py-1 rounded-full icon'>Start the project</span>
                <span className=''><FaArrowUpLong className='border-black border rounded-full text-3xl p-1 icon'/></span>
                </div>
              </div>


    </div>
  )
}

export default MidContainer