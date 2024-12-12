import React from 'react'

const Marquee = () => {
  return (
    <div className='bg-[#075f53] flex items-center justify-center w-screen overflow-hidden uppercase whitespace-nowrap text-white rounded-2xl'>
        {["We are ochi" , "we are ochi", ].map((item , index)=>{
            return(
                <div className='font-bold w-full items-center py-[7vw]'>
                <p className='text-[19vw] flex w-full py-10 border-y-[1px] leading-[200px] text-center  border-zinc-300'>{item}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Marquee;