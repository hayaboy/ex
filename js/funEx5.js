
// let num1;
// console.log(num1);

// console.log(num1 == undefined)
// console.log(num1 === undefined)

//함수의 2(O, X) 형태
// function print(name, count) {
//     if (count == undefined ) {
//         count = 1;
//     }
//     console.log(`${name}이/가 ${count}개 있음`);
// }
// print("사과", 10)
// print("사과")

function print(name, count = 0) {

    console.log(`${name}이/가 ${count}개 있음`);
}
print("사과", 10)
print("사과")