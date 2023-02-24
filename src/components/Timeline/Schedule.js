import React from 'react';
import star from '../../../public/Vector.png'
const Schedule = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div id='schedule' className='flex w-full flex-col justify-center items-center flex-wrap bg-white'>
            <h1 className='font-bold text-4xl py-5'>Schedule</h1>
            <div className="w-10/12">
                <ul
                    className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                    role="tablist"
                >
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                            className={
                                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                (openTab === 1
                                    ? "text-white bg-[#E85325]"
                                    : "text-black bg-[#FEEDE3]")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(1);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                        >
                            <i className="fas fa-space-shuttle text-base mr-1"></i> DAY 1
                        </a>
                    </li>
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                            className={
                                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                (openTab === 2
                                    ? "text-white bg-[#E85325]"
                                    : "text-black bg-[#FEEDE3]")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist"
                        >
                            <i className="fas fa-cog text-base mr-1"></i>  DAY 2
                        </a>
                    </li>
                    {/* <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                            className={
                                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                (openTab === 3
                                    ? "text-white bg-" + color + "-600"
                                    : "text-" + color + "-600 bg-white")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(3);
                            }}
                            data-toggle="tab"
                            href="#link3"
                            role="tablist"
                        >
                            <i className="fas fa-briefcase text-base mr-1"></i>  Options
                        </a>
                    </li> */}
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded">
                    <div className="tab-content tab-space font-bold">
                        <div className={openTab === 1 ? "block flex justify-between mb-5 bg-white " : "hidden"} id="link1">
                            <div className='px-4 py-5 flex flex-[0.12] shrink-0 justify-end  bg-[#FEEDE3]'>
                                08:00 AM




                            </div>
                            <div className='flex-[0.86] border-l-2 border-amber-700 border-black px-2 py-5  bg-[#FEEDE3]'>
                                Check-In
                            </div>
                        </div>
                        <div className={openTab === 1 ? "block flex mb-5 bg-white justify-between" : "hidden"} id="link1">
                            <div className='px-4 py-5 flex flex-[0.12] shrink-0 justify-end  bg-[#FEEDE3]'>
                                09:30 AM




                            </div>
                            <div className='flex-[0.86] border-l-2 border-amber-700 border-black px-2 py-5  bg-[#FEEDE3]'>
                                Opening Ceremony
                            </div>
                        </div>
                        <div className={openTab === 1 ? "block flex mb-5 bg-white justify-between" : "hidden"} id="link1">
                            <div className='px-4 py-5  flex flex-[0.12] shrink-0 justify-end  bg-[#FEEDE3]'>
                                10:30 AM




                            </div>
                            <div className='flex-[0.86] border-l-2 border-amber-700 border-black px-2 py-5 bg-[#FEEDE3]'>
                                Hacking Begins
                            </div>
                        </div>
                        <div className={openTab === 1 ? "block flex mb-5 bg-white justify-between" : "hidden"} id="link1">
                            <div className='px-4 py-5  flex flex-[0.12] shrink-0 justify-end bg-[#FEEDE3]'>
                                01:00 PM




                            </div>
                            <div className='flex-[0.86] border-l-2 border-amber-700 border-black px-2 py-5  bg-[#FEEDE3]'>
                                Lunch Break
                            </div>
                        </div>
                        <div className={openTab === 1 ? "block flex mb-5 bg-white justify-between " : "hidden"} id="link1">
                            <div className='px-4 py-5 flex flex-[0.12] shrink-0 justify-end  bg-[#FEEDE3]'>
                                04:00 PM




                            </div>
                            <div className='flex-[0.86] border-l-2 border-amber-700 border-black px-2 py-5  bg-[#FEEDE3]'>
                                Mentor Connect
                            </div>
                        </div>
                        <div className={openTab === 1 ? "block flex mb-5 bg-white justify-between" : "hidden"} id="link1">
                            <div className='px-4 py-5  flex flex-[0.12] shrink-0 justify-end  bg-[#FEEDE3]'>
                                06:30 PM




                            </div>
                            <div className='flex-[0.86] border-l-2 border-amber-700 border-black px-2 py-5  bg-[#FEEDE3]'>
                                Mini Event-I
                            </div>
                        </div>

                        <div className={openTab === 1 ? "block flex mb-5 bg-white justify-between" : "hidden"} id="link1">
                            <div className='px-4 py-5  flex flex-[0.12] shrink-0 justify-end  bg-[#FEEDE3]'>
                                8:00 PM




                            </div>
                            <div className='flex-[0.86] border-l-2 border-amber-700 border-black px-2 py-5  bg-[#FEEDE3]'>
                                Dinner
                            </div>
                        </div>

                        <div className={openTab === 2 ? "block flex mb-5 bg-white justify-between" : "hidden"} id="link1">
                            <div className='px-4 py-5  flex flex-[0.12] shrink-0 justify-end  bg-[#FEEDE3]'>
                                12:30 AM




                            </div>
                            <div className='flex-[0.86] border-l-2 border-amber-700 border-black px-2 py-5  bg-[#FEEDE3]'>
                                Mini Event - II
                            </div>
                        </div>
        
                            <div className={openTab === 2 ? "block flex mb-5 bg-white justify-between" : "hidden"} id="link1">
                                <div className='px-4 py-5  flex flex-[0.12] shrink-0 justify-end  bg-[#FEEDE3]'>
                                    09:30 AM




                                </div>
                                <div className='flex-[0.86] border-l-2 border-amber-700 border-black px-2 py-5  bg-[#FEEDE3]'>
                                    Mentor Connect - II
                                </div>
                            </div>
                            <div className={openTab === 2 ? "block flex mb-5 bg-white justify-between" : "hidden"} id="link1">
                                <div className='px-4 py-5  flex flex-[0.12] shrink-0 justify-end  bg-[#FEEDE3]'>
                                    10:30 AM




                                </div>
                                <div className='flex-[0.86] border-l-2 border-amber-700 border-black px-2 py-5  bg-[#FEEDE3]'>
                                    Hacking Ends
                                </div>
                            </div>
                            <div className={openTab === 2 ? "block flex mb-5 bg-white justify-between" : "hidden"} id="link1">
                                <div className='px-4 py-5  flex flex-[0.12] shrink-0 justify-end  bg-[#FEEDE3]'>
                                    12:00 PM




                                </div>
                                <div className='flex-[0.86] border-l-2 border-amber-700 border-black px-2 py-5  bg-[#FEEDE3]'>
                                    Closing Ceremony
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

</div>
        
            )
}

            export default Schedule;
