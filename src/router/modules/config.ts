import type { RouteRecordRaw } from 'vue-router'

export const configRoutes: RouteRecordRaw = {
    path: 'config',
    name: 'Config',
    component: () => import('@/views/Config/index.vue'),
    children: [
        {
            path: '',
            redirect: '/log-lottery/config/person',
        },
        {
            path: 'person',
            name: 'PersonConfig',
            component: () => import('@/views/Config/Person/index.vue'),
            meta: {
                title: 'sidebar.personConfiguration',
                icon: 'person',
            },
            children: [
                {
                    path: '',
                    redirect: '/log-lottery/config/person/all',
                },
                {
                    path: 'all',
                    name: 'AllPersonConfig',
                    component: () => import('@/views/Config/Person/PersonAll/index.vue'),
                    meta: {
                        title: 'sidebar.personList',
                        icon: 'all',
                    },
                },
                {
                    path: 'already',
                    name: 'AlreadyPerson',
                    component: () => import('@/views/Config/Person/PersonAlready/index.vue'),
                    meta: {
                        title: 'sidebar.winnerList',
                        icon: 'already',
                    },
                },
            ],
        },
        {
            path: 'prize',
            name: 'PrizeConfig',
            component: () => import('@/views/Config/Prize/PrizeConfig.vue'),
            meta: {
                title: 'sidebar.prizeConfiguration',
                icon: 'prize',
            },
        },
        {
            path: 'global',
            name: 'GlobalConfig',
            redirect: '/log-lottery/config/global/face',
            meta: {
                title: 'sidebar.globalSetting',
                icon: 'global',
            },
            children: [
                {
                    path: 'all',
                    redirect: '/log-lottery/config/global/face',
                },
                {
                    path: 'face',
                    name: 'FaceConfig',
                    component: () => import('@/views/Config/Global/FaceConfig/index.vue'),
                    meta: {
                        title: 'sidebar.viewSetting',
                        icon: 'face',
                    },
                },
                {
                    path: 'image',
                    name: 'ImageConfig',
                    component: () => import('@/views/Config/Global/ImageConfig/index.vue'),
                    meta: {
                        title: 'sidebar.imagesManagement',
                        icon: 'image',
                    },
                },
                {
                    path: 'music',
                    name: 'MusicConfig',
                    component: () => import('@/views/Config/Global/MusicConfig/index.vue'),
                    meta: {
                        title: 'sidebar.musicManagement',
                        icon: 'music',
                    },
                },
            ],
        },
        {
            path: 'readme',
            name: 'Readme',
            component: () => import('@/views/Config/Readme/index.vue'),
            meta: {
                title: 'sidebar.operatingInstructions',
                icon: 'readme',
            },
        },
    ],
}
