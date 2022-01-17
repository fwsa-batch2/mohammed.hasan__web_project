function otp() {
    alert("Another OTP has been sent to your mobile");
}

function onSubmitHandler() {
    let userDetail = JSON.parse(localStorage.getItem("forgotPassword"));
    localStorage.setItem("loggedInUser", JSON.stringify(userDetail));
    window.location.href = "./home.html";
    alert("You have been logged in");
}