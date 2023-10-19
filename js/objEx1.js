// console.log(typeof ({}));
// var obj1 = { "a": "apple", "b": "banana" }  // json(자바스크립트 객체)
// console.log(obj1["a"]);
// console.log(obj1["b"]);
// console.log(typeof (obj1))
//배열
// console.log(typeof ([])) //배열객체
var arr = ["마라탕", "칼국수", "치킨"];
// console.log(typeof (arr));
// for (var i = 0; i < arr.length; i++) { 
//     console.log(arr[i]);
// }
// 향상된 for문 같은 것이 있는가?
for ( i in arr) { 
    console.log(arr[i]);
}
console.log("------------")
for (obj of arr) {
    console.log(obj);
}