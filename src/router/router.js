import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login.vue"),
    },
    {
      path: "/pr",
      name: "practica",
      component: () => import("../views/practica.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import(""),
      children: [
        {
          path: "",
          component: () => import(""),
        },
        {
          path: "transmision",
          component: () => import(""),
        },
      ],
    },
  ],
});

export default router;
