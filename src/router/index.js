import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () => import("../views/AboutView.vue"),
  // },
  // {
  //   path: "/dome",
  //   name: "dome",

  //   component: () => import("../views/DomeView.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
