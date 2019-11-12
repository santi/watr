import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.enableNotifications = this.enableNotifications.bind(this);
    this.notify = this.notify.bind(this);
  }

  componentDidMount() {
    this.enableNotifications()
  }

  async enableNotifications() {
    const existingPermission = Notification.permission
    if (existingPermission !== 'granted') {
      const permission = await Notification.requestPermission();
      console.log('Notification permission status:', permission);
      this.notify("Test notification");
    }
  }

  async notify(title) {
    const reg = await navigator.serviceWorker.getRegistration();
    reg.showNotification(title);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/logo512.png" className="App-logo" alt="logo" />
          <button onClick={() => this.notify("Remember to drink more water!")}>Notify</button>
        </header>
      </div>
    );
  }
}

export default App;
