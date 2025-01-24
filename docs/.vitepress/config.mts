import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: 'Kevin',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        items: [
          {
            text: 'React',
            link: '/react',
          },
          {
            text: '面试题',
            link: 'frontend/interview',
          },
          {
            text: '算法',
            link: 'frontend/algorithm',
          },
        ],
      },
      {
        text: '服务端',
        items: [
          {
            text: '数据库',
            link: '/database/',
          },
          {
            text: 'Golang',
            items: [
              {
                text: 'base',
                link: '/golang/',
              },
              {
                text: 'gin',
                link: '/gin',
              },
            ],
          },
        ],
      },
      { text: '生活', link: '/life' },
    ],

    sidebar: {
      '/frontend/interview': [
        {
          text: '面试题',
          items: [
            { text: '大纲', link: '/frontend/interview' },
            { text: 'React', link: '/frontend/interview/react' },
            { text: '手写题', link: '/frontend/interview/code' },
            { text: '网络协议', link: '/frontend/interview/network' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: '' }],
    search: {
      provider: 'local',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 present Kevin',
    },
  },
  sitemap: {
    hostname: 'https://www.wykun.com',
  },
  appearance: 'dark',
})
