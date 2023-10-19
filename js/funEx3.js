//화살표(=>) 함수


// 1)
// let sunja1 = () => {console.log("hi")};
// console.log(sunja1);
// sunja1();

//2)
// let sunja2 = (gift) => {console.log(gift)};
// sunja2("탕후루");

//3)
// let sunja3 = () => { return "과자" };
// let gift = sunja3();
// console.log(gift);

//4)
let sunja4 = (gift) => {
    console.log(gift);
    return "과자"
};
let gift = sunja4("튀김");
console.log(gift);