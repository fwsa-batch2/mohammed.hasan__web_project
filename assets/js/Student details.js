
let details;
function onSubmitHandler() {
    event.preventDefault();
    // let all_Student_Details = [];
    let username = document.getElementById("name").value;
    let DOB = document.getElementById("DOB").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("phone_number").value;
    let state = document.getElementById("state").value;
    let Certificate_10th =  document.getElementById("10th_Certificate").value;
    let Certificate_12th =  document.getElementById("12th_Certificate").value;


    const studentDetails = {
        "Name": username,
        "DOB": DOB,
        "E_mail": email,
        "Contact_number": contact,
        "State": state,
        "10th Certificate" : Certificate_10th,
        "12th Certificate" : Certificate_12th

    }

    details = localStorage.setItem("Student Details", JSON.stringify(studentDetails));
    //    all_Student_Details.push(details);

}

