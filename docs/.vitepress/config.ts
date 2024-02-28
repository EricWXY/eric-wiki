import { defineConfigWithTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  title: `Eric's Wiki`,
  description: "基于 VitePress 搭建的个人 Wiki",
  appearance: false,
  base: "/eric-wiki/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "源码地图", link: "/source-map" },
      { text: "刷题笔记", link: "/exercise-notes" },
      { text: "读书笔记", link: "/book-notes" },
      { text: "个人项目", link: "/my-projects" },
      { text: "更多", link: "/more" },
    ],
  },
});
