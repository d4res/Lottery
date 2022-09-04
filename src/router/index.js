import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ManagementViewVue from "@/views/ManagementView.vue";
import RollViewVue from "@/views/RollView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/management",
    name: "名单管理",
    component: ManagementViewVue,
  },
  {
    path: "/roll",
    name: "点名",
    component: RollViewVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
