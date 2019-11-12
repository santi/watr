import React from "react";
import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.enableNotifications = this.enableNotifications.bind(this);
    this.notify = this.notify.bind(this);
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
    this.enableNotifications()
    const reg = await navigator.serviceWorker.getRegistration();
    const options = {
      body: "It is very important to drink enough water.",
      icon: "/logo192.png",
      badge: "/logo192.png",
      tag: "watr-drink",
      renotify: true,
      noscreen: true,
      actions: [
        {
          action: 'dismiss',
          title: 'Yes, master'
        }
      ]
  };
    reg.showNotification(title, options);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/logo512.png" className="App-logo" alt="logo" />
          <button onClick={() => this.notify("Remember to drink more water!")} className="Notify-button">Notify</button>
        </header>
      </div>
    );
  }
}

export default Main;
