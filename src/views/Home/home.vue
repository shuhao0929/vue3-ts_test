<template>
  <a-layout class="layout">
    <a-layout-sider>
      <!-- 路由 -->
      <MenuVue/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <!-- 头部 -->
        <HeaderVue/>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>


<script lang="ts" setup>
import MenuVue from './module/Menu.vue'
import HeaderVue from './module/Header.vue';
</script>


<style>
.layout{
  width: 100%;
  height: 100vh;
}
</style>