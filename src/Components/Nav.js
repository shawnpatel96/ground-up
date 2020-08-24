import React from 'react'
import {Link} from "react-router-dom";
export default function (props) {
    
    return (
        <div className = {props.navClassName}>
            <nav className = 'navagationBar'>
            <Link to="/" class="hoverable" >GroundUp</Link>
            <Link to="/about" class="hoverable">About</Link>
            <Link to="/login" class="hoverable">Login</Link>
            <Link to="/signup" class="hoverable">Sign-up</Link>
            </nav>
        </div>
    )
}
