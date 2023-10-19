//5-1-1 익명함수
//5-1-2 literal
//5-1-3 콜백함수
//5-1-4 매개변수
//5-1-5 리턴값
//5-1-6 return
//5-1-7 this

//5-2-1  O
//5-2-2  O
//5-2-3  X


// function f1() {
//     console.log("hi");
//     return 8;
// }
// f1();


//5-2-4  X
//5-2-5   X

// let x = 0o10;
// console.log(x);

// let x2 = 0x10;
// console.log(x2);
//5-2-6   X
//5-2-7   함수는 변수에 저장할 수 있다. X
//5-2-8   O
//5-2-9   X


// function test1() {
//     console.log("테스트 함수1");
// }

// let test2 = function () {
//     console.log("테스트 함수2");
// };

// test1()
// test2()

// function test3() => {
//     console.log("테스트 함수2");
// };


// 4 -4
// 5 -1

// console.log(undefined * 3)

// function test(a,b,c) {
//     console.log(a);
//     console.log(a*b);
//     console.log(a*b*c);
// }

// test(10,100)

// 5 - 7  1
// 5 - 8  2
//5 -9  setInterval

// 5-10 setTimeOut


// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(""));

// console.log(Boolean({}));
// console.log(Boolean([]));

// console.log(Boolean(null));
// console.log(Boolean(NaN));

// function f1(args) {
//     if (args) {
//         args = 10;
//     }
//     console.log(args);

// }

// f1();

// function f2(args=10) {

//     console.log(args);

// }

// f2();

// function f3(args) {
//     if (typeof(args)=='undefined') {
//         args = 10;
//     }
//     console.log(args);

// }

// f3();

// function f3(args) {
//     if (typeof (args) == 'undefined') {
//         args = 11;
//     }
//     console.log(args);

// }

// f3();



// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log(Boolean(4))

// console.log(4 || 10);

// console.log( false || 10);



// function f4(args) {
//     args = args || 10;
//     console.log(args);
// }

// f4();

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(4 && 10);
// console.log(4 && false);

// console.log(3 ** 3);


// function power(...args) {
//     if (args.length == 1) {
//         let res = args * args;
//         return res;
//     } else if (args.length == 2) {
//         let res2 = args[0] ** args[1];
//         return res2;
//     } else { 
//         console.log("매개변수를 넣으세요");
//     }
    
// }

// let result = power(2);
// console.log(result);
// let result2 = power(2,3);
// console.log(result2);
// let result3 = power();
// console.log(result3);


// function power(a, b) { 
//     if (!b) {
//         return a * a;
//     } else { 
//         let output = 1;
//         for (let i=0;i<b;i++) { 
//             output = output * a;
//         }
//         return output;
//     }

// }
// // console.log(power(2));
// console.log(power(3,10));

function multiply(...args) { 
    let tot = 1;
    for (let i=0;i<args.length ;i++) { 
        tot = tot * args[i];
    }
    return tot;

}

console.log(multiply(1, 2, 3, 4, 5,6));




