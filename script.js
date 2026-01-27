// 블로그 포스트 데이터
const posts = {
    1: {
        title: "웹 개발 시작하기: HTML과 CSS 기초",
        category: "tech",
        categoryName: "기술",
        date: "2025년 1월 27일",
        readTime: "5분 읽기",
        image: "https://picsum.photos/800/400?random=1",
        content: `
            <p>웹 개발을 처음 시작하는 분들을 위한 HTML과 CSS의 기본 개념을 알아봅니다.</p>

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

            <h3>CSS 기본 문법</h3>
            <pre><code>선택자 {
    속성: 값;
}

/* 예시 */
h1 {
    color: blue;
    font-size: 24px;
}</code></pre>

            <h2>마무리</h2>
            <p>HTML과 CSS는 웹 개발의 기초입니다. 이 두 가지를 잘 이해하면 멋진 웹페이지를 만들 수 있습니다!</p>
        `
    },
    2: {
        title: "새해 목표와 계획 세우기",
        category: "life",
        categoryName: "일상",
        date: "2025년 1월 25일",
        readTime: "3분 읽기",
        image: "https://picsum.photos/800/400?random=2",
        content: `
            <p>2025년 새해를 맞이하여 올해의 목표와 계획을 정리해 보았습니다.</p>

            <h2>2025년 목표</h2>
            <ul>
                <li>매일 30분 이상 운동하기</li>
                <li>한 달에 책 2권 읽기</li>
                <li>새로운 프로그래밍 언어 배우기</li>
                <li>블로그 꾸준히 운영하기</li>
            </ul>

            <h2>목표 달성을 위한 전략</h2>
            <p>작심삼일이 되지 않으려면 구체적이고 측정 가능한 목표를 세워야 합니다.</p>

            <h3>SMART 목표 설정법</h3>
            <ul>
                <li><strong>S</strong>pecific (구체적)</li>
                <li><strong>M</strong>easurable (측정 가능)</li>
                <li><strong>A</strong>chievable (달성 가능)</li>
                <li><strong>R</strong>elevant (관련성 있는)</li>
                <li><strong>T</strong>ime-bound (기한이 있는)</li>
            </ul>

            <p>올해는 이 원칙을 따라 목표를 세우고 꼭 달성해보려고 합니다!</p>
        `
    },
    3: {
        title: "JavaScript로 인터랙티브 웹 만들기",
        category: "tech",
        categoryName: "기술",
        date: "2025년 1월 20일",
        readTime: "7분 읽기",
        image: "https://picsum.photos/800/400?random=3",
        content: `
            <p>JavaScript를 활용하여 동적인 웹페이지를 만드는 방법을 알아봅니다.</p>

            <h2>JavaScript란?</h2>
            <p>JavaScript는 웹페이지에 동적인 기능을 추가하는 프로그래밍 언어입니다. 사용자와의 상호작용을 처리할 수 있습니다.</p>

            <h2>DOM 조작하기</h2>
            <p>DOM(Document Object Model)을 통해 HTML 요소를 선택하고 수정할 수 있습니다.</p>

            <pre><code>// 요소 선택
const element = document.querySelector('.my-class');

// 내용 변경
element.textContent = '새로운 내용';

// 스타일 변경
element.style.color = 'red';

// 클릭 이벤트 추가
element.addEventListener('click', function() {
    alert('클릭되었습니다!');
});</code></pre>

            <h2>이벤트 처리</h2>
            <p>사용자의 클릭, 키보드 입력, 마우스 움직임 등 다양한 이벤트를 처리할 수 있습니다.</p>

            <h3>자주 사용하는 이벤트</h3>
            <ul>
                <li><code>click</code> - 클릭</li>
                <li><code>mouseover</code> - 마우스 오버</li>
                <li><code>keydown</code> - 키 누름</li>
                <li><code>submit</code> - 폼 제출</li>
            </ul>

            <p>JavaScript를 배우면 웹페이지를 훨씬 더 풍부하게 만들 수 있습니다!</p>
        `
    },
    4: {
        title: "제주도 겨울 여행 후기",
        category: "travel",
        categoryName: "여행",
        date: "2025년 1월 15일",
        readTime: "4분 읽기",
        image: "https://picsum.photos/800/400?random=4",
        content: `
            <p>겨울의 제주도는 또 다른 매력이 있습니다. 이번 여행에서 경험한 것들을 공유합니다.</p>

            <h2>방문한 곳</h2>

            <h3>1. 성산일출봉</h3>
            <p>겨울 새벽의 일출은 정말 장관이었습니다. 추웠지만 그만한 가치가 있었어요.</p>

            <h3>2. 우도</h3>
            <p>한적한 겨울의 우도는 여유롭게 자전거를 타며 둘러보기 좋았습니다.</p>

            <h3>3. 협재 해변</h3>
            <p>겨울 바다의 고요함과 에메랄드빛 물빛이 인상적이었습니다.</p>

            <h2>맛집 추천</h2>
            <ul>
                <li>고기국수 - 제주 전통 음식</li>
                <li>흑돼지 구이 - 꼭 먹어봐야 할 메뉴</li>
                <li>귤 디저트 - 겨울 제주의 특별함</li>
            </ul>

            <h2>여행 팁</h2>
            <p>겨울 제주는 바람이 강하니 따뜻한 옷을 꼭 챙기세요. 렌터카는 필수입니다!</p>
        `
    },
    5: {
        title: "Git과 GitHub 사용법",
        category: "tech",
        categoryName: "기술",
        date: "2025년 1월 10일",
        readTime: "6분 읽기",
        image: "https://picsum.photos/800/400?random=5",
        content: `
            <p>개발자라면 반드시 알아야 할 Git과 GitHub의 기본 사용법을 정리했습니다.</p>

            <h2>Git이란?</h2>
            <p>Git은 분산 버전 관리 시스템입니다. 코드의 변경 이력을 추적하고 여러 사람이 협업할 수 있게 해줍니다.</p>

            <h2>기본 명령어</h2>

            <h3>저장소 초기화</h3>
            <pre><code>git init</code></pre>

            <h3>파일 추가 및 커밋</h3>
            <pre><code>git add .
git commit -m "커밋 메시지"</code></pre>

            <h3>원격 저장소 연결</h3>
            <pre><code>git remote add origin [URL]
git push -u origin main</code></pre>

            <h2>GitHub란?</h2>
            <p>GitHub는 Git 저장소를 호스팅하는 웹 서비스입니다. 코드를 온라인에 저장하고 다른 개발자들과 공유할 수 있습니다.</p>

            <h3>주요 기능</h3>
            <ul>
                <li>코드 저장소 호스팅</li>
                <li>Pull Request를 통한 코드 리뷰</li>
                <li>Issue 트래킹</li>
                <li>GitHub Actions (CI/CD)</li>
            </ul>

            <p>Git과 GitHub를 잘 활용하면 효율적인 개발이 가능합니다!</p>
        `
    }
};

// 포스트 표시 함수
function showPost(postId) {
    const post = posts[postId];
    if (!post) return;

    const postContent = document.getElementById('post-content');

    postContent.innerHTML = `
        <div class="post-header">
            <span class="category-tag ${post.category}">${post.categoryName}</span>
            <h1>${post.title}</h1>
            <div class="post-meta">
                <span class="date">${post.date}</span>
                <span class="read-time">${post.readTime}</span>
            </div>
        </div>
        <img src="${post.image}" alt="${post.title}" class="post-image">
        <div class="post-body">
            ${post.content}
        </div>
    `;

    // 활성 상태 업데이트
    document.querySelectorAll('.post-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-post="${postId}"]`).classList.add('active');

    // 모바일에서 스크롤 이동
    if (window.innerWidth <= 768) {
        postContent.scrollIntoView({ behavior: 'smooth' });
    }
}

// 이벤트 리스너 등록
document.addEventListener('DOMContentLoaded', function() {
    // 첫 번째 글 표시
    showPost(1);

    // 글 목록 클릭 이벤트
    document.querySelectorAll('.post-item').forEach(item => {
        item.addEventListener('click', function() {
            const postId = this.getAttribute('data-post');
            showPost(postId);
        });
    });
});
