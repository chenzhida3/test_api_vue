/*
 * @Author: chenzhida
 * @Date: 2024-05-13 20:13:08
 * @FilePath: /test_api_vue/src/main.js
 * @Description: 
 * 
 * Copyright (c) 2024 by chenzhdia3@163.com, All Rights Reserved. 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 导入暗黑模式主题
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/style/global.css'

// 创建应用
const app =createApp(App)

// 注册elementplus组件
app.use(ElementPlus, {
    locale: zhCn,
  })
// 注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(router).mount('#app')