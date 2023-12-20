import { _ as __nuxt_component_1$1 } from './server.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { d as data } from './service-6308e97d.mjs';

const _sfc_main$1 = {
  props: ["service"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
    to: `/service/${$props.service.slug}`,
    class: "ht-box-images style-02"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="image-box-wrap"${_scopeId}><div class="box-image"${_scopeId}><img class="img-fulid"${ssrRenderAttr("src", $props.service.icon)} alt="icon"${_scopeId}></div><div class="content"${_scopeId}><h6 class="heading"${_scopeId}>${ssrInterpolate($props.service.heading)}</h6></div></div>`);
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
              createVNode("h6", { class: "heading" }, toDisplayString($props.service.heading), 1)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceItemStyleFour.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    ServiceItemStyleFour: __nuxt_component_0
  },
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ServiceItemStyleFour = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "feature-images-wrapper bg-gray section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title-wrap text-center section-space--mb_10"><h6 class="section-sub-title mb-20">${ssrInterpolate($data.data.serviceFour.sectionSubTitle)}</h6><h3 class="heading">${$data.data.serviceFour.sectionTitle}</h3></div></div></div><div class="row"><div class="col-12"><div class="feature-images__two small-mt__10"><div class="modern-grid-image-box row row--30"><!--[-->`);
  ssrRenderList($data.data.services.slice(17, 23), (service) => {
    _push(`<div class="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">`);
    _push(ssrRenderComponent(_component_ServiceItemStyleFour, { service }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div><div class="section-under-heading text-center section-space--mt_60">${ssrInterpolate($data.data.serviceFour.underHeading)} `);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Take the challenge!`);
      } else {
        return [
          createTextVNode("Take the challenge!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServiceStyleThree.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ServiceStyleThree = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ServiceStyleThree as S };
//# sourceMappingURL=ServiceStyleThree-0c11ff0c.mjs.map
