import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import OMDB from "./pages/OMDB";
import BandsInTown from "./pages/BandsInTown";
import Recipes from "./pages/Recipes";

function App() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={OMDB} />
            <Route exact path="/concerts" component={BandsInTown} />
            <Route exact path="/recipes" component={Recipes} />
          </Switch>
        </div>
      </Router>
    );
  }

export default App;
