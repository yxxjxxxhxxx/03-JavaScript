// let shoppingDone = false; //쇼핑 진행 여부
// let childsAllowance; // 내 용돈

// if (shoppingDone === true) {//엄마의 쇼핑을 도와줬으면 용돈을 더 받는다.
//     childsAllowance = 10;   
// } else {
//     childsAllowance = 5; //쇼핑을 도와주지 않아 조금 밖에 못받는다.   
// }

// console.log(`내 용돈은 ? ${childsAllowance} 딸러 !`);
//===========================
// 1. if
// let monster = '리자몽';
// if(monster === '리자몽') {
//     console.log('일단 백만볼트 쓰고, 몸통 박치기 1,000회 실시');
// } else {
//     console.log('백만 볼트 !!'); // 웅이 사망.
// }

// 2. else if
// let monster = '거북왕';
// if (monster === '리자몽') {
//     console.log('119 신고');
// } else if (monster === '거북왕') {
//     console.log('도망');
// } else { // else if 는 if 와 else 사이에만 작성 가능
//     console.log('백만볼트');
// }

// 3. 조건의 중첩(Nesting)
// let monster = '거북왕';
// let physical = '작고 귀여운';

// if (monster === '거북왕') {
//     if(physical === '작고 귀여운') {
//         console.log('싸운다');
//     }else {
//         console.log('run away');
//     }
//     }

const select = document.querySelector('select');
//console.log(select);

const paragraph = document.querySelector('p');
//console.log(paragraph);

select.addEventListener('change', setResult);

function setResult() {
    const choice = select.value;
    if (choice === 'one') { // 값이 1번이면.
        paragraph.textContent = '천사가 쿠키를 주고 갔다';
    } else if(choice === 'two') { //2번이면
        paragraph.textContent = '엄마한테 혼났다 !';
    } else { //1번, 2번이 아닐경우 (3번일경우)
        paragraph.textContent ='가만히 있어';   
    } 
}



