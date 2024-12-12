import React from 'react';
import './style/feature.css';

const Feature = () => {
  return (
    <div className=' rounded-2xl border-t-2  w-screen h-screen '>
      <div className='border-b-[1px] border-zinc-300 px-[3vw] pt-[6vw]'>
        <h1 className='text-[3.6vw] text-zinc-900 font-normal pb-[3vw]'>Featured Projects</h1>
      </div>

      <div className='main px-[3vw] py-[3vw] w-screen h-screen flex items-center gap-5 max-sm:flex-wrap max-sm:justify-center max-md:flex-wrap max-sm:p-0'>
        <div className='body w-1/2 cursor-pointer'>
          <div className='box w-full'>
            <div className='head flex gap-3 items-center w-full pb-5'>
              <div className='w-3 h-3 bg-black rounded-full'></div>
              <h1 className=' text-xl uppercase'>Fyde</h1>
            </div>


            <div className='main-container'>
              <div className='w-full h-[35vw] bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png")] bg-center bg-cover rounded-xl flex items-center relative'>

                <h1 className='vise hidden max-sm:visible max-sm:z-10  text-[7vw] text-[#CEEA68] font-bold absolute left-[33vw] uppercase z-50'>fyde</h1>
              </div>
            </div>
          </div>

          <div className='bottom-section flex gap-5 my-5 flex-wrap'>
            <button className='border-2 border-zinc-500 text-base text-zinc-700 font-medium px-5 uppercase rounded-full'>Audit</button>
            <button className='border-2 border-zinc-500 text-base text-zinc-700 font-medium px-5 uppercase rounded-full'>CopyWriting</button>
            <button className='border-2 border-zinc-500 text-base text-zinc-700 font-medium px-5 uppercase rounded-full'>Sales Deck</button>
            <button className='border-2 border-zinc-500 text-base text-zinc-700 font-medium px-5 uppercase rounded-full'>Slide design</button>
          </div>
        </div>

        <div className='w-1/2 cursor-pointer vise-box box'>
          <div className='body w-full  '>
            <div className='box w-full'>
              <div className='head flex gap-3 items-center w-full pb-5'>
                <div className='w-3 h-3 bg-black rounded-full'></div>
                <h1 className=' text-xl uppercase'>Vise</h1>
              </div>

              <div className='main-container'>
                <div className='w-full h-[35vw] bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg")] bg-center bg-cover rounded-xl flex items-center relative'>

                  <h1 className='vise hidden max-sm:visible max-sm:z-10 text-[7vw] text-[#CEEA68] font-bold absolute -left-[7vw] uppercase'>Vise</h1>
                </div>
              </div>
            </div>
          </div>

          <div className='bottom-section flex gap-5 my-5'>
            <button className='border-2 border-zinc-500 text-base text-zinc-700 font-medium px-5 uppercase rounded-full'>Agency</button>
            <button className='border-2 border-zinc-500 text-base text-zinc-700 font-medium px-5 uppercase rounded-full'>Company Presentation</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Feature;