import React from 'react'
import Hackmol from '../../public/Hackmol4.png'
import Link from 'next/link'

function Banner2() {
    return (
        <div className="flex justify-center w-full">
            <div className="space-y-8 flex flex-col md:flex-row justify-evenly leading-10 md:w-9/12 w-11/12 items-center py-10 md:py-20">
                <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col  space-y-4">
                    <p className='text-center md:text-left font-Plus-Jakarta md:leading-[48px] lg:leading-[72px] font-bold text-4xl md:text-4xl lg:text-5xl'>Think outside the box <span className='rotate-45 text-center text-lg shadow-hack bg-[#D0A4FF] border-2 border-black py-1 px-6 w-28 rounded-full m-2 '>Hack</span> inside it</p>
                    <p className='text-center md:text-left font-normal text-lg sm:text-xl md:text-2xl'>Lorem ipsum dolor sit amet consectetur. Id elit dignissim phasellus ultricies egestas lobortis. Massa aliquam </p>
                    <div className='hidden sm:flex sm:space-x-8 items-center justify-center md:justify-start'>
                        <Link
                            target='_blank'
                            rel='noreferrer'
                            href='https://discord.gg/6Th6ppaG'>
                            <button
                                className='bg-[#D0A4FF]  px-6 shadow-3xl hover:bg-gray-100 text-black font-bold'
                                onClick={() => console.log('connect')}>
                                Join Discord
                            </button>
                        </Link>
                        <Link
                            target='_blank'
                            rel='noreferrer'
                            href='https://www.nitj.ac.in/events_registration/hackmol/login'>
                            <button
                                className='bg-gray-100  px-6 shadow-3xl hover:bg-[#D0A4FF] font-bold text-black'
                                onClick={() => console.log('connect')}>
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img className="w-10/12 sm:w-8/12 md:w-10/12" src={Hackmol.src} alt="banner" />
                </div>
                <div className='space-x-8 flex items-center justify-center sm:hidden w-full'>
                    <Link
                        target='_blank'
                        rel='noreferrer'
                        href='https://discord.gg/6Th6ppaG'>
                        <button
                            className='bg-[#D0A4FF]  px-6 shadow-3xl hover:bg-gray-100 text-black font-bold'
                            onClick={() => console.log('connect')}>
                            Join Discord
                        </button>
                    </Link>
                    <Link
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.nitj.ac.in/events_registration/hackmol/login'>
                        <button
                            className='bg-gray-100  px-6 shadow-3xl hover:bg-[#D0A4FF] font-bold text-black'
                            onClick={() => console.log('connect')}>
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner2