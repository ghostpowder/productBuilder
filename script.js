// 카테고리 이름 매핑
const categoryNames = {
    tech: '기술',
    life: '일상',
    travel: '여행'
};

// 기본 블로그 포스트 데이터
const defaultPosts = [
    {
        id: 1,
        title: "웹 개발 시작하기: HTML과 CSS 기초",
        tags: ["tech"],
        date: "2025-01-27",
        content: `<p>웹 개발을 처음 시작하는 분들을 위한 HTML과 CSS의 기본 개념을 알아봅니다.</p>

<h2>HTML이란?</h2>
<p>HTML(HyperText Markup Language)은 웹페이지의 구조를 정의하는 마크업 언어입니다. 웹페이지의 뼈대를 만드는 역할을 합니다.</p>

<h3>기본 HTML 구조</h3>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;페이지 제목&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;안녕하세요!&lt;/h1&gt;
    &lt;p&gt;첫 번째 웹페이지입니다.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<h2>CSS란?</h2>
<p>CSS(Cascading Style Sheets)는 HTML 요소들의 스타일을 정의합니다. 색상, 크기, 레이아웃 등을 지정할 수 있습니다.</p>

<h2>마무리</h2>
<p>HTML과 CSS는 웹 개발의 기초입니다. 이 두 가지를 잘 이해하면 멋진 웹페이지를 만들 수 있습니다!</p>`
    },
    {
        id: 2,
        title: "새해 목표와 계획 세우기",
        tags: ["life"],
        date: "2025-01-25",
        content: `<p>2025년 새해를 맞이하여 올해의 목표와 계획을 정리해 보았습니다.</p>

<h2>2025년 목표</h2>
<ul>
    <li>매일 30분 이상 운동하기</li>
    <li>한 달에 책 2권 읽기</li>
    <li>새로운 프로그래밍 언어 배우기</li>
    <li>블로그 꾸준히 운영하기</li>
</ul>

<h2>목표 달성을 위한 전략</h2>
<p>작심삼일이 되지 않으려면 구체적이고 측정 가능한 목표를 세워야 합니다.</p>

<p>올해는 이 원칙을 따라 목표를 세우고 꼭 달성해보려고 합니다!</p>`
    },
    {
        id: 3,
        title: "JavaScript로 인터랙티브 웹 만들기",
        tags: ["tech"],
        date: "2025-01-20",
        content: `<p>JavaScript를 활용하여 동적인 웹페이지를 만드는 방법을 알아봅니다.</p>

<h2>JavaScript란?</h2>
<p>JavaScript는 웹페이지에 동적인 기능을 추가하는 프로그래밍 언어입니다. 사용자와의 상호작용을 처리할 수 있습니다.</p>

<h2>DOM 조작하기</h2>
<p>DOM(Document Object Model)을 통해 HTML 요소를 선택하고 수정할 수 있습니다.</p>

<pre><code>// 요소 선택
const element = document.querySelector('.my-class');

// 내용 변경
element.textContent = '새로운 내용';

// 클릭 이벤트 추가
element.addEventListener('click', function() {
    alert('클릭되었습니다!');
});</code></pre>

<p>JavaScript를 배우면 웹페이지를 훨씬 더 풍부하게 만들 수 있습니다!</p>`
    },
    {
        id: 4,
        title: "제주도 겨울 여행 후기",
        tags: ["travel", "life"],
        date: "2025-01-15",
        content: `<p>겨울의 제주도는 또 다른 매력이 있습니다. 이번 여행에서 경험한 것들을 공유합니다.</p>

<h2>방문한 곳</h2>

<h3>1. 성산일출봉</h3>
<p>겨울 새벽의 일출은 정말 장관이었습니다. 추웠지만 그만한 가치가 있었어요.</p>

<h3>2. 우도</h3>
<p>한적한 겨울의 우도는 여유롭게 자전거를 타며 둘러보기 좋았습니다.</p>

<h2>맛집 추천</h2>
<ul>
    <li>고기국수 - 제주 전통 음식</li>
    <li>흑돼지 구이 - 꼭 먹어봐야 할 메뉴</li>
    <li>귤 디저트 - 겨울 제주의 특별함</li>
</ul>

<p>겨울 제주는 바람이 강하니 따뜻한 옷을 꼭 챙기세요!</p>`
    },
    {
        id: 5,
        title: "Git과 GitHub 사용법",
        tags: ["tech"],
        date: "2025-01-10",
        content: `<p>개발자라면 반드시 알아야 할 Git과 GitHub의 기본 사용법을 정리했습니다.</p>

<h2>Git이란?</h2>
<p>Git은 분산 버전 관리 시스템입니다. 코드의 변경 이력을 추적하고 여러 사람이 협업할 수 있게 해줍니다.</p>

<h2>기본 명령어</h2>
<pre><code>git init
git add .
git commit -m "커밋 메시지"
git push origin main</code></pre>

<h2>GitHub란?</h2>
<p>GitHub는 Git 저장소를 호스팅하는 웹 서비스입니다. 코드를 온라인에 저장하고 다른 개발자들과 공유할 수 있습니다.</p>

<p>Git과 GitHub를 잘 활용하면 효율적인 개발이 가능합니다!</p>`
    }
];

// 포스트 데이터 가져오기
function getPosts() {
    let savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    return [...savedPosts, ...defaultPosts];
}

// 날짜 포맷팅
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
}

function formatShortDate(dateStr) {
    const date = new Date(dateStr);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
}

// 읽기 시간 계산
function calcReadTime(content) {
    const text = content.replace(/<[^>]*>/g, '');
    return Math.max(1, Math.ceil(text.length / 200)) + '분 읽기';
}

// 현재 카테고리 필터 가져오기
function getCurrentCategory() {
    const params = new URLSearchParams(window.location.search);
    return params.get('category') || 'all';
}

// 글 목록 렌더링
function renderPostList() {
    const postList = document.getElementById('post-list');
    if (!postList) return;

    const posts = getPosts();
    const currentCategory = getCurrentCategory();

    // 카테고리 필터링
    const filteredPosts = currentCategory === 'all'
        ? posts
        : posts.filter(post => post.tags.includes(currentCategory));

    // 날짜순 정렬 (최신순)
    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    postList.innerHTML = '';

    filteredPosts.forEach((post, index) => {
        const li = document.createElement('li');
        li.className = 'post-item' + (index === 0 ? ' active' : '');
        li.setAttribute('data-post-id', post.id || `new-${index}`);

        const tagsHtml = post.tags.map(tag =>
            `<span class="category-tag ${tag}">${categoryNames[tag]}</span>`
        ).join('');

        li.innerHTML = `
            <div class="post-tags">${tagsHtml}</div>
            <span class="post-title">${post.title}</span>
            <span class="post-date">${formatShortDate(post.date)}</span>
        `;

        li.addEventListener('click', () => showPost(post));
        postList.appendChild(li);
    });

    // 첫 번째 글 표시
    if (filteredPosts.length > 0) {
        showPost(filteredPosts[0]);
    } else {
        document.getElementById('post-content').innerHTML = '<p style="text-align:center;color:#888;padding:3rem;">해당 카테고리에 글이 없습니다.</p>';
    }

    // 네비게이션 활성화 상태 업데이트
    updateNavActive();
}

// 네비게이션 활성화 상태 업데이트
function updateNavActive() {
    const currentCategory = getCurrentCategory();
    document.querySelectorAll('.nav-tag').forEach(tag => {
        tag.classList.remove('active');
        if (tag.dataset.category === currentCategory) {
            tag.classList.add('active');
        }
    });
}

// 포스트 표시
function showPost(post) {
    const postContent = document.getElementById('post-content');
    if (!postContent) return;

    const tagsHtml = post.tags.map(tag =>
        `<span class="category-tag ${tag}">${categoryNames[tag]}</span>`
    ).join('');

    postContent.innerHTML = `
        <div class="post-header">
            <div class="post-tags">${tagsHtml}</div>
            <h1>${post.title}</h1>
            <div class="post-meta">
                <span class="date">${formatDate(post.date)}</span>
                <span class="read-time">${calcReadTime(post.content)}</span>
            </div>
        </div>
        <img src="https://picsum.photos/800/400?random=${post.id || Math.random()}" alt="${post.title}" class="post-image">
        <div class="post-body">
            ${post.content}
        </div>
    `;

    // 활성 상태 업데이트
    document.querySelectorAll('.post-item').forEach(item => {
        item.classList.remove('active');
    });
    const activeItem = document.querySelector(`[data-post-id="${post.id || `new-${post.title}`}"]`);
    if (activeItem) activeItem.classList.add('active');

    // 모바일에서 스크롤 이동
    if (window.innerWidth <= 768) {
        postContent.scrollIntoView({ behavior: 'smooth' });
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // index.html 페이지인 경우에만 실행
    if (document.getElementById('post-list')) {
        renderPostList();

        // 카테고리 네비게이션 클릭 이벤트 (페이지 새로고침 없이)
        document.querySelectorAll('.nav-tag').forEach(tag => {
            tag.addEventListener('click', function(e) {
                e.preventDefault();
                const category = this.dataset.category;
                const url = category === 'all' ? 'index.html' : `index.html?category=${category}`;
                history.pushState({}, '', url);
                renderPostList();
            });
        });

        // 브라우저 뒤로가기/앞으로가기 처리
        window.addEventListener('popstate', renderPostList);
    }
});
