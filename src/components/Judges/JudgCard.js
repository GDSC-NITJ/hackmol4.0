import Image from "next/image"
import pic from "../../../public/images/judges/123.png"


function JudgCard({color}) {
    return (
        <div className=" w-80 m-2  mt-4  shadow-3xl rounded-[12px] border-2 border-black  " >
            <div className={` relative bg-${color} h-[300px]  rounded-t-[12px]  flex justify-center items-center  `} >
                {/* <div className="absolute font-extrabold rounded-full border-2 right-3 -top-1 rotate-[15deg] border-black bg-[#FFEB01] shadow-bordered-yellow  text-sm  px-4 z-50 ">MICROSOFT  </div> */}
                <div className=" font-bold text-lg text-white" >
                    To be Announced
                </div>
                {/* <img src={pic.src} className=" h-full w-full " /> */}
            </div>
            <div className="bg-white p-4 rounded-b-[12px] flex flex-col gap-3 ">
                {/* <div  className=" font-semibold " >
                To be Announced
                </div> */}
                <div className=" text-sm " >
                    Coming Soon.....
                </div>
                <div className={`text-sm  font-semibold text-orange ${color} underline underline-offset-4 `}   >
                    Stalk on LinkedIn
                </div>
            </div>

        </div>
    )
}

export default JudgCard