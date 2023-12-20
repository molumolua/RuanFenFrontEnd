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
    class: "box-large-image__wrap wow move-up"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="box-large-image__box"${_scopeId}><div class="box-large-image__midea"${_scopeId}><div class="images-midea"${_scopeId}><img${ssrRenderAttr("src", $props.service.image)} class="img-fluid" alt="feature thumbnail"${_scopeId}><div class="button-wrapper"${_scopeId}><div class="btn tm-button"${_scopeId}><span class="button-text"${_scopeId}>Learn more</span></div></div><div class="heading-wrap"${_scopeId}><h5 class="heading"${_scopeId}>${ssrInterpolate($props.service.heading)}</h5></div></div></div><div class="box-large-image__content mt-30 text-center"${_scopeId}><p${_scopeId}>${$props.service.desc}</p></div></div>`);
      } else {
        return [
          createVNode("div", { class: "box-large-image__box" }, [
            createVNode("div", { class: "box-large-image__midea" }, [
              createVNode("div", { class: "images-midea" }, [
                createVNode("img", {
                  src: $props.service.image,
                  class: "img-fluid",
                  alt: "feature thumbnail"
                }, null, 8, ["src"]),
                createVNode("div", { class: "button-wrapper" }, [
                  createVNode("div", { class: "btn tm-button" }, [
                    createVNode("span", { class: "button-text" }, "Learn more")
                  ])
                ]),
                createVNode("div", { class: "heading-wrap" }, [
                  createVNode("h5", { class: "heading" }, toDisplayString($props.service.heading), 1)
                ])
              ])
            ]),
            createVNode("div", { class: "box-large-image__content mt-30 text-center" }, [
              createVNode("p", {
                innerHTML: $props.service.desc
              }, null, 8, ["innerHTML"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=FeatureItem-09329b54.mjs.map
