function init() {
  axios
    .get("https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050")
    .then(function (res) {
      laodImages(res.data.img, function () {
        document.getElementsByClassName("laoding")[0].style.display = "none";
        setImagesSrc(res.data.img);
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function setImagesSrc(imgArr) {
  var html = "";
  for (var s = 0; s < imgArr.length; s++) {
    html += "<div>";
    html += '<img src="' + imgArr[s] + '" alt=""/>';
    html += "</div>";
  }
  document.getElementById("app").innerHTML = html;
}

init();
