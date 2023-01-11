import React from 'react'

const obj = [
  {
    day: 'Day 1',
    title: 'Orientation and Briefing on Uniliver basics',
    location: 'Classroom',
    bgColor: 'blue',
    slug: '#',
  },
  {
    day: 'Day 2',
    title: 'Orientation and Briefing on Uniliver basics',
    location: 'Classroom',
    bgColor: 'purple',
    slug: '#',
  },
  {
    day: 'Day 3',
    title: 'Orientation and Briefing on Uniliver basics',
    location: 'Classroom',
    bgColor: 'green',
    slug: '#',
  },
]

function TimeLine() {
  return (
    <div className='bg-yellow'>
      <div class='w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20  '>
        <h1 className='justify-center h-1/2 text-black  text-3xl md:text-4xl font-extrabold items-center pb-4 text-center '>
          TimeLine
        </h1>
        <div class='border-l-2 border-yellow mt-10'>
          {obj.map((day) => {
            return (
              <div
                class={`transform transition shadow-3xl cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-${day.bgColor} text-white rounded-xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0`}>
                <div
                  class={`w-5 h-5 bg-${day.bgColor} absolute -left-10 transform -translate-x-2/4 top-12 rounded-full z-10 mt-2 md:mt-0`}></div>

                <div
                  class={`w-10 h-1 bg-${day.bgColor} absolute top-14 -left-10 z-0`}></div>

                <div class='flex-auto'>
                  <h1 class='text-lg'>{day.day}</h1>
                  <h1 class='text-xl font-bold'>{day.title}</h1>
                  <h3>{day.location}</h3>
                </div>
              </div>
            )
          })}
          <div class='transform transition shadow-3xl cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded-xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0'>
            <div class='w-5 h-5 bg-pink-600 absolute -left-10 transform top-12 -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0'></div>

            <div class='w-10 h-1 bg-pink-300 absolute top-14 -left-10 z-0'></div>

            <div class='flex-auto'>
              <h1 class='text-lg'>Day 1</h1>
              <h1 class='text-xl font-bold'>
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Classroom</h3>
            </div>
          </div>

          <div class='transform transition shadow-3xl cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green text-black rounded-xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0'>
            <div class='w-5 h-5 bg-green absolute -left-10 transform -translate-x-2/4 top-12 rounded-full z-10 mt-2 md:mt-0'></div>

            <div class='w-10 h-1 bg-green absolute top-14 -left-10 z-0'></div>

            <div class='flex-auto'>
              <h1 class='text-lg'>Day 1</h1>
              <h1 class='text-xl font-bold'>
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Classroom</h3>
            </div>
          </div>

          <div class='transform transition shadow-3xl cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple text-white rounded-xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0'>
            <div class='w-5 h-5 bg-purple absolute -left-10 transform -translate-x-2/4  top-12 rounded-full z-10 mt-2 md:mt-0'></div>

            <div class='w-10 h-1 bg-purple absolute top-14 -left-10 z-0'></div>

            <div class='flex-auto'>
              <h1 class='text-lg'>Day 1</h1>
              <h1 class='text-xl font-bold'>
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Classroom</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeLine
