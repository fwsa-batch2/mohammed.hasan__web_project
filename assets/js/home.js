alert("This is Ten Dots Official Website");
    function show() {
      document.querySelector(".hov").classList.toggle("hov-open");
    }
    var notific;


    var notific = JSON.parse(localStorage.getItem("notification"));
    var notificationIcon = document.getElementById("notification_icon");
    if (notific == "on") {
      notificationIcon.src = '../assets/html images/notification_on.svg';
      notific = "on";
    }
    else {
      notificationIcon.src = '../assets/html images/notification_off.svg';
      notific = "off";

    }
    localStorage.setItem("notification", JSON.stringify(notific));


    function notification() {

      var notificationIcon = document.getElementById("notification_icon");
      let email = prompt("Enter your mail id to get notifications");
      alert("Notifcations will be sent to " + email);
      console.log(email);
      if (notific == "off") {
        notificationIcon.src = '../assets/html images/notification_on.svg';
        alert("Notifications turned on ");
        notific = "on";
      }
      else {
        notificationIcon.src = '../assets/html images/notification_off.svg';
        alert(" Notifications turned off");
        notific = "off";

      }
      localStorage.setItem("notification", JSON.stringify(notific));
    }