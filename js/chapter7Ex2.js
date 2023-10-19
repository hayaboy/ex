
// class Test {

// }

// let t1 = new Test();
// console.log(typeof (t1));


// Test.p1 = 373; //속성 추가
// console.log(Test.p1);

// Test.m1 = function () {   //메서드 추가
//     console.log("hi");
// }
// Test.m1();

//체이닝(chaining) 기법 : 메소드를 줄줄이 연결해서 사용

// let str = "Hello World";
// // str = str.toLowerCase();
// // str = str.replace(' ', '|');
// // let arr = str.split('|');

// let arr = str.toLowerCase().replace(' ', '|').split('|');

// console.log(arr);
// let arr = [52, 273, 32];
// arr.forEach((item, index) => { console.log(`${index}에있는 요소는 ${item}`) });

// let arr2 = [52, 273, 32];
// arr2.forEach((item, idx) => { console.log(`${idx}에있는 요소는 ${item}`)});



let arr3 = [1, 2, 3];

// let arr4 = arr3.map((item, idx) => { return item + 1; });
// console.log(arr4);

// let arr5 = arr3.map((item, idx) => { return item * item; });
// console.log(arr5);


// let arr6 = arr3.map((item, idx) => { return (item * item) / 2; });
// console.log(arr6);


let arr7 = arr3.map((item, idx) => { return item % 2  == 0; });
console.log(arr7);



let arr8 = arr3.filter((item, idx) => { return item % 2  == 0; });
console.log(arr8);
