import React from 'react';
import './style/Expect.css';


const Approach = () => {
    return (
        <div className='bg-[#CDEA68] '>
            <div className='py-[6vw] px-[5vw]'>
                <p className='ochi-para text-6xl'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</p>

            </div>
            <section className='border-y-[1px] pb-20 border-zinc-500 w-screen flex justify-between flex-wrap px-20 gap-16'>
                <div className='w-full flex items-center justify-between relative flex-wrap'>
                    <div className='text-start'>
                        <p className='text-lg font-normal tracking-tighter'>What you can expect:</p></div>


                    <div className='expect-para w-1/3 flex flex-col gap-10 text-xl py-2'>
                        <p className=''>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p>

                        <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                    </div>
                </div>

                <div className='expect-icons w-1/3 mt-28 underline text-lg pl-44'>
                    <p>S:</p>
                       <p> Instagram</p>
                       <p> Behance</p>
                       <p> Facebook</p>
                       <p> Linkedin</p>

                </div>
            </section>
        </div>
    )
}

export default Approach