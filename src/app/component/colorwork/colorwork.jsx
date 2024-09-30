import React, { useState } from "react";
function ColorBoxxx () {
    const [color, setColor] = useState ("");
    const styles = {
        background: color,
    };
    return (
        <div>
            <h1>Color Box</h1>
            <input type="text" style = {styles}  placeholder="Type a Color"
            onChange={(event) => setColor(event.target.value)}/>
        </div>
    );
}
export default ColorBoxxx