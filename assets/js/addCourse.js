function onSubmitHandler() {
    let courseName = document.getElementById("courseName").value;
    let image = document.getElementById("image").value;
    let caption = document.getElementById("caption").value;
    let details = document.getElementById("details").value;
    let department = document.getElementById("courseDepartment").value;
    let fees = {
        firstSemester: document.getElementById("1stYearone").value,
        secondSemester: document.getElementById("1stYeartwo").value,
        thirdSemester: document.getElementById("2ndYearone").value,
        fourthSemester: document.getElementById("2ndYeartwo").value,
        fifthSemester: document.getElementById("3rdYearone").value,
        sixthSemester: document.getElementById("3rdYeartwo").value
    }
    let courseDetails = {
        name: courseName,
        image: image,
        caption: caption,
        department: department,
        details: details,
        fee: fees
    }
    let array = [];
    array = JSON.parse(localStorage.getItem("allCourses"));
    array.push(courseDetails);
    localStorage.setItem("allCourses", JSON.stringify(array));
    window.location.href = "./Fees.html";
}
const paramsString = window.location.search;
let searched = new URLSearchParams(paramsString);
let nameOfCourse = searched.get("name");
let parsedData = JSON.parse(localStorage.getItem("allCourses"));
for (let i of parsedData) {
    if (i.name == nameOfCourse) {
        let courseName = document.getElementById("courseName").value = i.name;
        let image = document.getElementById("image").value = i.image;
        let caption = document.getElementById("caption").value = i.caption;
        let details = document.getElementById("details").value = i.details;
        let department = document.getElementById("courseDepartment").value = i.department;
    }
}