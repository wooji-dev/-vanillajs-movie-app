# VanillaJS Movie App 🎬

순수 JavaScript로 구현한 영화 검색 및 상세정보 조회 애플리케이션입니다.

## 📋 프로젝트 개요

이 프로젝트는 **Vanilla JavaScript**를 사용하여 현대적인 웹 애플리케이션의 핵심 개념들을 구현한 학습용 프로젝트입니다. React나 Vue.js 같은 프레임워크 없이 컴포넌트 기반 아키텍처, 상태 관리, 라우팅 시스템을 직접 구현하여 JavaScript의 핵심 원리를 이해할 수 있습니다.

## 🎯 프로젝트 목적

- **컴포넌트 기반 개발**: 재사용 가능한 컴포넌트 시스템 구현
- **상태 관리**: Observer 패턴을 활용한 반응형 상태 관리 시스템 구현
- **SPA 라우팅**: Hash 기반 단일 페이지 애플리케이션 라우터 구현
- **API 통합**: OMDB API를 활용한 실제 데이터 연동
- **모던 JavaScript**: ES6+ 문법과 모듈 시스템 활용

## ✨ 주요 기능

### 🔍 영화 검색

- 실시간 영화 제목 검색
- 검색 결과 페이지네이션
- 로딩 상태 및 에러 처리

### 📱 영화 상세정보

- 영화 포스터, 줄거리, 평점 등 상세 정보 표시
- 개별 영화 페이지 라우팅

### 🎨 반응형 UI

- 모던하고 직관적인 사용자 인터페이스
- 모바일 친화적 반응형 디자인

## 🛠 기술 스택

### 프론트엔드

- **언어**: Vanilla JavaScript (ES6+)
- **번들러**: Parcel 2.15.4
- **스타일링**: CSS3
- **폰트**: Google Fonts (Oswald, Roboto)

### API

- **영화 데이터**: OMDB API (Open Movie Database)

### 개발 도구

- **모듈 시스템**: ES6 Modules
- **개발 서버**: Parcel Dev Server
- **빌드 시스템**: Parcel Build

## 🏗 아키텍처

### 📁 프로젝트 구조

```
js_pra/
├── index.html              # 메인 HTML 파일
├── package.json           # 프로젝트 설정 및 의존성
├── src/
│   ├── App.js            # 루트 애플리케이션 컴포넌트
│   ├── main.js           # 애플리케이션 진입점
│   ├── main.css          # 글로벌 스타일
│   ├── core/
│   │   └── heropy.js     # 커스텀 프레임워크 (Component, Router, Store)
│   ├── components/       # 재사용 가능한 UI 컴포넌트
│   │   ├── Headline.js   # 헤더 컴포넌트
│   │   ├── Search.js     # 검색 컴포넌트
│   │   ├── MovieList.js  # 영화 목록 컴포넌트
│   │   └── MovieItem.js  # 개별 영화 아이템 컴포넌트
│   ├── routes/           # 페이지 라우트 컴포넌트
│   │   ├── index.js      # 라우터 설정
│   │   ├── Home.js       # 홈페이지
│   │   └── Movie.js      # 영화 상세 페이지
│   └── store/            # 상태 관리
│       └── movie.js      # 영화 관련 상태 및 액션
```

### 🔧 핵심 아키텍처 컴포넌트

#### 1. **Component 시스템** (`src/core/heropy.js`)

```javascript
export class Component {
  constructor(payload = {}) {
    const { tagName = "div", props = {}, state = {} } = payload;
    this.el = document.createElement(tagName);
    this.props = props; // 부모로부터 받는 데이터
    this.state = state; // 컴포넌트 내부 상태
    this.render();
  }
}
```

#### 2. **Store 시스템** (반응형 상태 관리)

```javascript
export class Store {
  constructor(state) {
    this.state = {};
    this.observers = {};
    // Object.defineProperty로 getter/setter 구현
    // 상태 변경 시 자동으로 구독자들에게 알림
  }
  subscribe(key, cb) {
    // 상태 변경 구독 시스템
  }
}
```

#### 3. **Router 시스템** (SPA 라우팅)

```javascript
export function createRouter(routes) {
  // Hash 기반 라우팅
  // 쿼리스트링 파싱
  // 동적 컴포넌트 렌더링
}
```

### 🔄 데이터 플로우

1. **사용자 입력** → Search 컴포넌트
2. **상태 업데이트** → Movie Store
3. **API 호출** → OMDB API
4. **상태 변경** → 구독자들에게 자동 알림
5. **UI 업데이트** → 관련 컴포넌트들 리렌더링

## 🔑 API 설정

이 프로젝트는 OMDB API를 사용합니다. 현재 하드코딩된 API 키가 포함되어 있지만, 프로덕션 환경에서는 환경 변수로 관리하는 것을 권장합니다.

## 🧩 주요 학습 포인트

### 1. **컴포넌트 기반 아키텍처**

- 재사용 가능한 컴포넌트 설계
- Props와 State를 통한 데이터 관리
- 컴포넌트 생명주기 이해

### 2. **상태 관리 패턴**

- Observer 패턴 구현
- 반응형 데이터 바인딩
- `Object.defineProperty()`를 활용한 Proxy 패턴

### 3. **라우팅 시스템**

- Hash 기반 SPA 라우팅
- 쿼리스트링 파싱
- 히스토리 API 활용

### 4. **비동기 처리**

- async/await를 사용한 API 통신
- 에러 핸들링
- 로딩 상태 관리

## 👨‍💻 제작자

학습 목적으로 제작된 프로젝트입니다.
