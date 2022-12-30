import React from 'react';
import star from '../public/Vector.png'
const Schedule=()=>{
    return(
        <div className='flex w-full flex-col md:flex-row '>
            <div className='flex flex-col md:w-1/2 gap-2 h-[640px] sm:py-10 border-r-black border-r-[1.7px] justify-center items-center bg-lightblue'>
               
                <div className='flex justify-center  items-center font-bold text-[52px] text-white relative'> <img className='absolute top-[-27px] left-[-30px]' width={54} height={54}  src={star.src}/>DAY-1</div>
                <div className='flex flex-col bg-white  shadow-3xl font-medium w-11/12 sm:w-9/12  border-black border-[2px] rounded-[12px]'>
                    <div className='flex justify-between px-[10px] py-[20px]  border-b-black border-b-[2px]'><div>10:00 am</div><div>Hackathon registration starts</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px]  border-b-black border-b-[2px]'><div>10:00 am</div><div>Hackathon registration starts</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px]  border-b-black border-b-[2px]'><div>10:00 am</div><div>Hackathon registration starts</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px]  border-b-black border-b-[2px]'><div>10:00 am</div><div>Hackathon registration starts</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px]  border-b-black border-b-[2px]'><div>10:00 am</div><div>Hackathon     registration starts</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px]'><div>10:00 am</div><div>Hackathon     registration starts</div></div>
                </div>
            </div>
            <div className='flex flex-col sm:py-10 md:w-1/2 gap-2 h-[640px] border-r-black border-r-[1.7px] justify-center items-center'>
               
            <div className='flex justify-center  items-center font-bold text-[52px] relative'> <img className='absolute top-[-27px] left-[-30px]' width={58} height={58}  src={star.src}/>DAY-2</div>
                <div className='flex flex-col bg-white shadow-3xl font-medium w-11/12 sm:w-9/12 border-black border-[2px] rounded-[12px]'>
                    <div className='flex justify-between px-[10px] py-[20px] border-b-black border-b-[2px]'><div>10:00 am</div><div>Hackathon registration starts</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px] border-b-black border-b-[2px]'><div>10:00 am</div><div>Hackathon registration starts</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px] border-b-black border-b-[2px]'><div>10:00 am</div><div>Hackathon registration starts</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px] border-b-black border-b-[2px]'><div>10:00 am</div><div>Hackathon registration starts</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px] border-b-black border-b-[2px]'><div>10:00 am</div><div>Hackathon     registration starts</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px]'><div>10:00 am</div><div>Hackathon     registration starts</div></div>
                </div>
            </div>
            
        </div>
    )
}

export default Schedule;