var BTN = document.getElementsByClassName("btn");

function handClickFn(e) {
  e.target.style.fontSize = "80px";
}

for (var i = 0; i < BTN.length; i++) {
  BTN[i].addEventListener("click", handClickFn);
  console.log(55);
}
