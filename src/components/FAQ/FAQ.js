import React from "react";
import TitleBoxes from "./TitleBoxes"
import QuestionBox from "./QuestionBox";
import AnswerBox from "./AnswerBox";

let quesAns = [
    {
        ques : "This is the question 1, Lorem Ipsum faqshadows",
        ans : "This is the Answer 1, Lorem Ipsum FAQSHadows"
    },
    {
        ques : "This is the question 2, Lorem Ipsum faqshadows",
        ans : "This is the Answer 2, Lorem Ipsum FAQSHadows"
    },
    {
        ques : "This is the question 3, Lorem Ipsum faqshadows",
        ans : "This is the Answer 3, Lorem Ipsum FAQSHadows"
    },
    {
        ques : "This is the question 4, Lorem Ipsum faqshadows",
        ans : "This is the Answer 4, Lorem Ipsum FAQSHadows"
    },
    {
        ques : "This is the question 5, Lorem Ipsum faqshadows",
        ans : "This is the Answer 5, Lorem Ipsum FAQSHadows"
    },
    {
        ques : "This is the question 6, Lorem Ipsum faqshadows",
        ans : "This is the Answer 6, Lorem Ipsum FAQSHadows"
    }
]

let FAQ = function(props){
    return (
        <div className="grid mt-2 mb-2 grid-cols-3 border border-black border-t-4 border-b-4 justify-items-center items-center">
            <div className="grid grid-rows-9 justify-items-center space-y-10 p-10 items-center">
                <TitleBoxes title="Frequently"/>
                <QuestionBox content={quesAns[0].ques} className="row-span-2"/>
                <AnswerBox content={quesAns[0].ans} className="row-span-2"/>
                <QuestionBox content={quesAns[1].ques} className="row-span-2"/>
                <AnswerBox content={quesAns[1].ans} className="row-span-2"/>
            </div>
            <div className="grid grid-rows-9 justify-items-center p-10 space-y-10 items-center">
                <TitleBoxes title="Asked"/>
                <QuestionBox content={quesAns[2].ques} className="row-span-2"/>
                <AnswerBox content={quesAns[2].ans} className="row-span-2"/>
                <QuestionBox content={quesAns[3].ques} className="row-span-2"/>
                <AnswerBox content={quesAns[3].ans} className="row-span-2"/>
            </div>
            <div className="grid grid-rows-9 justify-items-center p-10 space-y-10 items-center">
                <TitleBoxes title="Questions"/>
                <QuestionBox content={quesAns[4].ques} className="row-span-2"/>
                <AnswerBox content={quesAns[4].ans} className="row-span-2"/>
                <QuestionBox content={quesAns[5].ques} className="row-span-2"/>
                <AnswerBox content={quesAns[5].ans} className="row-span-2"/>
            </div>
        </div>
    )
}

export default FAQ