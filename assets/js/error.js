function hasLoggedIn(pathOfNextPage) {
    let storedMail = localStorage.getItem("loggedInUser");
    if (storedMail != null) {
        window.location.href = `./${pathOfNextPage}`;
    } else {
        window.location.href = "./errorPage.html";
    }

}