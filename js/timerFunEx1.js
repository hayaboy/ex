

//event
//웹에서의 이벤트란 제일 쉬운 예로 클릭이라고 생각하면 되고
//그 이벤트가 어딘가에 등록이 되어 있어야 실행을 할 수 있다.
//그 이벤트를 등록한다는 이야기는 결국 이벤트가 일어났을 때 무언가 실행하라는 이야기입니다.
//결국 실행(기능)하라는 것은 함수로 정의 되어 있어야 합니다.


//handle(다룬다. ) handler(다루는 놈) handling(다루는 것)
// 이벤트가 일어났을 때 다룬다. 결국 그 함수가 실행되도록 정의해놓는 것을 말한다 .

// setTimeout(핸들러, 초(밀리세컨드))

// function pnt() {
//     console.log("저녁은 뭐 먹지...");
// }

// let pnt=function () {
//     console.log("저녁은 뭐 먹지...");
// }


// let pnt = () => { console.log("저녁은 뭐 먹지..."); }
// setTimeout(pnt, 7000);

// let pnt = () => { console.log("째깍째각"); }

// let id = setInterval(pnt, 1000);
// console.log("뭐가 나올까", id);

// clearInterval(id)

// let cInterval = function () {
//     clearInterval(id);
// }


// setTimeout(cInterval, 5000);

// 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 펑....하는 카운트다운 하는 프로그램을 짜보세요...

//  setTimeout(cInterval, 12000);



// for (let i = 10; i > 0; i--) {

//     let arr = i;
//     let fun1 = () => { console.log(arr) }
//     setTimeout(fun1, 1000);

// }
// console.log("펑");


let count = 10;
const interval=setInterval(countdown, 1000);
function countdown() {
    console.log(count);
    count--;

    if (count < 0) {
        console.log("뻥");
        clearInterval(interval);
    }
}

// setInterval(countdown, 1000);
// const interval = setInterval(countdown, 1000);
console.log(typeof (interval));