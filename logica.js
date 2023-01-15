let navigation = document.getElementById("navigation");
let hamburger = document.getElementById("hamburger-menu");

window.addEventListener("resize", function () {
  if (window.innerWidth < 800) {
    navigation.style.display = "none";
    hamburger.style.display = "block";
  } else {
    navigation.style.display = "block";
    hamburger.style.display = "none";
  }
});
