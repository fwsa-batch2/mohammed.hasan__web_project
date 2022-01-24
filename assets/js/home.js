alert("This is Ten Dots Official Website");

// On clicking, opens and closes the side-bar

function showSideBar() {
    document.querySelector(".hov").classList.toggle("hov-open");
}
// Checks whether notifcation are turned-on or off by getting value from local storage on refresh

function onRefreshForNotification() {
    var notific = JSON.parse(localStorage.getItem("notification"));
    var notificationIcon = document.getElementById("notification_icon");
    if (notific == "on") {
        notificationIcon.src = '../assets/images/notification_on.svg';
        notific = "on";
    } else {
        notificationIcon.src = '../assets/images/notification_off.svg';
        notific = "off";

    }
    localStorage.setItem("notification", JSON.stringify(notific));
}

// On clicking, changes the notfications to on and off 
function notification() {
    notificationIcon = document.getElementById("notification_icon");
    if (notific == "off") {
        let email = prompt("Enter your mail id to get notifications");
        alert("Notifcations will be sent to " + email);
        localStorage.setItem("mailForNotifications", JSON.stringify(email));
        notificationIcon.src = '../assets/images/notification_on.svg';
        alert("Notifications turned on ");
        notific = "on";
    } else {
        notificationIcon.src = '../assets/images/notification_off.svg';
        alert(" Notifications turned off");
        notific = "off";

    }
    localStorage.setItem("notification", JSON.stringify(notific));
}

// Toggles the nav-bar on clicking. Clicking invokes this fn.

function navBar() {
    document.querySelector(".nav-bar").classList.toggle("open");
}

// Gets data from storage and deletes it and makes user Logout from our website
function logOut() {
    localStorage.removeItem("loggedInUser");
    let logout = confirm("Are you sure ? Do you want to Log-out ?");
    if (logout) {
        alert("You have been Logged out");
        showLogOut();
    }
}

// On refresh invokes this function, to check whether user has logged in and displays Log-out option
// to user depending on the values from local storage.
function showLogOut() {
    let logOutData = localStorage.getItem("loggedInUser");
    let logOutDisplay = document.getElementById("logout");
    logOutDisplay.style.display = logOutData ? "display" : "none";

}
showLogOut();
onRefreshForNotification();