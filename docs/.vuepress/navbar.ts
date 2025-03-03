import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '指南', icon: 'icon-park-solid:guide-board', link: '/guide/README.md' },
  { text: '配置', icon: 'pepicons-pop:gear', link: '/config/auto-config.md' }
])

export const enNavbar = defineNavbarConfig([
  { text: 'Guide', icon: 'icon-park-solid:guide-board', link: '/en/guide/README.md' },
  { text: 'Config', icon: 'pepicons-pop:gear', link: '/en/config/auto-config.md' }
])

