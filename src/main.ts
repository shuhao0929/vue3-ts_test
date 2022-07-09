/*
 * @Description:
 * @Author: 王自豪
 * @Date: 2022-07-08 10:21:59
 * @LastEditTime: 2022-07-08 14:56:56
 * @LastEditors: 王自豪
 */
import { createApp } from "vue";

import App from "./App.vue";
const app = createApp(App);

import store from "./store";
app.use(store);

import router from "./router";
app.use(router);

// 挂载ant
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
app.use(Antd);
app.mount("#app");
