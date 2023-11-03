import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
      path: '/videoPlay',
      name: 'videoPlay',
      component: () => import(/* webpackChunkName: "station" */ '../views/videoPlay.vue')
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router