import {defineNoteConfig, defineNotesConfig} from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhconfigNote = defineNoteConfig({
    dir: 'config',
    link: '/config/',
    sidebar: [
        {
            text: "配置",
            icon: 'pepicons-pop:gear',
            collapsed: false,
            items: [
                {
                    text: '默认配置',
                    icon: 'ic:baseline-auto-mode',
                    prefix: 'auto-config.md',
                    link: 'auto-config.md',
                },
                {
                    text: '自定义配置',
                    icon: 'noto:customs',
                    prefix: 'custom-config.md',
                    link: 'custom-config.md',
                },
                {
                    text: '配置项',
                    icon: 'tdesign:task-setting',
                    prefix: 'setting.md',
                    link: 'setting.md',
                },
            ]
        }
    ]
})

const zhDemoNote = defineNoteConfig({
    dir: 'guide',
    link: '/guide/',
    sidebar: [
        {
            text: '指南',
            icon: 'icon-park-solid:guide-board',
            collapsed: false,
            items: [
                {
                    text: '介绍',
                    icon: 'line-md:account',
                    prefix: 'README.md',
                    link: 'README.md'
                },
                {
                    text: '快速开始',
                    icon: 'ic:baseline-assistant',
                    prefix: 'quick-start.md',
                    link: 'quick-start.md',
                },
                {
                    text: '安装部署',
                    icon: 'eos-icons:installing',
                    prefix: 'installation/',
                    collapsed: false,
                    items: "auto",
                },
                {
                    text: '使用教学',
                    icon: 'arcticons:rajasthan-teaching-toppersnotes',
                    prefix: 'using-teaching/',
                    collapsed: false,
                    items: "auto",
                },
                {
                    text: '节点',
                    icon: 'fa-brands:linode',
                    prefix: 'node/node.md',
                    link: 'node/node.md',
                },
                {
                    text: '定时任务',
                    icon: 'mdi:invoice-text-scheduled-outline',
                    prefix: 'scheduled/scheduled.md',
                    link: 'scheduled/scheduled.md',
                },
                {
                    text: '监控指标',
                    icon: 'tdesign:chart-line',
                    prefix: 'monitor/',
                    collapsed: false,
                    items: "auto",
                },
                {
                    text: '数据看板',
                    icon: 'bi:clipboard-data',
                    prefix: 'data-board/data-board.md',
                    link: 'data-board/data-board.md',
                },
                {
                    text: '操作记录',
                    icon: 'ph:math-operations',
                    prefix: 'operation-record/operation-record.md',
                    link: 'operation-record/operation-record.md',
                },
                {
                    text: '用户管理',
                    icon: 'si:user-line',
                    prefix: 'user/user.md',
                    link: 'user/user.md',
                },
                {
                    text: '原理',
                    icon: 'fa:gears',
                    prefix: 'gears/',
                    collapsed: false,
                    items: "auto",
                },
                {
                    text: '消息通知',
                    icon: 'streamline:notification-message-alert',
                    prefix: 'message-notification/message-notification.md',
                    link: 'message-notification/message-notification.md',
                },
                {
                    text: '我们的优势',
                    icon: 'icon-park-twotone:good-two',
                    prefix: 'our-advantages/our-advantages.md',
                    link: 'our-advantages/our-advantages.md',
                },
                {
                    text: 'FAQ',
                    icon: 'wpf:faq',
                    prefix: 'faq/faq.md',
                    link: 'faq/faq.md',
                },
            ],
        }
    ]
})

export const zhNotes = defineNotesConfig({
    dir: '/',
    link: '/',
    notes: [zhDemoNote, zhconfigNote],
})

/* =================== locale: en-US ======================= */

const enconfigNote = defineNoteConfig({
    dir: 'config',
    link: '/config/',
    sidebar: [
        {
            text: "Config",
            icon: 'pepicons-pop:gear',
            collapsed: false,
            items: [
                {
                    text: 'Auto config',
                    icon: 'ic:baseline-auto-mode',
                    prefix: 'auto-config.md',
                    link: 'auto-config.md',
                },
                {
                    text: 'Custom config',
                    icon: 'noto:customs',
                    prefix: 'custom-config.md',
                    link: 'custom-config.md',
                },
                {
                    text: 'Config items',
                    icon: 'tdesign:task-setting',
                    prefix: 'setting.md',
                    link: 'setting.md',
                },
            ]
        }
    ]
})

const enDemoNote = defineNoteConfig({
    dir: 'guide',
    link: '/guide',
    sidebar: [
        {
            text: 'Guide',
            icon: 'icon-park-solid:guide-board',
            collapsed: false,
            items: [
                {
                    text: 'Introduce',
                    icon: 'line-md:account',
                    prefix: 'README.md',
                    link: 'README.md'
                },
                {
                    text: 'Quick start',
                    icon: 'ic:baseline-assistant',
                    prefix: 'quick-start.md',
                    link: 'quick-start.md',
                },
                {
                    text: 'Install & Deploy',
                    icon: 'eos-icons:installing',
                    prefix: 'installation/',
                    collapsed: false,
                    items: "auto",
                },
                {
                    text: 'Using teaching',
                    icon: 'arcticons:rajasthan-teaching-toppersnotes',
                    prefix: 'using-teaching/',
                    collapsed: false,
                    items: "auto",
                },
                {
                    text: 'Node',
                    icon: 'fa-brands:linode',
                    prefix: 'node/node.md',
                    link: 'node/node.md',
                },
                {
                    text: 'Scheduled',
                    icon: 'mdi:invoice-text-scheduled-outline',
                    prefix: 'scheduled/scheduled.md',
                    link: 'scheduled/scheduled.md',
                },
                {
                    text: 'Monitor',
                    icon: 'tdesign:chart-line',
                    prefix: 'monitor/',
                    collapsed: false,
                    items: "auto",
                },
                {
                    text: 'Data oard',
                    icon: 'bi:clipboard-data',
                    prefix: 'data-board/data-board.md',
                    link: 'data-board/data-board.md',
                },
                {
                    text: 'Operation',
                    icon: 'ph:math-operations',
                    prefix: 'operation-record/operation-record.md',
                    link: 'operation-record/operation-record.md',
                },
                {
                    text: 'User admin',
                    icon: 'si:user-line',
                    prefix: 'user/user.md',
                    link: 'user/user.md',
                },
                {
                    text: 'Gears',
                    icon: 'fa:gears',
                    prefix: 'gears/',
                    collapsed: false,
                    items: "auto",
                },
                {
                    text: 'Message notify',
                    icon: 'streamline:notification-message-alert',
                    prefix: 'message-notification/message-notification.md',
                    link: 'message-notification/message-notification.md',
                },
                {
                    text: 'Our advantages',
                    icon: 'icon-park-twotone:good-two',
                    prefix: 'our-advantages/our-advantages.md',
                    link: 'our-advantages/our-advantages.md',
                },
                {
                    text: 'FAQ',
                    icon: 'wpf:faq',
                    prefix: 'faq/faq.md',
                    link: 'faq/faq.md',
                },
            ],
        }
    ]
})

export const enNotes = defineNotesConfig({
    dir: 'en',
    link: '/en/',
    notes: [enDemoNote, enconfigNote],
})

