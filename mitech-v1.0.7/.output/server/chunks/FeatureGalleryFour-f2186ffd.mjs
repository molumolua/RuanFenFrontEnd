import { _ as __nuxt_component_1$1 } from './server.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { d as data } from './service-6308e97d.mjs';

const _sfc_main$2 = {
  props: ["service"]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ht-box-icon style-01 single-svg-icon-box" }, _attrs))}><div class="icon-box-wrap"><div class="icon"><img${ssrRenderAttr("src", $props.service.icon)} alt="icon"></div><div class="content"><h5 class="heading">${ssrInterpolate($props.service.heading)}</h5><div class="text">${ssrInterpolate($props.service.desc)}</div><div class="feature-btn">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: `/service/${$props.service.slug}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="button-text"${_scopeId}>Discover now</span><i class="fas fa-arrow-right ms-1"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "button-text" }, "Discover now"),
          createVNode("i", { class: "fas fa-arrow-right ms-1" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceItemStyleFive.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    ServiceItemStyleFive: __nuxt_component_0
  },
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ServiceItemStyleFive = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "feature-icon-wrapper section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title-wrap text-center section-space--mb_40"><h6 class="section-sub-title mb-20">${ssrInterpolate($data.data.serviceStyleTwo.sectionSubTitle)}</h6><h3 class="heading">${$data.data.serviceStyleTwo.sectionTitle}</h3></div></div></div><div class="row"><div class="col-12"><div class="feature-list__one"><div class="row"><!--[-->`);
  ssrRenderList($data.data.services.slice(6, 14), (service) => {
    _push(`<div class="col-lg-3 col-md-6 wow move-up">`);
    _push(ssrRenderComponent(_component_ServiceItemStyleFive, { service }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServiceStyleFive.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ServiceStyleFive = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "feature-icon-wrapper section-space--ptb_80 border-bottom" }, _attrs))}><div class="container"><div class="row"><div class="col-12"><div class="feature-list__three"><div class="row"><!--[-->`);
  ssrRenderList($data.data.services.slice(37, 41), (service) => {
    _push(`<div class="col-lg-6 wow move-up"><div class="grid-item animate"><div class="ht-box-icon style-03"><div class="icon-box-wrap"><div class="content-header"><div class="icon"><i class="${ssrRenderClass(service.icon)}"></i></div><h5 class="heading">${ssrInterpolate(service.heading)}</h5></div><div class="content"><div class="text">${ssrInterpolate(service.desc)}</div></div></div></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/FeatureGalleryFour.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FeatureGalleryFour = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { FeatureGalleryFour as F, ServiceStyleFive as S };
//# sourceMappingURL=FeatureGalleryFour-f2186ffd.mjs.map
