
//1)
if (true) {
    console.log("참이면 나올 결과");
}

//2)
if (false) {
    console.log("참이면 나올 결과");
} else {
    console.log("거짓이면 나올 결과");
}

//3)
if (false) {  //1)
    console.log(" 1) 참이면 나올 결과");
} else if (true) { //2)
    console.log(" 2) 참이면 나올 결과");
} else {
    console.log(" 위 조건에 부합하지 않을 경우 나오는 나머지 부분");
}
