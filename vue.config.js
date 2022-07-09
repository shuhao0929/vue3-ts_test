/*
 * @Description:
 * @Author: 王自豪
 * @Date: 2022-07-08 10:21:59
 * @LastEditTime: 2022-07-08 15:33:06
 * @LastEditors: 王自豪
 */

const path = require("path");
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // 关闭eslint
  lintOnSave: false,
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  configureWebpack: {
    resolve: {
      alias: {
        // 设置@/的意义
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  transpileDependencies: true,
});
