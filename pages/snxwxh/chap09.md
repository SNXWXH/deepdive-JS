# 09 타입 변환과 단축 평가

## 9.1 타입 변환이란?

자바스크립트의 값은 타입을 가지며, 개발자가 의도적으로 변경 가능

- **명시적 타입 변환 (타입 캐스팅)**: 개발자가 코드에서 직접 타입 변환을 수행하는 것
- **암묵적 타입 변환 (타입 강제 변환)**: 자바스크립트 엔진이 코드 문맥을 고려해 자동으로 타입을 변환하는 것

📍 코드에서 암묵적 타입 변환이 발생하는지, 어떤 값으로 변환되는지, 최종 평가 결과를 예측할 수 있어야 함

## 9.2 암묵적 타입 변환

- 표현식을 평가할 때 코드 문맥을 고려하여 자동으로 원시 타입(문자열, 숫자, 불리언) 중 하나로 변환

### **9.2.1 문자열 타입으로 변환**

- 문자열 연결 연산자(`+`)는 피연산자 중 하나 이상이 문자열이면 모든 값을 문자열로 변환 후 연결

```jsx
1 +
  '2' // "12"
  `1 + 1 = ${1 + 1}`; // "1 + 1 = 2"
```

**문자열 변환 예시**

| 타입      | 예제             | 결과                |
| --------- | ---------------- | ------------------- |
| 숫자      | `0 + ''`         | `"0"`               |
|           | `Infinity + ''`  | `"Infinity"`        |
| 불리언    | `true + ''`      | `"true"`            |
| null      | `null + ''`      | `"null"`            |
| undefined | `undefined + ''` | `"undefined"`       |
| 객체      | `({}) + ''`      | `"[object Object]"` |
| 배열      | `[10, 20] + ''`  | `"10,20"`           |

📍 **예외:** `Symbol` 값을 문자열로 변환하면 `TypeError` 발생

### **9.2.2 숫자 타입으로 변환**

- 산술 연산자는 숫자를 생성하며, 숫자로 변환할 수 없는 경우 `NaN` 반환

**숫자 변환 예시**

| 타입      | 예제         | 결과  |
| --------- | ------------ | ----- |
| 문자열    | `+'1'`       | `1`   |
|           | `+'string'`  | `NaN` |
| 불리언    | `+true`      | `1`   |
|           | `+false`     | `0`   |
| null      | `+null`      | `0`   |
| undefined | `+undefined` | `NaN` |
| 객체      | `+{}`        | `NaN` |
| 배열      | `+[]`        | `0`   |
|           | `+[10, 20]`  | `NaN` |

**📍 예외:** `Symbol` 값을 숫자로 변환하면 `TypeError` 발생

### **9.2.3 불리언 타입으로 변환**

제어문에서 불리언 값이 아닌 경우 **Truthy**(참)와 **Falsy**(거짓)로 변환

**Falsy 값**

```jsx
false, undefined, null, 0, -0, NaN, '';
```

**Truthy 값**

```jsx
Boolean({}); // true
Boolean([]); // true
Boolean('false'); // true
```

## 9.3 명시적 타입 변환

- 개발자가 직접 타입을 변환하는 방법

### **9.3.1 문자열 변환**

- `String()` 생성자 사용: `String(NaN) → "NaN"`
- `toString()` 메서드 사용: `(Infinity).toString() → "Infinity"`
- 문자열 연결 연산자(`+ ''`): `true + '' → "true"`

### **9.3.2 숫자 변환**

- `Number()` 생성자 사용: `Number('0') → 0`
- `parseInt()` / `parseFloat()` 사용: `parseFloat('12.34') → 12.34`
- `+` 단항 연산자 사용: `+'-1' → -1`
- 산술 연산자 사용: `'0' * 1 → 0`

### **9.3.3 불리언 변환**

- `Boolean()` 생성자 사용: `Boolean('') → false`
- `!!` 연산자 사용: `!!0 → false`

## 9.4 단축 평가

### **9.4.1 논리 연산자를 사용한 단축 평가**

- `&&` 연산자: 첫 번째 피연산자가 `false`면 평가 종료 후 반환

```jsx
'Cat' && 'Dog'; // "Dog"
```

- `||` 연산자: 첫 번째 피연산자가 `true`면 평가 종료 후 반환

```jsx
'Cat' || 'Dog'; // "Cat"
```

**if문 대체 가능**

```jsx
let done = true;
let message = done && '완료'; // if (done) message = '완료';

let done = false;
let message = done || '미완료'; // if (!done) message = '미완료';
```

**객체 프로퍼티 참조 시 유용**

```jsx
let str = null;
let value = str && str.value; // null
```

**함수 매개변수 기본값 설정**

```jsx
function getLength(s) {
  s = s || ''; // 기본값 설정
  return s.length;
}
```

### **9.4.2 옵셔널 체이닝 연산자(`?.`)**

- ES11에서 도입된 연산자로, 객체가 `null` 또는 `undefined`이면 에러 없이 `undefined` 반환

```jsx
let str = null;
let value = str?.value; // undefined
```

```jsx
let str = '';
let len = str?.length; // 0
```

### **9.4.3 null 병합 연산자(`??`)**

- ES11에서 도입된 연산자로, 좌항이 `null` 또는 `undefined`이면 우항 반환

```jsx
let str = null ?? 'default str';
console.log(str); // "default str"
```

```jsx
let str = '' ?? 'default str';
console.log(str); // ""
```

`||`와 차이점: `||`는 `0`, `''`도 `false`로 간주하지만, `??`는 `null`과 `undefined`만 체크
