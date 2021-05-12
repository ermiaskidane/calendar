import React, { useState } from "react";
import Home from "./components/home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';

const App = () => {
  return (
    <>
    <Router>
        <Switch >
          <Route path="/"  component={Home}/>
        </Switch>
    </Router>
    </>
  )
}

export default App;
