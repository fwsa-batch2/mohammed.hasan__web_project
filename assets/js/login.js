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

function check() {
  event.preventDefault();
  let password = document.getElementById("password").value;
  let cpassword = document.getElementById("cPassword").value;
  let mail = document.getElementById("mailid").value;
  let signUpDetails = JSON.parse(localStorage.getItem("signUpDetails"));
  if (signUpDetails) {

    let isMatch = false;

    for (let i = 0; i < signUpDetails.length; i++) {
      let mailid = signUpDetails[i].mail;
      let arrayPassword = signUpDetails[i].password;

      if (mail == mailid || password !== cpassword) {
        isMatch = true;
        break ;
      }
      else {
        isMatch = false;
      }
    }

    if(isMatch){
      document.getElementById("errorMessage").innerHTML = "<font color=red> Invalid Details !! </font>";
      return;
    }
    else{
      signUpDataGetting();
      window.location.href = "login.html";
    }

  }
  else {
    signUpDetails = [];
  }


}
// function checkMail(){
//   let mail = document.getElementById("mailid").value;
//   let signUpDetails = JSON.parse(localStorage.getItem("signUpDetails"));
//   for(let i=0; i < signUpDetails.length; i++ ){
//   if(mail == signUpDetails[i].mail){
//     document.getElementById("errorMessage").innerHTML = "<font color=red> Invalid Details !! </font>";
//     window.location.href = '#';
//   }
//   }
// }
function onRefresh() {
  const details = localStorage.getItem("loginInformations");

  if (details) {
    allLoginDetails = JSON.parse(details);
  }
  else {
    allLoginDetails = [];
  }
}
onRefresh();
let signUpArray = [];
function signUpDataGetting() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let mail = document.getElementById("mailid").value;
  let dob = document.getElementById("dob").value;
  let password = document.getElementById("password").value;
  let number = document.getElementById("number").value;
  let address = document.getElementById("address").value;
  const userDetails = {
    fName: fname,
    lName: lname,
    mail: mail,
    dob: dob,
    password: password,
    number: number,
    address: address
  }
  signUpArray.push(userDetails);
  localStorage.setItem("signUpDetails", JSON.stringify(signUpArray));


}

function signUpRefresh() {
  const signUpDetails = localStorage.getItem("signUpDetails");
  if (signUpDetails) {
    signUpArray = JSON.parse(signUpDetails);
  }
  else {
    signUpArray = [];

  }
}
signUpRefresh();


function mailCheck() {
  event.preventDefault();
  let inputMail = document.getElementById("mail").value;
  let inputNumber = document.getElementById("phoneNumber").value;
  let importingInfo = JSON.parse(localStorage.getItem("signUpDetails"));


  for (let i = 0; i < importingInfo.length; i++) {
    if (importingInfo[i].mail === inputMail && importingInfo[i].number === inputNumber) {
      window.location.href = "Student details.html";

    }
    else {
      document.getElementById("errorMessage").innerHTML = " !! Enter valid Login Details";
      window.location.href = "#";
    }


  }

}
