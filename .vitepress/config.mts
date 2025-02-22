import { defineConfig } from 'vitepress'

import { generateSidebar } from "vitepress-sidebar";  // 引入vitepress-sidebar自动生成侧边栏插件

const vitepressSidebarOptions = [
  {
    documentRootPath: 'docs',
    scanStartPath: 'notes',
    basePath: '/notes/',
    resolvePath: '/notes/',
    useTitleFromFileHeading: true, // 从文件 H1 标题中获取侧边栏项的标题
    useTitleFromFrontmatter: true, // 从文件 Frontmatter 中 title 的值获取侧边栏项的标题
    collapsed: false, //折叠组关闭
    collapseDepth: 3, //折叠组2级菜单
    removePrefixAfterOrdering: true, //删除前缀，必须与prefixSeparator一起使用
    prefixSeparator: "_", //删除前缀的符号
  },
  {
    documentRootPath: 'docs',
    basePath: '/services/',
    scanStartPath: 'services',
    resolvePath: '/services/',
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    collapsed: false, //折叠组关闭
    collapseDepth: 2, //折叠组2级菜单
    removePrefixAfterOrdering: true, //删除前缀，必须与prefixSeparator一起使用
    prefixSeparator: "_", //删除前缀的符号
  }

];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "oopsunix",
  description: "A VitePress Site",
  //fav图标
  head: [
    ['link',{ rel: 'icon', href: 'https://akams.cn/favicon.png'}],
  ],
  appearance:'dark', // 默认主题的外观模式，可选值为 'light' | 'dark'
  srcDir: "docs", // 指定文档的根目录
  base: '/', // 设置网站根路径，默认是 '/'


  // 生成sitemap 站点地图
  sitemap: {
    hostname: 'https://www.akams.cn'
  },

  //markdown配置
  markdown: {
    // 代码块显示行号
    lineNumbers: true
  },

  // 编辑此页
  editLink: {
    pattern: 'https://github.com/oopsunix/oopsunix.github.io/edit/main/docs/:path',
    text: 'Edit this page on GitHub'
  },

  themeConfig: {
    logo: "https://akams.cn/favicon.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '我的笔记', link: '/notes/' },
      { text: '公共服务', link: '/services/' },
      { text: '有求必应', link: 'https://www.bing.com' },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: generateSidebar(vitepressSidebarOptions),  // 自动生成侧边栏

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oopsunix' }
    ],

    //页脚 //
    footer: {
      message: `Released under the MIT License.`,
      // message: `<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备xxxxxxxx号</a>`,
      copyright: `Copyright © ${new Date().getFullYear()} AKAMS.CN`,
    },

    lastUpdated: {
      text: "Last Updated",
      formatOptions: {
        dateStyle: "short", // full
        timeStyle: "short", // medium
      },
    },

  }
})
