import React from 'react';

const Schedule=()=>{
    return(
        <div className='flex w-screen'>
            <div className='flex w-1/2 bg-black h-[640px] justify-center items-center'>
                <div className='flex justify-center items-center text-white w-[420px] h-[420px] border border-white border-[3px]'>
                    <div>
                        <h1 className='font-bold text-[23px]'>Day 1 schedule - TBD</h1>
                    </div>
                </div>
            </div>
            <div className='flex w-1/2 bg-darkblue h-[640px] justify-center items-center'>
                <div className='flex justify-center items-center w-[420px] h-[420px] border border-black border-[3px]'>
                    <div>
                        <h1 className='font-bold text-[23px]'>Day 2 schedule - TBD</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule;