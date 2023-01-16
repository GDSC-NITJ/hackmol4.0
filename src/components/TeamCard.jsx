import React from 'react'
import pic from '../../public/Team/judge.png'

function TeamCard() {
  return (
    <div  className='flex flex-col shadow-3xl w-11/12 sm:w-[275px] rounded-xl border-2 border-black  bg-white border-3 ' >
                 <div className={` relative bg-white h-[250px]  rounded-t-[12px]   `} >

                <img src={pic.src} className=" h-full w-full " />
            </div>
            {/* name */}
            <div className="bg-white p-4 rounded-b-[12px] flex flex-col gap-3 ">
                <div  className=" font-semibold " >
                To be Announced
                    </div>
                <div className=" text-sm " >
                    Coming Soon.....    
                    </div>
                    </div>
    </div>
  )
}

export default TeamCard