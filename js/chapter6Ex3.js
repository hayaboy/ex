
// let obj = {
//     name: "Nature of Code",
//     price: 30000,
//     author: "다니엘 쉬프만",
//     ISBN: "674654",
//     page: 620
// }

class Product {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }

    calculate(weight) {
        // 1g의 단위 가격 계산 후 매개 변수로 받은 무게를 곱함
        return (weight / this.weight) * this.price;
    }
}

let prod1 = new Product("돼지삼겹살", 100, 1690);
let price = prod1.calculate(200);
console.log(`${price}원`)