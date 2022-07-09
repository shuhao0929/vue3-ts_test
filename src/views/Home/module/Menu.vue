<template>
  <div>
    <a-button type="primary" style="margin-bottom: 16px" >
    </a-button>
    <a-menu  mode="inline" theme="dark" >
      <a-menu-item v-for="(item,index) in menuList" :key="index">
        <template #icon>
          <PieChartOutlined />
        </template>
        <router-link :to="item.url">{{item.name}}</router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script lang="ts" setup>
import { MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, MailOutlined,DesktopOutlined,InboxOutlined,AppstoreOutlined,} from '@ant-design/icons-vue';

const menuList = [
    {name:'角色管理',url:'/home/user',key:'1'},
    {name:'按钮管理',url:'/home/button',key:'2'},
    {name:'表格管理',url:'/home/table',key:'3'},
]
</script>



