import { d as data } from './funfact-d55c6eae.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fun-fact-wrapper" }, _attrs))}><div class="container"><div class="fun-fact-grid-4"><!--[-->`);
  ssrRenderList($data.data.funfactOne, (item) => {
    _push(`<div class="grid-item wow move-up"><div class="fun-fact--one text-center"><h5 class="fun-fact__title">${item.title}</h5><div class="fun-fact__count counter"><span>${ssrInterpolate(item.count)}</span></div><span class="fun-fact__text">${ssrInterpolate(item.text)}</span></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FunFact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=FunFact-bdb4d4e0.mjs.map
