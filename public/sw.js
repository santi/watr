addEventListener('install', function(event) {
    // Perform install steps
    console.log("installing...")
  });

onactivate = function(event) {
    console.log('sw is up and running!');
}

onmessage = function(mess) {
  console.log(mess)
}
addEventListener('onmessage', function(messageevent) {
    console.log(`received data: ${messageevent.data}`);
    //var notification = new Notification("Hi there!");
})

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
}, false);