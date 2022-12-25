import React from 'react'
import Image from 'next/image'
import TrackCard from './TrackCard'
import goldBar from '../images/gold_bar.png';
import silverBar from '../images/silver_bar.png';
import bronzeBar from '../images/bronze_bar.png';
function TrackAndPrices() {
  return (
    
        <div className='flex ' >
            <TrackCard trackTitle="Fresher Track" trackDesc="Lorem ipsum dolor sit ame

Lorem ipsum dolor sit amet"/>

            <div className='flex '>
                <div className='flex justify-stretch items-stretch rounded-full truncate mx-5 my-5'><Image src={silverBar.src} width={100} height={100}/></div>
                <div className='flex justify-stretch items-stretch rounded-full truncate mx-5 my-5'><Image src={bronzeBar.src} width={100} height={100}/></div>
                <div className='flex justify-stretch items-stretch rounded-full truncate mx-5 my-5' ><Image src={goldBar.src} width={100} height={100} /></div>
            </div>
          
        </div>
  )
}

export default TrackAndPrices