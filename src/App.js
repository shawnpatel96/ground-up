import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import HomePage from "./Components/HomePage"
function App() {
  return (
    <Router>
    <div>
    <Route exact path="/" component={HomePage}/>
    {/* <Route exact path="/about" component={About}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/signup" component={Signup}/>
   */}
    </div>
    </Router>
  );
}

export default App;
