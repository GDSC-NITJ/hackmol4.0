import React from 'react'

function RulesPoints({ Desc, color }) {
  return (
    <div
      style={{ background: color }}
      className='rulesPoints relative border-2 border-black shadow-3xl rounded-3xl flex flex-col px-4 py-4 justify-center text-black    font-Plus-Jakarta font-bold'>
      <div className='absolute -top-4 -left-4'>
        <svg
          width='45'
          height='45'
          viewBox='0 0 56 56'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.20764 22.2875C15.562 20.5645 26.6351 13.7285 33.7114 3.45604C35.4345 15.8104 42.2705 26.8835 52.5429 33.9598C40.1886 35.6829 29.1155 42.5189 22.0391 52.7913C20.3161 40.437 13.4801 29.3639 3.20764 22.2875Z'
            fill='#FF4E4E'
            stroke='black'
            strokeWidth='2'
          />
        </svg>
      </div>
      {Desc}
    </div>
  )
}

export default RulesPoints
