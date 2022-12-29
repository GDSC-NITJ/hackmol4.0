import TestimonyCard from "./TestimonyCard";

function Testimonies()
{
    return (
        <div className="bg-white flex  flex-col md:flex-row  h-full  w-full">
            {/* Left side */}
            <div className="bg-green h-full md:w-1/2 flex justify-center items-center ">

                <div className="flex flex-col py-10 md:py-20 w-11/12 sm:w-8/12 gap-8 " >
                <div className="  md:hidden  block "><h1 className="font-bold text-[33px] text-center" >Previous year reviews</h1></div>
                        <div className=" w-full flex justify-end" >
                            <TestimonyCard/>
                        </div>
                        <div className="w-full flex">
                            <TestimonyCard/>
                        </div>
                </div>
            </div>


            {/*Right side*/}
            <div className="flex flex-col justify-center items-center bg-green md:w-1/2 md:border-2 md:border-black md:bg-white h-ful ">
            <div className=" mb-6 hidden  md:block "><h1 className="font-bold text-[33px] text-center" >Previous year reviews</h1></div>
                <div className=" bg-white rounded-lg shadow-3xl border-2 border-black py-3  md:p-0 md:border-none md:shadow-none  w-11/12 sm:w-3/4 mb-10  md:mb-0 ">
                    <div className="w-full flex items-center justify-around h-1/5 rounded-xl my-3">
                       <div className="h-4/5 w-3/5 bg-[#FFEB01] rounded-xl flex justify-center text-lg font-bold px-5 py-5 border-black border-2  shadow-3xl items-center">Registration</div>
                       <div className="h-4/5 w-1/5 bg-white rounded-xl flex justify-center text-lg font-bold px-5 py-5 border-black border-2  shadow-3xl items-center">1200</div>
                    </div>
                    <div className="w-full flex items-center justify-around h-1/5 rounded-xl my-3">
                        <div className="h-4/5 w-1/5 bg-white rounded-xl flex justify-center text-lg font-bold px-5 py-5 border-black border-2  shadow-3xl items-center">1200</div>
                        <div className="h-4/5 w-3/5 bg-[#F96300] rounded-xl flex justify-center text-lg font-bold px-5 py-5 border-black border-2  shadow-3xl items-center">Beginner&apos;s Track</div>
                    </div>
                    <div className="w-full flex items-center justify-around h-1/5 rounded-xl my-3">
                        <div className="h-4/5 w-3/5 bg-[#296CF2] rounded-xl flex justify-center text-lg font-bold px-5 py-5 border-black border-2  shadow-3xl items-center">Main Track</div>
                        <div className="h-4/5 w-1/5 bg-white rounded-xl flex justify-center text-lg font-bold px-5 py-5 border-black border-2 shadow-3xl items-center">1200</div>
                    </div>
                    <div className="w-full flex items-center justify-around h-1/5 rounded-xl my-3">
                        <div className="h-4/5 w-1/5 bg-white rounded-xl flex justify-center text-lg font-bold px-5 py-5 border-black border-2  shadow-3xl items-center">1200</div>
                        <div className="h-4/5 w-3/5 bg-[#94E95D] rounded-xl flex justify-center text-lg font-bold px-5 py-5 border-black border-2  shadow-3xl items-center">Beginner&apos;s Track</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonies;