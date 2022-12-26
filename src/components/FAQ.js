import React from "react";
import back from "../public/back.svg"
import next from "../public/next.svg"

class FAQ extends React.Component{
   
    constructor(){
        super();
        this.state = {
            qa : [
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
            ],
            index: 0
        }
    }

    obj = {
        boxShadow: "5px 5px black"
    }

    FAQPositionerIncrease = () =>{
        let {qa,index} = this.state;
        console.log(qa.length);
        if(index == qa.length-1){
            index = 0;
        }
        else{
            console.log(index)
            index += 1;
        }
    
        this.setState({
            index: index
        })
    }

    FAQPositionerDecrease = () =>{
        let {qa,index} = this.state;
        if(index == 0){
            index = qa.length-1;
        }
        else{
            index -= 1;
        }
        
        this.setState({
            index: index
        })
    }

    render(){
    
        const {qa,index} = this.state;
        return(
            <div className="bg-[#F96300] grid grid-rows-4 justify-items-center items-center w-screen h-screen">
            <h1 className="self-end text-5xl"><b>FAQs</b></h1>
            <div style={this.obj} className="bg-[#FFEB01] border border-black w-[60%] h-4/5 row-span-2 grid grid-rows-3 justify-items-center items-center">
                <h2 className="p-4 mt-16 text-2xl text-center"><b>{qa[index].ques}</b></h2>
                <h3 className="text-center mt-4 self-start text-lg p-6">{qa[index].ans}</h3>
            </div>
            <div className="bg-[#296CF2] w-[60%] mb-20 h-4 relative border border-black" style={this.obj}>
                <div className="w-[98px] h-[70px] absolute -top-6 left-[43%] rounded-full grid grid-cols-2 bg-[#296CF2] justify-items-center items-center border border-black">
                    <button onClick={()=>{this.FAQPositionerDecrease()}}><img src={back.src} className="h-[30px] w-[30px] hover:mr-2"></img></button>
                    <button onClick={()=>{this.FAQPositionerIncrease()}}><img src={next.src} className="h-[30px] w-[30px] hover:ml-2"></img></button>
                </div>
            </div>
            </div>
        )
    }
}

export default FAQ