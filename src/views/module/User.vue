<template>
  <a-table :dataSource="dataSource" :columns="columns">
  </a-table>
  
</template>

<script  lang="ts" setup>
const dataSource = [
  { name: "管理员", title: "admin", age: 22, introduction: "管理员" },
  { name: "王书豪", title: "书豪", age: 22, introduction: "大帅比" },
  { name: "徐相宇", title: "白", age: 20, introduction: "二笔" },
];
const columns = [
  { title: "姓名", dataIndex: "name", key: "name" },
  { title: "称号", dataIndex: "title", key: "title" },
  { title: "年龄", dataIndex: "age", key: "age" },
  { title: "简介", dataIndex: "introduction", key: "introduction" },
];
</script>

<style>
</style>