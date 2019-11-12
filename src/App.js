import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SideBar from "./components/hamburger";
import Main from "./routes/Main";
import Settings from "./routes/Settings";
import NotFound from "./routes/notfound";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    return (
      <Router>
        <div>
          <SideBar
            pageWrapId={"page-wrap"}
            outerContainerId={"App"}
            closeMenu={this.closeMenu}
            isOpen={this.state.menuOpen}
            onStateChange={state => this.handleStateChange(state)}
          />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/settings" component={Settings} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
