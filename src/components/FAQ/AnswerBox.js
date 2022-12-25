import React from "react";

const AnswerBox = function(props){
    return (
        <div className="border border-black" style={obj}>
            <p className="p-4">{props.content}</p>
        </div>
    )
}

let obj = {
    boxShadow: "5px 5px black"
}

export default AnswerBox