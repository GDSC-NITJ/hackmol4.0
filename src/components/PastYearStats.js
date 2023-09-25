import React from 'react';
import img from '../../public/past-year.png'

const PastYearStats =  function PastYearStats() {
  return (
    <div className='flex flex-col md:flex-row w-full border-2 border-black'>
        <div className='bg-[#7B61FF] border-r-2 border-black h-[400px] md:h-[741px] flex-grow'>
            <img src={img.src} className='m-auto relative top-1/2 -translate-y-1/2 p-4 md:p-8'></img>
        </div>
        <div className='h-[700px] md:h-[741px] flex-grow p-4'>
            <h1 className='font-Space-Grotesk font-bold relative -translate-y-[10%] top-[10%] md:-translate-y-[15%] md:top-[15%] md:text-5xl text-3xl text-center md:tracking-wider p-4'>How it went last year ?</h1>
            <ul className='top-[30%] relative -translate-y-[30%]'>
                <li className='past-stats-list pl-[8%] font-normal pb-2 md:pb-4 md:text-3xl text-xl leading-[2] flex gap-3 md:gap-6'> 3000+ Registrations Test</li>
                <li className='past-stats-list pl-[8%] font-normal pb-2 md:pb-4 md:text-3xl text-xl leading-[2] flex gap-3 md:gap-6'> 750+ Teams All Over the India</li>
                <li className='past-stats-list pl-[8%] font-normal pb-2 md:pb-4 md:text-3xl text-xl leading-[2] flex gap-3 md:gap-6'> Prizes Upto 5Lakhs+</li> 
                {/* <li className='past-stats-list pl-[8%] font-normal pb-2 md:pb-4 md:text-3xl text-xl leading-[2] flex gap-3 md:gap-6'> 30+ sponsors participated</li> */}
                <li className='past-stats-list pl-[8%] font-normal pb-2 md:pb-4 md:text-3xl text-xl leading-[2] flex gap-3 md:gap-6'> 50+ Accepted Projects  </li>
            </ul>
        </div>
    </div>
  )
}

export default PastYearStats;
