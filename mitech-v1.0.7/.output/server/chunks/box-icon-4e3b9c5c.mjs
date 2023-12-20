import { _ as __nuxt_component_0 } from './Header-a5549ad8.mjs';
import { _ as __nuxt_component_1 } from './Breadcrumbs-39496f55.mjs';
import { _ as __nuxt_component_2 } from './CtaThree-ae57b218.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import { S as ServiceStyleFive, F as FeatureGalleryFour } from './FeatureGalleryFour-f2186ffd.mjs';
import { S as ServiceStyleTwo } from './ServiceStyleTwo-77310fd3.mjs';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './server.mjs';
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
import './HeaderTop-a728fcac.mjs';
import './cta-0c725fc4.mjs';
import './service-6308e97d.mjs';
import './SectionTitle-b03cc0d0.mjs';

const _sfc_main = {
  components: {
    Header: __nuxt_component_0,
    Breadcrumbs: __nuxt_component_1,
    ServiceStyleFive,
    ServiceStyleTwo,
    FeatureGalleryFour,
    CtaThree: __nuxt_component_2,
    Footer: __nuxt_component_3,
    OffCanvasMobileMenu: __nuxt_component_4
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  const _component_Breadcrumbs = __nuxt_component_1;
  const _component_ServiceStyleFive = resolveComponent("ServiceStyleFive");
  const _component_ServiceStyleTwo = resolveComponent("ServiceStyleTwo");
  const _component_FeatureGalleryFour = resolveComponent("FeatureGalleryFour");
  const _component_CtaThree = __nuxt_component_2;
  const _component_Footer = __nuxt_component_3;
  const _component_OffCanvasMobileMenu = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Breadcrumbs, {
    items: "Box Icon",
    breadcrumbTitle: "Box Icon"
  }, null, _parent));
  _push(ssrRenderComponent(_component_ServiceStyleFive, null, null, _parent));
  _push(ssrRenderComponent(_component_ServiceStyleTwo, { class: "bg-gray" }, null, _parent));
  _push(ssrRenderComponent(_component_FeatureGalleryFour, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaThree, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/element/box-icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const boxIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { boxIcon as default };
//# sourceMappingURL=box-icon-4e3b9c5c.mjs.map
