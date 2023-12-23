import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "D:/大三上/软件系统分析与设计/src/RuanFenFrontEnd/mitech-v1.0.7/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}