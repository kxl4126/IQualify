import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

// Pages
import home from "./pages/home";
import search from "./pages/search";
import result from "./pages/result";


// When ready to sync with backend -> axios.defaults.baseURL = "_____"; 


function App() { 
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/search" component={search} />
          <Route exact path="/result" component={result} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
