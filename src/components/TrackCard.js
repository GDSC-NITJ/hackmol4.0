import React from 'react';

const TrackCard=({trackTitle,trackDesc})=>{
   return( 
        <div className='flex flex-col justify-center items-center border-2 shadow-2xl m-2 w-48 px-2 py-2'>
        <h1 className='font-bold'>{trackTitle}</h1>
        <p>{trackDesc}</p>
        

        <button className='flex flex-row border-2  shadow-2xl w-39'>
           <h1 className='flex flex-row'> Learn More </h1>
            < svg className='none ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </button>
        <div className='flex'>
            <div className='border-2 mx-2 my-1'>tag</div>
            <div className='border-2 mx-2 my-1'>tag</div>
            <div className='border-2 mx-2 my-1'>tag</div>
        </div>
    
    </div>
   );
}

export default TrackCard;