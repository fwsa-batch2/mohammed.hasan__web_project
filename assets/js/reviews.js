let date = new Date().toDateString().substr(4, );
let commentsArray = [{ comment: "This is the best college in basis of Food Facilities and Cultural activities", name: "Annapoorni", date: date }, { comment: "Remarks : Placements are excellent. The standard of education is very good as all the teachers are well-experienced.The campus is maintained well and the food is good.The other factors are they offer all facilities i.e from bus to books to food, everything is taken care of.", name: "Ismail", date: date }, { comment: "Food inspector one of the best college in state the infrastructure were awesome more extra curricular activities. Library were extrodinary to know more abt food tech and to learn more about foood tech and to work hard in ma careers", name: "Mahalakshmi", date: date }];
let showall = true;

function addComments(event) {
    event.preventDefault();
    let comment = document.getElementById("comment").value;
    let name = document.getElementById("name").value;
    let comments = {
        comment: comment,
        name: name,
        date: date
    }
    commentsArray.push(comments);
    localStorage.setItem("comments", JSON.stringify(commentsArray));
    getAndDisplay();
}

function showingAll() {
    if (showall) {
        document.getElementsByClassName("showing")[0].innerHTML = "..show more";
        showall = false;
    } else {
        document.getElementsByClassName("showing")[0].innerHTML = "..show less";
        showall = true;
    }
    return showall;

}

function getAndDisplay() {
    let text = '';
    let getcomments = JSON.parse(localStorage.getItem("comments"));
    if (getcomments) {
        commentsArray = getcomments;
        if (showingAll()) {
            for (let i of getcomments) {
                text += `<dl><dt><div style='float:left;margin-left:10px;color:grey;'> ${i.name} &nbsp;&nbsp;| ${i.date} </div></dt><br><dd><span> ${i.comment} </span></dd></dl>`
            }
        } else {
            for (let j = 0; j < 3; j++) {
                text += `<dl><dt><div style='float:left;margin-left:10px;color:grey;'> ${getcomments[j].name} &nbsp;&nbsp;| ${getcomments[j].date} </div></dt><br><dd><span> ${getcomments[j].comment} </span></dd></dl>`
            }
        }
        document.getElementById("addingComment").innerHTML = text;
    } else {
        commentsArray = [{ comment: "This is the best college in basis of Food Facilities and Cultural activities", name: "Annapoorni", date: date }, { comment: "Remarks: Placements are excellent. The standard of education is very good as all the teachers are experienced.The campus and the food is good.The other factors are they offer all facilities i.e from bus to books to food, everything is taken care of", name: "Ismail", date: date }, { comment: "Food inspector one of the best college in state the infrastructure are awesome; more extra curricular activities. Library is extrodinary to know more abt food tech and to work hard in careers", name: "Mahalakshmi", date: date }];
        localStorage.setItem("comments", JSON.stringify(commentsArray));


    }
}
getAndDisplay();

function filter() {
    let filterBy = document.getElementById("filterApplied").value;
    switch (filterBy) {
        case "All Reviews":
            console.log("all");
            break;
        case "Recently Posted":
            console.log("recent");
            break;
        case "Positive Reviews":
            console.log("positive");
            break;
        default:
            console.log("negative");
            break;
    }


}