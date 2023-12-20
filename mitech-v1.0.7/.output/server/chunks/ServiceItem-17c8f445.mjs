import { _ as __nuxt_component_1$1 } from './server.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  props: ["service"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ht-box-images style-01" }, _attrs))}><div class="image-box-wrap"><div class="box-image"><img class="img-fulid"${ssrRenderAttr("src", $props.service.icon)} alt="icon"></div><div class="content"><h5 class="heading">${ssrInterpolate($props.service.heading)}</h5><div class="text">${ssrInterpolate($props.service.desc)}</div><div class="circle-arrow"><div class="middle-dot"></div><div class="middle-dot dot-2"></div>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: `/service/${$props.service.slug}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fas fa-long-arrow-alt-right"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fas fa-long-arrow-alt-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=ServiceItem-17c8f445.mjs.map
