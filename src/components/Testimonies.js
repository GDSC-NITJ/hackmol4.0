import TestimonyCard from "./TestimonyCard";

function Testimonies()
{
    return (
        <div className="bg-white flex h-screen w-full">
            {/* Left side */}
            <div className="bg-[#94E95D] h-full w-1/2 flex justify-center items-center ">

                <div className="flex flex-col w-8/12 gap-8 " >
                        <div className=" w-full flex justify-end" >
                            <TestimonyCard/>
                        </div>
                        <div className="w-full flex">
                            <TestimonyCard/>
                        </div>
                </div>
            </div>


            {/*Right side*/}
            <div className="h-full flex flex-col justify-center items-center w-1/2 border-2 border-black">
            <div className="text-5xl mb-7">Previous year reviews</div>
                <div className="w-2/4 h-2/4">
                    <div className="w-full flex items-center justify-around h-1/5 rounded-xl my-5">
                       <div className="h-4/5 w-3/5 bg-[#FFEB01] rounded-xl flex justify-center text-2xl font-black border-black border-2  shadow-3xl items-center">Registration</div>
                       <div className="h-4/5 w-1/5 bg-white rounded-xl flex justify-center text-2xl font-black border-black border-2  shadow-3xl items-center">1200</div>
                    </div>
                    <div className="w-full flex items-center justify-around h-1/5 rounded-xl my-5">
                        <div className="h-4/5 w-1/5 bg-white rounded-xl flex justify-center text-2xl font-black border-black border-2  shadow-3xl items-center">1200</div>
                        <div className="h-4/5 w-3/5 bg-[#F96300] rounded-xl flex justify-center text-2xl font-black border-black border-2  shadow-3xl items-center">Beginner&apos;s Track</div>
                    </div>
                    <div className="w-full flex items-center justify-around h-1/5 rounded-xl my-5">
                        <div className="h-4/5 w-3/5 bg-[#296CF2] rounded-xl flex justify-center text-2xl font-black border-black border-2  shadow-3xl items-center">Main Track</div>
                        <div className="h-4/5 w-1/5 bg-white rounded-xl flex justify-center text-2xl font-black border-black border-2 shadow-3xl items-center">1200</div>
                    </div>
                    <div className="w-full flex items-center justify-around h-1/5 rounded-xl my-5">
                        <div className="h-4/5 w-1/5 bg-white rounded-xl flex justify-center text-2xl font-black border-black border-2  shadow-3xl items-center">1200</div>
                        <div className="h-4/5 w-3/5 bg-[#94E95D] rounded-xl flex justify-center text-2xl font-black border-black border-2  shadow-3xl items-center">Beginner&apos;s Track</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonies;