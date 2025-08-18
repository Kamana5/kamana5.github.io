// Fetching the different pages for the portfolio section
document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res =>  res.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
    })

});

document.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    });
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("../index.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("homepage-container").innerHTML = data;
    });
});