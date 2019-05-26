import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BandsInTown from "./pages/BandsInTown";
import GoogleMaps from "./pages/GoogleMaps";

function App() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={BandsInTown} />
            <Route exact path="/maps" component={GoogleMaps} />
          </Switch>
        </div>
      </Router>
    );
  }

export default App;
