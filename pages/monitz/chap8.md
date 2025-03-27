# chap 8

## 📘 제8장: 제어문

---

### 🔹 8.1 코드 흐름의 제어

프로그래밍은 기본적으로 **위에서 아래로 순차적으로 코드가 실행**된다.

그러나 모든 코드가 순차적으로만 실행된다면 **조건에 따라 다른 실행 경로를 선택하거나**,

**특정 코드를 반복적으로 실행해야 하는 상황**을 구현할 수 없다.

이처럼 **코드 실행 흐름을 제어하기 위해 사용하는 문장**을 **제어문(control statement)**이라고 한다.

---

### 🔹 8.2 블록문 (Block Statement)

- *블록문(block statement)**은 0개 이상의 문(statement)을 `{}` 중괄호로 묶은 코드 블록이다.

```jsx
javascript
복사편집
{
  let x = 1;
  console.log(x);
}
```

- 블록문은 자체로 하나의 문으로 간주된다.
- 블록문은 **제어문의 실행 구문으로 자주 사용**된다.
    
    예: if, for, while 등의 본문에 사용됨
    

---

### 🔹 8.3 조건문 (Conditional Statement)

조건문은 **주어진 조건에 따라 실행할 코드를 선택**하는 데 사용된다.

조건의 결과는 반드시 **불리언(true/false)**이어야 하며,

자바스크립트는 피연산자를 불리언으로 **암묵적으로 타입 변환**하여 평가한다.

---

### ✅ 8.3.1 if...else 문

```jsx
javascript
복사편집
if (조건식) {
  // 조건식이 true일 때 실행
} else {
  // 조건식이 false일 때 실행
}

```

- else는 선택 사항이며, 여러 개의 조건이 필요한 경우 `else if`를 사용할 수 있다.

```jsx
javascript
복사편집
const score = 85;

if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else {
  console.log('C');
}

```

---

### ✅ 8.3.2 switch 문

**하나의 표현식 결과에 따라 여러 경우 중 하나를 실행**하는 조건문이다.

```jsx
javascript
복사편집
const fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('바나나');
    break;
  case 'apple':
    console.log('사과');
    break;
  default:
    console.log('모름');
}
```

- `case` 절은 `break`로 종료하지 않으면 **fall-through**가 발생하여 다음 case가 계속 실행된다.
- `default`는 어느 case에도 해당하지 않을 때 실행되며, 생략 가능하다.

---

### 🔹 8.4 반복문 (Loop Statement)

**동일한 작업을 반복적으로 실행**할 때 사용하는 문이다.

조건이 true인 동안 코드를 반복 실행한다.

---

### ✅ 8.4.1 while 문

```jsx
javascript
복사편집
while (조건식) {
  // 조건식이 true인 동안 반복 실행
}
```

- 조건식이 false가 될 때까지 계속 반복한다.
- 조건이 처음부터 false라면 **한 번도 실행되지 않는다.**

```jsx
javascript
복사편집
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

---

### ✅ 8.4.2 do...while 문

```jsx
javascript
복사편집
do {
  // 코드 블록
} while (조건식);

```

- **조건 검사를 나중에 하기 때문에 최소 한 번은 실행된다.**

```jsx
javascript
복사편집
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
```

---

### ✅ 8.4.3 for 문

**초기식, 조건식, 증감식을 한 줄에 작성**하는 가장 일반적인 반복문이다.

```jsx
javascript
복사편집
for (초기식; 조건식; 증감식) {
  // 반복 실행할 코드
}
```

```jsx
javascript
복사편집
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

- 세 구성요소는 모두 생략 가능하며, 세미콜론 2개는 필수이다.
- 무한 루프가 되지 않도록 주의해야 한다.

---

### 🔹 8.5 break 문

`break`는 **가장 가까운 반복문 또는 switch 문을 종료**시킨다.

```jsx
javascript
복사편집
for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  console.log(i); // 0, 1, 2
}
```

- 조건이 만족되면 반복문 전체를 빠져나간다.

---

### 🔹 8.6 continue 문

`continue`는 반복문의 나머지 부분을 건너뛰고 **다음 반복을 진행**하게 한다.

```jsx
javascript
복사편집
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) continue;
  console.log(i); // 1, 3
}
```

- `break`는 반복 자체를 종료하지만, `continue`는 현재 반복만 생략하고 다음 반복으로 넘어간다.

---

### 🔹 8.7 label 문

`label`은 반복문 앞에 이름을 붙여서 `break` 또는 `continue`가

**지정한 반복문을 명시적으로 종료하거나 건너뛰도록 만든다.**

```jsx
javascript
복사편집
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) break outer;
    console.log(`i: ${i}, j: ${j}`);
  }
}
```

- label은 특정 코드 블록의 식별자 역할을 하며,
    
    중첩 반복문에서 **바깥 반복문을 조작할 수 있게 해준다.**
    

---

### 🔹 8.8 조건문과 반복문의 중첩

조건문과 반복문은 자유롭게 **중첩될 수 있다.**

```jsx
javascript
복사편집
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    console.log(`${i}는 짝수`);
  }
}
```

- 중첩이 깊어질수록 **가독성과 유지보수성이 떨어지므로**,
    
    **함수로 분리하거나 로직을 단순화하는 것이 좋다.**
    

---

## ✅ 정리 요약

| 항목 | 설명 |
| --- | --- |
| 블록문 | 중괄호로 감싼 문장들의 묶음이다. |
| 조건문 | if, else, switch 등을 통해 조건에 따라 실행 흐름을 나눈다. |
| 반복문 | while, do...while, for 등으로 코드를 반복 실행한다. |
| break / continue | 반복문의 흐름을 조절한다. break는 종료, continue는 다음 반복 진행이다. |
| label 문 | 중첩 루프에서 외부 반복문 제어를 가능하게 한다. |
| 중첩 구조 | 조건문과 반복문은 자유롭게 중첩되며, 가독성을 고려해 설계해야 한다. |