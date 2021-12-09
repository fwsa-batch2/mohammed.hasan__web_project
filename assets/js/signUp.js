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

  
  function check() {
    event.preventDefault();
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cPassword").value;
    let mail = document.getElementById("mailid").value;
    let signUpDetails = JSON.parse(localStorage.getItem("signUpDetails"));
    if(signUpDetails == null){
      localStorage.setItem("signUpDetails",JSON.stringify([]));
    }
    else{
  
      let isMatch = false;
  
      for (let i = 0; i < signUpDetails.length; i++) {
        let mailid = signUpDetails[i].mail;
  
        if (mail == mailid) {
          isMatch = true;
          break;
        }
        if(password !== cpassword){
          isMatch = true;
          break;
        }
      }
  
      if (isMatch) {
        document.getElementById("errorMessage").innerHTML = "<font color=red> Invalid E-mail or Password Details !! </font>";
        return;
      }
      else {
        signUpDataGetting();
        window.location.href = "login.html";
      }
  
    }
    
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