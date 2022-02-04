// Checks if user has logged in and leads to next page, by passing leading page path as argument

function hasLoggedIn(pathOfNextPage) {
    let storedMail = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedMail) {
        window.location.href = `./${pathOfNextPage}`;
        console.log('correct');
    } else {
        console.log('eror');
        window.location.href = "./errorPage.html";
    }
}
// Checks if user is admin and leads to next page, by passing leading page path as argument

function adminError(pathOfNextPage) {
    let isAdmin = JSON.parse(localStorage.getItem("loggedInUser"));
    if (isAdmin) {
        if (isAdmin[1] == "admin") {
            window.location.href = `./${pathOfNextPage}`;
        } else {
            window.location.href = `./adminError.html`;
        }
    } else {
        window.location.href = "./errorPage.html";
    }

}

// Checks whether user is admin; if yes, then leads to admin page, else leads to user page

function isAdminCoursePage(index) {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log(index);
    if (loggedInUser && loggedInUser[1] == "admin") {
        window.open(`courseDetailsAdmin.html?courseIndex=${index}`);

    } else {
        window.open(`./courseDetails.html?courseIndex=${index}`);
    }
}