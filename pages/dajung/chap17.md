# 17장 : 생성자 함수에 의한 객체 생성

## Object 생성자 함수

**생성자 함수란?**

- `new` 연산자와 함께 호출되어 **객체(인스턴스)를 생성**하는 함수
- 생성된 객체를 **인스턴스(instance)** 라고 부름

```jsx
function Person(name) {
  this.name = name;
}
const me = new Person("Lee");
```

<br/>

**자바스크립트의 내장 생성자 함수**

`Object` 생성자 함수 이외에도 다양한 빌트인 생성자 함수를 제공한다.

| 생성자 함수 | 설명             |
| ----------- | ---------------- |
| `Object`    | 일반 객체 생성   |
| `String`    | 문자열 객체 생성 |
| `Number`    | 숫자 객체 생성   |
| `Boolean`   | 불리언 객체 생성 |
| `Function`  | 함수 생성        |
| `Array`     | 배열 생성        |
| `Date`      | 날짜 객체 생성   |
| `RegExp`    | 정규표현식 생성  |
| `Promise`   | 프로미스 생성    |

<br/>

`Object` 생성자 함수로 객체를 생성할 수 있지만 **객체 리터럴 `{}` 방식이 더 간편하고 직관적**임

👉 특별한 이유가 없다면 `new Object()`는 **잘 사용하지 않음!**

```jsx
const obj1 = new Object(); // 빈 객체 생성
const obj2 = {}; // 객체 리터럴 방식 (추천)
```

## 생성자 함수

### 객체 리터럴에 의한 객체 생성 방식의 문제점

객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만 생성한다.

따라서, 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 매번 같은 프로퍼티를 기술해야 하기 때문에 **비효율적**이다!!

```jsx
const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle1.getDiameter()); // 10

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle2.getDiameter()); // 20
```

- `radius` : 객체 **고유의 상태** (값이 달라질 수 있음)
- `getDiameter()` : 객체의 **공통 동작** (보통 내용이 동일함)

객체는 **프로퍼티를 통해 고유한 상태(state)** 를 표현하고, **메서드를 통해 상태를 참조하거나 조작하는 동작(behavior)** 을 나타낸다.

👉 **같은 구조**, **같은 메서드를**  **매번 반복해서 작성해야 함!**

### 생성자 함수에 의한 객체 생성방식의 장점

생성자 함수에 의한 객체 생성 방식은 마치 객체를 생성하기 위한 템플릿처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.

```jsx
// 생성자 함수
function Circle(radius) {
  // 생성자 함수 내부의 This는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스의 생성
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getIameter()); // 10
console.log(circle2.getIameter()); // 20
```

**⚠️ 주의!!**

`new` 연산자 없이 호출하면 👉 그냥 일반 함수로 동작함 ❌

```jsx
const badCircle = Circle(7); // ❌ 인스턴스 아님

console.log(badCircle); // undefined
console.log(radius); // 7
```

### 생성자 함수의 인스턴스 생성 과정

**👷‍♀️ 생성자 함수의 역할**

인스턴스를 생성하는 것과 생성된 인스턴스를 초기화(인스턴스 프로퍼티 추가 및 초기화 할당)하는 것

- 인스턴스 생성은 **필수**
- 생성된 인스턴스를 **초기화**하는 것은 **옵션**

`new` 연산자와 함께 생성자 함수를 호출하면 자바스크립트 엔진은 암묵적으로 인스턴스를 생성하고 인스턴스를 초기화한 후 인스턴스를 반환한다..!

<br/>

1️⃣ **인스턴스 생성& `this` 바인딩**

- `new` 연산자를 붙이면 JS 엔진이 **암묵적으로 빈 객체를 생성**
- 이 **빈 객체가 `this`에 바인딩됨**
- 이 객체는 나중에 반환될 **인스턴스**임

```jsx
function Circle(radius) {
  // 1. 암묵적으로 인스턴스가 생성된고 this에 바인딩된다.
  console.log(this); // Circle {}
}
```

> 📌 바인딩이란? 식별자(`this`)와 값을 연결하는 과정

**2️⃣ 인스턴스 초기화**

생성자 함수 내부 코드 실행

👉 `this`에 바인딩된 인스턴스에 **프로퍼티를 추가** 하거나 **초기값을 설정**

```jsx
function Circle(radius) {
  console.log(this);

  // 2. this에 바인딩되어 있는 인스턴스 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
```

3️⃣ **인스턴스 반환**

생성자 함수가 끝나면

👉 **완성된 인스턴스(`this`)가 자동으로 반환**됨

```jsx
function Circle(radius) {
  console.log(this);

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 3. 완성된 인스턴스가 바인딩된 This가 암묵적으로 반환된다.
}

// 인스턴스 생성.
// Circle 생성자 함수는 암묵적으로 this를 반환한다.
const circle = new Circle(1);
```

- 단, **명시적으로 객체를 반환하면** → 그 객체가 대신 반환됨 ❗
- **명시적으로 원시 값을 반환하면** → **무시**되고 `this`가 반환됨 ✅

```jsx
function Circle(radius) {
  this.radius = radius;
  return { foo: "bar" }; // ⚠️ 이 객체가 반환됨 (기본 동작 무시됨)
}
```

⚠️ **주의**

> 생성자 함수에서는 `return`문을 작성하지 않는 것이 원칙!

명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 `this`가 반환된다.

## 내부 메서드 `[[Call]]` 과 `[[Construct]]`

함수는 객체이기 때문에 일반 객체처럼 **내부 슬롯**과 **내부 메서드**를 가짐

<br/>

**일반 객체 vs 함수 객체**

| 항목        | 일반 객체               | 함수 객체                               |
| ----------- | ----------------------- | --------------------------------------- |
| 호출 가능?  | ❌ 호출 불가            | ✅ 호출 가능                            |
| 내부 메서드 | 일반 내부 메서드만 가짐 | `[[Call]]`, `[[Construct]]` 추가로 가짐 |

<br/>

**호출 방식에 따라 작동하는 내부 메서드**

| 호출 방식         | 작하는 내부 메서드 |
| ----------------- | ------------------ |
| 일반 함수 호출    | `[[Call]]`         |
| `new`와 함께 호출 | `[[Construct]]`    |

```jsx
function foo() {}
foo(); // → [[Call]] 호출
new foo(); // → [[Construct]] 호출
```

- ✅ 모든 함수는 **callable** 이어야 함
- ❌ 모든 함수가 **constructor**인 것은 아님

| 용어                | 의미                                                                  |
| ------------------- | --------------------------------------------------------------------- |
| **callable**        | `[[Call]]` 메서드를 가진 함수 객체 → **호출 가능한 객체**             |
| **constructor**     | `[[Construct]]` 메서드를 가진 함수 객체 → **생성자 함수로 사용 가능** |
| **non-constructor** | `[[Construct]]` 없는 함수 객체 → **`new`로 사용할 수 없음**           |

## constructor와 non-constructor의 구분

자바스크립트 엔진은 함수 정의를 평가하여 함수 객체를 생성할 때 함수 정의 방식에 따라 함수를 구분한다.

- `constructor` : 함수 선언문, 함수 표현식, 클래스
- `non-constructor` : 메서드, 화살표 함수

**⚠️ 주의할 점!**

ECMAScript 사양에서 메서드는 메서드 축약 표현만을 의미

👉 **함수 정의 방식에 따라 `constructor`와 `non-constructor`를 구분**한다

따라서, 일반 함수 즉 함수 선언문과 함수 표현식으로 정의된 함수만 `constructor`

```jsx
// 일반 함수 정의
function foo() {}
const bar = function () {};

new foo(); // -> foo {}
new bar(); // -> bar {}

// 화살표 함수 정의
const arrow = () => {};
new arrow(); // ❌ TypeError : arrow is not a constructor

// 메서드 정의
const obj = {
  x() {},
};

new obj.x(); // ❌ TypeError : obj.x is not a constructor
```

## `new` 연산자

**✅  `new` 연산자와 함께 함수를 호출하면?**

해당 함수는 생성자 함수로 동작한다.

함수 객체의 내부 메서드 `[[Call]]` 이 호출되는 것이 아니라 `[[Construct]]` 가 호출된다.

👉 **객체(인스턴스)** 를 생성하여 반환

```jsx
// 생성자 함수로서 정의하지 않은 일반 함수
function add(x, y) {
  return x + y;
}

let inst = new add();
console.log(inst); // {} -> 🚨 함수가 객체를 반환하지 않으므로 빈 객체 반환
```

```jsx
// 객체를 반환하는 일반 함수

function createUser(name, role) {
  return { name, role };
}

inst = new createUser("Lee", "admin");
console.log(inst); // {name : "Lee", role: "admin"}
```

**❌ `new` 연산자 없이 생성자 함수를 호출하면?**

일반 함수로 호출된다.

함수 객체의 내부 메서드 `[[Construct]]` 이 호출되는 것이 아니라 `[[Call]]` 가 호출된다.

👉 **단순 함수 실행**만 일어남

```jsx
function Circle(radius) {
  this.radius = radius;
}

Circle(5); // this는 window 또는 undefined
```

## new.target

- 생성자 함수가 new 없이 호출되는 것을 방지!

`new.target`은 **함수 내부에서** 사용 가능한 **메타 프로퍼티**

함수가 `new` 연산자와 함께 **생성자 함수로 호출되었는지 확인**할 수 있음

<br/>

`new` 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 `new.target` 은 함수 자신을 가리킨다.

`new` 연산자 없이 일반 함수로서 호출된 함수 내부의 `new.target`은 `undefined`이다.

| 호출 방식    | `new.target` 값            |
| ------------ | -------------------------- |
| `new 함수()` | 해당 함수 자체 (함수 참조) |
| 함수`()`     | `undefined`                |

```jsx
function Circle(radius) {
  // new 없이 호출하면 생성자 아님 → 재귀 호출로 강제!
  if (!new.target) {
    return new Circle(radius);
  }

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const c1 = Circle(5); // new 없이 호출해도 안전하게 인스턴스 생성됨
const c2 = new Circle(10); // 정상적인 생성자 호출
```

대부분의 **빌트인 생성자 함수**는

👉 호출 시 **`new` 연산자 사용 여부를 내부에서 확인** 함!

| 생성자 함수 | `new` 사용 O         | `new` 사용 X    |
| ----------- | -------------------- | --------------- |
| `String`    | **문자열 객체** 생성 | **문자열** 반환 |
| `Number`    | **숫자 객체** 생성   | **숫자** 반환   |
| `Boolean`   | **불리언 객체** 생성 | **불리언** 반환 |

```jsx
// new와 함께 호출
const strObj = new String("hello"); // → 문자열 객체
console.log(typeof strObj); // "object"

// new 없이 호출
const strVal = String("hello"); // → 문자열 반환
console.log(typeof strVal); // "string"
```

💡 관습 : 생성자 함수는 **파스칼 케이스**로 작성한다!

```jsx
function Circle() {} // ✅
function circle() {} // ❌ (생성자로 쓰면 헷갈림)
```
