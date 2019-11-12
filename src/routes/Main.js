import React from "react";
import logo from "../logo.svg";
import "../App.css";

class Main extends React.Component {
  constructor() {
    super();
    this.notify.bind(this);
    this.enableNotifications.bind(this);
  }

  enableNotifications(e) {
    e.preventDefault();
    const enable = window.confirm(
      "Are you sure you want to enable notifications?"
    );
    if (enable) {
      this.notify();
    }
  }

  notify() {
    new Notification("Remember to drink water!", {
      requireInteraction: true
    });
    setTimeout(this.notify, 30000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.notify}>Notify</button>
        </header>
      </div>
    );
  }
}

export default Main;
