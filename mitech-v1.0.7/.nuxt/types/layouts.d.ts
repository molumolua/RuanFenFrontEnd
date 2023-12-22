import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "E:/2023秋季/软件分析/前端/RuanFenFrontEnd/mitech-v1.0.7/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}