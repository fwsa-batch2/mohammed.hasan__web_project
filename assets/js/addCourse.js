// Gets entered values and stores it in Local Storage as a new Course

function onSubmitHandler(event) {
    event.preventDefault()
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
    let allCourses = [];
    allCourses = JSON.parse(localStorage.getItem("allCourses"));
    let course = 0;
    let isExist;
    for (course of allCourses) {
        if (course.name.toLowerCase() == courseName.toLowerCase()) {
            isExist = true;
            break;
        } else {
            isExist = false;
        }
    }
    if (!isExist) {
        allCourses.push(courseDetails);
        localStorage.setItem("allCourses", JSON.stringify(allCourses));
        window.location.href = "./courseDetails.html";
    } else {
        document.querySelector("#errorMessage").innerHTML = `<font color=red>Sorry, this course already exists  !!</font>`;
    }
}