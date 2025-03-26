# chap 9

## 📘 제9장: 타입 변환과 단축 평가

---

### 🔹 9.1 타입 변환이란?

자바스크립트는 **동적 타입 언어**이므로, 변수에 어떤 타입의 값이든 자유롭게 할당할 수 있다.

그러나 **다른 타입 간의 연산 또는 비교**를 수행할 때, 자바스크립트 엔진은 **자동 또는 수동으로 타입을 변환**하게 된다.

이 과정을 **타입 변환(type conversion)**이라 하며, 크게 두 가지로 나뉜다:

- **암묵적 타입 변환 (implicit coercion)**
- **명시적 타입 변환 (explicit coercion)**

---

### 🔹 9.2 암묵적 타입 변환

암묵적 타입 변환은 **개발자가 명시하지 않아도 자바스크립트 엔진이 자동으로 타입을 변환하는 것**이다.

이 과정은 코드 내부에서 **연산자나 비교 연산이 수행될 때 자동으로 발생**한다.

### 예시 1: 숫자와 문자열의 연산

```jsx
javascript
복사편집
'5' + 1    // → '51' (문자열 연결)
'5' * 1    // → 5 (문자열 → 숫자 변환)

```

- `+` 연산자에서는 **하나라도 문자열이면 모두 문자열로 변환**
- , `/`,  등의 연산자에서는 **모두 숫자로 변환**

### 예시 2: 불리언 변환

```jsx
javascript
복사편집
if ('hello') console.log('참'); // 출력됨

```

조건문에서 'hello'는 문자열이지만, **불리언 컨텍스트에서 true로 간주된다.**

---

### 🔹 9.3 명시적 타입 변환

명시적 타입 변환은 **개발자가 의도적으로 특정 함수나 연산자를 사용하여 타입을 변환하는 것**이다.

### ✅ 문자열 변환

- `String()`, `.toString()`

```jsx
javascript
복사편집
String(123);     // '123'
(123).toString(); // '123'
true.toString();  // 'true'

```

### ✅ 숫자 변환

- `Number()`, `parseInt()`, `parseFloat()`

```jsx
javascript
복사편집
Number('123');       // 123
parseInt('10.5');     // 10
parseFloat('10.5');   // 10.5

```

### ✅ 불리언 변환

- `Boolean()`

```jsx
javascript
복사편집
Boolean(0);        // false
Boolean('hello');  // true

```

---

### 🔹 9.4 Truthy와 Falsy

자바스크립트에서는 **불리언 타입이 아닌 값이 불리언 컨텍스트에서 true 또는 false로 평가될 수 있다.**

이러한 값을 각각 **Truthy(참 같은 값)**와 **Falsy(거짓 같은 값)**라 한다.

### ✅ Falsy 값 (false로 간주됨)

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- `''` (빈 문자열)

```jsx
javascript
복사편집
if (0) console.log('참');     // 실행되지 않음
if ('hello') console.log('참'); // 실행됨

```

### ✅ Truthy 값

- 위 Falsy 값이 아닌 모든 값은 **truthy**로 간주된다.
- 예: `'0'`, `'false'`, `[]`, `{}`, `Infinity` 등

```jsx
javascript
복사편집
Boolean('0');        // true
Boolean([]);         // true
Boolean({});         // true

```

---

### 🔹 9.5 단축 평가 (Short-circuit Evaluation)

단축 평가는 **논리 연산자(AND: `&&`, OR: `||`)에서 사용되는 연산 방식**이다.

피연산자의 값에 따라 **두 번째 피연산자의 평가 여부를 결정**하고,

**최종 결과를 특정 피연산자 값 자체로 반환**한다.

---

### ✅ OR 연산자 `||`

```jsx
javascript
복사편집
expr1 || expr2

```

- `expr1`이 **truthy면 expr1 반환**
- `expr1`이 **falsy면 expr2 반환**

```jsx
javascript
복사편집
'hello' || 'world'   // → 'hello'
false || 'hi'        // → 'hi'

```

→ `||`는 **기본값 설정** 등에 자주 사용된다.

```jsx
javascript
복사편집
let name = userName || 'guest';

```

---

### ✅ AND 연산자 `&&`

```jsx
javascript
복사편집
expr1 && expr2

```

- `expr1`이 **falsy면 expr1 반환**
- `expr1`이 **truthy면 expr2 반환**

```jsx
javascript
복사편집
true && 'hello'     // → 'hello'
false && 'hello'    // → false

```

→ `&&`는 **조건부 실행** 등에 사용된다.

```jsx
javascript
복사편집
isLogin && showDashboard();

```

---

### 🔹 9.6 옵셔널 체이닝(Optional Chaining)

ES11(ES2020)에서 도입된 옵셔널 체이닝(`?.`)은

**객체의 프로퍼티나 메서드가 존재하지 않아도 오류 없이 평가를 중단**할 수 있도록 한다.

```jsx
javascript
복사편집
const user = null;
console.log(user?.name); // undefined (에러 아님)

```

- `user.name`처럼 `null.name`을 직접 호출하면 TypeError가 발생하지만,
    
    `user?.name`은 안전하게 평가를 중단하고 `undefined`를 반환한다.
    

---

### 🔹 9.7 null 병합 연산자 (??)

`??` 연산자는 **좌측 피연산자가 null 또는 undefined일 경우**에만 우측 값을 반환한다.

이는 기존의 `||` 연산자보다 더 명확한 기본값 설정 도구이다.

```jsx
javascript
복사편집
let x;
let result = x ?? 10; // → 10

```

- `||`는 `0`, `''` 등의 falsy 값도 기본값 처리해버리기 때문에
    
    이를 방지하려면 `??`를 사용하는 것이 좋다.
    

---

## ✅ 정리 요약

| 항목 | 설명 |
| --- | --- |
| 암묵적 타입 변환 | 연산 중 자동으로 발생하며, 예상치 못한 결과를 유발할 수 있다. |
| 명시적 타입 변환 | String(), Number(), Boolean() 등을 통해 의도적으로 변환한다. |
| Truthy / Falsy | 불리언 컨텍스트에서 true/false처럼 평가되는 값이다. |
| 단축 평가 | 논리 연산자가 좌항의 결과에 따라 우항 평가를 생략할 수 있다. |
| 옵셔널 체이닝 | 객체 체이닝 도중 null/undefined인 경우 평가를 중단한다. |
| null 병합 연산자 | 좌항이 null 또는 undefined일 때만 우항을 반환한다. |