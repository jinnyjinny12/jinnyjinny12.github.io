import{_ as f,u as p,r as t,o as u,a as m,b as c,c as v,d as g,e as s,f as k,w as b,v as h}from"./index-DJeeEBND.js";import{_,a as j}from"./deployed-vercel-uo7xs4Ml.js";const V="/assets/kiosk-main-n0pCLXsc.png",C="/assets/kiosk-order-SGEnXc0A.png",S="/assets/kiosk-payment-C06PRIgB.png",w={__name:"portfolio-kiosk",setup(B){const r=p(),l=t(!1),i=t(!1),e=t(null),d=()=>{r.back()},n=()=>{e.value&&e.value.scrollTo({top:0,behavior:"smooth"})},o=()=>{e.value&&(i.value=e.value.scrollTop>100)};return u(()=>{l.value=!0,e.value&&e.value.addEventListener("scroll",o)}),m(()=>{e.value&&e.value.removeEventListener("scroll",o)}),(x,a)=>(c(),v("div",{ref_key:"containerRef",ref:e,class:"kiosk-project-container kiosk-project-container-scrollable"},[a[2]||(a[2]=g('<div class="title-container" data-v-151f1ee1><h1 class="project-title" data-v-151f1ee1>키오스크 프로젝트</h1><hr class="title-line" data-v-151f1ee1><p class="project-subtitle" data-v-151f1ee1>Vue.js를 활용한 햄버거 키오스크</p></div><div class="badge-container" data-v-151f1ee1><img src="https://img.shields.io/badge/Vue.js-v3.4.21-4FC08D?style=flat&amp;logo=vue.js&amp;logoColor=white" alt="Vue.js Badge" data-v-151f1ee1></div><div class="project-links" data-v-151f1ee1><a href="https://github.com/Stjoo0925/Vue-project" target="_blank" aria-label="GitHub" data-v-151f1ee1><img src="'+_+'" alt="Github Logo" class="logo" data-v-151f1ee1></a><a href="https://burgerkiosk.vercel.app/" target="_blank" aria-label="Vercel" data-v-151f1ee1><img src="'+j+'" alt="Vercel Logo" class="logo" data-v-151f1ee1></a></div><section class="project-overview" data-v-151f1ee1><h2 class="section-title" data-v-151f1ee1>프로젝트 소개</h2><p class="section-description" data-v-151f1ee1> 이 프로젝트는 Vue.js를 기반으로 제작된 햄버거 키오스크 시스템입니다.<br data-v-151f1ee1> 사용자들이 키오스크를 통해 메뉴를 선택하고 주문을 진행할 수 있도록 구성되었으며, 사용자 친화적인 UI와 다양한 기능을 제공합니다.<br data-v-151f1ee1><br data-v-151f1ee1> 목표기간 : 24.05.23 - 06.12 </p></section><section class="project-tech-stack" data-v-151f1ee1><h2 class="section-title" data-v-151f1ee1>기여 내역</h2><ul class="tech-stack-list" data-v-151f1ee1><li data-v-151f1ee1>페이지 디자인 및 상태관리 &amp; Api통신 파트 담당</li><li data-v-151f1ee1>24.05.28 : Footer 레이아웃 완성</li><li data-v-151f1ee1>24.05.29 : 메인메뉴 레이아웃 완성</li><li data-v-151f1ee1>24.05.30 : 리드미 이미지 추가</li><li data-v-151f1ee1>24.05.31 : json data 추가</li><li data-v-151f1ee1>24.06.05 : Vue 메인메뉴 파트 변환 및 기능 완성</li><li data-v-151f1ee1>24.06.06 : 메인메뉴 기능 추가 및 CSS 작업</li><li data-v-151f1ee1>24.06.07 : 메인메뉴 기능 완성</li><li data-v-151f1ee1>24.06.09 : 디렉토리 정리 및 코드 정리</li><li data-v-151f1ee1>24.09.22 : 배포버전을 위한 로컬데이터로 변환</li></ul></section><section class="project-features" data-v-151f1ee1><h2 class="section-title" data-v-151f1ee1>주요 기능</h2><ul class="feature-list" data-v-151f1ee1><li data-v-151f1ee1>메뉴 선택 및 주문 기능</li><li data-v-151f1ee1>실시간 주문 내역 확인 및 수정</li><li data-v-151f1ee1>다양한 세트 메뉴 구성 옵션</li><li data-v-151f1ee1>장바구니 기능을 통한 주문 편의성 제공</li></ul></section><section class="project-tech-stack" data-v-151f1ee1><h2 class="section-title" data-v-151f1ee1>사용 기술</h2><ul class="tech-stack-list" data-v-151f1ee1><li data-v-151f1ee1>Vue.js - 프론트엔드 프레임워크</li><li data-v-151f1ee1>Pinia - 상태 관리</li><li data-v-151f1ee1>Axios - API 통신</li></ul></section><section class="project-images" data-v-151f1ee1><h2 class="section-title" data-v-151f1ee1>프로젝트 화면</h2><div class="image-gallery" data-v-151f1ee1><div class="image-item" data-v-151f1ee1><img src="'+V+'" alt="키오스크 메인 화면" data-v-151f1ee1><p data-v-151f1ee1>메인 화면</p></div><div class="image-item" data-v-151f1ee1><img src="'+C+'" alt="키오스크 주문 화면" data-v-151f1ee1><p data-v-151f1ee1>주문 화면</p></div><div class="image-item" data-v-151f1ee1><img src="'+S+'" alt="키오스크 결제 화면" data-v-151f1ee1><p data-v-151f1ee1>결제 화면</p></div></div></section>',8)),l.value?(c(),v("button",{key:0,class:"back-button",onClick:d},a[0]||(a[0]=[s("i",{class:"bi bi-x-lg"},null,-1)]))):k("",!0),b(s("button",{class:"scroll-top-button",onClick:n},a[1]||(a[1]=[s("i",{class:"bi bi-arrow-up"},null,-1)]),512),[[h,i.value]])],512))}},T=f(w,[["__scopeId","data-v-151f1ee1"]]);export{T as default};
