import { _ as __nuxt_component_0$1 } from './Header-a5549ad8.mjs';
import { _ as __nuxt_component_1 } from './Breadcrumbs-39496f55.mjs';
import { _ as __nuxt_component_2 } from './ServiceIT-82044f33.mjs';
import { _ as __nuxt_component_2$1 } from './CtaThree-ae57b218.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import { S as ServiceStyleThree } from './ServiceStyleThree-0c11ff0c.mjs';
import { F as FeatureGallery } from './FeatureGallery-005ff30a.mjs';
import { _ as __nuxt_component_0 } from './FeatureItemStyleThree-46a7c351.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { d as data } from './service-6308e97d.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './HeaderTop-a728fcac.mjs';
import './ServiceItem-17c8f445.mjs';
import './cta-0c725fc4.mjs';
import './FeatureItemTwo-cd355d93.mjs';
import 'swiper/vue';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import './config.mjs';
import 'destr';
import 'scule';

const _sfc_main$1 = {
  props: ["service"],
  components: {
    FeatureItemStyleThree: __nuxt_component_0
  },
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FeatureItemStyleThree = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "feature-images-wrapper section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title-wrap text-center section-space--mb_20"><h6 class="section-sub-title mb-20">${ssrInterpolate($data.data.serviceOne.sectionSubTitle)}</h6><h3 class="heading">${$data.data.serviceOne.sectionTitle}</h3></div></div></div><div class="row"><div class="col-12"><div class="feature-images__five"><div class="row"><!--[-->`);
  ssrRenderList($data.data.services.slice(29, 32), (service) => {
    _push(`<div class="col-lg-4 col-md-6 wow move-up">`);
    _push(ssrRenderComponent(_component_FeatureItemStyleThree, { service }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div><div class="section-under-heading text-center section-space--mt_60"> Challenges are just opportunities in disguise. `);
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServiceStyleSix.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ServiceStyleSix = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Header: __nuxt_component_0$1,
    Breadcrumbs: __nuxt_component_1,
    ServiceIT: __nuxt_component_2,
    ServiceStyleThree,
    FeatureGallery,
    ServiceStyleSix,
    CtaThree: __nuxt_component_2$1,
    Footer: __nuxt_component_3,
    OffCanvasMobileMenu: __nuxt_component_4
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0$1;
  const _component_Breadcrumbs = __nuxt_component_1;
  const _component_ServiceIT = __nuxt_component_2;
  const _component_ServiceStyleThree = resolveComponent("ServiceStyleThree");
  const _component_FeatureGallery = resolveComponent("FeatureGallery");
  const _component_ServiceStyleSix = resolveComponent("ServiceStyleSix");
  const _component_CtaThree = __nuxt_component_2$1;
  const _component_Footer = __nuxt_component_3;
  const _component_OffCanvasMobileMenu = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Breadcrumbs, {
    items: "Box Image",
    breadcrumbTitle: "Box Image"
  }, null, _parent));
  _push(ssrRenderComponent(_component_ServiceIT, null, null, _parent));
  _push(ssrRenderComponent(_component_ServiceStyleThree, null, null, _parent));
  _push(ssrRenderComponent(_component_FeatureGallery, null, null, _parent));
  _push(ssrRenderComponent(_component_ServiceStyleSix, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaThree, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/element/box-image.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const boxImage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { boxImage as default };
//# sourceMappingURL=box-image-b7f7276c.mjs.map
