# 03 자바스크립트 개발 환경과 실행 방법

## 3.1 자바스크립트 실행 환경

- 모든 브라우저는 자바스크립트를 해석하고 실행할 수 있는 자바스크립트 엔진 내장
- Node.js도 동일하게 동작하지만, ECMAScript 이외의 브라우저 전용 Web API는 지원하지 않음
- 브라우저: HTML, CSS, 자바스크립트를 렌더링
- Node.js: 브라우저 외부에서 자바스크립트 실행 환경 제공
- 브라우저는 클라이언트 사이드 Web API 지원, Node.js는 ECMAScript + Node.js API 지원

## 3.2 웹 브라우저

### 3.2.1 개발자 도구

- 브라우저가 제공하는 웹 개발 도구
- 단축키
  - Windows: F12 또는 Ctrl + Shift + I
  - macOS: Command ⌘ + Option ⌥ + I
- 주요 패널 기능
  - **Elements**: DOM과 CSS 편집 및 렌더링 뷰 확인
  - **Console**: 에러 확인 및 `console.log()` 출력 확인
  - **Sources**: 자바스크립트 코드 디버깅
  - **Network**: 네트워크 요청 및 성능 확인
  - **Application**: 웹 스토리지, 세션, 쿠키 관리

### 3.2.2 콘솔

- 자바스크립트 코드에서 발생한 에러 확인 및 디버깅
- REPL(Read Eval Print Loop) 환경 제공
- 여러 줄 입력: Shift + Enter

### 3.2.3 브라우저에서 자바스크립트 실행

- HTML의 `<script>` 태그 내 자바스크립트 코드 실행
- `console.log()`를 통해 결과 출력

### 3.2.4 디버깅

- 개발자 도구의 Sources 패널을 통해 디버깅
- 에러 발생 시 빨간 밑줄로 표시, 마우스를 올려 에러 정보 확인

## 3.3 Node.js

### 3.3.1 Node.js & npm

- 2009년 크롬 V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임 환경
- npm(node package manager): Node.js 패키지 매니저로, 모듈 설치 및 관리 기능 제공

### 3.3.2 Node.js 설치

- [Node.js 공식 사이트](http://nodejs.org)에서다운로드 및 설치
- LTS 버전: 안정적이고 장기 지원
- Current 버전: 최신 기능 제공, 다소 불안정

### 3.3.3 Node.js REPL

- Node.js가 제공하는 REPL 환경에서 자바스크립트 코드 실행 가능
- 터미널에서 `node` 입력 후, 프롬프트(`>`)에서 코드 실행
- 종료: Ctrl + C 두 번 입력
