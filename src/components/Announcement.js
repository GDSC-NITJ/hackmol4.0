import React from "react";

const Announcement = () => {
    return (

        <div className="flex flex-col justify-center items-center w-[100%] h-[380px] bg-lighgreen px-[18%] py-[17%] border border-t-black border-t-2">
            <div className='flex flex-col justify-center items-center p-[50px]'>
                <div>
                    <h1 className="font-bold text-[280%]">Announcement</h1>
                </div>
                <div className="font-semibold text-center text-[120%]">
                    Whether you need more balance, flexibility, or just a different gig, we make it easier to chart a new path. You don't have to be a tech expert or even understand how to start a business. You just gotta take what you know and sell it.
                </div>
            </div>
        </div>
    );
}

export default Announcement;