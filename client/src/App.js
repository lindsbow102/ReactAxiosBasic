import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OMDB from "./pages/OMDB";
import BandsInTown from "./pages/BandsInTown";

function App() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={OMDB} />
            <Route exact path="/maps" component={BandsInTown} />
          </Switch>
        </div>
      </Router>
    );
  }

export default App;
