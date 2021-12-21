function onSubmitHandler(event) {
    event.preventDefault();
    const username = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("phone_number").value;
    const state = document.getElementById("state").value;
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value;
    let allStudentDetails = [];

    const studentDetails = {
        "name": username,
        "dob": dob,
        "email": email,
        "contactNumber": contact,
        "state": state,
        "course": course,
        "address": address
    }

    allStudentDetails.push(studentDetails);
    localStorage.setItem("studentDetails", JSON.stringify(allStudentDetails));
    window.location.href = "final.html";

}

function onPageLoadFunction() {
    const studDetails = JSON.parse(localStorage.getItem("studentDetails"));

    if (studDetails) {
        allStudentDetails = studDetails;
    } else {
        allStudentDetails = [];
    }

}
onPageLoadFunction();