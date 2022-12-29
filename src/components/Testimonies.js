import TestimonyCard from "./TestimonyCard";

function Testimonies()
{
    return (
        <div className="bg-white flex h-screen w-full">
            {/* Left side */}
            <div className="bg-green h-full w-1/2 flex justify-center items-center ">

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
            <div className="h-full flex justify-center items-center w-1/2 border-2 border-black">
                <div className="w-3/4 h-3/4">
                    <div className="w-full flex items-center justify-around h-1/5 rounded-xl my-5">
                       <div className="h-4/5 w-3/5 bg-yellow rounded-xl flex justify-center text-3xl font-extrabold border-black border-2  shadow-3xl items-center">Registration</div>
                       <div className="h-4/5 w-1/5 bg-white rounded-xl flex justify-center text-3xl font-extrabold border-black border-2  shadow-3xl items-center">1200</div>
                    </div>
                    <div className="w-full flex items-center justify-around h-1/5 rounded-xl my-5">
                        <div className="h-4/5 w-1/5 bg-white rounded-xl flex justify-center text-3xl font-extrabold border-black border-2  shadow-3xl items-center">1200</div>
                        <div className="h-4/5 w-3/5 bg-orange rounded-xl flex justify-center text-3xl font-extrabold border-black border-2  shadow-3xl items-center">Beginner&apos;s Track</div>
                    </div>
                    <div className="w-full flex items-center justify-around h-1/5 rounded-xl my-5">
                        <div className="h-4/5 w-3/5 bg-blue rounded-xl flex justify-center text-3xl font-extrabold border-black border-2  shadow-3xl items-center">Main Track</div>
                        <div className="h-4/5 w-1/5 bg-white rounded-xl flex justify-center text-3xl font-extrabold border-black border-2 shadow-3xl items-center">1200</div>
                    </div>
                    <div className="w-full flex items-center justify-around h-1/5 rounded-xl my-5">
                        <div className="h-4/5 w-1/5 bg-white rounded-xl flex justify-center text-3xl font-extrabold border-black border-2  shadow-3xl items-center">1200</div>
                        <div className="h-4/5 w-3/5 bg-green rounded-xl flex justify-center text-3xl font-extrabold border-black border-2  shadow-3xl items-center">Beginner&apos;s Track</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonies;