import React from 'react'
import TeamCard from './TeamCard'

function Team() {
    return (

        <div className="flex flex-col justify-center items-center w-full   bg-green  border border-t-black border-t-2">
            <div className='flex flex-col justify-center items-center py-20'>
                <div>
                    <h1 className="justify-center h-1/2 text-black  text-3xl md:text-4xl font-extrabold items-center pb-6 text-center ">Team</h1>
                </div>
                <div className='flex w-full flex-wrap justify-\ items-center gap-8 '>
                  <TeamCard />
                </div>

            </div>
        </div>

    )
}

export default Team