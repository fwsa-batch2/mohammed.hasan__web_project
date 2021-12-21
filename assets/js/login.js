function show1() {
    let pass = document.getElementById("cPassword");
    if (pass.type === "password") {
        pass.type = "text";
        document.getElementById("images2").src = "../assets/html images/eye.svg";

    } else {
        pass.type = "password";
        document.getElementById("images2").src = "../assets/html images/eye-close.svg";

    }
}

function show() {
    let pass = document.getElementById("password");
    if (pass.type === "password") {
        pass.type = "text";
        document.getElementById("images").src = "../assets/html images/eye.svg";

    } else {
        pass.type = "password";
        document.getElementById("images").src = "../assets/html images/eye-close.svg";

    }
}

let signUpArray = [];

function mailCheck(event) {
    event.preventDefault();
    let inputMail = document.getElementById("mail").value;
    let inputPassword = document.getElementById("password").value;
    let importingInfo = JSON.parse(localStorage.getItem("signUpDetails"));

    if (importingInfo != null) {
        const isExist = isUserExist(inputMail, inputPassword);

        if (isExist == false) {
            document.getElementById("errorMessage").innerHTML = "Enter valid Login Details !! ";
            return null;
        }
        const isAdmin = checkRole(isExist);
        if (isAdmin) {
            window.location.href = "displayDetailsToAdmin.html";
        } else {
            window.location.href = "Student details.html";

        }
    } else {
        document.getElementById("errorMessage").innerHTML = "Please Sign up first";
    }
}

function isUserExist(mail, password) {

    let isExist;
    let importingInfo = JSON.parse(localStorage.getItem("signUpDetails"));
    for (let i of importingInfo) {

        if (i.mail == mail && i.password == password) {
            isExist = i;
            break;
        } else {
            isExist = false;
        }
    }
    return isExist;
}

function checkRole(userObject) {
    return userObject.role == "admin" ? true : false;

}

$("document").ready(function() {
    $("#password").on("keypress", function(e) {
        if (e.which == 32) {
            alert("Contain spaces");
        }
    });
});