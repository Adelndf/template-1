let myUl = document.getElementById("minuUl");
let minu = document.querySelector(".minu");

minu.addEventListener("click", function () {
  if (myUl.style.display === "block") {
    myUl.style.display = "none";
  } else {
    myUl.style.display = "block";
  }
});
