var aboutSectionButton = document.querySelector("#about-nav");
var wmmSectionButton = document.querySelector("#wmm-nav");
var moodSectionButton = document.querySelector("#mood-nav");

var moodSection = document.querySelector("#mood-box");
var wmmSection = document.querySelector("#wmm-box");
var aboutSection = document.querySelector("#about-box");

moodSectionButton.addEventListener("click", function () {
  moodSection.removeAttribute("style", "display: none");
  wmmSection.setAttribute("style", "display: none");
  aboutSection.setAttribute("style", "display: none");
});

wmmSectionButton.addEventListener("click", function () {
  wmmSection.removeAttribute("style", "display: none");
  moodSection.setAttribute("style", "display: none");
  aboutSection.setAttribute("style", "display: none");
});

aboutSectionButton.addEventListener("click", function () {
  aboutSection.removeAttribute("style", "display: none");
  moodSection.setAttribute("style", "display: none");
  wmmSection.setAttribute("style", "display: none");
});
