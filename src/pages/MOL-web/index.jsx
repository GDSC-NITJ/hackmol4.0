import Image from 'next/image'
import React from 'react'
import logo from '../../../public/mol-logo.png'

function MOLweb() {
  return (
    <div  className=' bg-[#05141c] w-full h-screen flex flex-col items-center ' >
        <div className='flex justify-center items-center gap-3 mt-5'>
    <Image  src={logo.src} width={100} height={100} />
        <h1 className='text-white font-bold text-5xl  tracking-wider ' >Introduction To Web  </h1>
        </div>

    </div>
  )
}

export default MOLweb