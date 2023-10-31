const request = require('request');

const url = "https://www.hanbit.co.kr/store/books/new_book_list.html";

// request(url, (err, data) => {
//     console.log(data);
//     console.log(err);
// });


request(url, (err, response, body) => {
    // console.log(response);
    console.log(body);
});