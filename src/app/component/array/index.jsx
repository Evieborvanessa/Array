import react from "react"
import Welcome from "./welcome";

function Esther() {
    const names = ["Valentine",  "Johnson",  "Moses" ,"Maggrete"];
    return (
        <div className="Esther">
        {names.map((nm) =>  ( 
            <Welcome name ={nm} />
    )  )  }

</div>
 );
  }
  export default Esther 