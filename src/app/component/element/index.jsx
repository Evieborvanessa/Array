import React, { useEffect, useState } from "react";
function Timer  () {
    const [time,setTime] = useState(0);
    useEffect(() => {
        console.log("useEffect runs");
        setInterval(() =>{
            console.log("Timer called");
            setTime((prev) => prev+1);
        },1000);
    },[]);
    return(
        <div>
            <h1> {time} </h1>
        </div>
    );
}
export default Timer