let details = getDetails();
getAndDisplay(details);
eventsForStatus();

// Displays all student details to admin by passing "total student details", from local storage, as argument

function getAndDisplay(objects) {
    let len = objects.length;
    let table = document.querySelector("table");
    let template = "";
    let i;
    for (i = 0; i < len; i++) {
        template += `<tr>
        <td> ${i + 1}</td>
            <td>${objects[i].name}</td>
            <td>${objects[i].dob}</td>
            <td>${objects[i].email}</td>
            <td>${objects[i].contactNumber}</td>
            <td>${objects[i].cutoff10}</td>
            <td>${objects[i].cutoff12}</td>
            <td>${objects[i].course}</td>
            <td>${objects[i].state}</td>
            <td>${objects[i].address}</td>
            <td>
                <select class="studentStatus" id="status_${objects[i].id}">
                    <option ${(objects[i].status === 'notPaid') ? 'selected': '' } value="notPaid">Fee Not Paid</option>
                    <option ${(objects[i].status === 'paid') ? 'selected': '' }  value="paid">Fee Paid</option>
                    <option ${(objects[i].status === 'confirmed') ? 'selected': '' } value="confirmed">Seat Confirmed</option>
                </select>
             </td>
            </tr>  `;
    }

    table.innerHTML = `
<tr>
    <th scope="col">S.No</th>
    <th scope="col">Name</th>
    <th scope="col">D.O.B</th>
    <th scope="col">E-Mail Address</th>
    <th scope="col">Phone Number</th>
    <th scope="col">10th Cut-off</th>
    <th scope="col">12th Cout-off</th>
    <th scope="col">Course</th>
    <th scope="col">State</th>
    <th scope="col">Address</th>
    <th>Status</th>
</tr>
     ${template}`;
}

// Sets events for each status "id" of students for onchange event
function eventsForStatus() {
    for (i in details) {
        let currentTag = document.getElementById(`status_${parseInt(i)+1}`);
        currentTag.onchange = dummy;
    }
}

//  To set onchange without params, created a dummy function.

// Even if 1 select tag is changed, whole array of objects is looped and run in this function; to check 
// the value of each select tag and change it in AO(arr of objects).
function dummy() {
    for (i in details) {
        let currentTag = document.getElementById(`status_${parseInt(i)+1}`);
        setStatusOfStudent(details[i], currentTag);
    }
}

//  Checks and updates the status in AO(arr of objects) when admin changes
function setStatusOfStudent(object, currentTag) {
    if (currentTag.value == "notPaid") {
        object.status = "notPaid";
    } else if (currentTag.value == "paid") {
        object.status = "paid";
    } else {
        object.status = "confirmed";
    }
    localStorage.setItem("studentDetails", JSON.stringify(details));
}

// Filters the available student details displaying, based on the option choosed
function filtering(event) {
    const elem = event.target;
    const filter = elem.value;
    let detail = getDetails(); // To get details from storage on that instant of time
    let sortedList;
    switch (filter) {
        case "new":
            sortedList = detail.reverse();
            break;
        case "old":
            sortedList = detail;
            break;
        case "asc":
            sortedList = detail.sort((a, b) =>
                a.name > b.name ? 1 : b.name > a.name ? -1 : 0
            );
            break;
        case "desc":
            sortedList = detail.sort((a, b) =>
                a.name > b.name ? -1 : b.name > a.name ? 1 : 0
            );
            break;
        default:
            sortedList = detail.sort((a, b) => {
                return b[filter] - a[filter];
            });
    }
    getAndDisplay(sortedList);
    // Calling this fn because onchange event revokes, after getAndDisplay() fn runs.
    eventsForStatus();
}
// Returns all student details from local storage
function getDetails() {
    return JSON.parse(localStorage.getItem("studentDetails"));
}