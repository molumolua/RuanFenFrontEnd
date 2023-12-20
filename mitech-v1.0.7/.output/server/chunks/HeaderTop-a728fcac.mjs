import { _ as __nuxt_component_1$1 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-top-wrap border-bottom" }, _attrs))}><div class="container-fluid"><div class="row"><div class="col-lg-12"><p class="text-center top-message">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Now Hiring:`);
      } else {
        return [
          createTextVNode("Now Hiring:")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` Are you a driven and motivated 1st Line IT Support Engineer? </p></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderTop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderTop = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { HeaderTop as H };
//# sourceMappingURL=HeaderTop-a728fcac.mjs.map
