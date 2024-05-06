import { defineConfigWithTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  title: `Eric's Wiki`,
  description: "基于 VitePress 搭建的个人 Wiki",
  appearance: 'force-dark',
  base: "/eric-wiki/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      // { text: "源码地图", link: "/source-map" },
      // { text: "刷题笔记", link: "/exercise-notes" },
      // { text: "读书笔记", link: "/book-notes" },
      { text: "个人项目", link: "/my-projects/eric-ui/index" },
      // { text: "更多", link: "/more" },
    ],
    sidebar:{
      '/my-projects/':[
        {
          text: 'eric-ui',
          items: [
            {
              text: '介绍',
              link: '/my-projects/eric-ui/index'
            },
            {
              text: '项目搭建',
              link: '/my-projects/eric-ui/start'
            },
            {
              text: '按钮组件',
              link: '/my-projects/eric-ui/button'
            }
          ]
        }
      ]
    }
  },
});
