const repl = require('repl');

repl.start({

    prompt: "숫자입력>",
    eval: (command, context, filename, callback) => {

        //REPL에서 입력된 명령을 평가하는 함수를 정의합니다. 이 함수는 네 개의 매개변수를 받습니다.

        // command: 사용자가 입력한 명령 문자열입니다.
        // context: REPL 실행 컨텍스트입니다.보통 전역 객체를 나타냅니다.
        // filename: 현재 실행 중인 파일의 이름입니다.
        // callback: 명령 평가가 완료되면 호출되는 콜백 함수입니다.

        let number = Number(command);

        if (isNaN(number)) {
            console.log("숫자가 아닙니다.");
        } else {
            console.log("숫자 입니다.");
        }


        callback();
    }


});