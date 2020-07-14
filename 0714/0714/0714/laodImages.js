function laodImages(imgArr, onComplate) {
  var loadInt = 0;
  for (var i = 0; i < imgArr.length; i++) {
    var img = new Image();
    img.src = imgArr[i];
    img.onload = function () {
      loadInt++;
      if (loadInt === imgArr.length) {
        onComplate();
      }
    };
  }
}
