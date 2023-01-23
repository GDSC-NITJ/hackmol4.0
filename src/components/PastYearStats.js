import React from 'react';
import img from '../../public/past-year.png'

const PastYearStats =  function PastYearStats() {
  return (
    <div className='flex flex-row w-full border-2 border-black flex-wrap'>
        <div className='bg-[#7B61FF] border-r-2 border-black h-[741px] flex-grow'>
            <img src={img.src} className='m-auto relative top-1/2 -translate-y-1/2 p-8'></img>
        </div>
        <div className='h-[741px] flex-grow p-4'>
            <h1 className='font-Space-Grotesk font-bold relative -translate-y-[15%] top-[15%] text-5xl text-center tracking-wider'>How it went last year ?</h1>
            <ul className='top-[40%] relative -translate-y-[40%] sm:left-[40px] w-full'>
                <li className='past-stats-list font-normal text-3xl leading-[2] flex gap-6'> 1200+ Registrations Test</li>
                <li className='past-stats-list font-normal text-3xl leading-[2] flex gap-6'> 700+ participation for Freshers track</li>
                <li className='past-stats-list font-normal text-3xl leading-[2] flex gap-6'> 500+ participation in the Main track</li>
                <li className='past-stats-list font-normal text-3xl leading-[2] flex gap-6'> 30+ sponsors participated</li>
                <li className='past-stats-list font-normal text-3xl leading-[2] flex gap-6'> 75+ project submissions</li>
            </ul>
        </div>
    </div>
  )
}

export default PastYearStats;
