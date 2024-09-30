import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
function Joy() {
    let like = 10;
    return (
        <div>
            <button onClick={() => {
                like++;
                console.log(like);
            }}>
                Like
            </button>
            <h1>{like}</h1>
            <h1>{like}</h1>
            <h1>{like}</h1>

        </div>
    );  }

    // let [like, setLike] = useState(0);
    
    
// }
export default Joy