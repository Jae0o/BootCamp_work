import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});
