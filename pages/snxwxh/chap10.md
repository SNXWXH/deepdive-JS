# 10 객체 리터럴

## 10.1 객체란?

- 객체는 객체 타입의 값, 변경 가능한 값
- 0개 이상의 프로퍼티로 구성된 집합
  ⇒ 프로퍼티는 키와 값으로 구성
- 프로퍼티 값이 함수일 경우 메서드라 부름
- 객체는 프로퍼티와 메서드로 구성
  - 프로퍼티 : 객체의 상태를 나타내는 값
  - 메서드 : 프로퍼티를 참조하고 조작할 수 있는 동작

## 10.2객체 리터럴에 의한 객체 생성

- 객체 생성하는 방법
  - 객체 리터럴
  - Object 생성자 함수
  - 생성자 함수
  - Object.create 메서드
  - 클래스(ES6)
- 객체 리터럴은 중괄호`{}`로 정의
- 변수에 할당되는 시점에 자바스크립트 엔진은 객체 리터럴을 해석해 객체 생성
  **⇒ 객체 리터럴의 중괄호는 코드 블록을 의미하지 않고 값으로 평가되는 표현식**

## 10.3 프로퍼티

- 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성

```jsx
let person = {
  // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
  name: 'Lee',
  // 프로퍼티 키는 age, 프로퍼티 값은 20
  age: 20,
};
```

- 프로퍼티를 나열할 때는 쉼표로 구분하며일반적으로 마지막 프로퍼티 뒤에는 쉼표를 사용하지 않으나 사용해도 상관없다.
- 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 심볼 값
  → 프로퍼티 키는 프로퍼티 값에 접근할 수 있는 이름으로서 식별자 역할
- 프로퍼티 값 : 자바스크립트에서 사용할 수 있는 모든 값

```jsx
let person = {
  firstName: 'SeolAh',
  'last-name': 'Lee',
};
```

- 프로퍼티 키로 사용한 firstName은 식별자 네이밍 규칙을 준수
  ⇒ 따옴표 생략 가능
- last-name은 식별자 네이밍 규칙을 준수하지 않으므로 따옴표를 사용
- 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓰는데 에러는 발생하지 않음

## 10.4 메서드

- 프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 메서드라 부름

```jsx
let circle = {
  radius: 5, // 프로퍼티
  // 원의 지름
  getDiameter: function () {
    // 메서드
    return 2 * this.radius; // this는 circle을 가킴
  },
};
console.log(circle.getDiameter()); // 10
```

## 10.5 프로퍼티 접근

- 마침표 표기법 : 마침표 프로퍼티 접근 연산자`.`를 사용
- 대괄호 표기법 : 대괄호 프로퍼티 접근 연산자`[…]`를 사용

```jsx
let person = {
  name: 'Lee',
};

// 마침표 표기법
console.log(person.name); // Lee

// 대괄호 표기법
console.log(person['name']); // Lee

console.log(person[name]); // ReferenceError: name is not defined

console.log(person.age); // undefined
```

- 대괄호 표기법을 사용할 경우 대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 함
- 따옴표로 감싸지 않으면 자바스크립트 엔진은 식별자로 인식
  ⇒ 위 코드에서 보면 name 이란 변수는 선언되어 있지 않다는 오류가 발생
- 객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환

## 10.6 프로퍼티 값 갱신

- 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신

```jsx
let person = {
  name: 'Jang',
};

person.name = 'Lee';

console.log(person); // {name: 'Lee'}
```

## 10.7 프로퍼티 동적 생성

- 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당

```jsx
let person = {
  name: 'Lee',
};

person.age = 20;

console.log(person); // {name: 'Lee', age: 20}
```

## 10.8 프로퍼티 삭제

- delete 연산자는 객체의 프로퍼티를 삭제
- 이때 delete 연산자의 피연산자는 프로퍼티 값에 접근할 수 있는 표현식이어야 함
- 만약 존재하지 않는 프로퍼티를 삭제하면 아무런 에러 없이 무시

```jsx
let person = {
  name: 'Lee',
};

person.age = 20;

delete person.age;

delete person.address;

console.log(person); // {name: "Lee"}
```

## 10.9 ES6에서 추가된 객체 리터럴의 확장 기능

### 10.9.1 프로퍼티 축약 표현

```jsx
// ES5
let x = 1,
  y = 2;

var obj = {
  x: x,
  y: y,
};

console.log(obj); // {x: 1, y: 2}

// ES6
let a = 1,
  b = 2;

var obj = { a, b };

console.log(obj); // {a: 1, b: 2}
```

### 10.9.2 계산된 프로퍼티 이름

- 값으로 평가되는 표현식을 사용해 프로퍼티 키를 동적으로 생성 가능
- 프로퍼티 키로 사용할 표현식을 대괄호로 묶어야 함
- ES5에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성하려면 객체 리터럴 외부에서 대괄호 표기법을 사용
- ES6에서는 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성 가능

```jsx
// ES5
var prefix = 'prop';
var i = 0;
var obj = {};

obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}

// ES6
const prefix = 'prop';
let i = 0;
const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};
console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
```

### 10.9.3 메서드 축약 표현

```jsx
// ES5
var obj = {
  name: 'Lee',
  sayHi: function () {
    console.log('Hi!' + this.name);
  },
};

obj.sayHi(); // Hi! Lee

// ES6
const obj = {
  name: 'Lee',
  // 메서드 축약 표현
  sayHi() {
    console.log('Hi!' + this.name);
  },
};

obj.sayHi(); // Hi! Jang
```
