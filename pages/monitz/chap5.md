# chap 5

## 📘 제5장: 표현식과 문

---

### 🔹 5.1 값

자바스크립트에서 **값(value)**은 **식(expression)**이 평가되어 생성된 **결과물**이다.

값은 **변수에 저장되거나, 연산의 대상이 되거나, 함수의 반환값이 될 수 있다.**

```jsx
javascript
복사편집
const x = 3 + 5; // 8 → 값

```

- `3 + 5`는 표현식이며, 그 결과인 `8`이 값이다.

---

### 🔹 5.2 리터럴

리터럴(literal)은 **사실상 “값 그 자체”를 소스 코드에 표기한 것**이다.

즉, 개발자가 코드에 직접 써넣은 상수값이다.

```jsx
javascript
복사편집
10          // 숫자 리터럴
'hello'     // 문자열 리터럴
true        // 불리언 리터럴
[1, 2, 3]   // 배열 리터럴
{ a: 1 }    // 객체 리터럴
function() {} // 함수 리터럴

```

리터럴은 표현식의 한 종류이며, 해석 시 값으로 평가된다.

---

### 🔹 5.3 표현식 (Expression)

- *표현식(expression)**은 **값으로 평가될 수 있는 문**이다.

표현식은 평가되면 **반드시 하나의 값을 반환**한다.

### 표현식의 예:

```jsx
javascript
복사편집
3 + 5          // 8
x = 10         // 10
'hello'        // 'hello'
myFunc()       // 함수의 반환값

```

### 표현식의 종류

- **리터럴 표현식**: `100`, `"abc"`, `true`
- **식별자 표현식**: 변수 이름 (`x`, `total`)
- **연산자 표현식**: `a + b`, `x * 2`
- **함수 호출 표현식**: `alert('hi')`
- **할당 표현식**: `x = y`

모든 표현식은 값으로 평가되므로 **표현식은 값처럼 사용할 수 있다.**

```jsx
javascript
복사편집
const result = (10 + 20) * 2;

```

---

### 🔹 5.4 문 (Statement)

- *문(statement)**은 **명령문으로, 프로그램을 구성하는 최소 실행 단위**이다.

문은 실행되어 어떤 **동작을 수행하지만, 값으로 평가되지 않을 수도 있다.**

### 문에는 다음과 같은 종류가 있다:

- **선언문**: 변수 선언, 함수 선언 등
    
    ```jsx
    javascript
    복사편집
    let x;
    function foo() {}
    
    ```
    
- **조건문**:
    
    ```jsx
    javascript
    복사편집
    if (x > 10) { ... }
    
    ```
    
- **반복문**:
    
    ```jsx
    javascript
    복사편집
    for (let i = 0; i < 5; i++) { ... }
    
    ```
    
- **블록문**:
    
    ```jsx
    javascript
    복사편집
    {
      let a = 1;
      let b = 2;
    }
    
    ```
    
- **표현식 문(Expression Statement)**: 표현식을 독립적인 문처럼 사용한 것
    
    ```jsx
    javascript
    복사편집
    x = 5;
    add(1, 2);
    
    ```
    

※ 대부분의 표현식은 문으로 사용할 수 있지만, 그 반대는 항상 성립하지 않는다.

---

### 🔹 5.5 표현식 문 (Expression Statement)

자바스크립트에서는 **표현식을 문처럼 사용할 수 있으며**, 이를 **표현식 문**이라고 한다.

**문맥상 표현식이 있어야 하는 자리에 표현식을 두면 실행 가능한 문이 된다.**

예를 들어, 다음은 모두 표현식 문이다:

```jsx
javascript
복사편집
x = 100;
y++;
sum(1, 2);

```

표현식 문은 **세미콜론(;)으로 끝나는 것이 일반적**이다.

---

### 🔹 5.6 세미콜론과 세미콜론 자동 삽입 (ASI)

자바스크립트는 대부분의 문(statement)을 세미콜론으로 구분한다.

하지만 세미콜론을 생략해도, JS 엔진이 **ASI(Automatic Semicolon Insertion)**라는 기능을 통해

자동으로 세미콜론을 삽입하는 경우가 있다.

```jsx
javascript
복사편집
let x = 5
let y = 6

```

→ 위 코드는 실제로는 다음과 같이 해석된다:

```jsx
javascript
복사편집
let x = 5;
let y = 6;

```

하지만 모든 상황에서 세미콜론 생략이 안전한 것은 아니므로,

**명확한 코드 작성을 위해 명시적으로 세미콜론을 붙이는 것이 권장된다.**

---

## ✅ 정리 요약

| 항목 | 설명 |
| --- | --- |
| 값 | 표현식의 평가 결과이며, 변수에 저장하거나 연산할 수 있다. |
| 리터럴 | 고정된 값을 직접 코드에 작성한 형태이다. |
| 표현식 | 값을 생성하는 문이다. 평가하면 반드시 하나의 값을 반환한다. |
| 문 | 실행 가능한 명령이며, 조건, 반복, 선언 등을 포함한다. |
| 표현식 문 | 표현식을 문처럼 사용하는 구조이며, 보통 세미콜론으로 끝난다. |
| ASI | JS 엔진이 생략된 세미콜론을 자동으로 삽입해주는 기능이다. |