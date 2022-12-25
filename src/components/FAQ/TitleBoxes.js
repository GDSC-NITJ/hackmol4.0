import React from "react";
import blackDot from "../../public/dot.png"

const TitleBoxes = function(props){
    return (
        <div className="grid grid-cols-6 items-center w-1/2 justify-items-center border bg-gray-300 border-black" style={obj}>
            <img src={blackDot.src} className=""></img>
            <p className="col-span-4"><b>{props.title}</b></p>
            <img src={blackDot.src}></img>
        </div>
    )
};

let obj = {
    boxShadow: "5px 5px black"
}

export default TitleBoxes