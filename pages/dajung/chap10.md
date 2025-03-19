# 10장 : 객체 리터럴

### 객체란?

객체는 변경 가능한 값이다.

0개 이상의 프로퍼티로 구성된 집합으로 키와 값으로 구성된다.

- 프로퍼티 : 객체의 상태를 나타내는 값(data)
- 메서드 : 프로퍼티를 참조하고 조직할 수 있는 동작(behavior)

➡️ 상태와 동작을 하나의 단위로 구조화할 수 있어서 유용!

### 객체 리터럴에 의한 객체 생성

자바스크립트는 프로토타입 기반 객체지향 언어로서 클래스 기반 객체지향 언어와 달리 다양한 객체 생성 방법을 지원한다.

**객체 생성 방법**

1. 객체 리터럴
2. Object 생성자 함수
3. 생성자 함수
4. Object.create 메서드
5. 클래스(ES6)

> **객체 리터럴**

객체를 생성하는 가장 일반적이고 간단한 방법

중괄호({…}) 내에 0개 이상의 프로퍼티를 정의한다.

변수에 할당되는 시점에 자바스크립트 엔진은 객체 리터럴을 해석해 객체를 생성한다.

```jsx
var person = {
  name: "Lee",
  sayHello: function () {
    console.log(`hi ${this.name}`);
  },
};

console.log(typeof person); // object
console.log(person); // {name : 'Lee', sayHello : f}

// 중괄호 내에 프로퍼티를 정의하지 않으면 빈 객체가 생성됨
var empty = {}; // 빈 객체
console.log(typeof empty); //object
```

객체 리터럴의 중괄호는 코드 블록을 의미하지 않는다!

➡️ 따라서, 세미콜론을 무조건 붙여줘야 한다.

객체 리터럴에 프로퍼티를 포함시켜 객체를 생성함과 동시에 프로퍼티를 만들수도 있고, 객체를 생성한 이후에 프로퍼티 키를 동적으로 생성할 수 있다.

### 프로퍼티

```markdown
✅ 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.
```

프로퍼티를 나열할 때는 쉼표 `,` 로 구분하며, 마지막 프로퍼티 뒤에는 쉼표를 생략해도 괜찮다.

| 이름        | 설명                                          |
| ----------- | --------------------------------------------- |
| 프로퍼티 키 | 빈 문자열을 포함하는 모든 문자열 또는 심벌 값 |
| 프로퍼티 값 | 자바스크립트에서 사용할 수 있는 모든 값       |

```jsx
var person = {
  // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
  name: "Lee",
  // 프로퍼티 키는 age, 프로퍼티 값은 20
  age: 20,
};
```

프로퍼티 키는 값에 접근할 수 있는 이름으로서 식별자 역할을 한다.

식별자 네이밍 규칙을 따르지 않는 이름에는 반드시 따옴표를 사용해야 한다.

```jsx
var person = {
	firstName : 'Ung-mo', // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
	'last-name' : 'Lee', // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
	home-address: 'Seoul', // SyntaxError : Unexpected token -
};

```

문자열 또는 문자열로 평가할 수 있는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있다.

프로퍼티 키로 사용할 표현식을 `대괄호 [ ]` 로 묶어야 한다.

```jsx
var obj = {};
var key = "hello";

// ES5 : 프로퍼티 키 동적 생성
obj[key] = "world";
// ES6 : 계산된 프로퍼티 이름
// var obj = { [key] : 'world' }

console.log(obj); // {hello: 'world'}
```

빈 문자열도 프로퍼티 키로 사용할 수 있다.

```jsx
var foo = {
  " ": " ", // 빈 문자열도 프로퍼티 키로 사용 가능
};

console.log(foo); // {" " : " "}
```

프로퍼티 키에 문자열이나 심벌 값 외의 값을 사용하면 암묵적 타입 변환을 통해 문자열이 된다.

프로퍼티 키로 숫자 리터럴을 사용하면 따옴표는 붙지 않지만 내부적으로는 문자열로 변환 된다.

```jsx
var foo = {
  0: 1,
  1: 2,
  2: 3,
};

console.log(foo); // {0 : 1, 1 : 2, 2 : 3}
```

이미 존재하는 프로퍼티 키를 중복 선언하면 **나중 값**으로 덮어쓴다!

```jsx
var foo = {
  name: "Lee",
  name: "Kim",
};

console.log(foo); // {name : "Kim"}
```

### 메서드

프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 `메서드` 라고 부른다.

객체에 묶여 있는 함수를 의미한다.

```jsx
var circle = {
  radius: 5, // ⬅️ 프로퍼티

  // 원의 지름
  getDiameter: function () {
    // ⬅️ 메서드
    return 2 * this.radius; // this는 circle을 가리킨다.
  },
};

console.log(circle.getDiameter()); // 10
```

`this` 는 객체 자신을 가리키는 참조 변수다.

### **프로퍼티 접근**

프로퍼티에 접근하는 방법은 2가지가 있다.

1. **마침표 표기법** : 마침표 프로퍼티 접근 연산자 `.` 를 사용
2. **대괄호 표기법** : 대괄호 프로퍼티 접근 연산자 `[...]` 를 사용

```jsx
var person = {
  name: "Lee",
};

console.log(person.name); // 마침표 표기법에 의한 프로퍼티 접근
console.log(person["name"]); // 대괄호 표기법에 의한 프로퍼티 접근
```

프로퍼티 키가 무조건 따옴표로 감싼 문자열이여만 가능하다.

대괄호 연산자 내의 따옴표로 감싸지 않으면 `참조 에러(ReferenceError)`가 발생한다.

또한, 존재하지 않는 프로퍼티에 접근하면 `undefined` 를 반환한다.

```jsx
var person = {
  name: "Lee",
};

console.log(person[name]); // ReferenceError : name is not defined

// 존재하지 않는 프로퍼티에 접근하면 undefined 반환
console.log(person.age); // undefined
```

**식별자 네이밍 규칙**을 준수하지 않는 이름은 **대괄호 표기법**을 사용해야 한다.

```jsx
var person = {
	'last-name' : 'Lee',
	1 : 10
}

person.'last-name';  // SyntaxError : Unexpected string
person.last-name;    // NaN(브라우저환경)
person[last-name];   // ReferenceError : last is not defined
person['last-name']; // Lee

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있따.
person.1;      // SyntaxError : Unexpected number
person.'1';   // SyntaxError : Unexpeccted string
person[1];    // 10 : person[1] ➡️ person['1']
person['1'];  // 10
```

### 프로퍼티 값 갱신

이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값 갱신

```jsx
var person = {
  name: "Lee",
};

// person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다.
person.name = "jeong";

console.log(person.name); // jeong
```

### 프로퍼티 동적 생성

존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당된다.

```jsx
var person = {
  name: "Lee",
};

// person 객체에는 age 프로퍼티가 존재하지 않는다.
// 따라서 person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당된다.
person.age = 20;

console.log(person); // {name : 'Lee', age : 20}
```

### **프로퍼티 삭제**

`delete 연산자` 로 객체 프로퍼티 삭제

`delete 연산자`의 피연산자는 프로퍼티 값에 접근할 수 있는 표현식이어야 한다.

존재하지 않는 프로퍼티를 삭제하면 아무런 에러 없이 무시된다.

```jsx
var person = {
  age: 20,
};

delete person.age; //age 프로퍼티가 존재하므로 삭제 가능
delete person.address; // address 프로퍼티가 존재하지 않으므로 삭제 불가능 -> 에러는 발생 X
```

### **프로퍼티 축약 표현**

프로퍼티 값으로 변수를 사용하는 경우 변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키 생략 가능

프로퍼티 키는 변수 이름으로 자동 생성

```jsx
let x = 1,
  y = 2;

const obj = {
  x: x,
  y: y,
};

// 프로퍼티 축약 표현
const obj = { x, y };

console.log(obj); // {x : 1, y : 2}
```

**계산된 프로퍼티 이름**

```jsx
var prefix = "prop";
var i = 0;

var obj = {};

// 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;

console.log(obj); // { 'prop-1' : 1, 'prop-2' : 2}

// ES6
// 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성 가능
const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};

console.log(obj); // { 'prop-1' : 1, 'prop-2' : 2}
```

**메서드 축약 표현**

```jsx
//ES5
var obj = {
  name: "Lee",
  sayHi: function () {
    console.log("Hi!" + this.name);
  },
};

obj.sayHi(); // Hi! Lee
```

```jsx
// ES6
var obj = {
  name: "Lee",

  // 축약 표현
  sayHi() {
    console.log("Hi!" + this.name);
  },
};

obj.sayHi(); //Hi! Lee
```
