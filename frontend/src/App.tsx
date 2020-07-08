import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/results" component={Results} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
