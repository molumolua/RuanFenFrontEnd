import __nuxt_component_0 from './SectionTitle-b03cc0d0.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { d as data } from './service-6308e97d.mjs';

const _sfc_main$1 = {
  props: ["service"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ht-box-icon style-02 single-svg-icon-box" }, _attrs))}><div class="icon-box-wrap"><div class="icon"><div class="svg-icon"><img${ssrRenderAttr("src", $props.service.icon)} alt="icon"></div></div><div class="content"><h5 class="heading">${ssrInterpolate($props.service.heading)}</h5><div class="text">${ssrInterpolate($props.service.desc)}</div><div class="feature-btn">`);
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceItemStyleTwo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    SectionTitle: __nuxt_component_0,
    ServiceItemStyleTwo: __nuxt_component_1
  },
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionTitle = __nuxt_component_0;
  const _component_ServiceItemStyleTwo = __nuxt_component_1;
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "feature-icon-wrapper section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12">`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    class: "text-center section-space--mb_40",
    title: $data.data.serviceStyleTwo.sectionTitle,
    subTitle: $data.data.serviceStyleTwo.sectionSubTitle
  }, null, _parent));
  _push(`</div></div><div class="row"><div class="col-12"><div class="feature-list__two"><div class="row"><!--[-->`);
  ssrRenderList($data.data.services.slice(6, 12), (service) => {
    _push(`<div class="col-lg-4 col-md-6 wow move-up">`);
    _push(ssrRenderComponent(_component_ServiceItemStyleTwo, { service }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div><div class="col-lg-12"><div class="feature-list-button-box mt-30 text-center">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/contact",
    class: "ht-btn ht-btn-md"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Talk to a consultant `);
      } else {
        return [
          createTextVNode(" Talk to a consultant ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/contact",
    class: "ht-btn ht-btn-md ht-btn--outline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contact us now `);
      } else {
        return [
          createTextVNode(" Contact us now ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServiceStyleTwo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ServiceStyleTwo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ServiceStyleTwo as S };
//# sourceMappingURL=ServiceStyleTwo-77310fd3.mjs.map
