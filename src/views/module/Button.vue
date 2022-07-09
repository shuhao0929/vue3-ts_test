<template>
  <div class="button">
    <a-space>
      <a-button type="primary">按钮</a-button>
      <a-button>按钮</a-button>
      <a-button type="dashed">按钮</a-button>
      <a-button type="dashed" href="https://www.baidu.com">link跳转百度</a-button>
      <a-button type="primary" shape="circle">A</a-button>
      <a-button type="primary" danger>按钮</a-button>
      <a-button danger>按钮</a-button>
      <a-button type="dashed" danger>按钮</a-button>
      <a-button type="text" danger>按钮</a-button>
      <a-button type="link" danger>按钮</a-button>
    </a-space>

    <a-avatar src="https://joeschmoe.io/api/v1/random" :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }">
      <template #icon>
        <AntDesignOutlined />
      </template>
    </a-avatar>
  </div>
</template>

<script  lang="ts" setup>
</script>

<style lang="less" scoped>
.button {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>