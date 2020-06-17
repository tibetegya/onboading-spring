import React, { useState, useEffect } from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Onboarding,
  ClickReveal
} from './pages';

const App = () => {
  return (
  <Router>
    <Switch>
      <Route path="/" exact><Onboarding/></Route>
      <Route path="/click"><ClickReveal/></Route>
    </Switch>
  </Router>
  );
}

export default App;
