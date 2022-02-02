let isExist = false;
let parsedData = JSON.parse(localStorage.getItem("signUpDetails"));

// Checks the mail-id and number entered with registered users and heads to next page if exists.
// Else displays an error message to user.

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
    // sendMail(mailId);
}

// Returns whether the entered details are already registered and returns "isExist"

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
// Send mail to user's mail-id for verification
function sendMail() {
    console.log("sent mail");
    Email.send({
        Host: "smtp.gmail.com",
        Username: "ten dots",
        Password: "HasanTheDON7.",
        To: 'rafeek.ahmed1968@gmail.com',
        From: "tendots.univ@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(function() {
        alert("Sent mail");
    });
}
sendMail();