import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import Home from '@/views/Home/index.vue'
import { configRoutes } from './modules/config'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/log-lottery',
    },
    {
        path: '/log-lottery',
        component: Layout,
        redirect: '/log-lottery/home',
        children: [
            {
                path: 'home',
                name: 'Home',
                component: Home,
            },
            {
                path: 'demo',
                name: 'Demo',
                component: () => import('@/views/Demo/index.vue'),
            },
            configRoutes,
        ],
    },
]

const envMode = import.meta.env.MODE
const router = createRouter({
    // 读取环境变量
    history: (envMode === 'file' || import.meta.env.TAURI_PLATFORM) ? createWebHashHistory() : createWebHistory(),
    routes,
})

export default router
