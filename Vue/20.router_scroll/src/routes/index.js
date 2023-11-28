import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About, meta: { requiresAuth: true } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});
