let alert = document.querySelector(".alert");

function search() {
    const searchInput = document.querySelector("#searched");
    let searched = searchInput.value.replace(/\s+/g, '').toLowerCase();
    console.log(searched);
    if (searchInput.value != "") {
        switch (searched) {
            case "aboutus":
                window.open("./about.html");
                break;
            case "about":
                window.open("./about.html");
                break;
            case "home":
                window.open("./home.html");
                break;
            case "courses":
                window.open("./courseDetails.html");
                break;
            case "course":
                window.open("./courseDetails.html");
                break;
            case "reviews":
                window.open("./reviews.html");
                break;
            case "review":
                window.open("./reviews.html");
                break;
            default:
                alert.setAttribute("style", "z-index : 10;opacity:1");
        }
    }
}

function hideAlert() {
    alert.setAttribute("style", "z-index:-10; opacity:0");
    document.getElementById("searched").value = "";
}