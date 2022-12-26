import React from 'react'
import RulesPoints from './RulesPoints'
import Rules_image from '../images/Rules_image.svg'
// import '../styles/global.css'

function RuleCard({ title, description }) {
  return (
    <div className='rules flex flex-row justify-center w-screen h-fit' >
      { /*<div className='border-2  m-2 w-48 ' >*/}
      {/* <h1 className=' border-b-2 p-2 '>{title}</h1>
        <div className='p-2' >{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, error? </div> */}
      <div className="rules__left bg-[#FFEB01] w-1/2">
        <div className="box1 shadow-3xl w-60 h-40 my-5 bg-white border-2 border-black">

        </div>
        <div className="box2 border-2 border-black rounded-lg w-80 absolute left-3/8 right-1/8 shadow-3xl">
          <div className="box2__top bg-black text-white">
            this is header
          </div>
          <div className="box2__bottom border-black bg-white rounded-lg">
            <img src={Rules_image.src} alt="" className=' border-2rounded' />
          </div>

        </div>
        <div className="box3 shadow-3xl w-60 h-40 my-5 bg-green-600 border-2 border-black">
            this is box3
        </div>
      </div>
      <div className="rules__right w-1/2 bg-white-400 ">
        <div className="rules__header p-10 flex flex-col">
          <h1 className='p-4 font-bold text-5xl tracking-wider'>RULES</h1>
          <p className='p-4 rules__para font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nihil pariatur nostrum. Deserunt nisi quam distinctio voluptatem hic, nulla quae, facere saepe expedita qui ratione. Earum modi praesentium dolor in doloribus quo.
          </p>
          <div className="rules__points p-4">
            <RulesPoints title="Team Members" decription="Description 3" />
            <RulesPoints title="Submission details" decription="Upload on github with ppt" />
            <RulesPoints title="Rule 3" decription="Description 3" />
            <RulesPoints title="Rule 4" decription="Description 4" />
            <RulesPoints title="Rule 5" decription="Description 5" />
            <RulesPoints title="Rule 6" decription="Description 6" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default RuleCard