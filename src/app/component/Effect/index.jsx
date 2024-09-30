import React, { useState,useEffect } from "react";
import image from "../../asset/baby.jpg"
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import style from "./style.module.css"
function Effect () {
    let [like, setLike] = useState(0);
    let [dislike,setDiLike] = useState (0);
    useEffect(() => {
        console.log("like is updated",like);
    });
    return (
        <div>
            <img src={image} alt="pic" className= {style.image} /> 
            <button onClick={() => setLike(like + 1)}><AiFillLike />{like} </button>
            <button onClick={()=> setDiLike(dislike+ 1)}> <BiSolidDislike />{dislike}</button>
        </div>
    );
}
export default Effect