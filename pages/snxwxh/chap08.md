# 08 제어문

## **8.1 블록문(Block Statement)**

- 0개 이상의 문을 중괄호 `{}` 로 묶은 코드 블록
- 하나의 실행 단위로 취급됨
- 블록문의 끝에는 세미콜론을 붙이지 않음

## **8.2 조건문(Conditional Statement)**

- 조건식의 평가 결과에 따라 코드 블록 실행 여부 결정
- 조건식은 불리언 값으로 평가될 수 있는 식

### **if ... else 문**

- 조건식의 평가 결과가 `true`이면 `if` 코드 블록 실행
- `false`이면 `else if` 또는 `else` 코드 블록 실행

```jsx
if (num > 0) kind = '양수';
else if (num < 0) kind = '음수';
else kind = '0';
```

- 삼항 조건 연산자로 변환 가능

```jsx
kind = num > 0 ? '양수' : num < 0 ? '음수' : '0';
```

### **switch 문**

- 표현식을 평가하여 값과 일치하는 `case` 문 실행
- 일치하는 `case` 문이 없으면 `default` 문 실행 (선택사항)

```jsx
let num = 3;
let name;
switch (num) {
  case 1:
    name = 'one';
    break;
  case 2:
    name = 'two';
    break;
  case 3:
    name = 'three';
    break;
  default:
    name = 'other';
}
console.log(name); // three
```

- `break` 문이 없으면 다음 `case` 문이 실행됨

## **8.3 반복문(Loop Statement)**

- 조건식이 `true`인 동안 코드 블록 실행
- 조건식이 `false`가 되면 반복 종료

### **for 문**

- 변수 선언 → 조건식 평가 → 코드 실행 → 증감식 수행

```jsx
for (let i = 0; i < 2; i++) console.log(i); // 0 1
```

### **while 문**

- 조건식이 `true`이면 코드 블록 실행

```jsx
let i = 0;
while (i < 2) console.log(i++); // 0 1
```

- 조건식이 항상 `true`이면 무한 루프 발생
- `break` 또는 `continue` 문으로 흐름 제어 가능

## **8.4 break 문**

- `레이블 문`, `반복문`, `switch 문`을 탈출함

```jsx
foo: for (let i = 0; i < 100; i++) {
  for (let j = 100; j > 0; j--) {
    if (i === j) break foo; // 바깥 for문 탈출
  }
}
```

## **8.5 continue 문**

- 반복문의 코드 블록 실행을 중단하고 증감식으로 이동

```jsx
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) continue; // 짝수 건너뛰기
  console.log(i); // 홀수만 출력
}
```
