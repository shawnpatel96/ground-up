import React from 'react'
import {Link} from "react-router-dom";
export default function (props) {
    return (
        <div className = {props.navClassName}>
            <nav className = 'navagationBar'>
            <Link to="/"><button>GroundUp</button></Link>
            <Link to="/about"><button>About</button></Link>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>Sign-up</button></Link>
            </nav>
        </div>
    )
}
