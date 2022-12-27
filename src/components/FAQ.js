import React, { useState } from "react";
import back from "../public/back.svg"
import next from "../public/next.svg"

let qa = [
    {
        ques: "What do you expect from this hackathon? Demo Question 1",
        ans: "Anything which everyone wants. Demo Answer 1"
    },
    {
        ques: "This is question 2 and 2 is my favourite number you know?",
        ans: "No, I dont care, demo answer 2"
    },
    {
        ques: "This is question 3",
        ans: "This is answer 3"
    },
    {
        ques: "This is question 4",
        ans: "This is answer 4"
    },
    {
        ques: "This is question 5",
        ans: "This is answer 5"
    }
]

let FAQ =  function(){
    const [index, setIndex] = useState(()=>{
        return 0;
    })

    let FAQPositionerIncrease = () =>{
        if(index == qa.length-1){
            setIndex(0);
        }
        else{
            setIndex(prevIndex => prevIndex+1);
        }
    }

    let FAQPositionerDecrease = () =>{
        if(index == 0){
            setIndex(qa.length-1);
        }
        else{
            setIndex(prevIndex => prevIndex-1)
        }
    }

    return(
        <div className="bg-[#F96300] grid grid-rows-4 justify-items-center items-center w-full h-screen">
        <h1 className="self-end text-5xl"><b>FAQs</b></h1>
        <div className="bg-[#FFEB01] shadow-[4.10256px_4.10256px_0px_#000000] border border-black w-[60%] h-4/5 row-span-2 grid grid-rows-3 justify-items-center items-center">
            <h2 className="p-4 mt-16 text-2xl text-center"><b>{qa[index].ques}</b></h2>
            <h3 className="text-center mt-4 self-start text-lg p-6">{qa[index].ans}</h3>
        </div>
        <div className="bg-[#296CF2] w-[60%] mb-20 h-4 relative border shadow-[4.10256px_4.10256px_0px_#000000] border-black">
            <div className="w-[98px] h-[70px] absolute -top-6 left-[43%] rounded-full grid grid-cols-2 bg-[#296CF2] justify-items-center items-center border border-black">
                <button onClick={()=>{FAQPositionerDecrease()}}>
                <svg className="h-[26px] w-[26px] hover:mr-2" width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 13L23 0.00961876V25.9904L0.5 13Z" fill="#070606"/>
</svg>

                </button>
                <button className="h-[30px] w-[30px] hover:ml-2" onClick={()=>{FAQPositionerIncrease()}}><svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 13L0 25.9904L0 0.00961876L22.5 13Z" fill="#070606"/>
</svg>
</button>
            </div>
        </div>
        </div>
    )
}

export default FAQ