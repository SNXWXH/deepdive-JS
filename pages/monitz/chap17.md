# 📘 제17장: 생성자 함수에 의한 객체 생성

---

### 🔹 17.1 객체 생성 방식의 한계

객체를 생성하는 기본적인 방법은 **객체 리터럴(object literal)**을 사용하는 것이다.

```jsx
const user = {
  name: 'Lee',
  getName() {
    return this.name;
  }
};
```

그러나 객체 리터럴 방식은 **동일한 구조의 객체를 여러 개 생성할 경우**

중복되는 코드를 매번 작성해야 하므로 **비효율적이고 유지보수에 취약하다.**

---

### 🔹 17.2 생성자 함수란?

- *생성자 함수(constructor function)**는 **객체를 생성하기 위한 특수한 함수**이다.

`new` 연산자와 함께 호출하면, **새로운 객체를 생성하고 그 객체를 초기화**하는 역할을 한다.

```jsx
function User(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}

const user1 = new User('Lee');
const user2 = new User('Kim');
```

- 위 예제에서 `User`는 생성자 함수이며, `user1`, `user2`는 각각 새로운 인스턴스이다.
- 생성자 함수의 이름은 **대문자로 시작하는 것이 관례**이다.

---

### 🔹 17.3 생성자 함수의 동작 방식

생성자 함수는 `new`와 함께 호출될 경우, 다음과 같은 과정을 거친다:

1. **빈 객체 생성** → 내부적으로 `this = {}`가 수행된다.
2. **this 바인딩** → 생성자 함수 내부에서 `this`는 새로 생성된 객체를 가리킨다.
3. **프로퍼티 및 메서드 추가** → 생성자 함수 본문에서 `this.property = value` 형식으로 작성
4. **암묵적 반환** → 객체를 명시적으로 반환하지 않으면 `this`가 자동으로 반환된다.

```jsx
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  };
}

const circle1 = new Circle(1);
console.log(circle1.getArea()); // 3.1415...
```

---

### 🔹 17.4 일반 함수와 생성자 함수의 차이

함수 선언 방식 자체는 같지만, **호출 방식(new 여부)**에 따라 다음과 같이 동작이 달라진다:

| 구분 | 일반 함수 호출 | 생성자 함수 호출 |
| --- | --- | --- |
| 방식 | `myFunc()` | `new MyFunc()` |
| 반환값 | 명시적 반환값 또는 undefined | 명시적 반환 없으면 새 객체 반환 |
| this | 전역 객체(window) 또는 undefined | 새로 생성된 객체 |

```jsx
function Foo() {
  this.value = 100;
}

Foo();             // 일반 호출 → this는 전역
console.log(window.value); // 100

const foo = new Foo(); // 생성자 호출
console.log(foo.value); // 100
```

---

### 🔹 17.5 this의 동작 방식 비교

### ✅ 일반 함수에서의 this

- **strict mode**에서는 `undefined`
- 비엄격 모드에서는 **전역 객체(window)**를 참조한다.

### ✅ 생성자 함수에서의 this

- `new` 키워드에 의해 생성된 **새로운 인스턴스 객체**를 가리킨다.

---

### 🔹 17.6 생성자 함수 내부에서 명시적 return 사용 시 동작

생성자 함수 내부에서 **객체를 명시적으로 반환(return)**하면,

해당 객체가 인스턴스로 반환된다.

```jsx
function ReturnObject() {
  this.name = 'Lee';
  return { name: 'Kim' };
}

const obj = new ReturnObject();
console.log(obj.name); // 'Kim'
```

- 하지만 **원시 값을 반환하면 무시되고**, this가 반환된다.

```jsx
function ReturnPrimitive() {
  this.name = 'Lee';
  return 100;
}

const obj2 = new ReturnPrimitive();
console.log(obj2.name); // 'Lee'
```

---

### 🔹 17.7 생성자 함수는 일반 함수로도 호출될 수 있다

자바스크립트에서 모든 함수는 생성자 함수가 될 수 있다.

그러나 `new` 없이 호출하면 일반 함수로 동작한다.

```jsx
function Person(name) {
  this.name = name;
}

const p1 = Person('Lee'); // 일반 호출
console.log(window.name); // 'Lee'

const p2 = new Person('Kim'); // 생성자 호출
console.log(p2.name); // 'Kim'
```

- `new` 키워드를 빠뜨리면 `this`가 전역 객체를 가리키게 되어 **의도치 않은 결과**가 발생할 수 있다.

---

### 🔹 17.8 생성자 함수의 목적

- **객체 생성 패턴을 공통화**하여 **코드의 재사용성과 효율성**을 높인다.
- 생성자 함수는 여러 인스턴스를 생성하는 **템플릿 역할**을 한다.
- 같은 구조의 객체를 여러 개 만들어야 하는 경우, 객체 리터럴보다 훨씬 유용하다.

---

## ✅ 정리 요약

| 항목 | 설명 |
| --- | --- |
| 생성자 함수 | 객체를 생성하는 특수한 함수이며, new와 함께 호출된다. |
| 동작 방식 | 빈 객체 생성 → this 바인딩 → 프로퍼티 초기화 → 객체 반환 순서로 작동한다. |
| 일반 함수와 차이 | 호출 방식에 따라 this와 반환값 처리 방식이 달라진다. |
| 명시적 return | 객체 반환 시 해당 객체가 반환되고, 원시값은 무시된다. |
| 생성자 함수 목적 | 동일 구조의 객체를 반복적으로 생성하는 효율적인 방법이다. |

---