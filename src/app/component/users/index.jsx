import React from "react";
import { UserList } from "./array";
import style from "./style.module.css";
/*import Welcome from "../greetings";
import Esther from "../array";*/

function UserDetail() {
    const users = [];
    fetch("https://66fa66e0afc569e13a9b997c.mockapi.io/users")
    .then((data) => data.json())
    .then((UserList) => console.log(UserList));
    return (
        < div className = {style.userdetail} >
        {
            UserList.map((nm, index) => (
                <div key={index}>
                    <img src={nm.image} alt= {nm.image} />
                    <div>
                        <h1> {nm.name} </h1>
                        <h3> {nm.bio} </h3>
                    </div>
                </div>
            ))
        }

</div >
    );
}
    

export default UserDetail