import React from 'react'

function TimeLine2() {
  return (
    <div className='py-10 md:py-20 border-y-2 border-black '>
<h1 className='text-center  text-4xl font-bold'>TimeLine</h1>
      <div className=" flex w-full justify-center items-center ">
        <div
          className="flex flex-col md:grid grid-cols-9 w-11/12 p-2 text-blue-50"
        >

          <div className="flex flex-row-reverse md:contents">
            <div
              className="bg-blue  shadow-3xl col-start-1 col-end-5   rounded-xl my-4 ml-auto border border-black"
            >
              <h3 className="font-semibold text-lg mb-1 px-4 py-2 border-b border-black ">Lorem ipsum</h3>
              <p className="leading-tight text-justify px-4 py-2 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                quaerat?
              </p>
            </div>
            <div className="col-start-5 flex items-end  col-end-6 md:mx-auto relative mr-4 sm:mr-10">
              <div className="h-1/2 w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-blue pointer-events-none"></div>
              </div>
              <div
                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue shadow"
              ></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5   col-end-6 mr-4 sm:mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-blue pointer-events-none"></div>
              </div>
              <div
                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue shadow"
              ></div>
            </div>
            <div
              className="bg-blue shadow-3xl col-start-6 col-end-10 rounded-xl my-4 mr-auto border border-black"
            >
              <h3 className="font-semibold text-lg mb-1  px-4 py-2 border-b border-black">Lorem ipsum</h3>
              <p className="leading-tight text-justify px-4 py-2 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Vitae, facilis.
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse md:contents">
            <div
              className="bg-blue shadow-3xl col-start-1 col-end-5  rounded-xl my-4 ml-auto border border-black"
            >
              <h3 className="font-semibold text-lg mb-1  px-4 py-2 border-b border-black">Lorem ipsum</h3>
              <p className="leading-tight text-justify px-4 py-2 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                quaerat?
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-4 sm:mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-blue pointer-events-none"></div>
              </div>
              <div
                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue shadow"
              ></div>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="col-start-5   col-end-6 mr-4 sm:mr-10 md:mx-auto relative">
              <div className="h-1/2 w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-blue pointer-events-none"></div>
              </div>
              <div
                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue shadow"
              ></div>
            </div>
            <div
              className="bg-blue shadow-3xl col-start-6 col-end-10  rounded-xl my-4 mr-auto  border border-black "
            >
              <h3 className="font-semibold text-lg mb-1  px-4 py-2 border-b border-black">Lorem ipsum</h3>
              <p className="leading-tight text-justify px-4 py-2 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Vitae, facilis.
              </p>
            </div>
          </div>

          {/* <div className="flex flex-row-reverse md:contents">
            <div
              className="bg-blue shadow-3xl col-start-1 col-end-5  rounded-xl my-4 ml-auto shadow-md"
            >
              <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
              <p className="leading-tight text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                quaerat?
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-4 sm:mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-blue pointer-events-none"></div>
              </div>
              <div
                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue shadow"
              ></div>
            </div>
          </div> */}

      




        
        </div>
      </div>
    </div>
  )
}

export default TimeLine2