<script setup lang="ts">
import dayjs from 'dayjs'
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()
const route = useRoute()

onMounted(() => {
  console.log('Config view mounted')
})

const currentYear = dayjs().year()

// 从路由实例中动态获取子路由，避免循环引用
const menuList = computed(() => {
  // 查找名为 'Config' 的路由记录
  const configRoute = router.getRoutes().find(r => r.name === 'Config')
  const children = configRoute?.children
  if (!children)
    return []

  const processMenu = (menu: any[]): any[] => {
    return menu
      .filter(item => item && item.meta && item.meta.title)
      .map(item => ({
        name: item.name,
        path: item.path,
        meta: item.meta,
        children: item.children ? processMenu(item.children) : undefined,
      }))
  }

  return processMenu(children)
})

function skip(name: string | any) {
  if (!name)
    return
  router.push({ name })
}
</script>

<template>
  <div class="flex min-h-[calc(100%-280px)]">
    <ul class="w-56 m-0 mr-3 min-w-56 menu bg-base-200 pt-14">
      <li v-for="item in menuList" :key="item.name || item.path">
        <details v-if="item.children && item.children.length > 0" open>
          <summary>{{ t(item.meta.title) }}</summary>
          <ul>
            <li v-for="subItem in item.children" :key="subItem.name || subItem.path">
              <details v-if="subItem.children && subItem.children.length > 0" open>
                <summary>{{ t(subItem.meta.title) }}</summary>
                <ul>
                  <li v-for="subSubItem in subItem.children" :key="subSubItem.name || subSubItem.path">
                    <a
                      :style="subSubItem.name === route.name ? 'background-color:rgba(12,12,12,0.2)' : ''"
                      @click="skip(subSubItem.name)"
                    >{{
                      t(subSubItem.meta.title) }}</a>
                  </li>
                </ul>
              </details>
              <a
                v-else :style="subItem.name === route.name ? 'background-color:rgba(12,12,12,0.2)' : ''"
                @click="skip(subItem.name)"
              >{{
                t(subItem.meta.title) }}</a>
            </li>
          </ul>
        </details>
        <a
          v-else :style="item.name === route.name ? 'background-color:rgba(12,12,12,0.2)' : ''"
          @click="skip(item.name)"
        >{{ t(item.meta.title) }}</a>
      </li>
    </ul>
    <router-view class="flex-1 mt-5" />
  </div>
  <footer class="p-10 rounded footer footer-center bg-base-200 h-70 flex flex-col gap-4 text-base-content">
    <nav class="grid grid-flow-col gap-4">
      {{ t('footer.self-reflection') }}
    </nav>
  </footer>
</template>

<style scoped></style>
