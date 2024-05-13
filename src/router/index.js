/*
 * @Author: chenzhida
 * @Date: 2024-05-13 20:13:08
 * @FilePath: /test_api_vue/src/router/index.js
 * @Description: 
 * 
 * Copyright (c) 2024 by chenzhdia3@163.com, All Rights Reserved. 
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "index" */ '../views/IndexView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
