export default function init(callback) {
  var ApiUrl = "https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050";
  axios.get(ApiUrl).then(function (res) {
    callback(res.data.img);
  });
}
