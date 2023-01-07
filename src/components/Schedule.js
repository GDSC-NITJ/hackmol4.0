import React from 'react';
import star from '../../public/Vector.png'
const Schedule=()=>{
    return(
        <div id='schedule' className='flex w-full flex-col md:flex-row '>
            <div className='flex flex-col md:w-1/2 gap-2 h-[640px] sm:py-10 border-r-black border-r-[1.7px] justify-center items-center bg-lightblue'>
               
                <div className='flex justify-center  items-center font-bold text-[52px] text-white relative'> <img className='absolute top-[-27px] left-[-30px]' width={54} height={54}  src={star.src}/>DAY-1</div>
                <div className='flex flex-col bg-white  shadow-3xl font-medium w-11/12 sm:w-9/12  border-black border-[2px] rounded-[12px]'>
                    <div className='flex justify-between px-[10px] py-[20px]  border-b-black border-b-[2px]'><div>10:00 am</div><div>Introduction to Hackathon</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px]  border-b-black border-b-[2px]'><div>-- : -- am</div><div>Team Formations  </div></div>
                    <div className='flex justify-between  px-[10px] py-[20px]  border-b-black border-b-[2px]'><div>-- : -- am</div><div>Ideations Phase</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px]  border-b-black border-b-[2px]'><div>-- : -- am</div><div>Prototyping Phase Begins</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px]'><div>-- : -- am</div><div>Fun Events</div></div>
                </div>
            </div>
            <div className='flex flex-col sm:py-10 md:w-1/2 gap-2 h-[640px] border-r-black border-r-[1.7px] justify-center items-center'>
               
            <div className='flex justify-center  items-center font-bold text-[52px] relative'> <img className='absolute top-[-27px] left-[-30px]' width={58} height={58}  src={star.src}/>DAY-2</div>
                <div className='flex flex-col bg-white shadow-3xl font-medium w-11/12 sm:w-9/12 border-black border-[2px] rounded-[12px]'>
                    <div className='flex justify-between  px-[10px] py-[20px]  border-b-black border-b-[2px]'><div>10:00 am</div><div>Evaluation</div></div>
                    <div className='flex justify-between px-[10px] py-[20px] border-b-black border-b-[2px]'><div>-- : -- am</div><div>Devfolio Submissions</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px] border-b-black border-b-[2px]'><div>-- : -- am</div><div>Mentors&apos; Judging</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px] border-b-black border-b-[2px]'><div>-- : -- am</div><div>Final Evaluation</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px] '><div>-- : -- am</div><div>Closing Ceremony</div></div>
                </div>
            </div>
            
        </div>
    )
}

export default Schedule;