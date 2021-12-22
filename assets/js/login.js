function show1() {
    let password = document.getElementById("cPassword");
    if (password.type === "password") {
        password.type = "text";
        document.getElementById("images2").src = "../assets/html images/eye.svg";

    } else {
        password.type = "password";
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
            return
        }
        const isAdmin = isExist.role == "admin" ? true : false;
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
    let importingInfo = JSON.parse(localStorage.getItem("signUpDetails"));
    for (let i of importingInfo) {

        if (i.mail == mail && i.password == password) {
            isExist = i; // returns only the matching Object only not all Objects
            break;
        } else {
            isExist = false;
        }
    }
    return isExist;
}

$("document").ready(function() {
    $("#password").on("keypress", function(e) {
        if (e.which == 32) {
            alert("Contain spaces");
        }
    });
});