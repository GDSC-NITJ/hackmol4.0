import React from 'react'
import logo1 from '../../../public/logo.svg'
import logo2 from '../../../public/nitj.jpg'
import logo3 from '../../../public/technitiLogo.png'

function Collaborators() {
    return (
        <div className="flex flex-col justify-center items-center w-full   bg-slate-200  ">
            <div className='flex flex-col justify-center items-center py-20 pt-0'>
                <div>
                    <h1 className="justify-center h-1/2 text-black  text-3xl md:text-4xl font-extrabold items-center pb-6 text-center ">Organised by</h1>
                </div>
                <div className='flex w-full flex-wrap justify-center items-center gap-8 '>
                    <div className='border-2 bg-white border-black  w-11/12 sm:w-[320px] h-48 flex flex-col justify-center items-center p-5 shadow-3xl rounded-xl font-bold  ' >
                        <img src={logo1.src} width={120} />
                        <div className=' text-xl font-bold text-center pt-3  ' >
                            GDSC NIT Jalandhar
                        </div>


                    </div>
                    <div className='border-2 bg-white border-black  w-11/12 sm:w-[320px] h-48 flex flex-col justify-center items-center p-5 shadow-3xl rounded-xl font-bold  ' >
                        <img src={logo2.src} width={120} />
                        <div className=' text-xl font-bold text-center ' >
                             NIT Jalandhar
                        </div>


                    </div>
                    <div className='border-2 bg-white border-black  w-11/12 sm:w-[320px] h-48 flex flex-col justify-center items-center p-5 shadow-3xl rounded-xl font-bold  ' >
                        <img src={logo3.src} width={120} />
                        <div className=' text-xl font-bold text-center pt-3 ' >
                            Tech NITI
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collaborators