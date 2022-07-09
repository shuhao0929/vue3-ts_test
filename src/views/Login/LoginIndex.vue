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
      <a-form :model="form" name="basic" autocomplete="off">
        <a-form-item label="账号">
          <a-input v-model:value="form.username" />
        </a-form-item>
        <a-form-item label="密码">
          <a-input-password v-model:value="form.password" />
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
interface FormState {
  username: string;
  password: string;
}
const form = reactive<FormState>({
  username: "",
  password: "",
});
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 937px;
  background-image: url("@/assets/login/bg.jpg");
  background-size: cover;
}
.module {
  width: 40%;
  height: 80%;
  background-color: #fff;
  border-radius: 20px;
  opacity: 0.9;
}
</style>
