import { _ as __nuxt_component_1$1 } from './server.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  props: ["service"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
    to: `/service/${$props.service.slug}`,
    class: "ht-box-images style-03 wow move-up"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="image-box-wrap"${_scopeId}><div class="box-image"${_scopeId}><img class="img-fulid"${ssrRenderAttr("src", $props.service.icon)} alt="icon"${_scopeId}></div><div class="content"${_scopeId}><h5 class="heading"${_scopeId}>${ssrInterpolate($props.service.heading)}</h5><div class="text"${_scopeId}>${ssrInterpolate($props.service.desc)}</div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "image-box-wrap" }, [
            createVNode("div", { class: "box-image" }, [
              createVNode("img", {
                class: "img-fulid",
                src: $props.service.icon,
                alt: "icon"
              }, null, 8, ["src"])
            ]),
            createVNode("div", { class: "content" }, [
              createVNode("h5", { class: "heading" }, toDisplayString($props.service.heading), 1),
              createVNode("div", { class: "text" }, toDisplayString($props.service.desc), 1)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureItemTwo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=FeatureItemTwo-cd355d93.mjs.map
