# chap 7

## 📘 제7장: 연산자

---

### 🔹 7.1 연산자와 피연산자

- *연산자(operator)**는 하나 이상의 **값(피연산자: operand)**을 대상으로

**연산을 수행해 새로운 값을 생성**하는 기능을 한다.

```jsx
javascript
복사편집
5 + 2 // → 7

```

위 예제에서 `+`는 연산자, `5`와 `2`는 피연산자이며, 결과값은 `7`이다.

- 연산자는 피연산자의 **개수에 따라** 분류할 수 있다.

| 종류 | 형태 | 예 |
| --- | --- | --- |
| 단항 연산자 | 피연산자 1개 | `++x`, `typeof x` |
| 이항 연산자 | 피연산자 2개 | `x + y`, `x === y` |
| 삼항 연산자 | 피연산자 3개 | `조건 ? 값1 : 값2` |

---

### 🔹 7.2 연산자의 종류

자바스크립트에서 제공하는 연산자는 다음과 같다:

1. 산술 연산자
2. 문자열 연결 연산자
3. 할당 연산자
4. 비교 연산자
5. 논리 연산자
6. 타입 연산자
7. 삼항 조건 연산자
8. 그 외 특수 연산자 (delete, in, instanceof, new 등)

---

### 🔹 7.3 산술 연산자

**산술 연산자**는 숫자 값을 대상으로 수학적 계산을 수행한다.

| 연산자 | 의미 | 예시 |
| --- | --- | --- |
| `+` | 덧셈 | `1 + 2 → 3` |
| `-` | 뺄셈 | `5 - 2 → 3` |
| `*` | 곱셈 | `3 * 4 → 12` |
| `/` | 나눗셈 | `10 / 2 → 5` |
| `%` | 나머지 | `7 % 3 → 1` |
| `**` | 거듭제곱 | `2 ** 3 → 8` |

---

### 🔹 7.4 문자열 연결 연산자

`+` 연산자는 피연산자 중 하나라도 문자열이면 **문자열 연결 연산자**로 동작한다.

```jsx
javascript
복사편집
'1' + 2      // '12'
1 + '2'      // '12'
'Hello ' + 'World' // 'Hello World'

```

→ `+`는 **덧셈과 문자열 연결의 이중 역할**을 수행하므로, 연산 대상의 타입에 주의해야 한다.

---

### 🔹 7.5 할당 연산자

할당 연산자는 **우변의 값을 좌변 변수에 저장**한다.

```jsx
javascript
복사편집
let x;
x = 10; // 기본 할당 연산자

```

### 복합 할당 연산자

| 연산자 | 의미 | 예시 |
| --- | --- | --- |
| `+=` | 덧셈 후 할당 | `x += 3` → `x = x + 3` |
| `-=` | 뺄셈 후 할당 | `x -= 2` |
| `*=` | 곱셈 후 할당 | `x *= 4` |
| `/=` | 나눗셈 후 할당 | `x /= 2` |
| `%=` | 나머지 후 할당 | `x %= 3` |

---

### 🔹 7.6 비교 연산자

**두 값을 비교한 결과를 불리언(true 또는 false)으로 반환**한다.

| 연산자 | 의미 | 예시 |
| --- | --- | --- |
| `==` | 느슨한 동등 | `'1' == 1 → true` |
| `!=` | 느슨한 불일치 | `'1' != 1 → false` |
| `===` | 엄격한 동등 | `'1' === 1 → false` |
| `!==` | 엄격한 불일치 | `'1' !== 1 → true` |
| `<` | 미만 | `5 < 10` |
| `>` | 초과 | `7 > 3` |
| `<=` | 이하 | `2 <= 2` |
| `>=` | 이상 | `4 >= 5` |

> 권장: == 대신 항상 **===(엄격 비교)**를 사용하는 것이 좋다.
> 
> 
> `==`는 암묵적 타입 변환이 일어나 **예상치 못한 결과**를 유발할 수 있기 때문이다.
> 

---

### 🔹 7.7 논리 연산자

**불리언 값을 반환하는 연산자**이며, **조건문에서 많이 사용**된다.

| 연산자 | 의미 | 예시 |
| --- | --- | --- |
| ` |  | ` |
| `&&` | AND (그리고) | `true && false → false` |
| `!` | NOT (부정) | `!true → false` |

자바스크립트에서 `||`, `&&`는 **불리언뿐 아니라 다양한 값을 반환**하기 때문에

- *단축 평가(short-circuit evaluation)**와 함께 자주 활용된다.

```jsx
javascript
복사편집
'hello' || 'world' // → 'hello'
false || 'hi'      // → 'hi'
true && 'ok'       // → 'ok'

```

---

### 🔹 7.8 삼항 조건 연산자 (conditional operator)

삼항 조건 연산자는 **유일하게 피연산자를 3개 가지는 연산자**이다.

```jsx
javascript
복사편집
조건식 ? 참일 때 : 거짓일 때

```

```jsx
javascript
복사편집
const x = 10;
const result = (x > 5) ? '크다' : '작다'; // → '크다'

```

조건문을 간결하게 표현할 수 있지만, 복잡한 조건에서는 가독성이 떨어질 수 있다.

---

### 🔹 7.9 타입 연산자

### typeof

→ 피연산자의 **데이터 타입을 문자열로 반환**한다.

```jsx
javascript
복사편집
typeof 1       // 'number'
typeof 'abc'   // 'string'
typeof null    // 'object' ← 버그
typeof {}      // 'object'
typeof []      // 'object'
typeof function() {} // 'function'

```

### instanceof

→ **생성자 함수의 prototype과 객체의 [[Prototype]]을 비교**하여

객체가 특정 생성자로부터 만들어졌는지 확인한다.

```jsx
javascript
복사편집
const arr = [];
arr instanceof Array // true
arr instanceof Object // true

```

---

### 🔹 7.10 기타 연산자

### delete

→ 객체의 **프로퍼티를 삭제**한다.

```jsx
javascript
복사편집
const obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj); // { b: 2 }

```

### in

→ 특정 프로퍼티가 객체에 **존재하는지 여부**를 확인한다.

```jsx
javascript
복사편집
'a' in { a: 1, b: 2 } // true

```

### new

→ 생성자 함수를 **호출하면서 객체를 생성**한다.

```jsx
javascript
복사편집
function Person(name) {
  this.name = name;
}
const me = new Person('Lee');

```

---

## ✅ 정리 요약

| 항목 | 설명 |
| --- | --- |
| 연산자 | 피연산자에 연산을 수행하여 값을 생성하는 도구이다. |
| 산술/문자열 연산 | 숫자는 수학적 연산, 문자열은 연결로 동작한다. |
| 비교/논리 연산 | 조건문에서 불리언 값을 생성하며 단축 평가가 발생할 수 있다. |
| typeof / instanceof | 타입 확인 및 생성자 인스턴스 여부를 검사한다. |
| delete / in / new | 객체 조작 및 생성 관련 연산자이다. |
| 삼항 연산자 | 조건문을 축약하는 데 사용된다. |