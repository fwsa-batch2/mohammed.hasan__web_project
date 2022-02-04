let isExist = false;
let parsedData = JSON.parse(localStorage.getItem("signUpDetails"));
var otp = "";

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
        for (i = 0; i < 4; i++) {
            otp += " " + Math.floor(Math.random(1, 9) * 10);
        }
        const emailBody = {
            to_email: mailId, // replace it with the receiver's email address
            message: "Your One-Time Password is :" + otp
        }
        sendEmailNotification(emailBody);
        isExist.push(otp);
        localStorage.setItem("forgotPassword", JSON.stringify(isExist));
        window.location.href = "./otp.html";
    }
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

function sendEmailNotification(body) {
    emailjs.send(
        "service_7njccgr",
        "template_dajj7dj",
        body
    ).then(
        function(response) {
            console.log('SUCCESS!', response.status, response.text);
        },
        function(error) {
            console.log('FAILED...', error);
        }
    );
}