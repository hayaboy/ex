const lodash = require('lodash');

const arr = [{ name: '고구마', price: 1000 },
            {name: '감자', price: 500 },
    { name: '바나나', price: 1500 }]
            
// arr.forEach((item, idx) => {

//     console.log(`${idx}와 ${item.name} ${item.price}`);


// });
 


// let sortedFood = lodash.sortBy(arr, (item) => item.price);
let sortedFood2 = lodash.sortBy(arr, (item) => item.name);

console.log(sortedFood2);



