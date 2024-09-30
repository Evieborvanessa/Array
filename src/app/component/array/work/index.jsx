import React from "react";
import { Users } from "./work";
function She() {
    return (
        <div>
            {Users.map((baby) => (
                <div>
                    <img src={baby.image} alt="pic" />
                    <h2> {baby.name}  </h2>
                </div>
            ))}
            <button onClick={() => console.log ("clicked")}> Click me</button>;
            
        </div>
    )

}

export default She

