import React from "react"
import {Link} from "react-router-dom"
import './style/home.css'

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/myroutines">My Routines</Link>
            <Link to="/activities">Activities</Link>
            <Link to= "/routines">Routines</Link>
            <Link to= "/login">Login</Link>
            <Link to= "/register">Register</Link>
        </div>
       

    )
}

export default Navbar