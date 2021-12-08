function get(){
  let a = document.getElementById("password");

  let b= document.getElementById("mail");

  let c = document.getElementById("number");
}
function show1(){
  let pass = document.getElementById("cPassword");
  if(pass.type === "password"){
    pass.type = "text";
    document.getElementById("images2").src="../assets/html images/eye.svg";

  }
  else{
    pass.type = "password";
    document.getElementById("images2").src="../assets/html images/eye-close.svg";

  }
}

function show(){
  let pass = document.getElementById("password");
  if(pass.type === "password"){
    pass.type = "text";
    document.getElementById("images").src="../assets/html images/eye.svg";

  }
  else{
    pass.type = "password";
    document.getElementById("images").src="../assets/html images/eye-close.svg";

  }
}

function check(){
  event.preventDefault();
  let password = document.getElementById("password").value;
  let cpassword  = document.getElementById("cPassword").value;
  if(password != cpassword){
    alert("Password and Confirm password do not match !");
    window.location.href = "#";
  }
  else{
    window.location.href="Student details.html";
  }

}


function loginInformations(){
  event.preventDefault();
  let email = document.getElementById("mail").value;
  let password = document.getElementById("password").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  const loginInfo = {
    "email": email,
    "password": password,
    "phoneNumber": phoneNumber
  }
  console.log(allLoginDetails);
  allLoginDetails.push(loginInfo);
  localStorage.setItem("loginInformations", JSON.stringify(allLoginDetails));
  // window.location.href = "final.html";
}
function onRefresh(){
  const details = localStorage.getItem("loginInformations");
  if(details){
  allLoginDetails = JSON.parse(details);}
  else{
    allLoginDetails = [];
  }
}
onRefresh();
function mailCheck(){
  event.preventDefault();
  let inputMail = document.getElementById("mail").value;
  let importingInfo = JSON.parse(localStorage.getItem("loginInformations"));
  for(let i=0; i < importingInfo.length; i++){
    if(importingInfo[i].email == inputMail){
       document.getElementById("errorMessage").innerHTML = " !! Enter valid Login Details";
       break;
    }
    else{
        window.location.href ="final.html";
    }
    
  }

}