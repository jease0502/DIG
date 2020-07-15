var photoIdx = 0;
var showImg = document.getElementById("showImg");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var pageInt = document.getElementById("pageInt");
function init(callback) {
  var ApiUrl = "https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050";
  axios.get(ApiUrl).then(function (res) {
    callback(res.data.img);
  });
}

init(function (imgArr) {
  imgChange(imgArr);
  pageIdxChange(imgArr.length);
  prevBtn.addEventListener("click", function () {
    photoIdx--;
    if (photoIdx < 0) {
      photoIdx = imgArr.length - 1;
    }
    imgChange(imgArr);
  });
  nextBtn.addEventListener("click", function () {
    photoIdx++;
    if (photoIdx > imgArr.length - 1) {
      photoIdx = 0;
    }
    imgChange(imgArr);
  });
});

function imgChange(imgArr) {
  showImg.src = imgArr[photoIdx];
  pageIdxChange(imgArr.length);
}

function pageIdxChange(allPageidx) {
  var pageIdx = photoIdx + 1;
  pageInt.innerHTML = pageIdx + "/" + allPageidx;
}
