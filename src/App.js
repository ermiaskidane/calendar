import React, { useState } from "react";
import Home from "./components/home"
import Lists from "./components/Lists"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';

const App = () => {
  return (
    <>
    <Router>
        <Switch >
          <Route path="/"  component={Home}/>
          <Route path="/lists"  component={Lists}/>
        </Switch>
    </Router>
    </>
  )
}

export default App;
