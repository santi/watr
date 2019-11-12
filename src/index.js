import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import Main from "./routes/Main";
import Settings from "./routes/Settings";
import NotFound from "./routes/notfound";
import { install } from './serviceWorker'

install()

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/settings" component={Settings} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
