import React from 'react'
import NavBar from "./Nav"
import styled from "styled-components"


export default function HomePage() {
    return (
        <div>
            <NavBar navClassName ='navagationContainer' name ='hello'/>
            <h1>hello from Home Page</h1>
        </div>
    )
}

