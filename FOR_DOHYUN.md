# My Blog Project - 도현이를 위한 개발 여정 가이드

> "코드는 사람이 읽을 수 있도록 작성해야 한다. 컴퓨터가 실행할 수 있는 건 부수적인 것이다." - Harold Abelson

## 🎯 프로젝트 한 줄 요약

순수 HTML/CSS/JavaScript로 만든 **개인 블로그 웹사이트**. 글 목록, 글 보기, 글쓰기 기능을 갖추고 있으며, 카테고리 태그 필터링과 localStorage를 활용한 데이터 저장을 지원한다.

---

## 🏗️ 기술 아키텍처: 레고 블록처럼 이해하기

이 프로젝트는 마치 **레고 집**을 짓는 것과 같다.

```
┌─────────────────────────────────────────────────────────┐
│                    🏠 My Blog                           │
├─────────────────────────────────────────────────────────┤
│  HTML (뼈대)     │  CSS (페인트/인테리어)  │  JS (전기/수도) │
│  - index.html    │  - style.css           │  - script.js   │
│  - write.html    │                        │                │
├─────────────────────────────────────────────────────────┤
│                   Vite (건설 현장 관리자)                  │
├─────────────────────────────────────────────────────────┤
│                localStorage (지하 창고)                   │
└─────────────────────────────────────────────────────────┘
```

### 각 부품의 역할

| 파일 | 역할 | 비유 |
|------|------|------|
| `index.html` | 메인 페이지 구조 | 집의 설계도 |
| `write.html` | 글쓰기 페이지 구조 | 서재 설계도 |
| `style.css` | 모든 시각적 스타일 | 페인트, 벽지, 가구 배치 |
| `script.js` | 동적 기능과 로직 | 전기, 수도, 인터넷 |
| `package.json` | 프로젝트 설정 | 건축 허가서 |

---

## 📁 코드베이스 구조: 지도 그리기

```
my-first-project/
│
├── index.html          # 🏠 메인 페이지 (글 목록 + 본문)
├── write.html          # ✍️ 글쓰기 페이지
├── style.css           # 🎨 모든 스타일 (500+ 줄)
├── script.js           # ⚡ 모든 JavaScript 로직
│
├── package.json        # 📦 npm 설정
├── package-lock.json   # 🔒 의존성 버전 고정
├── .gitignore          # 🚫 Git 제외 파일
│
└── node_modules/       # 📚 설치된 패키지들 (Vite 등)
```

---

## 🔗 데이터 흐름: 물이 흐르듯이

### 1. 페이지 로드 시

```
사용자가 index.html 접속
        │
        ▼
DOMContentLoaded 이벤트 발생
        │
        ▼
getPosts() 호출
        │
        ├──▶ localStorage에서 사용자가 쓴 글 가져오기
        │
        └──▶ defaultPosts (기본 샘플 글) 합치기
        │
        ▼
renderPostList() 호출
        │
        ├──▶ 카테고리 필터링 (URL 파라미터 확인)
        │
        ├──▶ 날짜순 정렬
        │
        └──▶ 사이드바에 글 목록 렌더링
        │
        ▼
showPost(첫 번째 글) 호출
        │
        └──▶ 메인 영역에 글 내용 표시
```

### 2. 글쓰기 시

```
사용자가 write.html에서 글 작성
        │
        ▼
폼 제출 (submit 이벤트)
        │
        ▼
선택된 태그들 수집
        │
        ▼
새 글 객체 생성
{
  title: "제목",
  tags: ["tech", "life"],
  content: "내용...",
  date: "2025-01-27"
}
        │
        ▼
localStorage.setItem() 저장
        │
        ▼
index.html로 리다이렉트
        │
        ▼
새 글이 목록 최상단에 표시! ✨
```

---

## 🛠️ 사용된 기술과 선택 이유

### 1. 순수 HTML/CSS/JavaScript (No Framework)

**왜?** 프레임워크 없이 웹의 기본을 이해하는 것이 중요하다.

> 🎭 **비유**: 요리를 배울 때 밀키트부터 시작하면 편하지만, 재료 손질부터 배우면 어떤 요리든 만들 수 있다. React나 Vue는 밀키트고, 바닐라 JS는 재료 손질이다.

```javascript
// React였다면 이렇게 썼을 것
<PostList posts={posts} />

// 우리는 이렇게 직접 DOM을 조작했다
posts.forEach(post => {
    const li = document.createElement('li');
    li.innerHTML = `...`;
    postList.appendChild(li);
});
```

**장점**: DOM이 실제로 어떻게 작동하는지 이해할 수 있다.
**단점**: 코드가 길어지고, 상태 관리가 복잡해질 수 있다.

### 2. Vite (개발 서버)

**왜?** 빠르고 설정이 거의 필요 없다.

```json
// package.json - 이게 전부다!
{
  "scripts": {
    "dev": "vite"
  }
}
```

> 🏃 **비유**: Webpack이 중장비라면, Vite는 전동 킥보드다. 작은 프로젝트에서는 킥보드가 훨씬 빠르다.

### 3. localStorage (데이터 저장)

**왜?** 서버 없이 데이터를 영구 저장할 수 있다.

```javascript
// 저장
localStorage.setItem('blogPosts', JSON.stringify(posts));

// 불러오기
const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
```

**한계점**:
- 브라우저별로 독립적 (다른 브라우저에서는 안 보임)
- 용량 제한 (약 5MB)
- 보안에 민감한 데이터는 저장하면 안 됨

---

## 🎨 CSS 설계 철학

### 레이아웃: Fixed Sidebar 패턴

```css
.sidebar {
    position: fixed;    /* 스크롤해도 고정 */
    width: 320px;
    left: 0;
    top: 70px;          /* 헤더 높이만큼 아래로 */
}

.content {
    margin-left: 320px; /* 사이드바 너비만큼 밀어냄 */
}
```

> 🚪 **비유**: 방문(sidebar)은 항상 왼쪽에 고정되어 있고, 실내(content)는 방문 오른쪽부터 시작한다.

### 색상 시스템: 카테고리별 일관성

```css
/* 기술 - 파란색 계열 */
.category-tag.tech { background: #e3f2fd; color: #1976d2; }

/* 일상 - 보라색 계열 */
.category-tag.life { background: #f3e5f5; color: #7b1fa2; }

/* 여행 - 초록색 계열 */
.category-tag.travel { background: #e8f5e9; color: #388e3c; }
```

이 색상들은 **Material Design** 팔레트에서 가져왔다. 전문 디자이너들이 이미 검증한 색상 조합을 쓰면 실패할 확률이 낮다.

### 그라데이션: 브랜드 아이덴티티

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

이 보라색 그라데이션이 헤더, 버튼, 글쓰기 페이지 헤더에 일관되게 사용된다. **반복은 브랜딩이다**.

---

## 🐛 우리가 마주친 문제들과 해결법

### 문제 1: "npm run dev가 안 돼요!"

**상황**: 처음에 순수 HTML로만 만들었더니 개발 서버가 없었다.

**해결**:
```bash
npm init -y                    # package.json 생성
npm install vite --save-dev    # Vite 설치
# package.json에 "dev": "vite" 스크립트 추가
```

**교훈**: 처음부터 개발 환경을 세팅하자. 나중에 추가하면 더 번거롭다.

### 문제 2: Footer가 사이드바 너비만큼 밀려있다

**원인**:
```css
footer {
    margin-left: 320px;  /* 이게 문제였다 */
}
```

**해결**:
```css
footer {
    width: 100%;  /* 전체 너비로 변경 */
}
```

**교훈**: CSS 레이아웃은 일관성 있게 설계하되, 예외 케이스(footer 같은)는 별도로 처리해야 한다.

### 문제 3: 모달 vs 새 페이지

**처음 설계**: 글쓰기를 모달(팝업)로 구현

**문제점**:
- URL이 바뀌지 않아서 뒤로가기가 이상하게 동작
- 모달이 열린 상태에서 새로고침하면 사라짐

**최종 결정**: 별도 페이지(`write.html`)로 분리

**교훈**:
> "중요한 기능은 별도 페이지로 만들어라. URL은 곧 상태(state)다."

---

## 💡 좋은 엔지니어의 사고방식

### 1. 점진적 개선 (Iterative Development)

우리 프로젝트의 진화 과정:

```
v1: 정적 HTML 블로그 (카드 레이아웃)
     ↓
v2: 사이드바 + 본문 레이아웃 + 클릭 시 글 전환
     ↓
v3: 글쓰기 모달 추가
     ↓
v4: 글쓰기 페이지 분리 + 태그 시스템 + localStorage
```

**한 번에 완벽하게 만들려고 하지 마라.** 작동하는 버전을 먼저 만들고, 점진적으로 개선하라.

### 2. 관심사의 분리 (Separation of Concerns)

```
HTML = 구조 (What)
CSS = 표현 (How it looks)
JS = 동작 (What it does)
```

나쁜 예:
```html
<div style="color: red;" onclick="doSomething()">  <!-- 🚫 -->
```

좋은 예:
```html
<div class="error-message" id="error-box">  <!-- ✅ -->
```

### 3. DRY (Don't Repeat Yourself)

카테고리 이름이 여러 곳에서 필요했다. 매번 하드코딩하는 대신:

```javascript
const categoryNames = {
    tech: '기술',
    life: '일상',
    travel: '여행'
};

// 어디서든 categoryNames[tag]로 접근
```

이렇게 하면 나중에 카테고리 이름을 바꿀 때 **한 곳만 수정**하면 된다.

### 4. 방어적 프로그래밍

```javascript
function showPost(post) {
    const postContent = document.getElementById('post-content');
    if (!postContent) return;  // 요소가 없으면 조용히 종료
    // ...
}
```

"이 요소는 항상 있을 거야"라고 가정하지 마라. 없을 수도 있다.

---

## 📚 배울 수 있는 Best Practices

### 1. Semantic HTML

```html
<!-- 🚫 나쁜 예 -->
<div class="header">
<div class="nav">

<!-- ✅ 좋은 예 -->
<header>
<nav>
<main>
<article>
<aside>
<footer>
```

시맨틱 태그를 쓰면:
- 검색엔진이 내용을 더 잘 이해함 (SEO)
- 스크린 리더가 더 잘 읽어줌 (접근성)
- 코드가 더 읽기 쉬움

### 2. CSS 클래스 네이밍

```css
/* BEM 스타일 (Block__Element--Modifier) */
.post-item          /* 블록 */
.post-item.active   /* 블록 + 상태 */
.post-header        /* 블록 */
.post-tags          /* 하위 요소 */
```

클래스 이름만 보고도 역할을 알 수 있어야 한다.

### 3. JavaScript 이벤트 위임

현재 코드:
```javascript
document.querySelectorAll('.post-item').forEach(item => {
    item.addEventListener('click', ...)
});
```

더 나은 방법 (이벤트 위임):
```javascript
document.querySelector('.post-list').addEventListener('click', (e) => {
    const item = e.target.closest('.post-item');
    if (item) { /* 처리 */ }
});
```

**왜?** 동적으로 추가되는 요소에도 자동으로 적용된다.

### 4. Git 커밋 메시지

```
✅ 좋은 커밋 메시지
- Add post writing feature
- Refactor: separate write page and add tag system
- Fix footer width to full screen

🚫 나쁜 커밋 메시지
- update
- fix bug
- asdfasdf
```

커밋 메시지는 **"무엇을 했는지"**가 아니라 **"왜 했는지"**를 담아야 한다.

---

## 🚀 다음 단계로 나아가기

이 프로젝트를 확장한다면:

### Level 1: 기능 추가
- [ ] 글 수정/삭제 기능
- [ ] 검색 기능
- [ ] 댓글 기능 (localStorage)

### Level 2: 기술 업그레이드
- [ ] TypeScript 적용
- [ ] React로 리팩토링
- [ ] CSS를 Tailwind로 전환

### Level 3: 백엔드 연동
- [ ] Node.js/Express 서버 구축
- [ ] MongoDB에 글 저장
- [ ] 사용자 인증 (로그인/회원가입)

### Level 4: 배포
- [ ] Vercel/Netlify에 배포
- [ ] 커스텀 도메인 연결
- [ ] Google Analytics 연동

---

## 🎬 마무리

이 프로젝트는 작지만, 웹 개발의 핵심을 모두 담고 있다:

- **HTML**: 구조를 잡는다
- **CSS**: 예쁘게 꾸민다
- **JavaScript**: 움직이게 만든다
- **Git**: 버전을 관리한다
- **npm/Vite**: 개발 환경을 구축한다

> "천 리 길도 한 걸음부터."

이 블로그 하나를 만들면서 배운 것들이, 나중에 수백 페이지짜리 앱을 만들 때도 그대로 적용된다. 기초가 탄탄하면 어떤 프레임워크가 와도 두렵지 않다.

**코딩은 마라톤이다. 꾸준히 가자.** 🏃‍♂️

---

*이 문서는 2025년 1월 27일에 작성되었습니다.*
*프로젝트 GitHub: https://github.com/ghostpowder/productBuilder*
