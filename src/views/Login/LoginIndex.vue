<!--
 * @Description: 
 * @Author: 王自豪
 * @Date: 2022-07-08 15:07:41
 * @LastEditTime: 2022-07-08 16:12:10
 * @LastEditors: 王自豪
-->
<template>
  <div class="login">
    <div class="module">
      <a-form class="form" :model="form" name="basic" autocomplete="off">
        <a-form-item label="账号">
          <a-input v-model:value="form.username" />
        </a-form-item>
        <a-form-item label="密码">
          <a-input-password v-model:value="form.password" />
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit" @click="handleSubmit()">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { handleLogin } from "@/api/login";
import { reactive, toRaw } from "@vue/reactivity";
// 路由跳转需要先导入
import { useRouter } from 'vue-router'
const router = useRouter()
interface FromState{
  username:string,
  password:string
}
const form = reactive<FromState>({
  username: "",
  password: "",
});

async function handleSubmit() {
  // 模拟接口
  // const res = await handleLogin(toRaw(form))
  router.push({path:'/home'})
}

</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/login/bg.jpg");
  background-size: cover;
}
.module {
  width: 40%;
  height: 50%;
  background-color: #fff;
  border-radius: 20px;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
