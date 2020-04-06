import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/quest",
    name: "GameView",
    component: () =>
      import(/* webpackChunkName: "quest" */ "../views/GameView.vue")
  },
  {
    path: "/shop",
    name: "ShopView",
    component: () =>
      import(/* webpackChunkName: "shop" */ "../views/ShopView.vue")
  },
  {
    path: "*",
    name: "Home",
    component: HomeView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const game = store.getters.game;
  if (to.name !== "Home" && !game) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
