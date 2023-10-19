// console.log(typeof ([]))

// let arr = Array(3)
// let arr = new Array(3)
// console.log(arr)
// console.log(typeof (arr))
// arr[0] = 3;
// arr[1] = 6;
// arr[2] = 9;
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// for (i in arr) {
//     console.log(arr[i]);
// }
// console.log("---------");
// for (obj of arr) {
//     console.log(obj);
// }

//이렇게 블록 내부에서 이름이 같아서 상위 블록에 있는 변수의 이름을 가리키는 것을 섀도잉(shadowing)

// let a = 1;
// let b = 1;
// {
//     let a = 2;
//     {
//         let a = 3;
//         console.log(a);
//         console.log(b);
//     }
//     console.log(a);
//     console.log(b);
// }

//호이스팅(hoisting)은 해당 블록에서 사용할 변수를 미리 확인해서 정리하는 작업
//실무에서는 해당블록에서 사용할 변수는 미리 블록의 가장 위에 적어둔다. 는 가이드라인을 두고 있음
// let a = 1;
// {
//     console.log(a); //곧 a를 사용할 것이니, 상위 블록에 있는 a는 취급하지 말자,
//     let a = 2;
// }


// var a = 1;
// {
//     console.log(a); //곧 a를 사용할 것이니, 상위
//     var a = 2;
// }

/*

1.
    (1) 배열
        (2) 요소
            (3) undefined
                (4) 무한 반복문 또는 무한 루프
                    (5) break
(6) continue
(7) 스코프(또는 블록도 답으로 허용)
    (8) var
(9) 섀도잉


(1) O
(2) X
::자바스크립트의 배열은 여러 종류의 자료형이 섞일 수 있습니다.::
(3) X
::C 언어 등의 프로그래밍 언어는 그렇지만, 자바스크립트는 그렇지 않습니다.::
(4) X
::자바스크립트는 배열의 범위를 넘는 요소에 접근해도 오류가 발생하지 않습니다.::
(5) X
::0부터 시작합니다.::
(6) O
(7) X
::break문으로도 가능합니다.::
(8) X
::인덱스가 들어갑니다.::
(9) X
::요소가 들어갑니다.::
(10) X
::중첩할 수 있습니다.::



*/

// let arr = [4, 'hi', true]
// for (let obj of arr) {
//     console.log(obj);
// }
// console.log(arr[3]);
/*
3. ②
4. 답 없음
5. ④ 
이때는 const 키워드를 사용할 수 없습니다.

6.
let i = 0;
while (i < 10) {
    console.log("출력");
    i++;
}
*/

// for (let i in [3,4,5]) {

// }

// for (const obj of [3, 4, 5]) {
//     console.log(obj)
// }
// let arr1 = [3, 4, 5]
// for (const i in arr1) {
//     console.log(arr1[i])
// }

// for (const i=0;i<3;i++) {
//     console.log("hi")
// }

// let i = 0;
// while (i < 10) {
//     console.log("출력");
//     i++;
// }

// let output = "";
// for (let i = 0; i < 8; i++) {
//     for (let j = 7; j >= i; j--) {
//         output += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         output += "*";
//     }
//     output += "\n";
// }
// console.log(output);
// let array = [52, 273, 32, 93, 103];

// // for in 반복문을 적용합니다.
// for (let i in array) {
//     console.log(array[i]);
// }

// 배열을 선언합니다.
// let array = [273, 52, 103, 57, 271];

// let min = Number.MAX_VALUE;
// let max = Number.MIN_VALUE;
// console.log(min)

// for (let obj of array) {
//     if (obj < min) {
//         min = obj;
//     }
//     if (obj > max) {
//         max = obj;
//     }

// }
// console.log(min);
// console.log(max);





// let array = [52, 71, 32, 103, 273, 93];

// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
// }





// let obj = {
//     "+": 1,
//     "-": 2,
//     "*": 3,
//     "/": 4
// };

// // console.log(obj["+"]);
// console.log(obj["+"]);


// String.prototype.contain = (input) => { return this.indexOf(input) >= -1; };
String.prototype.contain = function (input) {
    console.log(this);
    console.log(this.indexOf(input));
    return this.indexOf(input) > -1;
};
// console.log(`안녕하세요`.contain('안녕'));
console.log(`안녕하세요`.contain('데굴데굴'));

