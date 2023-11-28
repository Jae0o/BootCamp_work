import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NotFound from "./NotFound";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About, meta: { requiresAuth: true } },
    { path: "/login", component: Login },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});
