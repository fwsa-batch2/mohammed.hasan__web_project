let commentsArray = [];
date = new Date().toDateString().substr(4, );

function addComments() {
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
    displayDetails();
}
let text = '';
var allText = '';

function displayDetails() {

    for (let i = 0; i < commentsArray.length; i++) {
        if (i < 3) {
            text += "<dl><dt><font color='grey' style='float:left;margin-left:10px'>" + commentsArray[i].name + "&nbsp;&nbsp;| " + commentsArray[i].date + "</font></dt><br><dd><span>" + commentsArray[i].comment + "</span></dd></dl>";
        } else {
            allText += "<dl><dt><font color='grey' style='float:left;margin-left:10px'>" + commentsArray[i].name + "&nbsp;&nbsp;| " + commentsArray[i].date + "</font></dt><br><dd><span>" + commentsArray[i].comment + "</span></dd></dl>";
        }
    }
    document.getElementById("addingComment").innerHTML = text;
    document.getElementById("addingAllComments").innerHTML = allText;
}

function onRefresh() {
    let getcomments = JSON.parse(localStorage.getItem("comments"));
    if (getcomments) {
        commentsArray = getcomments;
    } else {
        commentsArray = [];
    }
    displayDetails();
}
onRefresh();

function showMore() {
    let allComments = document.getElementById("addingAllComments");
    console.log(allComments.style.display);
    if (allComments.style.display == 'none') {
        allComments.style.display = 'block';
        document.getElementsByClassName("showing")[0].innerHTML = "..show less";
    } else {
        allComments.style.display = 'none';
        console.log('hi');
        document.getElementsByClassName("showing")[0].innerHTML = "..show more";
    }
}