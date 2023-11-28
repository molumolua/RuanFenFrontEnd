import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/Users/WXY的密道/Desktop/软分/大作业/模板/RuanFenFrontEnd/mitech-v1.0.7/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}