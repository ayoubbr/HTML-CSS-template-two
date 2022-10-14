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
let right = document.getElementById("right");

let left = document.getElementById("left");

// let ar = ["../images/landing.jpg", "../images/1.png", "../images/2.png"];

// right.onclick = function () {
//   for (let index = 0; index < ar.length; index++) {
//     landing.style.backgroundImage = `url(${ar[index]})`;
//     console.log(index);
//   }
// };

// left.onclick = function () {
//   landing.style.backgroundImage = `url(${ar[index -1]})`;
// };
