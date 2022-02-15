let signUpDetails = JSON.parse(localStorage.getItem("signUpDetails"));
let forgotPassword = JSON.parse(localStorage.getItem("forgotPassword"));
let mailId = forgotPassword[0];

function onSubmitHandler(event) {
    event.preventDefault();
    let newPassword = document.getElementById("password").value;
    for (i of signUpDetails) {
        if (i.mail == mailId) {
            i.password = newPassword;
            localStorage.setItem("signUpDetails", JSON.stringify(signUpDetails));
            alert("Password has been changed");
            window.location.replace("./home.html");
        }
    }

}