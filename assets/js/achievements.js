function showAllPortfolios() {
    console.log(document.getElementsByClassName("portfolio more"));
    let portfolios = document.getElementsByClassName("portfolio more");
    document.getElementsByClassName("moreOption")[0].style.display = "none";
    for (i in portfolios) {
        portfolios[i].style.display = "block";

    }
}