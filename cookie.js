const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true"); /* F12 > Application > Local Storage */
});

setTimeout(() => {
    if(!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
    }
}, 1000);


function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }