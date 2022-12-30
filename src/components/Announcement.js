import React from "react";

const Announcement = () => {
    return (

        <div className="flex flex-col justify-center items-center w-full   bg-green  border border-t-black border-t-2">
            <div className='flex flex-col justify-center items-center py-20'>
                <div>
                    <h1 className="justify-center h-1/2 text-black  text-3xl md:text-4xl font-extrabold items-center pb-4 text-center ">Announcement</h1>
                </div>
                <div className="font-semibold text-center border-2 border-black p-10 shadow-3xl bg-white rounded-xl w-11/12 sm:w-9/12 text-lg ">
                    Whether you need more balance, flexibility, or just a different gig, we make it easier to chart a new path. You don&apos;t have to be a tech expert or even understand how to start a business. You just gotta take what you know and sell it.
                    Whether you need more balance, flexibility, or just a different gig, we make it easier to chart a new path. You don&apos;t have to be a tech expert or even understand how to start a business. You just gotta take what you know and sell it.
                </div>
            </div>
        </div>
    );
}

export default Announcement;