/* Global counter that tracks how many notifications were sent*/

let notificationCount = 0;

/* Gets the user input and requests permission to send a notification */

function sendNotification(){
    const title = document.getElementById("titleInput").value;
    const message = document.getElementById("messageInput").value;
    const icon = document.getElementById("iconInput").value;

    if (message === "") {
        alert("Please enter a message first.");
        return;
    }
    if(Notification.permission === "granted") {
        showNotification(title, message, icon);
    } else {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                showNotification(title, message, icon);
            }
        });
    }
}

/* Displays the browser notification and updates the notification counter */

function showNotification(title, message, icon) {
    const notification = new Notification(title || "Notification", {
        body: message,
        icon: icon || ""
    });

    notificationCount++;

    document.getElementById("countDisplay").textContent = 
    "Notifications sent this session: " + notificationCount;
}