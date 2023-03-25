const bgTree = document.getElementById("two_photo");
document.addEventListener("mousemove", function (e) {
  MoveBackground(e);
});

function MoveBackground(e) {
    let X = (e.clientX / window.innerWidth * -30) - 15;
    let Y = (e.clientY / window.innerHeight * -10) - 5;
  bgTree.setAttribute(
    "style",
    "background-position: " + X + "px " + Y + "px;"
  );
}
const space = document.getElementById("first_photo");
document.addEventListener("mousemove", function (e) {
  MoveBackground(e);
});

function MoveBackground(e) {
    let X = (e.clientX / window.innerWidth * 30) - 15;
    let Y = (e.clientY / window.innerHeight * 10) - 5;
    space.setAttribute(
    "style",
    "background-position: " + X + "px " + Y + "px;"
  );
}