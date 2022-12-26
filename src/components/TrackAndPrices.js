import React from 'react'
import arrow from "../public/arrow.svg";

function TrackAndPrices() {

  const [state, setState] = React.useState(0); 
  const trackArray = [{ title: 'Track 1 - Freshers', description: ' Create and customize your storefront with our all-in-one platform or choose to use your personal site instead. With Zapier, you can seamlessly connect your Gumroad account to thousands of apps in your current stack.' }, { title: 'Track 2 - Beginner', description: ' Create and customize your storefront with our all-in-one platform or choose to use your personal site instead. With Zapier, you can seamlessly connect your Gumroad account to thousands of apps in your current stack.' }, { title: 'Track-3 Main', description: ' Create and customize your storefront with our all-in-one platform or choose to use your personal site instead. With Zapier, you can seamlessly connect your Gumroad account to thousands of apps in your current stack.' }]
  

  return (
    <div className='flex lg:flex-row flex-col  border border-2 border-black'>
      <div className='flex flex-row justify-center py-[84px] px-[83px] bg-[#FFEB01] p-8 w-[100%] h-[60%] border border-r-black border-r-[1.69312px] items-start'>
        <div className='flex flex-col justify-center items-center p-0 gap-[24px]  w-[100%] h-[80%] left-[119.49px] top-[191px]'>

          <div className='flex justify-center items-center p-0   w-[398px]  h-[64px]  gap-[40px]  max-sm:gap-[15px]'>
            <div className='flex flex-col justify-center items-center border border-black bg-[#94E95D] rounded-[12px] px-[40px] py-[20px] gap-[20px] w-[294px]  h-[64px] border border-black border-[1px] shadow-[5px_5px_0px_#000000]'>

              <h1 className='font-bold text-[19px]'>Fresher’s Track</h1>
            </div>
            <button className='flex flex-col justify-center items-center border border-black bg-[#FFFFFF] rounded-[12px] px-[40px] py-[20px] gap-[20px] w-[64px] h-[60px]  border border-black border-[0.820513px] shadow-[4.10256px_4.10256px_0px_#000000]' onClick={() => setState(0)}>

              <img className='w-[30px] h-[30px]' src={arrow.src} ></img>
            </button>

          </div>
          <div className='flex justify-center items-center p-0   w-[398px]  h-[64px]  gap-[40px] max-sm:gap-[15px]'>
            <div className='flex flex-col justify-center items-center border border-black bg-[#F96300] rounded-[12px] px-[40px] py-[20px] gap-[20px] w-[294px] h-[64px] border border-black border-[1px] shadow-[5px_5px_0px_#000000]'>

              <h1 className='font-bold text-[19px]'>Beginner’s Track</h1>
            </div>
            <button className='flex flex-col justify-center items-center border border-black bg-[#FFFFFF] rounded-[12px] px-[40px] py-[20px] gap-[20px] w-[64px] h-[60px] border border-black border-[0.820513px] shadow-[4.10256px_4.10256px_0px_#000000]' onClick={() => setState(1)}>

              <img className='w-[32px] h-[12px]' src={arrow.src}></img>
            </button>

          </div>
          <div className='flex justify-center items-center p-0   w-[398px]  h-[64px]  gap-[40px] max-sm:gap-[15px]'>
            <div className='flex flex-col justify-center items-center border border-black bg-[#296CF2] rounded-[12px] px-[40px] py-[20px] gap-[20px] w-[294px] h-[64px] border border-black border-[1px] shadow-[5px_5px_0px_#000000]'>

              <h1 className='font-bold text-[19px]'>Main Track</h1>
            </div>
            <button className='flex flex-col justify-center items-center border border-black bg-[#FFFFFF] rounded-[12px] px-[40px] py-[20px] gap-[20px] w-[64px] h-[60px] border border-black border-[0.820513px] shadow-[4.10256px_4.10256px_0px_#000000]' onClick={() => setState(2)}>

              <img className='w-[32px] h-[12px]' src={arrow.src}></img>
            </button>

          </div>

        </div>
      </div>


      {/* right portion of this section */}
      <div className='flex  flex-row bg-white items-center px-[55px] py-[8px] '>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col font-bold text-[200%]  '>
            {trackArray[state].title}
          </div>
          <div className='flex font-semibold text-[18px] text-center '>
            {trackArray[state].description}
          </div>
        </div>
      </div>
    </div>

  )
}

export default TrackAndPrices