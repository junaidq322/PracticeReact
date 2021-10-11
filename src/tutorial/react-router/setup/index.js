import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/person/:id" component={Person} ></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/people" component={People}></Route>
        <Route path="*" component={Error}></Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
