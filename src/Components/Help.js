import React from "react";
import Header from "./Header";

const Help = () => {
    return (
    <>
        <Header/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgHyUQlol1ybG2GywmlWhrUz5lMTaPQB6o-IdhTysxLiyMksx3RMohbHKPYrGnCHm2C2A&usqp=CAU" alt="pizza"></img>
        <a 
            className="help"
            href="http://pizza.com/"
            target="_blank"
            rel="noreferrer"
        >
        Pizza help
        </a>
    </>
    )
}
export default Help;
