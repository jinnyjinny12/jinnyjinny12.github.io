import{_ as p,u,r as e,o as g,a as m,b as o,c as r,d as b,e as s,f,w as h,v as _}from"./index-BsWcJHRm.js";import{_ as k,a as j}from"./deployed-vercel-B_pRYMXw.js";const x="/assets/flux-stack-BFlep_AT.png",B="/assets/flux-main-D9q7ZD5X.png",S="/assets/flux-login-Bvl4fc3D.png",w="/assets/flux-announcement-BNeJwNk4.png",C={__name:"portfolio-pikka",setup(V){const v=u(),c=e(!1),l=e(!1),a=e(null),n=()=>{v.back()},d=()=>{a.value&&a.value.scrollTo({top:0,behavior:"smooth"})},i=()=>{a.value&&(l.value=a.value.scrollTop>100)};return g(()=>{c.value=!0,a.value&&a.value.addEventListener("scroll",i)}),m(()=>{a.value&&a.value.removeEventListener("scroll",i)}),(D,t)=>(o(),r("div",{ref_key:"containerRef",ref:a,class:"flux-project-container flux-project-container-scrollable"},[t[2]||(t[2]=b('<div class="title-container" data-v-e018c658><h1 class="project-title" data-v-e018c658>Flux 프로젝트</h1><hr class="title-line" data-v-e018c658><p class="project-subtitle" data-v-e018c658> Spring Boot &amp; Vue.js를 이용한 전자상거래 플랫폼 </p></div><div class="badge-container" data-v-e018c658><img src="https://img.shields.io/badge/SpringBoot-v3.3.2-%236DB33F?style=flat&amp;logo=spring-boot&amp;logoColor=white" alt="SpringBoot Badge" data-v-e018c658><img src="https://img.shields.io/badge/Vue.js-v3.4.29-4FC08D?style=flat&amp;logo=vue.js&amp;logoColor=white" alt="Vue.js Badge" data-v-e018c658></div><div class="project-links" data-v-e018c658><a href="https://github.com/Flux2024" target="_blank" aria-label="GitHub" data-v-e018c658><img src="'+k+'" alt="GitHub Logo" class="logo" data-v-e018c658></a><a href="https://flux-front-server.vercel.app/" target="_blank" aria-label="Live Site" data-v-e018c658><img src="'+j+'" alt="Live Site Logo" class="logo" data-v-e018c658></a></div><section class="project-overview" data-v-e018c658><h2 class="section-title" data-v-e018c658>프로젝트 소개</h2><p class="section-description" data-v-e018c658> 본 프로젝트는 최신 웹 기술을 활용하여 온라인 경매 웹 애플리케이션을 개발하는 것을 목표로 합니다.<br data-v-e018c658><br data-v-e018c658> 백엔드는 안정성과 확장성을 갖춘 Spring 프레임워크를 활용하여 구현되었으며,<br data-v-e018c658> 프론트엔드는 사용자 친화적인 Vue.js 프레임워크를 사용하여 구축되었습니다.<br data-v-e018c658><br data-v-e018c658> 이를 통해 사용자에게 매끄러운 경매 경험을 제공하는 것을 목표로 합니다.<br data-v-e018c658><br data-v-e018c658> 목표기간 : 2024.07.15 ~ 08.07(기간연장 08.16) </p></section><section class="project-contributions" data-v-e018c658><h2 class="section-title" data-v-e018c658>기여 내역</h2><ul class="contributions-list" data-v-e018c658><li data-v-e018c658>Github Organizations구축 및 프로젝트 위키 작성</li><li data-v-e018c658>프로젝트 설계 및 CI/CD 파이프라인 구축</li><li data-v-e018c658>백엔드 API 개발 및 REST 설계</li><li data-v-e018c658>프론트엔드 페이지 디자인 및 상태 관리 구현</li></ul></section><section class="project-features" data-v-e018c658><h2 class="section-title" data-v-e018c658>주요 기능</h2><p class="section-description" data-v-e018c658>-사용자페이지-</p><ul class="feature-list" data-v-e018c658><li data-v-e018c658>상품판매 및 등록기능</li><li data-v-e018c658>상품 상세보기 기능</li><li data-v-e018c658>소셜 로그인 기능</li><li data-v-e018c658>아티클 상세보기 기능</li><li data-v-e018c658>랭킹 기능</li><li data-v-e018c658>마이페이지 기능</li></ul><p class="section-description" data-v-e018c658>-관리자페이지-</p><ul class="feature-list" data-v-e018c658><li data-v-e018c658>회원 목록 조회 기능</li><li data-v-e018c658>회원 권한 조정 기능</li><li data-v-e018c658>공지사항 등록 기능</li><li data-v-e018c658>아티클 등록 기능</li></ul></section><section class="project-tech-stack" data-v-e018c658><h2 class="section-title" data-v-e018c658>사용 기술</h2><img src="'+x+'" data-v-e018c658></section><section class="project-images" data-v-e018c658><h2 class="section-title" data-v-e018c658>프로젝트 화면</h2><div class="image-gallery" data-v-e018c658><div class="image-item" data-v-e018c658><img src="'+B+'" alt="메인 페이지" data-v-e018c658><p data-v-e018c658>메인 페이지</p></div><div class="image-item" data-v-e018c658><img src="'+S+'" alt="로그인 페이지" data-v-e018c658><p data-v-e018c658>로그인 페이지</p></div><div class="image-item" data-v-e018c658><img src="'+w+'" alt="공지사항 페이지" data-v-e018c658><p data-v-e018c658>공지사항 페이지</p></div></div></section>',8)),c.value?(o(),r("button",{key:0,class:"back-button",onClick:n},t[0]||(t[0]=[s("i",{class:"bi bi-x-lg"},null,-1)]))):f("",!0),h(s("button",{class:"scroll-top-button",onClick:d},t[1]||(t[1]=[s("i",{class:"bi bi-arrow-up"},null,-1)]),512),[[_,l.value]])],512))}},y=p(C,[["__scopeId","data-v-e018c658"]]);export{y as default};