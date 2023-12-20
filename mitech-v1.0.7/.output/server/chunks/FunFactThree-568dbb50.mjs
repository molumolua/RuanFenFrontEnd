import { d as data } from './funfact-d55c6eae.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fun-fact-wrapper section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4 offset-lg-1"><div class="modern-number-01 mr-5"><h2 class="heading"><span class="mark-text">${ssrInterpolate($data.data.funfactThree.markText)}</span>${ssrInterpolate($data.data.funfactThree.subTitle)}</h2><h3 class="heading">${$data.data.funfactThree.title}</h3></div></div><div class="col-lg-7"><div class="row"><!--[-->`);
  ssrRenderList($data.data.funfactThree.funfacts, (item) => {
    _push(`<div class="col-md-6 col-sm-6 wow move-up"><div class="fun-fact--three text-center"><div class="fun-fact__count counter"><span>${ssrInterpolate(item.count)}</span></div><h6 class="fun-fact__text">${ssrInterpolate(item.text)}</h6></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FunFactThree.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=FunFactThree-568dbb50.mjs.map
