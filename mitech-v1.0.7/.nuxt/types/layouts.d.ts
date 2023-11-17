import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "D:/Vue templete/themeforest-UGmCi2DZ-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}