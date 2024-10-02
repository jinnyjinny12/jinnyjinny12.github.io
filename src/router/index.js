import { createRouter, createWebHashHistory } from "vue-router";

const About = () => import(/* webpackPrefetch: true */ "@/views/about.vue");
const TechSkills = () => import(/* webpackPrefetch: true */ "@/views/techSkills.vue");
const Portfolio = () => import(/* webpackPrefetch: true */ "@/views/portfolio.vue");
const Contact = () => import(/* webpackPrefetch: true */ "@/views/contact.vue");
const Leafresh = () => import(/* webpackPrefetch: true */ "@/views/portfolio-leafresh.vue");
const Kiosk = () => import(/* webpackPrefetch: true */ "@/views/portfolio-leafresh1.vue");
const Pikka = () => import(/* webpackPrefetch: true */ "@/views/portfolio-leafresh2.vue");


const routes = [
  { path: "/", component: About, meta: { transition: "fade" } },
  { path: "/tech-skills", component: TechSkills, meta: { transition: "fade" } },
  { path: "/portfolio", component: Portfolio, meta: { transition: "fade" } },
  { path: "/portfolio/kiosk", component: Kiosk, meta : { transition: "fade"} },
  { path: "/portfolio/pikka", component: Pikka, meta : { transition: "fade"} },
  { path: "/portfolio/leafresh", component: Leafresh, meta : { transition: "fade"} },
  { path: "/contact", component: Contact, meta: { transition: "fade" } },
];

// 경로(path)들의 배열로, 각 경로가 페이지 간 이동 순서
const routerOrder = [
  "/",
  "/tech-skills", 
  "/portfolio", 
  "/portfolio/kiosk", 
  "/portfolio/pikka", 
  "/portfolio/leafresh", 
  "/contact"
]

// 라우터 가드
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }else {
      return { left: 0, top : 0 };
    }
  },
});

// 이동 방향에 따른 슬라이드 효과 지정
router.beforeEach((to, from, next) => {
  const toIndex = routerOrder.indexOf(to.path);
  const fromIndex = routerOrder.indexOf(from.path);

  if (toIndex > fromIndex ) {
    to.meta.transition = "slide-left"; // 다음 페이지로 이동할 떄
  } else {
    to.meta.transition = "slide-right"; // 이전 페이지로 이동할 때
  }
  next();
});



export default router;
