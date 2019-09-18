import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.notify.bind(this)
  }

  notify() {
    new Notification("Remember to drink water!", {
      requireInteraction: true,

    })
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

export default App;
