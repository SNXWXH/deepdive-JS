# 📘 제16장: 프로퍼티 어트리뷰트

---

### 🔹 16.1 내부 슬롯과 내부 메서드

자바스크립트의 객체는 표면적으로는 **프로퍼티(key-value 쌍)**의 집합처럼 보이지만,

엔진 내부에서는 **다양한 내부 동작을 위한 메타 정보**도 함께 관리된다.

이러한 정보는 객체 내부에 존재하는 **내부 슬롯(internal slot)**과 **내부 메서드(internal method)**를 통해 구현된다. 내부 슬롯과 메서드는 일반적으로 개발자가 직접 접근할 수 없고, **ECMAScript 명세에서 [[...]] 형태로 표현**된다. 예: `[[Prototype]]`, `[[Get]]`, `[[Set]]`

일부 내부 슬롯은 **간접적으로 접근할 수 있도록 명시적 메서드나 접근자**를 제공한다.

예를 들어, 객체의 프로토타입은 다음처럼 접근 가능하다.

```jsx
const obj = {};
Object.getPrototypeOf(obj); // → 내부 슬롯 [[Prototype]]에 접근
```

---

### 🔹 16.2 프로퍼티 어트리뷰트

자바스크립트에서 객체의 각 **프로퍼티**는 실제로는 **프로퍼티 값(value)**만을 가지고 있는 것이 아니라,

프로퍼티의 동작을 정의하는 **4개의 프로퍼티 어트리뷰트(attributes)**를 함께 가진다.

| 내부 어트리뷰트 | 설명 |
| --- | --- |
| `[[Value]]` | 프로퍼티에 저장된 값이다. |
| `[[Writable]]` | 값 변경이 가능한지 여부이다. |
| `[[Enumerable]]` | for...in 루프나 `Object.keys()`에 열거되는지 여부이다. |
| `[[Configurable]]` | 프로퍼티 삭제 및 어트리뷰트 변경이 가능한지 여부이다. |

이러한 어트리뷰트를 통해 **프로퍼티의 정의 방식과 동작을 제어**할 수 있다.

---

### 🔹 16.3 프로퍼티 디스크립터

**프로퍼티 어트리뷰트를 확인하거나 변경**하려면

**프로퍼티 디스크립터(property descriptor)** 객체를 사용해야 한다.

### ✅ Object.getOwnPropertyDescriptor()

이 메서드는 **객체의 특정 프로퍼티에 대한 어트리뷰트 정보를 반환**한다.

```jsx
const user = { name: 'Lee' };
console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// 출력 예시
{
  value: 'Lee',
  writable: true,
  enumerable: true,
  configurable: true
}
```

- 위 값은 객체 리터럴로 생성한 프로퍼티가 갖는 **기본 어트리뷰트 설정**이다.
- 모든 값은 기본적으로 `true`이며, 이들은 **변경 가능함을 의미**한다.

---

### ✅ Object.defineProperty()

이 메서드는 **기존 프로퍼티의 어트리뷰트를 수정하거나**,

**새로운 프로퍼티를 원하는 설정으로 추가**할 수 있다.

```jsx
const obj = {};
Object.defineProperty(obj, 'x', {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: false
});
```

- 위 예제는 `x`라는 프로퍼티를 정의하면서 다음을 설정했다:
    - 값: 1
    - 변경 불가
    - 열거 불가
    - 삭제 불가

```jsx
obj.x = 2;
console.log(obj.x); // 1 (writable: false 이므로 변경되지 않음)
```

- 열거되지 않기 때문에 `for...in`이나 `Object.keys()`로 출력되지 않는다.
- configurable이 false이므로 `delete obj.x`도 실패한다.

---

### ✅ Object.defineProperties()

여러 개의 프로퍼티를 **한 번에 정의**할 수 있다.

```jsx
const person = {};
Object.defineProperties(person, {
  name: {
    value: 'Lee',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 30,
    writable: false,
    enumerable: false,
    configurable: false
  }
});
```

---

### 🔹 16.4 데이터 프로퍼티와 접근자 프로퍼티

자바스크립트의 프로퍼티는 **두 가지 유형**으로 나뉜다:

### ✅ 데이터 프로퍼티 (data property)

- `[[Value]]`, `[[Writable]]`, `[[Enumerable]]`, `[[Configurable]]`을 가지는 일반적인 프로퍼티이다.
- 값 자체를 저장하고 직접 접근할 수 있다.

```jsx
const user = { name: 'Lee' };
```

### ✅ 접근자 프로퍼티 (accessor property)

- `[[Get]]`, `[[Set]]` 함수로 구성되며, **값 자체를 저장하지 않고 동작으로 처리**한다.
- `getter`와 `setter`를 통해 값을 읽고 쓴다.

```jsx
const person = {
  firstName: 'Ung-mo',
  lastName: 'Lee',

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
};

console.log(person.fullName); // "Ung-mo Lee"
person.fullName = 'Kim Min-su';
console.log(person); // { firstName: "Kim", lastName: "Min-su", ... }
```

- 접근자 프로퍼티는 객체 리터럴 외에도 `Object.defineProperty()`로 정의할 수 있다.

```jsx
const user = {};
Object.defineProperty(user, 'greeting', {
  get() {
    return 'hello';
  }
});
```

---

## ✅ 정리 요약

| 항목 | 설명 |
| --- | --- |
| 내부 슬롯/메서드 | 객체 내부에서 동작을 제어하는 엔진 전용 메타 정보이다. |
| 프로퍼티 어트리뷰트 | 프로퍼티의 값, 쓰기/삭제/열거 가능 여부 등을 제어하는 내부 설정이다. |
| getOwnPropertyDescriptor | 특정 프로퍼티의 어트리뷰트를 조회하는 메서드이다. |
| defineProperty | 어트리뷰트를 직접 설정하여 프로퍼티를 정의하거나 수정한다. |
| 데이터 프로퍼티 | 일반적인 프로퍼티로 값을 직접 저장한다. |
| 접근자 프로퍼티 | getter/setter 함수를 통해 값을 간접적으로 읽거나 쓴다. |