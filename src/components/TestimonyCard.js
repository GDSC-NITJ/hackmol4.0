import React from 'react'

export default function TestimonyCard() {
  return (
    <div className='bg-white w-full sm:w-96 shadow-3xl border-2 rounded-xl md:rounded-none  border-black  pt-10  pl-6 pr-8 pb-8 ' >
      <div className='flex  w-full justify-between'>
        <div className='font-semibold text-[14px] ' >
          Priyanshi
        </div>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.96 6.5C22.19 6.85 21.36 7.08 20.5 7.19C21.38 6.66 22.06 5.82 22.38 4.81C21.55 5.31 20.63 5.66 19.66 5.86C18.87 5 17.76 4.5 16.5 4.5C14.15 4.5 12.23 6.42 12.23 8.79C12.23 9.13 12.27 9.46 12.34 9.77C8.78004 9.59 5.61004 7.88 3.50004 5.29C3.13004 5.92 2.92004 6.66 2.92004 7.44C2.92004 8.93 3.67004 10.25 4.83004 11C4.12004 11 3.46004 10.8 2.88004 10.5V10.53C2.88004 12.61 4.36004 14.35 6.32004 14.74C5.69077 14.9122 5.03013 14.9362 4.39004 14.81C4.66165 15.6625 5.19358 16.4084 5.91106 16.9429C6.62854 17.4775 7.49549 17.7737 8.39004 17.79C6.87367 18.9904 4.99404 19.6393 3.06004 19.63C2.72004 19.63 2.38004 19.61 2.04004 19.57C3.94004 20.79 6.20004 21.5 8.62004 21.5C16.5 21.5 20.83 14.96 20.83 9.29C20.83 9.1 20.83 8.92 20.82 8.73C21.66 8.13 22.38 7.37 22.96 6.5Z" fill="black" />
        </svg>
      </div>
      <div className='pt-4 pb-8 font-semibold text-[14px] '>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus odio nulla. Cras vehicula libero in odio
      </div>
      <div className='flex gap-4' >
        <div><svg width="18" height="18" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6072 2.42409C11.3139 2.13074 10.9658 1.89803 10.5826 1.73927C10.1995 1.5805 9.78876 1.49878 9.374 1.49878C8.95924 1.49878 8.54854 1.5805 8.16536 1.73927C7.78219 1.89803 7.43405 2.13074 7.14084 2.42409L6.53232 3.03261L5.9238 2.42409C5.33152 1.83182 4.52823 1.49909 3.69064 1.49909C2.85304 1.49909 2.04975 1.83182 1.45748 2.42409C0.865205 3.01636 0.532471 3.81965 0.532471 4.65725C0.532471 5.49485 0.865205 6.29814 1.45748 6.89041L2.066 7.49893L6.53232 11.9653L10.9986 7.49893L11.6072 6.89041C11.9005 6.5972 12.1332 6.24906 12.292 5.86589C12.4508 5.48271 12.5325 5.07201 12.5325 4.65725C12.5325 4.24249 12.4508 3.83179 12.292 3.44862C12.1332 3.06544 11.9005 2.7173 11.6072 2.42409V2.42409Z" stroke="black" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        </div>
        <div className='font-semibold text-[12px] text-[#00000099] '>
          650
        </div>
        <div className='font-semibold text-[12px] text-[#00000099] '>
          3:40 PM – Feb 24, 2022
        </div>
      </div>

    </div>
  )
}
