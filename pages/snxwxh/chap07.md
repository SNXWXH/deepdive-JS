# 07 연산자

## **7.1 산술 연산자(Arithmetic Operator)**

- 이항 연산자: +, -, \*, /, %
- 단항 연산자: ++, --, +, -
- 문자열 연결 연산자: 피연산자 중 하나라도 문자열이면 문자열로 연결

```jsx
console.log(10 + 20); // 30
console.log(10 - 5); // 5
console.log(10 * 2); // 20
console.log(10 / 2); // 5
console.log(10 % 3); // 1
```

## **7.2 할당 연산자(Assignment Operator)**

- `=` : 기본 할당
- `+=`, `=`, `=`, `/=`, `%=`: 복합 할당

```jsx
let a = 10;
a += 5; // a = 15
console.log(a);
```

## **7.3 비교 연산자(Comparison Operator)**

- 동등 연산자 `==`, `!=`
- 일치 연산자 `===`, `!==`
- 대소 비교 연산자 `>`, `<`, `>=`, `<=`

```jsx
console.log(10 == '10'); // true (암묵적 변환)
console.log(10 === '10'); // false
```

## **7.4 삼항 조건 연산자(Ternary Operator)**

```jsx
let score = 85;
let result = score >= 80 ? 'pass' : 'fail';

console.log(result); // pass
```

## **7.5 논리 연산자(Logical Operator)**

- `&&`, `||`, `!`

```jsx
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
```

## **7.6 쉼표 연산자(Comma Operator)**

```jsx
let x = (1, 2, 3);
console.log(x); // 3
```

## **7.7 그룹 연산자(Grouping Operator)**

```jsx
console.log((2 + 3) * 5); // 25
```

## **7.8 typeof 연산자**

```jsx
console.log(typeof 'Hello'); // string
console.log(typeof 42); // number
```

## **7.9 지수 연산자(Exponentiation Operator)**

```jsx
console.log(3 ** 3); // 27
```

## **7.10 기타 연산자**

- `?.`, `??`, `delete`, `new`, `instanceof`, `in`
