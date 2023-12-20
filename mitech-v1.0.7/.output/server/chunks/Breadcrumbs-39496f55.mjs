import { _ as __nuxt_component_1$1 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  props: ["items", "breadcrumbTitle"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "breadcrumb-area bg-cover",
    style: { backgroundImage: `url('/images/bg/title-bar-01-bg.jpg')` }
  }, _attrs))}><div class="container"><div class="row"><div class="col-12"><div class="breadcrumb_box text-center"><h2 class="breadcrumb-title">${ssrInterpolate($props.breadcrumbTitle)}</h2><ul class="breadcrumb-list"><li class="breadcrumb-item">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="breadcrumb-item active">${ssrInterpolate($props.items)}</li></ul></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Breadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Breadcrumbs-39496f55.mjs.map
