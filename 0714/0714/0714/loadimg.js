var imgArray = [
  "https://images.unsplash.com/photo-1559286023-3d27c0e06d80?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=200",
  "https://images.unsplash.com/photo-1426986877401-1b61ae18fb0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=200",
  "https://images.unsplash.com/photo-1425321395722-b1dd54a97cf3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=200",
  "https://images.unsplash.com/photo-1433878665141-d6ceaf394ae2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=200",
  "https://images.unsplash.com/photo-1423347673683-ccdb7f6a948f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=200",
  "https://images.unsplash.com/photo-1425321556545-264e4650274c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=200",
  "https://images.unsplash.com/photo-1445359179985-460648949e10?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=200",
  "https://images.unsplash.com/photo-1425321505542-00715f6a9c28?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=200",
];

function init() {
  laodImages(imgArray, function () {
    document.getElementsByClassName("laoding")[0].style.display = "none";
    setImagesSrc(imgArray);
  });
}

function setImagesSrc(imgArr) {
  for (var s = 0; s < imgArr.length; s++) {
    document.getElementById("img" + (s + 1)).src = imgArr[s];
  }
}

init();
