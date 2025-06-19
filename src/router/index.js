import { createRouter, createWebHistory } from "vue-router";
import Landing from "@/views/Landing.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: Landing,
    },
    {
      path: "/coding",
      name: "coding",
      component: () => import("@/views/Coding.vue"),
    },
    {
      path: "/music",
      name: "music",
      component: () => import("@/views/Music.vue"),
    },
    {
      path: "/games",
      name: "games",
      component: () => import("@/views/Games.vue"),
    },
  ],
});

export default router;
