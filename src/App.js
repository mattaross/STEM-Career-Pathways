import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import FindPathways from "./pages/FindPathways";
import PathwaysByImage from "./pages/PathwaysByImage";
import PathwaysByInterest from "./pages/PathwaysByInterest";
import PathwaysByCareer from "./pages/PathwaysByCareer";
import IndividualCareer from "./pages/IndividualCareer";
import SelectedCareersByInterest from "./pages/SelectedCareersByInterest";

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/find-pathways" exact>
          <FindPathways />
        </Route>
        <Route path="/find-pathways/images" exact>
          <PathwaysByImage />
        </Route>
        <Route path="/find-pathways/interests" exact>
          <PathwaysByInterest />
        </Route>
        <Route path="/find-pathways/careers" exact>
          <PathwaysByCareer />
        </Route>
        <Route path="/careers/:careerId" exact>
          <IndividualCareer />
        </Route>
        <Route path="/careers-by-interest">
          <SelectedCareersByInterest />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
