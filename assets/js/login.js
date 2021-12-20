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
//New JS files

let signUpArray = [];



// function onRefresh() {
//   const details = localStorage.getItem("loginInformations");

//   if (details) {
//     allLoginDetails = JSON.parse(details);
//   }
//   else {
//     allLoginDetails = [];
//   }
// }
// onRefresh();


function mailCheck() {
    event.preventDefault();
    let inputMail = document.getElementById("mail").value;
    let inputPassword = document.getElementById("password").value;
    let isError = false;
    let importingInfo = JSON.parse(localStorage.getItem("signUpDetails"));

    if (importingInfo != null) {
        for (let i = 0; i < importingInfo.length; i++) {

            if (importingInfo[i].mail == inputMail && importingInfo[i].password == inputPassword) {
                localStorage.setItem("loggedInUser", inputMail);
                if (importingInfo[i].role == "admin") {
                    window.location.href = "displayDetailsToAdmin.html";

                } else {
                    window.location.href = "Student details.html";
                    break;
                }
            }
            if (importingInfo[i].mail != inputMail || importingInfo[i].password != inputPassword) {
                isError = true;

            }
        }
        if (isError == true) {
            document.getElementById("errorMessage").innerHTML = "Enter valid Login Details !! ";

        }


    } else {
        document.getElementById("errorMessage").innerHTML = "Please Sign up first";
    }

}

$("document").ready(function() {
    $("#password").on("keypress", function(e) {
        if (e.which == 32) {
            alert("Contain spaces");
        }
    });
});