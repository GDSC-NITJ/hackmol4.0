import React from "react";

const Announcement = () => {
    return (

        <div className="flex flex-col justify-center items-center w-full   bg-green  border border-t-black border-t-2">
            <div className='flex flex-col justify-center items-center py-20'>
                <div>
                    <h1 className="justify-center h-1/2 text-black  text-3xl md:text-4xl font-extrabold items-center pb-4 text-center ">Announcement</h1>
                </div>
                <div className="font-semibold sm:text-center border-2 border-black p-10 shadow-3xl bg-white rounded-xl w-11/12 sm:w-9/12 text-lg ">
                To be eligible for fresher&apos;strack, all the members of team should be from first year of Degree/ All school students are also eligible for hackathon

Opting for fresher&apos;strack is a choice, instead of compulsion so if your team wish to participate in main track you can, we&apos;ll roll out forms for this choice during hackathon. 

<span className="hidden sm:inline" >
Folks participating in fresher&apos;strack can start their project before hackathon period. 
    
    You can use any open source library/module/framework to build your hack
    
    You can build a hack out of any Idea, we will not provide any Idea, There are no restrictions on Ideas
</span>


                </div>
            </div>
        </div>
    );
}

export default Announcement;