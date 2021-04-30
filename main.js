const button1 = document.querySelector("#btn-1");
const button2 = document.querySelector("#btn-2");
const button3 = document.querySelector("#btn-3");

const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const portfolio = document.querySelector("#protfolio");

button1.addEventListener("click", function btn1() {
    about.style.display = "block";
    skills.style.display = "none";
    portfolio.style.display = "none";
});

button2.addEventListener("click", function btn2() {
    skills.style.display = "block";
    about.style.display = "none";
    portfolio.style.display = "none";
});

button3.addEventListener("click", function btn3() {
    portfolio.style.display = "block";
    about.style.display = "none";
    skills.style.display = "none";
});

const navBar = document.querySelector("#bars");
const navManu = document.querySelector(".menu");
const navBar2 = document.querySelector("#bars-2");

navBar.addEventListener("click", function bars() {
    navManu.style.display = "block";
    navBar.style.display = "none";
    navBar2.style.display = "block";
});


navBar2.addEventListener("click", function bars2() {
    navManu.style.display = "none";
    navBar2.style.display = "none";
    navBar.style.display = "block";
});