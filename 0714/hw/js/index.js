import imgChange from "./imgChange.js";
import pageIdxChange from "./pageIdxChange.js";

var count = 0;
var showImg = document.getElementById("picture");
var pre = document.getElementById("pre");
var next = document.getElementById("next");
var number = document.getElementById("number");

init(function (imgArr) {
  imgChange(imgArr, count);
  pageIdxChange(imgArr.length);
  pre.addEventListener("click", function () {
    count--;
    if (count < 0) {
      count = imgArr.length - 1;
    }
    imgChange(imgArr);
  });
  next.addEventListener("click", function () {
    count++;
    if (count > imgArr.length - 1) {
      count = 0;
    }
    imgChange(imgArr);
  });
});
