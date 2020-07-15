export default function imgChange(imgArr, count) {
  showImg.src = imgArr[count];
  pageIdxChange(imgArr.length);
}
