// if ~ else if ~ else
// switch ~ case
// for, while, do while
// 모두 c계열 문법과 거의 동일

// 연습문제 1-1) for 문 구구단
// 2단 ~ 9단까지 루프 돌며 출력
for (let i = 2; i <= 9; i++) {
    let result = '';
    for (let j = 1; j <= 9; j++) {
        result += `${i} x ${j} = ${i * j}\t`;
    }
    console.log(result);
}

// 연습문제 1-2) while 문 구구단
// 2단 ~ 9단까지 루프 돌며 출력
let i = 2;

while (i <= 9) {
    let j = 1;
    let result = '';

    while (j <= 9) {
        result += `${i} x ${j} = ${i * j}\t`;
        j++;
    }

    console.log(result);
    i++;
}

// 연습문제 2-1) for 문을 이용해서 별 그리기
let numRows = 5;




// 연습문제 2-2) while 문을 이용해서 별 그리기


// TODO: for ... in
//      - 객체의 속성 key를 반복하여 루프

// TODO: for ... of
//      - 컬렉션 객체(배열)의 요소 순환