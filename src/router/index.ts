import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUpViewVue from "@/views/SignUpView.vue";
import SignInViewVue from "@/views/SignInView.vue";
import CommunityViewVue from "@/views/CommunityView.vue";
import DashboardViewVue from "@/views/DashboardView.vue";
import AccountsViewVue from "@/views/AccountsView.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "home", component: HomeView },
  { path: "/signup", name: "signup", component: SignUpViewVue },
  { path: "/signin", name: "signin", component: SignInViewVue },
  { path: "/community", name: "community", component: CommunityViewVue },
  { path: "/dashboard", name: "dashboard", component: DashboardViewVue },
  { path: "/account", name: "account", component: AccountsViewVue },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
