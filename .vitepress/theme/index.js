// .vitepress/theme/index.js
// 在index.ts中引入出现“缺少类型声明”错误，改为使用 JavaScript ，跳过 TypeScript 的静态类型检查。
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import CommentWaline from './components/CommentWaline.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(CommentWaline)
    })
  }
}