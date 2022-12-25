import React from "react";
import threedot from '../../public/three-dots.png'

const QuestionBox = function(props){
    return (
       <div className="border-black border bg-gray-300" style={obj}>
            <p className="p-4 h-5/6">{props.content}</p>
            <div className="flex flex-row-reverse">
                <img className="h-12 relative right-3" src={threedot.src}></img>
            </div>
       </div>
    )
}

let obj = {
    boxShadow: "5px 5px black"
}

export default QuestionBox