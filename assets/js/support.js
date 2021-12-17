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

function displayDetails() {
    let text = '';
    for (let i = 0; i < commentsArray.length; i++) {
        text += "<dl><dt><font color='grey' style='float:left;margin-left:10px'>" + commentsArray[i].name + "&nbsp;&nbsp;| " + commentsArray[i].date + "</font></dt><br><dd><span>" + commentsArray[i].comment + "</span></dd></dl>";
    }
    document.getElementById("addingComment").innerHTML = text;
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