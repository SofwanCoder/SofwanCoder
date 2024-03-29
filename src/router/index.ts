import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/consultation",
      name: "consultation",
      component: () => import("../views/ConsultView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      component: HomeView,
    },
  ],
});

export default router;
