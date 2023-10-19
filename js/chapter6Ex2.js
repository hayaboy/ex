let products = [
    {name:'바나나', price:1200},
    { name: '사과', price: 2000 },
    { name: '배', price: 3000 },
    { name: '고구마', price: 700 },
    { name: '감자', price: 600 },
    { name: '수박', price: 5000 }
]
// console.log(products)
// console.log(typeof(products))

// for (let obj of products) { 
//     console.log(obj);
// }
// for (let i in products) {
//     console.log(products[i]);
// }
//객체 안에 배열 , 빅데이터에서 가장 많이 쓰는 형태 -> JSON으로 연결됨

let products2 = {
    fruitName: ['바나나', '사과'], 
    fruitPrice: [1000,2000]
}
console.log(products2.fruitName)
console.log(products2.fruitPrice)

//빅데이터에서 가장 많이 쓰는 형태 -> JSON으로 연결됨


let products3 = {
    fruitName: [{ summerFruit: [{ summerFruitKing: [{ dkkd: [] }] }, '사과']}, {}],
    fruitPrice: [1000, 2000]
}

