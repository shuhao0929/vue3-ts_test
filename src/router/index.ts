/*
 * @Description:
 * @Author: 王自豪
 * @Date: 2022-07-08 10:21:59
 * @LastEditTime: 2022-07-08 15:35:39
 * @LastEditors: 王自豪
 */
import { message } from 'ant-design-vue';
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// 路由懒加载
const Login = () => import("@/views/Login/LoginIndex.vue");
const Home = () => import("@/views/Home/home.vue");
const User  = () =>import("@/views/module/User.vue");
const Button  = () =>import("@/views/module/Button.vue");
const Table  = () =>import("@/views/module/Table.vue");

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
    redirect:'/home/user',
    children:[
      {path:"user",component:User},
      {path:"button",component:Button},
      {path:"table",component:Table},
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 路由导航守卫
router.beforeEach((to, from, next) => {
  // 如果我是去登录页面 放行
  if (to.path === '/login') return next()
  // 获取token
  const token = localStorage.getItem('token')
  if (token) { next() } 
  else {  
    message.error('请先登录');
    next('/login') 
    return 
  }

})

export default router;
