<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isMounted = ref(false);
const isScrollTopVisible = ref(false);
const containerRef = ref(null); // 컨테이너 참조

const goBack = () => {
  router.back();
};

const scrollToTop = () => {
  if (containerRef.value) {
    containerRef.value.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

const handleScroll = () => {
  if (containerRef.value) {
    isScrollTopVisible.value = containerRef.value.scrollTop > 100;
  }
};

onMounted(() => {
  isMounted.value = true;
  if (containerRef.value) {
    containerRef.value.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  if (containerRef.value) {
    containerRef.value.removeEventListener("scroll", handleScroll);
  }
});
</script>

<template>
  <div ref="containerRef" class="flux-project-container flux-project-container-scrollable">
    <!-- 제목 영역 -->
    <div class="title-container">
      <h1 class="project-title">Leafresh 프로젝트</h1>
      <hr class="title-line" />
      <p class="project-subtitle">
        Spring Boot & Vue.js를 이용한 SNS스타일 원예일지 플랫폼
      </p>
    </div>

    <!-- 뱃지 영역 -->
    <div class="badge-container">
      <!-- 첫 번째 뱃지 -->
      <img src="https://img.shields.io/badge/SpringBoot-v3.3.3-%236DB33F?style=flat&logo=spring-boot&logoColor=white" alt="SpringBoot Badge" />
      <!-- 두 번째 뱃지 -->
      <img src="https://img.shields.io/badge/Vue.js-v3.4.29-4FC08D?style=flat&logo=vue.js&logoColor=white" alt="Vue.js Badge" />
      <!-- 세 번째 뱃지 -->
      <img src="https://img.shields.io/badge/Flutter-v3.24.1-02569B?style=flat&logo=flutter&logoColor=white" alt="Flutter Badge" />
    </div>

    <!-- 아이콘 링크 영역 -->
    <div class="project-links">
      <a
        href="https://github.com/Leafresh-2024"
        target="_blank"
        aria-label="GitHub"
      >
        <img src="@/assets/images/project-github.svg" alt="GitHub Logo" class="logo" />
      </a>
      <a
        href="https://leafresh-frontend-nine.vercel.app/community"
        target="_blank"
        aria-label="Live Site"
      >
        <img
          src="@/assets/images/deployed-vercel.svg"
          alt="Live Site Logo"
          class="logo"
        />
      </a>
    </div>

    <!-- 프로젝트 소개 영역 -->
    <section class="project-overview">
      <h2 class="section-title">프로젝트 소개</h2>
      <p class="section-description">
        Leafresh는 원예 활동을 효과적으로 기록하고 관리할 수 있는 다이어리 기능을 지원합니다.<br />
        식물의 성장 단계, 물주기, 비료 사용 등 모든 세부 사항을 체계적으로 기록할 수 있습니다. <br />
        또한 커뮤니티를 통해 초보 식집사부터 전문가까지 함께 식물에 대한 지식을 나누고 공유할 수 있습니다.<br />
        정보공유를 넘어 실시간 채팅 기능을 통해 식집사들끼리 직접 식물을 분양하고 교환할 수도 있습니다. <br />
      </p>
    </section>

    <!-- 기여 내역 영역 -->
    <section class="project-contributions">
      <h2 class="section-title">기여 내역</h2>
      <ul class="contributions-list">
        <li>프로젝트 기획 및 전체 화면 구현</li>
        <li>전체 프로젝트 일정관리 및 IA, 와이어프레임 작성</li>
        <li>캘린더,유저정보 식별을 통한 원예일지 다이어리 기능</li>
        <li>백엔드 API 개발 및 REST 설계</li>
        <li>프론트엔드 페이지 디자인 및 상태 관리 구현</li>
      </ul>
    </section>

    <!-- 주요 기능 영역 -->
    <section class="project-features">
      <h2 class="section-title">주요 기능</h2>
      <ul class="feature-list">
        <li>원예 관리 기능</li>
        <li>피드 기능</li>
        <li>반려 식물 관리</li>
        <li>식물 분양 및 채팅 기능</li>
        <li>회원 가입 및 로그인 기능</li>
      </ul>
    </section>

    <!-- 아키텍쳐 영역 -->
    <section class="project-tech-stack">
      <h2 class="section-title">아키텍쳐</h2>
      <img src="@/assets/images/leafresh-project/leafresh-architecture.png" />
    </section>

    <!-- 사용 기술 영역 -->
    <section class="project-tech-stack">
      <h2 class="section-title">사용 기술</h2>
      <img src="@/assets/images/leafresh-project/leafresh-stack.png" />
    </section>

    <!-- 프로젝트 이미지 영역 -->
    <section class="project-images">
      <h2 class="section-title">프로젝트 화면</h2>
      <div class="image-gallery">
        <div class="image-item">
          <img
            src="@/assets/images/leafresh-project/leafresh-main.png"
            alt="메인 페이지"
          />
          <p>메인 페이지</p>
        </div>
        <div class="image-item">
          <img
            src="@/assets/images/leafresh-project/leafresh-login.png"
            alt="로그인 페이지"
          />
          <p>로그인 페이지</p>
        </div>
        <div class="image-item">
          <img
            src="@/assets/images/leafresh-project/leafresh-feed.png"
            alt="피드 페이지"
          />
          <p>피드 페이지</p>
        </div>
        <div class="image-item">
          <img
            src="@/assets/images/leafresh-project/leafresh-market.png"
            alt="마켓 페이지"
          />
          <p>마켓 페이지</p>
        </div>
        <div class="image-item">
          <img
            src="@/assets/images/leafresh-project/leafresh-profile.png"
            alt="프로필 페이지"
          />
          <p>프로필 페이지</p>
        </div>
        <div class="image-item">
          <img
            src="@/assets/images/leafresh-project/leafresh-chat.png"
            alt="채팅 페이지"
          />
          <p>채팅 페이지</p>
        </div>
      </div>
    </section>

    <!-- 뒤로가기 버튼 -->
    <button v-if="isMounted" class="back-button" @click="goBack">
      <i class="bi bi-x-lg"></i>
    </button>

    <!-- 페이지 상단 이동 버튼 -->
    <button
      v-show="isScrollTopVisible"
      class="scroll-top-button"
      @click="scrollToTop"
    >
      <i class="bi bi-arrow-up"></i>
    </button>
  </div>
</template>

<style scoped>
/* 컨테이너 스타일 */
.flux-project-container {
  position: relative; /* 추가 */
  height: 100%;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: var(--portfolio-bg-color);
}

.flux-project-container-scrollable {
  overflow-y: auto; /* 세로 스크롤 가능 */
  -ms-overflow-style: none; /* IE와 Edge에서 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
}

.flux-project-container-scrollable::-webkit-scrollbar {
  display: none; /* Chrome, Safari에서 스크롤바 숨기기 */
}

/* 제목 영역 스타일 */
.title-container {
  text-align: center;
  margin-bottom: 30px;
}

.project-title {
  font-size: 2.5rem;
  font-family: "goorm-sans-bold";
  color: var(--font-color3);
}

.title-line {
  width: 350px;
  height: 2px;
  background-color: var(--font-color3);
  border: none;
  margin: 0 auto;
  margin-bottom: 10px;
}

.project-subtitle {
  font-family: "goorm-sans-code";
  font-size: 1.2rem;
  color: var(--font-color3);
  margin-bottom: 40px;
}

.badge-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.badge-container img {
  margin-left: 5px;
  margin-right: 5px;
}

/* 섹션 타이틀 스타일 */
.section-title {
  font-size: 1.8rem;
  font-family: "goorm-sans-bold";
  color: var(--font-color3);
  margin-bottom: 15px;
}

.section-description {
  font-family: "goorm-sans-code";
  font-size: 1rem;
  color: var(--font-color3);
  line-height: 1.6;
}

/* 프로젝트 링크 영역 스타일 */
.project-links {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 30px;
}

.project-links a {
  margin-right: 15px;
  font-size: 32px;
  color: #333;
  text-decoration: none;
}

.logo {
  width: 100%;
  height: 50px;
  vertical-align: middle;
}

/* 주요 기능 및 사용 기술 섹션 스타일 */
.project-features,
.project-tech-stack,
.project-contributions {
  margin-bottom: 30px;
}

.feature-list,
.tech-stack-list,
.contributions-list {
  list-style-type: disc;
  padding-left: 20px;
}

.project-tech-stack img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.feature-list li,
.tech-stack-list li,
.contributions-list li {
  font-family: "goorm-sans-code";
  font-size: 1rem;
  color: var(--font-color3);
  margin-bottom: 5px;
}

/* 프로젝트 이미지 영역 스타일 */
.project-images {
  margin-top: 20px;
}

.image-gallery {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.image-item {
  flex: 1 1 calc(33% - 10px);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-item img {
  width: 100%;
  height: 200px; /* 모든 이미지를 높이 200px로 설정 */
  border: 3px solid var(--header-footer-color);
  object-fit: cover; /* 이미지 비율을 유지하면서 영역에 맞게 잘라냄 */
  border-radius: 5px;
  margin-bottom: 5px;
}

.image-item p {
  font-family: "goorm-sans-code";
  font-size: 0.9rem;
  color: var(--font-color3);
}

/* 뒤로가기 버튼 스타일 */
.back-button {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 15px;
  background-color: var(--secondary-highlight-color);
  color: var(--font-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
}

.back-button i {
  margin-right: 5px;
}

.back-button:hover {
  background-color: var(--secondary-bg-color); /* 호버 시 배경색 변경 */
}

.bi {
  margin: 0 !important;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.scroll-top-button {
  position: fixed;
  bottom: 60px;
  right: 20px;
  padding: 10px 15px;
  background-color: var(--secondary-highlight-color);
  color: var(--font-color);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity 0.3s ease;
  animation: blink 2s infinite; /* 깜박이는 애니메이션 추가 */
}

.scroll-top-button:hover {
  opacity: 1;
  background-color: var(--secondary-bg-color);
}

.scroll-top-button i {
  font-size: 1.2rem;
}

@media screen and (max-width: 768px) {
  .image-gallery {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
  }

  .project-tech-stack img {
    width: 100%;
  }

  .back-button {
    right: 2%;
    opacity: 0.5;
  }
}
</style>
