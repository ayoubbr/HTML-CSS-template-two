let lis = document.querySelectorAll(".ul li");

lis.forEach((element) => {
  element.addEventListener("click", (e) => {
    lis.forEach((ele) => {
      ele.firstChild.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// //////////////////////
let landing = document.querySelector(".landing");
let next = document.getElementById("right");
let prev = document.getElementById("left");

let ar = ["../images/landing.jpg", "../images/1.png", "../images/2.png"];
next.onclick = nextSlide;
prev.onclick = prevSlide;

function nextSlide() {}
function prevSlide() {}


