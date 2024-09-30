import { Component } from "react";

function withStyles (Component) { 
return(props)=> { 
    const style ={
    color: "red",
    fontSize: "1em",
    ...props.style
}
 
 return <component{...props}
 style = {style} />  }
}