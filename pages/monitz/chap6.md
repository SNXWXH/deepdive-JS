# chap 6

## 📘 제6장: 데이터 타입

---

### 🔹 6.1 데이터 타입의 필요성

자바스크립트에서 모든 값은 **데이터 타입을 가진다.**

값은 프로그램이 다루는 대상이며, **값의 종류에 따라 저장 방식, 처리 방식, 연산 방식이 달라진다.**

데이터 타입이 필요한 이유는 다음과 같다:

1. **값의 종류에 따라 다르게 동작하는 연산자가 존재**하기 때문이다.
    
    예를 들어 `+` 연산자는 피연산자가 숫자일 때는 덧셈, 문자열일 때는 연결(concatenation) 연산을 수행한다.
    
    ```jsx
    javascript
    복사편집
    1 + 2         // 3 (덧셈)
    '1' + '2'     // '12' (문자열 연결)
    
    ```
    
2. **메모리 사용 방식이 다르기 때문**이다.
    
    숫자, 문자열, 객체 등은 서로 다르게 메모리에 저장되고 관리된다.
    
3. **실행 중 오류를 방지하기 위함**이다.
    
    예상한 데이터 타입이 아닌 값이 들어오면 실행 중 문제가 발생할 수 있으므로
    
    데이터 타입은 올바른 코드 실행을 위해 중요하다.
    

---

### 🔹 6.2 자바스크립트의 데이터 타입

자바스크립트의 데이터 타입은 **원시 타입(Primitive Type)**과

- *객체 타입(Object Type)**으로 구분된다.

---

### ✅ 6.2.1 원시 타입

**원시 타입**은 더 이상 나눌 수 없는 **단일 값**을 나타내며,

**불변(immutable)한 값**이다. 복사 시에는 **값 자체가 복사된다.**

자바스크립트의 원시 타입은 다음 7가지이다:

| 타입 | 설명 |
| --- | --- |
| Number | 정수, 실수, Infinity, -Infinity, NaN 등 포함 |
| String | 텍스트 표현, 유니코드 기반 문자열 |
| Boolean | 논리적 참/거짓 값 (`true`, `false`) |
| undefined | 선언했지만 값을 할당하지 않은 상태 |
| null | 값이 없음을 명시적으로 표현한 상태 |
| Symbol | ES6 도입, 유일한 식별자 생성 |
| BigInt | ES11 도입, 2⁵³ 이상의 정수를 표현할 수 있는 타입 |

각 타입의 특징은 다음과 같다:

### ▶ Number

자바스크립트는 정수와 실수를 구분하지 않고 모두 **Number 타입**으로 처리한다.

IEEE 754 방식의 **64비트 부동소수점** 형식을 사용한다.

```jsx
javascript
복사편집
typeof 10       // "number"
typeof 3.14     // "number"
typeof NaN      // "number"
typeof Infinity // "number"

```

### ▶ String

**문자열은 0개 이상의 유니코드 문자로 구성된 텍스트 데이터**이다.

작은따옴표 `'`, 큰따옴표 `"`, 백틱 ```을 모두 사용할 수 있다.

```jsx
javascript
복사편집
typeof 'hello' // "string"

```

문자열은 유사 배열처럼 동작하지만, **불변값**이기 때문에 인덱스를 통해 문자를 바꾸는 것은 불가능하다.

```jsx
javascript
복사편집
let str = 'abc';
str[0] = 'z';
console.log(str); // 'abc'

```

### ▶ Boolean

**논리적 참(`true`)과 거짓(`false`)만을 표현하는 타입**이다.

```jsx
javascript
복사편집
typeof true  // "boolean"
typeof false // "boolean"

```

조건문에서 Boolean이 아닌 값은 **암묵적으로 true 또는 false로 변환**된다.

```jsx
javascript
복사편집
if ('hello') console.log('참'); // 출력됨

```

### ▶ undefined

`undefined`는 **값이 할당되지 않은 변수에 암묵적으로 부여되는 값**이다.

```jsx
javascript
복사편집
let x;
console.log(x); // undefined

```

### ▶ null

`null`은 **값이 없다는 것을 의도적으로 명시할 때 사용하는 값**이다.

```jsx
javascript
복사편집
let y = null;

```

⚠ `typeof null`의 결과는 `"object"`이며,

이는 자바스크립트 초기 설계 오류이다. 하지만 하위 호환성 때문에 수정되지 않고 있다.

### ▶ Symbol

ES6에서 도입된 타입이며, **유일무이한 값을 생성**할 때 사용된다.

객체의 고유 프로퍼티 키로 사용 가능하다.

```jsx
javascript
복사편집
const sym1 = Symbol('id');
const sym2 = Symbol('id');
console.log(sym1 === sym2); // false

```

### ▶ BigInt

Number 타입으로 표현할 수 있는 최대 정수는 `2⁵³ - 1`이다.

이를 넘는 정수를 다루기 위해 ES11에서 `BigInt` 타입이 도입되었다.

```jsx
javascript
복사편집
const big = 1234567890123456789012345678901234567890n;
typeof big; // "bigint"

```

---

### ✅ 6.2.2 객체 타입

**객체 타입**은 **여러 개의 값을 하나의 단위로 구성**한 복합적인 자료구조이다.

객체는 키(key)와 값(value)으로 구성된 **프로퍼티의 집합**이며,

사용자 정의 타입이라고 할 수 있다.

```jsx
javascript
복사편집
const person = {
  name: 'Lee',
  age: 30
};

```

- 객체는 **동적으로 프로퍼티를 추가, 제거, 수정할 수 있는 가변(mutable) 값**이다.
- 복사 시에는 **참조값(메모리 주소)이 복사**된다.

---

### 🔹 6.3 동적 타입 언어로서의 자바스크립트

자바스크립트는 **정적 타입 언어가 아닌 동적 타입(dynamic typed) 언어**이다.

즉, 변수 선언 시 타입을 명시하지 않고,

**실행 중 할당된 값에 따라 변수의 타입이 자동으로 결정된다.**

```jsx
javascript
복사편집
let x = 10;      // x는 number
x = 'hello';     // x는 string

```

- 타입을 명시하지 않기 때문에 **코드는 간결하지만, 예기치 않은 타입 오류**가 발생할 수 있다.
- 이로 인해 런타임 에러 가능성이 높아지므로,
    
    **타입 추론이 명확하도록 코드를 작성하는 것이 중요**하다.
    

---

### 🔹 6.4 typeof 연산자

`typeof` 연산자는 **피연산자의 타입을 문자열로 반환**한다.

```jsx
javascript
복사편집
typeof 1           // "number"
typeof 'hello'     // "string"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // ❗ "object" (오류)
typeof Symbol()    // "symbol"
typeof {}          // "object"
typeof []          // "object"
typeof function() {} // "function"

```

- `typeof null === "object"`는 **자바스크립트의 설계적 실수**이다.
- `typeof function() {}`가 `"function"`을 반환하는 것은 **함수를 구분하기 위한 특별한 처리**이다.
    
    함수는 객체이지만, typeof 결과만은 `"function"`으로 반환된다.
    

---

### 🔹 6.5 값, 변수, 데이터 타입의 관계

- **값**은 데이터 그 자체이다.
- **변수**는 값을 저장하고 참조할 수 있는 **이름(식별자)**이다.
- **데이터 타입**은 값의 종류를 구분하고 **처리 방식, 크기, 연산 규칙** 등을 결정한다.

```jsx
javascript
복사편집
const num = 100;
// num: 변수 (식별자)
// 100: 값
// number: 데이터 타입

```

값은 **타입에 따라 처리 방식이 다르며**,

변수는 해당 값을 **식별하기 위한 이름일 뿐**이다.

---

## ✅ 정리 요약

| 항목 | 내용 |
| --- | --- |
| 데이터 타입 | 값의 종류를 나타내는 분류이며, 타입에 따라 메모리 처리 방식이 달라진다. |
| 원시 타입 | Number, String, Boolean, undefined, null, Symbol, BigInt 등이 있으며, 불변값이다. |
| 객체 타입 | 여러 값을 묶은 참조형 구조이며, 가변적이다. |
| 동적 타이핑 | 변수는 언제든지 다른 타입의 값을 가질 수 있다. |
| typeof | 피연산자의 타입을 문자열로 반환하는 연산자이다. |
| null | typeof 결과가 "object"인 것은 설계 오류이다. |
| 값 / 변수 / 타입 | 값은 실체, 변수는 이름, 타입은 분류 기준이다. |