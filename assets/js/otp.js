let userDetail = JSON.parse(localStorage.getItem("forgotPassword"));
let mailId = userDetail[0];

// Makes user as logged in if user enters correct OTP and then gives a message to user

function onSubmitHandler() {
    let otpNum1 = document.getElementById("otpNum1").value;
    let otpNum2 = document.getElementById("otpNum2").value;
    let otpNum3 = document.getElementById("otpNum3").value;
    let otpNum4 = document.getElementById("otpNum4").value;
    let enteredOtp = ` ${otpNum1} ${otpNum2} ${otpNum3} ${otpNum4}`;
    if (enteredOtp == userDetail[2]) {
        userDetail.pop();
        localStorage.setItem("loggedInUser", JSON.stringify(userDetail));
        window.location.replace("home.html");
        alert("You have been logged in");
        console.log("HOME");
    } else {
        alert("Incorrect OTP entered");
    }
}

// Sends mail to user's mail-id entered and gives a message to user

function sendEmailNotification(body) {
    emailjs.send(
        "service_7njccgr",
        "template_dajj7dj",
        body
    ).then(
        function(response) {
            console.log('SUCCESS!', response.status, response.text);
            userDetail[2] = otp;
            localStorage.setItem("forgotPassword", JSON.stringify(userDetail));
        },
        function(error) {
            console.log('FAILED...', error);
        }
    );
}
let otp = "";
for (i = 0; i < 4; i++) {
    otp += " " + Math.floor(Math.random(1, 9) * 10);
}
const emailBody = {
    to_email: mailId, // replace it with the receiver's email address
    message: "Your One-Time Password is :" + otp
}
let resendOTP = document.getElementById("resendOtp");
resendOTP.addEventListener("click", () => { sendEmailNotification(emailBody) });