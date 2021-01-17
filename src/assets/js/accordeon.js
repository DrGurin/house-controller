let buttons = document.getElementsByClassName("burger__wrapper__button");
let accordions = document.getElementsByClassName("accordion");
let pannels = document.getElementsByClassName("accordion__panel");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    this.classList.toggle("open");
    accordions[i].classList.toggle("active");
    let panel = pannels[i];
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    console.log(pannels[i]);
  });
}
