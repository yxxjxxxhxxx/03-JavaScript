// 한줄주석 
/* 두줄이상 주석 */
console.log(5)

/*
    변수 선언을 위한 "키워드"의 종류 3가지
    var(variable), let, const(constants, 상수)

    변수를 생성하기 위한 2가지 단계, 과정
    1. 변수의 선언과 정의 (Declaration, Definition)
    2. 변수의 초기화(Initiallization)
    Variable Naming Convention(변수 이름 명명 규칙)
    1. Java, JavaScript 에서는 camelCase
    2. Python 에서는 snake_case

*/
let yourName; // 변수 선언, yourName 이라는 공간 할당 받음, undefind
yourName = 'yunjonghyun'; //변수의 초기화(Initiallization)
let userName = 'YxxJxxxHxxx'; // 한번에 쓰기 사용자 이름은 'Yun'

console.log(userName);

//변수는 재할당(Reassingnment) 가능
userName = "why";
console.log(userName);

// 상수(Constant), 재할당 불가, 처음에만 할당 가능
const allUser = 20;
console.log(allUser);

allUser = 5; 
/* Uncaught TypeError: Assignment to constant variable.
   at variables_contants.js:29:9 */
