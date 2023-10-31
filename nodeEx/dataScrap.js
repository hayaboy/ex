const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio"); //서버용으로 특별히 설계된 핵심 jQuery를 빠르고 유연하며 간결하게 구현합니다.

// const url = "https://www.hanbit.co.kr/store/books/new_book_list.html";

const titles = [];
for (let i = 1; i <= 83; i++) {
  const url =
    "https://www.hanbit.co.kr/store/books/new_book_list.html?page=" + i;

  request(url, (err, response, body) => {
    // console.log(body);

    const jq = cheerio.load(body);

    //   console.log(jq(".view_box"));

    jq(".view_box").each((index, element) => {
      // console.log(index);
      // console.log(element);

      const title = jq(element).find(".book_tit").text().trim();
      // console.log(title);
      // console.log(typeof title);
      titles.push(title);
    });

    console.log(titles);
    fs.writeFile("C:/ex/data/bookName2.txt", titles.toString(), (err) => {
      console.log(err);
      console.log("한빛미디어 새 책 이름 가져옴");
    });
  });
}

// "https://www.hanbit.co.kr/store/books/new_book_list.html?page=" + i;

// request(url, (err, response, body) => {
//   // console.log(body);

//   const jq = cheerio.load(body);

//   //   console.log(jq(".view_box"));
//   const titles = [];
//   jq(".view_box").each((index, element) => {
//     // console.log(index);
//     // console.log(element);

//     const title = jq(element).find(".book_tit").text().trim();
//     // console.log(title);
//     // console.log(typeof title);
//     titles.push(title);
//   });

//   console.log(titles);
//   fs.writeFile("C:/ex/data/bookName.txt", titles.toString(), (err) => {
//     console.log(err);
//     console.log("한빛미디어 새 책 이름 가져옴");
//   });
// });
