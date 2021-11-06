import React from "react";
import Header from "./Header";

const Pizza = ({ order }) => {

    return (
        <div className="ordered">
            <Header/>
            <h1>Congrats {order.name}!</h1>
            <h2>Check your smart oven once your order is done loading</h2>
            {order.toppings ? <p>1 {order.size} {order.toppings.map(item => {
                return item + " ";
            })} pizza with {order.sauce} sauce!</p> : ""}
            <img src="https://i.pinimg.com/originals/7e/65/6d/7e656d5cdd811b2dd2c9c68416bfad7f.gif" alt="pizza"></img>
        </div>
    )
}

export default Pizza;