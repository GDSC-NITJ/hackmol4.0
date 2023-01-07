import React, { useEffect, useLayoutEffect, useState , useRef} from 'react'
import JudgCard from './JudgCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';



function Judges() {

  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(4);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const swiperRef = useRef();

  React.useEffect(() => {
    

    function handleResize() {
      if(window.innerWidth < 720){
        setLength(1)
      }
      else if(window.innerWidth < 1125){
        setLength(2)
      }
      else if(window.innerWidth < 1490){
        setLength(3)
      }
      else{
        setLength(4)
      }

}

  handleResize()

    window.addEventListener('resize', handleResize)
  },[])


  return (

    <div className='  py-10 md:py-20 space-y-8 bg-yellow text-black  justify-items-center items-center '>
      <h2 className=' font-semibold text-5xl text-center w-full ' >
         Judges</h2>
        <div className=" max-w-[90%] relative left-[50%] -translate-x-[50%]   ">
      <Swiper
        slidesPerView={length}
        onSlideChange={handleSelect}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <JudgCard
            color='orange'
            />
        </SwiperSlide>
        <SwiperSlide>
          <JudgCard color='blue' />
        </SwiperSlide>
        <SwiperSlide>
          <JudgCard color='green' />
        </SwiperSlide>
        <SwiperSlide>
          <JudgCard color='purple' />
        </SwiperSlide>
        </Swiper>
                    

            
        </div>
        <div className="bg-blue w-[60%] rounded-lg relative left-[50%] -translate-x-[50%]  h-4 relative border shadow-3xl border-black">
                <div className="w-[98px] h-[60px] absolute -top-6 left-[50%] -translate-x-[50%] rounded-full flex bg-blue justify-center gap-3  items-center border border-black">
                    <button onClick={() => swiperRef.current.slidePrev() }>
                        <svg className="h-[25px] w-[25px] relative hover:right-1 hover:ease-out " width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 13L23 0.00961876V25.9904L0.5 13Z" fill="#070606" />
                        </svg>

                    </button>
                    <button  onClick={() => swiperRef.current.slideNext()}>
                      <svg 
                      className="h-[25px] w-[25px] relative hover:left-1 hover:ease-out"
                     width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.5 13L0 25.9904L0 0.00961876L22.5 13Z" fill="#070606" />
                    </svg>
                    </button>
                </div>
            </div>
    </div>
  )
}

export default Judges
