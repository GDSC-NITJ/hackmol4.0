import React, { useState } from "react";

// *******TODO: Update FAQ Questions*******

let qa = [
    {
        ques: "What do you expect from this hackathon? Demo Question 1",
        ans: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
    },
    {
        ques: "This is question 2 fsdsdfsdfsdfgsdgand 2 is my favourite number you know?",
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

let FAQ = function () {
    const [index, setIndex] = useState(() => {
        return 0;
    })

    let FAQPositionerIncrease = () => {
        if (index == qa.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    let FAQPositionerDecrease = () => {
        if (index == 0) {
            setIndex(qa.length - 1);
        }
        else {
            setIndex(prevIndex => prevIndex - 1)
        }
    }
    return (
        <div className="bg-orange flex flex-col  justify-center items-center  w-full py-10 md:py-20 ">
            <h1 className="   text-black  text-3xl md:text-4xl font-extrabold items-center pb-4 text-center ">FAQs</h1>
            <div className="bg-yellow shadow-3xl  h-[332px] mb-10 p-6 md:h-80 md:px-10 md:pt-10 md:pb-16  border w-11/12 sm:w-8/12 border-black  flex flex-col rounded-lg justify-items-center items-center">
                <h2 className="p-4 text-2xl text-center"><b>{qa[index].ques}</b></h2>
                <h3 className="text-center self-start text-lg">{qa[index].ans}</h3>
            </div>
            <div className="bg-blue w-[60%] rounded-lg   h-4 relative border shadow-3xl border-black">
                <div className="w-[98px] h-[60px] absolute -top-6 left-[50%] -translate-x-[50%] rounded-full flex bg-blue justify-center gap-3  items-center border border-black">
                    <button onClick={() => { FAQPositionerDecrease() }}>
                        <svg className="h-[25px] w-[25px] hover:mr-2" width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 13L23 0.00961876V25.9904L0.5 13Z" fill="#070606" />
                        </svg>

                    </button>
                    <button className="h-[25px] w-[25px]  hover:ml-2" onClick={() => { FAQPositionerIncrease() }}><svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.5 13L0 25.9904L0 0.00961876L22.5 13Z" fill="#070606" />
                    </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FAQ