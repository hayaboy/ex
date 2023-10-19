class Car {
    //필

    //생성자 constructor
    // Car() { 
    //     console.log("hi");
    // }
    
    // constructor() { 
    //     console.log("hi");
    // }

    // 생성자는 클래스 내부에 constructor라은 이름의 함수를 만들어서 활용, 클래스 내부에 함수(메서드)를 만들 때는 앞에 function 키워드를
    //따로 붙이지 않는다. 
    // 생성자는 원하는 초기화 형태 하나만 넣는다.
    // constructor(color) {
    //     this.color = color;
    // }

    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    //메
    // run() {
    //     console.log(`${this.color}의 색의 차가 ${this.speed}의 속도록 달리고 있습니다.`)
    // }
}

// new Car();
let my_car = new Car("white");
console.log(my_car.color);
console.log(my_car.speed);
// var mycar1 = new Car("파랑", 450);
// // console.log(typeof (mycar1));
// console.log(mycar1.color);
// console.log(mycar1.speed);
// mycar1.run();
// console.log("-------")
// console.log(mycar1)
// console.log(mycar1['color'])
// console.log(mycar1['speed'])
