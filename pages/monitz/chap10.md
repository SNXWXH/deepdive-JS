# chap 10

## 📘 제10장: 객체 리터럴

---

### 🔹 10.1 객체란?

- *객체(object)**란 **여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조**이다.

객체는 **키(key)와 값(value)**으로 구성된 **프로퍼티(property)**들의 집합이다.

자바스크립트에서 객체는 다음과 같은 다양한 역할을 한다:

- 변수에 여러 개의 값을 저장할 수 있다.
- 구조화된 데이터를 표현할 수 있다.
- 동적으로 프로퍼티를 추가/삭제할 수 있다.
- 함수, 배열, 정규표현식 등도 모두 객체이다.

```jsx
javascript
복사편집
const person = {
  name: 'Lee',
  age: 30
};
```

---

### 🔹 10.2 객체 리터럴에 의한 객체 생성

객체는 대부분 **객체 리터럴(object literal)**을 통해 생성된다.

객체 리터럴은 `{}` 중괄호 안에 0개 이상의 프로퍼티를 정의하여 생성한다.

```jsx
javascript
복사편집
const obj = {
  key1: value1,
  key2: value2
};

```

- `key`: 식별자 역할을 하는 문자열 또는 Symbol
- `value`: 키에 대응되는 값(모든 타입 가능)

예:

```jsx
javascript
복사편집
const car = {
  brand: 'Hyundai',
  year: 2022,
  drive: function () {
    console.log('주행 중');
  }
};

```

객체 리터럴은 **객체를 생성하면서 동시에 프로퍼티를 정의할 수 있는 가장 간결한 방법**이다.

---

### 🔹 10.3 프로퍼티

### ✅ 프로퍼티 키

- **문자열 또는 심벌 값만 허용**된다.
- 숫자를 키로 사용할 수도 있지만, 내부적으로는 문자열로 변환된다.

```jsx
javascript
복사편집
const obj = {
  1: 'one',
  '2': 'two'
};
console.log(obj[1]); // 'one'
console.log(obj['2']); // 'two'
```

### ✅ 프로퍼티 값

- 모든 자바스크립트 값이 올 수 있으며,
    
    함수가 값으로 오면 이를 **메서드(method)**라고 부른다.
    

---

### 🔹 10.4 객체에 프로퍼티를 동적으로 추가하는 방법

객체는 선언 이후에도 **동적으로 프로퍼티를 추가/삭제**할 수 있는 유연한 구조를 가진다.

```jsx
javascript
복사편집
const user = {};
user.name = 'Kim';           // 마침표 표기법
user['age'] = 25;            // 대괄호 표기법
```

- 마침표 표기법(dot notation)은 식별자 이름으로 접근할 때 사용한다.
- 대괄호 표기법(bracket notation)은 **변수나 계산된 문자열로 키를 접근할 때 사용**한다.

```jsx
javascript
복사편집
const key = 'job';
user[key] = 'developer';
```

---

### 🔹 10.5 프로퍼티 접근

객체의 프로퍼티에 접근하려면 **마침표 표기법 또는 대괄호 표기법**을 사용할 수 있다.

```jsx
javascript
복사편집
const person = { name: 'Lee', age: 30 };
console.log(person.name);     // 'Lee'
console.log(person['age']);   // 30
```

- 존재하지 않는 프로퍼티에 접근하면 `undefined`를 반환한다.
- 대괄호 표기법은 동적으로 키 이름을 계산할 수 있다.

```jsx
javascript
복사편집
const key = 'name';
console.log(person[key]); // 'Lee'
```

---

### 🔹 10.6 프로퍼티 값 변경

객체의 프로퍼티는 **재할당을 통해 값 변경이 가능**하다.

```jsx
javascript
복사편집
const user = { name: 'Lee' };
user.name = 'Kim';

```

---

### 🔹 10.7 프로퍼티 삭제

객체의 프로퍼티는 `delete` 연산자를 사용하여 **동적으로 제거할 수 있다.**

```jsx
javascript
복사편집
const user = { name: 'Lee', age: 30 };
delete user.age;
console.log(user); // { name: 'Lee' }
```

`delete`는 프로퍼티를 제거할 뿐, 객체 자체를 삭제하지는 않는다.

---

### 🔹 10.8 ES6의 프로퍼티 축약 표현

ES6부터는 객체 리터럴에서 **변수명을 그대로 프로퍼티 키로 사용할 수 있는 축약 문법**이 도입되었다.

```jsx
javascript
복사편집
const name = 'Lee';
const age = 30;

const person = { name, age };
```

위 코드는 다음과 동일하다:

```jsx
javascript
복사편집
const person = {
  name: name,
  age: age
};
```

- 변수명과 프로퍼티명이 동일한 경우에만 축약이 가능하다.

---

### 🔹 10.9 ES6의 계산된 프로퍼티 이름

객체 리터럴에서 **대괄호를 사용하여 동적으로 프로퍼티 키를 정의할 수 있는 기능**이 추가되었다.

```jsx
javascript
복사편집
const key = 'score';
const student = {
  name: 'Park',
  [key]: 95
};
console.log(student.score); // 95
```

- 대괄호 안에는 표현식도 사용할 수 있다.

```jsx
javascript
복사편집
const prefix = 'data';
const obj = {
  [`${prefix}_id`]: 1234
};
```

---

## ✅ 정리 요약

| 항목 | 설명 |
| --- | --- |
| 객체 | 키와 값으로 구성된 복합 데이터 구조이며, 프로퍼티의 집합이다. |
| 객체 리터럴 | 중괄호 안에 키-값 쌍을 정의하여 객체를 생성하는 구문이다. |
| 프로퍼티 | 문자열 또는 심벌 키를 가지며, 모든 JS 값이 프로퍼티 값이 될 수 있다. |
| 동적 접근 | 대괄호 표기법을 사용하여 변수나 계산된 키로 접근할 수 있다. |
| 값 변경/삭제 | 프로퍼티는 언제든지 변경 또는 `delete`로 삭제할 수 있다. |
| 축약 표현 | 변수명을 그대로 키로 사용하는 간결한 문법이다. |
| 계산된 프로퍼티 | 대괄호 안에 표현식을 사용해 동적으로 키를 정의할 수 있다. |