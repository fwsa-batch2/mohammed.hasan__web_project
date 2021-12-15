function get() {
  let a = document.getElementById("password");

  let b = document.getElementById("mail");

  let c = document.getElementById("number");
}
function show1() {
  let pass = document.getElementById("cPassword");
  if (pass.type === "password") {
    pass.type = "text";
    document.getElementById("images2").src = "../assets/html images/eye.svg";

  }
  else {
    pass.type = "password";
    document.getElementById("images2").src = "../assets/html images/eye-close.svg";

  }
}

function show() {
  let pass = document.getElementById("password");
  if (pass.type === "password") {
    pass.type = "text";
    document.getElementById("images").src = "../assets/html images/eye.svg";

  }
  else {
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
  let inputNumber = document.getElementById("phoneNumber").value;
  let importingInfo = JSON.parse(localStorage.getItem("signUpDetails"));
  if(inputMail == "admin@gmail.com"){
    window.location.href = "displayDetailsToAdmin.html";
    return;
}

  if (importingInfo != null) {
    for (let i = 0; i < importingInfo.length; i++) {
      if (importingInfo[i].mail != inputMail || importingInfo[i].number != inputNumber) {
        document.getElementById("errorMessage").innerHTML = "Enter valid Login Details !! ";
   
      }
      if (importingInfo[i].mail == inputMail && importingInfo[i].number == inputNumber){
        localStorage.setItem("loggedInUser", inputMail);
        window.location.href = "Student details.html";
        break;
      }
    }
  }
  else {
    document.getElementById("errorMessage").innerHTML = "Please Sign up first";
  }

}

$("document").ready(function() {
  $("#password").on("keypress", function(e) {
      if (e.which == 32){
          alert("Contain spaces");
      }
  });
});