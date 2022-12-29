import React from 'react'
import JudgCard from './JudgCard'

function Judges() {
  return (
    <div className=' flex flex-col gap-12  bg-yellow text-black h-screen flex justify-center items-center '>
      <h2 className=' font-semibold text-5xl ' > Judges</h2>
        <div className="central-box flex gap-16 justify-center p-34 w-auto">
                    <JudgCard/>
                    <JudgCard/>
                    <JudgCard/>
            
        </div>
        <div className="bg-blue w-[60%] mb-20 h-4 relative border shadow-[4.10256px_4.10256px_0px_#000000] border-black">
            <div className="w-[98px] h-[70px] absolute -top-6 left-[43%] rounded-full grid grid-cols-2 bg-blue justify-items-center items-center border border-black">
                <button >
                <svg className="h-[26px] w-[26px] hover:mr-2" width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 13L23 0.00961876V25.9904L0.5 13Z" fill="#070606"/>
</svg>

                </button>
                <button className="h-[30px] w-[30px] hover:ml-2" ><svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 13L0 25.9904L0 0.00961876L22.5 13Z" fill="#070606"/>
</svg>
</button>
            </div>
        </div>
    </div>
  )
}

export default Judges
