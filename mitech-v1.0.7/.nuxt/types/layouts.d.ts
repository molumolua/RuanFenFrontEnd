import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "D:/大三上/软件系统分析与设计/src/zfq/RuanFenFrontEnd/mitech-v1.0.7/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}