import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/WXY的密道/Desktop/软分/大作业/模板/RuanFenFrontEnd/mitech-v1.0.7/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}