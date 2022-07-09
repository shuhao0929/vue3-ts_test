/*
 * @Description:
 * @Author: 王自豪
 * @Date: 2022-07-08 10:21:59
 * @LastEditTime: 2022-07-08 15:35:39
 * @LastEditors: 王自豪
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// 路由懒加载
const Login = () => import("@/views/Login/LoginIndex.vue");
const Home = () => import("@/views/Home/home.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login", // 重定向
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
