import React from 'react'
import RulesPoints from './RulesPoints'
import RulesImage from '../public/RulesImage.svg'
import BrushIcon from '@mui/icons-material/Brush';
import ImagesearchRollerIcon from '@mui/icons-material/ImagesearchRoller'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import CancelIcon from '@mui/icons-material/Cancel'

function RuleCard({title, description}) {
  return (

    <div id='rules'  className='rules flex flex-row justify-center w-full h-fit border-4 border-black' >
    { /*<div className='border-2  m-2 w-48 ' >*/}
    {/* <h1 className=' border-b-2 p-2 '>{title}</h1>
      <div className='p-2' >{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, error? </div> */}
    <div className="rules__left bg-yellow w-1/2 border-r-4 border-black">

      <div className="box1 shadow-3xl w-3/5 h-40 bg-white border-2 border-black">
          
      </div>
      <div className="box2 bg-slate-600 border-2 my-5 border-black relative left-1/3 mx-20 rounded-lg w-80 shadow-3xl">
        <div className="flex flex-row justify-end box2__top bg-black text-white">
          <BrushIcon className='mx-2 my-1'/>
          <ImagesearchRollerIcon className='mx-2 my-1'/>
          <AutoFixHighIcon className='mx-2 my-1'/>
          <ContentCopyIcon className='mx-2 my-1'/>
          <CancelIcon className='mx-2 my-1 fill-red-500'/>
        </div>
        <div className="box2__bottom border-black bg-white rounded-lg">
          <img src={RulesImage.src} alt="" className=' border-2rounded' />
        </div>

      </div>
      <div className="cover flex justify-between">
      <div className="box3 shadow-3xl w-60 h-80 bg-white border-2 rounded border-black relative bottom-24 -mb-20">
          {/* Internal designs of box3 */}
          <div className="box3__design flex flex-col justify-center ">
        <div className="yellow__bar h-3 border-1 rounded-3xl bg-yellow my-5 w-3/4 self-center"></div>
        <div className="gray__bar h-3 border-1 rounded-3xl bg-gray-300 my-1 w-3/4 self-center"></div> 
        <div className="gray__bar h-3 border-1 rounded-3xl bg-gray-300 my-1 w-5/6 self-center"></div> 
        <div className="gray__bar h-3 border-1 rounded-3xl bg-gray-300 my-1 w-3/4 self-center"></div> 
        <div className="yellow__bar h-3 border-1 rounded-3xl bg-yellow my-5 mt-10 w-3/4 self-center"></div>
        <div className="gray__bar h-3 border-1 rounded-3xl bg-gray-300 my-1 w-3/4 self-center"></div> 
        <div className="gray__bar h-3 border-1 rounded-3xl bg-gray-300 my-1 w-5/6 self-center"></div> 
        <div className="gray__bar h-3 border-1 rounded-3xl bg-gray-300 my-1 w-3/4 self-center"></div>
        </div>
        </div>
      <div className="box4 shadow-3xl w-60 h-40 flex flex-col justify-start bg-white border-2 rounded relative border-black mr-20 mb-24" >
          {/* Internal designs of box3 */}
          <div className="dark__bar h-1 border-1 rounded-3xl bg-black mt-6 my-2 w-5/6 ml-2"></div> 
          <div className="dark__bar h-1 border-1 rounded-3xl bg-black my-2 w-3/4 ml-2"></div>
          <div className="dark__bar h-1 border-1 rounded-3xl bg-black my-2 w-4/5 ml-2"></div>
          <div className="dark__bar h-1 border-1 rounded-3xl bg-black my-2 w-5/6 ml-2"></div> 
          <div className="dark__bar h-1 border-1 rounded-3xl bg-black my-2 w-3/4 ml-2"></div>
          <div className="dark__bar h-1 border-1 rounded-3xl bg-black my-2 w-4/5 ml-2"></div>  
      </div>
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
          <RulesPoints title="Rule 3" decription="Each team must contain between 1-5 members" />
          <RulesPoints title="Rule 4" decription="The Project must be build entirely during the Duration of the Hackathon" />
          <RulesPoints title="Rule 5" decription="Each participant must adhere to our Code of Conduct." />
          <RulesPoints title="Rule 6" decription="Hackers can work on any technical domain and idea of their choice." />
          <RulesPoints title="Rule 7" decription="For precise details head to here to our Devfolio Page." />
          <RulesPoints title="Rule 8" decription="Hackathon and Events are Open to and free for Student Developers." />
          <RulesPoints title="Rule 9" decription="Organizers Reserves the final right of decision." />
          <RulesPoints title="Rule 10" decription=" Finalist teams may be called for special presentation with the Judges" />
        </div>
      </div>
    </div>

  </div>
  )
}

export default RuleCard