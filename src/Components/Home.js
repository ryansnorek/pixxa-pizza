import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

export default function Home() {

    return (
          <div className="home">
            <Header/>
            <h2>Your favorite food, delivered instantaneously.</h2>
            <div className="home-pizza">
                <img src="https://thumbs.gfycat.com/DisguisedImportantBernesemountaindog-size_restricted.gif" alt="pizza"></img>
                <Link id="order-pizza" to="/pizza" className="pizza-button">Pizza</Link>
            </div>
        </div>
    )
}
