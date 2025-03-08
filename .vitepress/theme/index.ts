// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import { h } from 'vue'
import CommentWaline from './components/CommentWaline.vue'
import backtotop from "./components/backtotop.vue"
import "./style/index.css"; //引入自定义的样式

import { umamiAnalytics } from '@theojs/lumen'

// 图片缩放插件
import mediumZoom from "medium-zoom";
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {
    umamiAnalytics({
      id: "a50390ff-13be-4347-b9b5-b2c08d6892b8",
      src: "https://umami.akams.cn/script.js",
    });
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom(".main img", { background: "var(--vp-c-bg)" }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(CommentWaline), // 评论插件
      'doc-footer-before': () => h(backtotop), // 回到顶部插件
    })
  }
};
