function BelowSponsers()
{
    return (
        <div className="bg-white flex h-screen w-full">
            {/* Left side */}
            <div className="bg-green-200 h-full w-1/2"></div>


            {/*Right side*/}
            <div className="h-full flex justify-center items-center w-1/2 border-2 border-black">
                <div className="w-3/4 h-3/4">
                    <div className="w-full flex items-center justify-around h-1/5 rounded-xl my-5">
                       <div className="h-4/5 w-3/5 bg-yellow-300 rounded-xl flex justify-center text-3xl font-extrabold border-black shadow-5xl items-center">Registration</div>
                       <div className="h-4/5 w-1/5 bg-white rounded-xl flex justify-center text-3xl font-extrabold border-black shadow-5xl items-center">1200</div>
                    </div>
                    <div className="w-full flex items-center justify-around h-1/5 rounded-xl my-5">
                        <div className="h-4/5 w-1/5 bg-white rounded-xl flex justify-center text-3xl font-extrabold border-black shadow-5xl items-center">1200</div>
                        <div className="h-4/5 w-3/5 bg-violet-500 rounded-xl flex justify-center text-3xl font-extrabold border-black shadow-5xl items-center">Beginner's Track</div>
                    </div>
                    <div className="w-full flex items-center justify-around h-1/5 rounded-xl my-5">
                        <div className="h-4/5 w-3/5 bg-blue-500 rounded-xl flex justify-center text-3xl font-extrabold border-black shadow-5xl items-center">Main Track</div>
                        <div className="h-4/5 w-1/5 bg-white rounded-xl flex justify-center text-3xl font-extrabold border-black shadow-5xl items-center">1200</div>
                    </div>
                    <div className="w-full flex items-center justify-around h-1/5 rounded-xl my-5">
                        <div className="h-4/5 w-1/5 bg-white rounded-xl flex justify-center text-3xl font-extrabold border-black shadow-5xl items-center">1200</div>
                        <div className="h-4/5 w-3/5 bg-green-300 rounded-xl flex justify-center text-3xl font-extrabold border-black shadow-5xl items-center">Beginner's Track</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BelowSponsers;