import React from 'react'
import Hackmol from '../../../public/Hackmol4.png'
import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'


function Banner2() {
    return (
        <>
            <Script src="https://apply.devfolio.co/v2/sdk.js" defer async></Script>
       
            <div className="flex justify-center w-full">
                <div className="space-y-8 flex flex-col md:flex-row justify-evenly leading-10 md:w-9/12 w-11/12 items-center py-10 md:py-20">
                    <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col  space-y-4">
                        <p className='text-center md:text-left font-Plus-Jakarta md:leading-[48px] lg:leading-[72px] font-bold text-3xl md:text-4xl lg:text-5xl'>Think outside the box <div className=' inline-block -rotate-12 text-center text-base sm:text-lg relative sm:-top-2 shadow-hack bg-[#D0A4FF] border-2 border-black py-1 px-4 w-28 rounded-full m-2 '>Hack</div> inside it</p>
                        <p className='text-center md:text-left font-normal hidden sm:inline text-lg sm:text-xl md:text-xl'>HackMOL is the flagship annual 30-hour hackathon being organised by Google Developer Student (GDSC) of NIT Jalandhar wherein young coders & developers from all over the country join together to build projects & solutions to the alarming problems of the region & the world. </p>
                        <div className='hidden sm:flex sm:space-x-8 items-center justify-center md:justify-start'>
                            <Link
                                target='_blank'
                                rel='noreferrer'
                                href='https://discord.gg/6Th6ppaG'>
                                <button
                                    className='bg-[#D0A4FF]  px-6 shadow-3xl hover:bg-gray-100 text-black font-bold border border-black '
                                    onClick={() => console.log('connect')}>
                                    Join Discord
                                </button>
                            </Link>
                            <Link
                                target='_blank'
                                rel='noreferrer'
                                href='https://www.nitj.ac.in/events_registration/hackmol/login'>
                                <button
                                    className='bg-gray-100  px-6 shadow-3xl hover:bg-[#D0A4FF] font-bold text-black border border-black'
                                    onClick={() => console.log('connect')}>
                                    Register
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className="w-10/12 sm:w-8/12 md:w-10/12" src={Hackmol.src} alt="banner" />
                    </div>
                    <div className='flex px-5 gap-5 items-center justify-evenly sm:hidden w-full'>
                        <Link
                            target='_blank'
                            rel='noreferrer'
                            href='https://discord.gg/6Th6ppaG'
                            className='w-1/2'
                            >
                            <button
                                className='bg-[#D0A4FF]  px-6 shadow-3xl w-full hover:bg-gray-100 text-black font-bold  border border-black'
                                onClick={() => console.log('connect')}>
                                Join Discord
                            </button>
                        </Link>
                        <Link
                            className='w-1/2'
                            target='_blank'
                            rel='noreferrer'
                            href='https://www.nitj.ac.in/events_registration/hackmol/login'>
                            <button
                                className='bg-gray-100  px-6 shadow-3xl w-full hover:bg-[#D0A4FF] font-bold text-black  border border-black'
                                onClick={() => console.log('connect')}>
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner2