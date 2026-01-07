// i18n配置
import { createI18n } from 'vue-i18n'
import en from './en'
import zhCn from './zhCn'

export type Language = 'en' | 'zhCn'

export const languageList = [
  {
    key: 'zhCn',
    name: '中文',
    flag: 'zh-cn',
  },
  {
    key: 'en',
    name: 'English',
    flag: 'en-us',
  },
]
export const browserLanguage = navigator.language.toLowerCase().includes('zh') ? 'zhCn' : 'en'
let globalConfig: any = {}
try {
  const configStr = localStorage.getItem('globalConfig')
  if (configStr) {
    const storageData = JSON.parse(configStr)
    globalConfig = storageData.globalConfig || storageData || {}
  }
}
catch (e) {
  console.warn('Failed to parse globalConfig from localStorage', e)
}
// 创建i18n
const i18n = createI18n({
  locale: globalConfig.language || browserLanguage,
  legacy: false,
  messages: {
    zhCn,
    en,
  },
})

export default i18n
