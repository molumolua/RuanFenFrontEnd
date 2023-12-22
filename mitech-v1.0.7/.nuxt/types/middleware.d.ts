import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "E:/2023秋季/软件分析/前端/RuanFenFrontEnd/mitech-v1.0.7/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}