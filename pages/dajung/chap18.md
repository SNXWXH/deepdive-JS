# 18장 : 함수와 일급 객체

## 일급 객체

아래 조건을 만족하는 객체를 일급 객체라고 한다.

1. **무명 리터럴**로 생성 가능 → **런타임 생성**
2. **변수나 자료구조**에 저장 가능
3. **함수의 매개변수**로 전달 가능
4. **함수의 반환값**으로 사용 가능

<br/>

즉, **함수도 값이다!!!**

- 함수는 **객체처럼 다룰 수 있음**
- 값처럼 **어디서든 리터럴로 정의 가능**
- **런타임에 함수 객체**로 평가됨

<br/>

함수의 가장 큰 특징은 다른 함수의 **인자로 전달**되거나, **반환값으로 리턴**될 수 있다는 것이다!

```jsx
function greet(fn) {
  fn(); // 함수 인자로 받은 함수 호출
}

function sayHello() {
  console.log("Hello!");
}

greet(sayHello); // ✅ 함수가 값처럼 전달됨
```

<br/>

**함수 객체 vs 일반 객체**

- 함수 객체는 **호출할 수 있음**
- 일반 객체에는 없는 **고유한 프로퍼티**를 가짐

```jsx
function foo() {}

console.log(typeof foo); // "function"
console.log(foo.name); // 함수 이름
console.log(foo.length); // 매개변수 개수
```

## 함수 객체의 프로퍼티

`arguments` , `caller`, `length`, `name`, `prototype` 프로퍼티는 모두 일반 객체에는 없는 함수 객체의 데이터 프로퍼티다.

<br/>

❗️ **그치만 `__proto__` 는 다르다?**

- `__proto__`는 **모든 객체가 가지고 있음**
- 이건 **함수 전용 프로퍼티가 아님**
- 사실 `__proto__`는 **접근자 프로퍼티**고 `Object.prototype`에서 상속된 것임!

```jsx
function foo() {}
const obj = {};

console.log(foo.__proto__); // ✅ 있음
console.log(obj.__proto__); // ✅ 이것도 있음
```

- 즉, `__proto__` 는 함수든 일반 객체든 다 존재한다!!

<br/>

모든 객체는 `Object.prototype`을 **상속**받음

`Object.prototype`에 정의된 `__proto__`를 **물려받은 것**임!

```jsx
console.log(Object.getPrototypeOf(foo) === foo.__proto__); // true
```

### `arguments` 프로퍼티

`arguments` 객체란?

- 함수 호출 시 **전달된 인수들 정보를 담고 있는 유사 배열 객체**
- 함수 내부에서만 사용 가능 (지역 변수처럼)
- **매개변수 개수와 관계없이 전달된 모든 인수를 저장**

| 특징                          | 설명                                                                 |
| ----------------------------- | -------------------------------------------------------------------- |
| **유사 배열 객체**            | 배열처럼 인덱스로 접근 가능하고 `length` 프로퍼티를 가짐             |
| **Iterable (ES6+)**           | `for...of`, 스프레드 문법(`...`)으로 순회 가능                       |
| **배열 아님**                 | 진짜 배열이 아니라 `map`, `reduce` 같은 배열 메서드는 직접 사용 불가 |
| **함수 내부 전용**            | 함수 내부에서만 사용할 수 있음. 외부에서는 참조 불가                 |
| **화살표 함수에서 사용 불가** | 화살표 함수는 `arguments` 바인딩을 갖지 않음                         |

<br/>

**`arguments` 객체 vs 매개변수**

```jsx
function multiply(x, y) {
  console.log(arguments);
  return x * y;
}

multiply(); // → NaN
multiply(1); // → NaN
multiply(1, 2); // → 2
multiply(1, 2, 3); // → 2 (추가 인수는 무시되지만 arguments에는 남음)
```

- 자바스크립트는 **전달된 인수 개수와 매개변수 개수가 일치하지 않아도 에러가 나지 않음**
- 매개변수보다 인수가 많으면 → 초과 인수는 무시됨 (매개변수로는 받지 않음)
- 매개변수보다 인수가 적으면 → 해당 매개변수는 `undefined`로 초기화됨

<br/>

**`arguments` 객체 구조**

```jsx
Arguments(3) [
  1,
  2,
  3,
  callee: ƒ demo(),
  length: 3,
  Symbol(Symbol.iterator): ƒ,
  __proto__: Object
]
```

| 항목              | 설명                                             |
| ----------------- | ------------------------------------------------ |
| `length`          | 전달된 인수의 개수                               |
| `callee`          | 자신을 참조하는 함수 (strict mode에선 사용 금지) |
| `Symbol.iterator` | ES6 이후 iterable 지원                           |

<br/>

자바스크립트는 선언됨 매개변수의 개수와 함수를 호출할 때 전달하는 인수의 개수를 확인하지 않는다!

따라서 매개변수 개수를 확정할 수 없는 **가변 인자 함수**를 구현할 때 유용하다.

```jsx
function sum() {
  let res = 0;

  // arguments 객체는 유사 배열 객체이므로 for 문으로 순회 가능
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

sum(); // 0
sum(1, 2); // 3
sum(1, 2, 3); // 6
```

<br/>

⚠️ `arguments` 객체는 **유사 배열 객체**이다??!

배열처럼 생겼지만 실제 진짜 배열은 아니다!

`map` , `forEach` , `reduce` 와 같은 메서드를 사용할 수 없다.

사용하려면 **배열로 변환**이 필요하다

```jsx
// 1️⃣ 방법 1: Array.prototype.slice.call
const arr = Array.prototype.slice.call(arguments);

// 2️⃣ 방법 2 :Rest 파라미터
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
```

### `caller` 프로퍼티

함수 자신을 호출한 함수를 가리킨다.

ECMAScript 사양에 포함되지 않은 비표준 프로퍼티

이후 표준화될 예정도 없는 프로퍼티이므로 그냥 알아두면 됨

<br/>

### `length` 프로퍼티

함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.

```jsx
function foo() {}
console.log(foo.length); // 0

function bar(x) {
  return x;
}
console.log(bar.length); // 1
```

**⚠️ 주의할 점**

`arguments` 객체의 `length` 프로퍼티와 함수 객체의 `Length` 프로퍼티의 값은 다를 수 있으므로 주의해야 한다.

| `length` 프로퍼티 | 값               |
| ----------------- | ---------------- |
| `argumetns` 객체  | 인자의 개수      |
| 함수              | 매개 변수의 개수 |

<br/>

### `name` 프로퍼티

함수 이름을 나타낸다.

ES6부터 정식 표준이 되었다.

❗️ ES5와 ES6에서의 동작이 다르므로 주의해야 한다.

```jsx
// 익명 함수 표현식
var annoymousFunc = function () {};

// ES5 : name 프로퍼티는 빈 문자열을 값으로 갖는다.
// ES6 : name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.

console.log(annoymousFunc.name); // annoymousFunc
```

<br/>

### `__proto__` 접근자 프로퍼티

모든 객체는 `[[Prototype]]` 이라는 내부 슬롯을 갖는다.

👉 객체 지향 프로그래밍의 상속을 구현하는 프로토타입 객체를 가리킴!

<br/>

`__proto__`는 `[[Prototype]]`에 접근하기 위한 **접근자 프로퍼티(getter/setter)**

**직접적으로 `[[Prototype]]`에는 접근할 수 없기 때문에** `__proto__`를 통해 간접 접근하는 것!

```jsx
const obj = {};
console.log(obj.__proto__); // → Object.prototype
```

- 내부 슬롯 `[[Prototype]]`은 **직접 접근 불가**
- 대신 `__proto__`를 통해 **프로토타입 객체에 접근하거나 변경**할 수 있음

```jsx
const obj = {};
const proto = { greet: () => "hi" };

obj.__proto__ = proto;
console.log(obj.greet()); // 'hi'
```

<br/>

### `prototype` 프로퍼티

생성자 함수로 호출할 수 있는 객체

`constructor` 만이 소유하는 프로퍼티

일반 객체와 생성자 함수로 호출할 수 없는 `non-constructor` 에는 `prototype` 프로퍼티가 없다.
