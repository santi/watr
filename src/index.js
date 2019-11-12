import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import Main from "./routes/Main";
import Settings from "./routes/Settings";
import NotFound from "./routes/notfound";
import * as serviceWorker from "./serviceWorker";

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
Notification.requestPermission();
serviceWorker.register();
