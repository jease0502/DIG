// var a = 1;
// var b = 2;
// const c = 3;
// var timeout = 1000;
// for (let index = 0; index < 5; index++) {
//   setTimeout(() => {
//     console.log(index);
//   }, timeout);
// }

// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   console.log(this);
// });

// const add = function (a, b) {
//   return a + b;
// };

// const add1 = (a, b) => {
//   return a + b;
// };

// const add2 = (a = 1, b = 9) => a + b;

// console.log(add(1, 2));
// console.log(add1(1, 2));
// console.log(add2(1, 2));
// console.log(add2());

// const obj = {
//   name: "mike",
// };
// obj.name = "dsd";
// console.log(obj);

// const id = 5;
// const str = `這個數字是${id}`;
// console.log(str);
// function setImagesSrc(imgArr) {
//   var html ="";
//   for(var i = 0; i < imgArr.length;s++){
//     html + = `
//       <div>

//       </div>
//     `
//   }
// }

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr4 = [...arr1, ...arr2];
// const a = [1, 2, 3, ...arr4];
// console.log(a);
const promise1 = (api) => {
  return new Promise((resolve, reject) => {
    axios
      .get(api)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

Promise.all([
  promise1(" https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050
  ")
  promise1(" https://run.mocky.io/v3/f7bc1c2e-93ac-4ef6-b351-417ee9724ae1
  ")
  promise1("  https://run.mocky.io/v3/1e5895d7-3160-4f6e-bc68-936b89188c1a
  ")

  

])