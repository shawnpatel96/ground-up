import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"

// Components
import HomePage from "./Components/HomePage"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import About from "./Components/About"

function App() {
  return (
    <Router>

    <Route exact path="/" component={HomePage}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/signup" component={Signup}/>

    </Router>
  );
}

export default App;
