import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./App2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

// Pages
import home from "./pages/home";
import search from "./pages/search";
import result from "./pages/result";
import analytics from "./pages/analytics";

axios.defaults.baseURL = "localhost:5000";
// https://codepen.io/mcanam/pen/ZEQvvmY
// https://codepen.io/jkantner/pen/ExVWpmx
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/search" component={search} />
          <Route exact path="/result" component={result} />
          <Route exact path="/analytics" component={analytics} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
