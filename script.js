window.onmousemove = function mouse(e) 
{
  document.querySelector(".space").style.backgroundPositionX = e.clientX * -0.05 + "px";
  document.querySelector(".space").style.backgroundPositionY = e.clientY * -0.05 + "px";

  document.querySelector(".three").style.backgroundPositionX = e.clientX * 0.01 + "px";
  document.querySelector(".three").style.backgroundPositionY = e.clientY * 0.01 + "px";
};
