import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/Users/Ziming Hao/Desktop/RuanFenFrontEnd/mitech-v1.0.7/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}