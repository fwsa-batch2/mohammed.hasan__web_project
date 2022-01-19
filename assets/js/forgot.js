let isExist = false;
let parsedData = JSON.parse(localStorage.getItem("signUpDetails"));

function onSubmitHandler(event) {
    event.preventDefault();
    let number = document.getElementById("num").value;
    let mailId = document.getElementById("mailId").value;
    let condition = !doesExist(mailId, number) ? true : false;
    if (condition) {
        document.getElementById("error").innerHTML = "<font color=red> Invalid E-mail or Mobile number !! </font>";
        document.getElementById("error").style.cssText = "display :contents";
    } else {
        localStorage.setItem("forgotPassword", JSON.stringify(isExist));
        window.location.href = "./otp.html";
    }
}

function doesExist(mail, number) {
    let i = 0;
    for (i in parsedData) {
        if (parsedData[i].number == number && parsedData[i].mail == mail) {
            let role = parsedData[i].role;
            isExist = [mail, role];
            break;
        } else {
            isExist = false;
        }

    }
    return isExist;
}