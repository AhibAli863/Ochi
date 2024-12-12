import React from 'react'

const Eyes = () => {
    return (
        <div className='w-screen h-screen relative'>
            <div className='bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] w-full h-full bg-center bg-cover relative place-items-center'>

                <div className='w-full h-96 absolute bottom-0 -translate-y-[50%] flex items-center justify-center gap-[3vw] px-2'>
                    <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full max-md:w-[10rem] max-md:h-[10rem] py-5'>
                        <div className='w-full flex justify-center'>

                            <div className='w-[10vw] h-[10vw] bg-black rounded-full flex items-center relative'>
                                <p className='text-zinc-200 text-center absolute left-1/3 top-1/3 font-semibold text-xl'>play</p>
                                <div className='w-[1.5vw] h-[1.5vw] bg-white rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] bg-zinc-200 rounded-full max-md:w-[10rem] max-md:h-[10rem] py-5'>
                        <div className='w-full flex justify-center'>

                            <div className='w-[10vw] h-[10vw] bg-black rounded-full flex items-center relative'>
                            <p className='text-zinc-200 text-center absolute left-1/3 top-1/3 font-semibold text-xl'>play</p>
                                <div className='w-[1.5vw] h-[1.5vw] bg-white rounded-full'></div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Eyes;