import React, { useState } from "react";

// *******TODO: Update FAQ Questions*******

let qa = [
    {
        ques: "What is a Hackathon and who are eligible to participate in HackMol4.0 ?",
        ans: "A Hackathon is an intense event that brings together designers and developers along with industry experts to identify problems and create software solutions, usually within 24-48 hours. If you're a student developer, we'd love to have you at HackMol4.0! Whether that's a undergrad, or graduate, we believe you can get something out of the event."
    },
    {
        ques: "What can be the size of team?",
        ans: `A team can consist of 1-4 members.\n Pro Tip : Aim to have a mix of people with both design and developer skills. Individual entries are also allowed.`
    },
    {
        ques: "What if I don't have a team or idea ?",
        ans: "Don't worry, most people don't! We'll have team formation and ideation events geared towards helping you find people to work with. It's perfectly normal to go around to people, tell them you're looking for a team, and ask if you can help out. You can also show yourself off at #teamup on our Discord Server."
    },
    {
        ques: "When we will receive goodies?",
        ans: "Prizes and goodies are provided by sponsors of the hackathon, hence they are responsible for the delivery of the items."
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
            <h1 className="text-black  text-3xl  md:text-4xl  font-extrabold items-center pb-4 text-center ">FAQs</h1>
            <div className="bg-yellow shadow-3xl  min-h-[545px] mb-10 p-6 md:min-h-[350px] md:px-10 md:pt-10 md:pb-16  border w-11/12 sm:w-8/12 border-black  flex flex-col rounded-lg justify-items-center items-center">
                <h2 className="p-4 text-2xl text-center"><b>{qa[index].ques}</b></h2>
                <text className="text-center self-start text-lg whitespace-pre-line	" >{qa[index].ans}</text>
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