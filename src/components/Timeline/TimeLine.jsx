import Link from 'next/link'
import React from 'react'
import star from '../../../public/Vector.png'

const obj = [
  {
    day: 'Januray 10',
    title: 'Registration Begins',
    location: 'Link for Registration',
    bgColor: 'blue',
    slug: '#',
  },
  {
    day: 'Januray 20',
    title: 'Registration For Hackathon Ends',
    // location: 'Classroom',
    bgColor: 'purple',
    slug: '#',
  },
  {
    day: 'Febraury 05',
    title: 'Round 1 Submission Ends',
    location: 'Submission of Presentation for round one ends.',
    bgColor: 'blue',
    slug: '#',
  },
  {
    day: 'Febraury 25',
    title: 'Final Coding Round Starts',
    // location: 'Classroom',
    bgColor: 'purple',
    slug: '#',
  },
]

function TimeLine() {
  return (
    <div className='bg-[#D0A4FF]'>
      <div className='w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20  '>
      <div className='flex justify-center  items-center font-bold text-[52px]  relative'> <img className='absolute top-[-27px] left-1 ' width={54} height={54}  src={star.src}/>TimeLine</div>
        <div className='border-l-2 border-[#D0A4FF] mt-10'>
          {obj.map((day, i) => {
            return (
              <div
                key={i}
                className={`transform transition shadow-3xl cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-${day.bgColor} text-white rounded-xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0`}>
                <div
                  className={`w-5 h-5 bg-${day.bgColor} absolute -left-10 transform -translate-x-2/4 top-12 rounded-full z-10 mt-2 md:mt-0`}></div>

                <div
                  className={`w-10 h-1 bg-${day.bgColor} absolute top-14 -left-10 z-0`}></div>

                <div className='flex-auto flex flex-col '>
                  <h1 className=''>{day?.day}</h1>
                  <h1 className='text-xl font-semibold tracking-wide '>{day?.title}</h1>
                   {i == 0 ?
                  <Link
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.nitj.ac.in/events_registration/hackmol/login'
                  >
                  <h3 className='flex items-center' >
                  {day?.location}<svg width="30" height="12" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM33.0607 13.0607C33.6464 12.4749 33.6464 11.5251 33.0607 10.9393L23.5147 1.3934C22.9289 0.807612 21.9792 0.807612 21.3934 1.3934C20.8076 1.97918 20.8076 2.92893 21.3934 3.51472L29.8787 12L21.3934 20.4853C20.8076 21.0711 20.8076 22.0208 21.3934 22.6066C21.9792 23.1924 22.9289 23.1924 23.5147 22.6066L33.0607 13.0607ZM2 13.5L32 13.5V10.5L2 10.5L2 13.5Z" fill="white"/>
</svg>
                  </h3>
                  </Link>
                  : <h3>{day?.location}</h3> 
                    
                 }
                </div>
              </div>
            )
          })}
          {/* <div className='transform transition shadow-3xl cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded-xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0'>
            <div className='w-5 h-5 bg-pink-600 absolute -left-10 transform top-12 -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0'></div>

            <div className='w-10 h-1 bg-pink-300 absolute top-14 -left-10 z-0'></div>

            <div className='flex-auto'>
              <h1 className='text-lg'>Day 1</h1>
              <h1 className='text-xl font-bold'>
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Classroom</h3>
            </div>
          </div>

          <div className='transform transition shadow-3xl cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green text-black rounded-xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0'>
            <div className='w-5 h-5 bg-green absolute -left-10 transform -translate-x-2/4 top-12 rounded-full z-10 mt-2 md:mt-0'></div>

            <div className='w-10 h-1 bg-green absolute top-14 -left-10 z-0'></div>

            <div className='flex-auto'>
              <h1 className='text-lg'>Day 1</h1>
              <h1 className='text-xl font-bold'>
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Classroom</h3>
            </div>
          </div>

          <div className='transform transition shadow-3xl cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple text-white rounded-xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0'>
            <div className='w-5 h-5 bg-purple absolute -left-10 transform -translate-x-2/4  top-12 rounded-full z-10 mt-2 md:mt-0'></div>

            <div className='w-10 h-1 bg-purple absolute top-14 -left-10 z-0'></div>

            <div className='flex-auto'>
              <h1 className='text-lg'>Day 1</h1>
              <h1 className='text-xl font-bold'>
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Classroom</h3>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default TimeLine
