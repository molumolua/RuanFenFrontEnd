import { _ as __nuxt_component_0 } from './Header-a5549ad8.mjs';
import { _ as __nuxt_component_1 } from './Breadcrumbs-39496f55.mjs';
import { useSSRContext, mergeProps, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as __nuxt_component_3 } from './CtaOne-3ad1d675.mjs';
import { _ as __nuxt_component_3$1, a as __nuxt_component_4 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import { C as ContactUsFour } from './ContactUsFour-6d9bab22.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-us-info-wrappaer section-space--pb_100" }, _attrs))}><div class="container"><div class="row align-items-center"><div class="col-lg-4 col-md-6"><div class="conact-info-wrap mt-30"><h5 class="heading mb-20">San Francisco</h5><ul class="conact-info__list"><li>58 Howard Street #2 San Francisco, CA 941</li><li><a href="mailto:contact.sanfrancisco@mitech.com" class="hover-style-link text-color-primary">contact.sanfrancisco@mitech.com</a></li><li><a href="tel:(+68)122 09876" class="hover-style-link text-black font-weight--bold">(+68)1221 09876</a></li></ul></div></div><div class="col-lg-4 col-md-6"><div class="conact-info-wrap mt-30"><h5 class="heading mb-20">New York</h5><ul class="conact-info__list"><li>58 Howard Street #14 New York</li><li><a href="mailto:contact.newyork@mitech.com" class="hover-style-link text-color-primary">contact.newyork@mitech.com</a></li><li><a href="tel:(+47)122109878" class="hover-style-link text-black font-weight--bold">(+47)1221 09878</a></li></ul></div></div><div class="col-lg-4 col-md-6"><div class="conact-info-wrap mt-30"><h5 class="heading mb-20">Russia</h5><ul class="conact-info__list"><li>The Courtyard Building 11 Curtain Road, Russia</li><li><a href="mailto:contact.russia@mitech.com" class="hover-style-link text-color-primary">contact.russia@mitech.com</a></li><li><a href="tel:(+53)122109877" class="hover-style-link text-black font-weight--bold">(+53)1221 09877</a></li></ul></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactUsInfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Header: __nuxt_component_0,
    Breadcrumbs: __nuxt_component_1,
    ContactUsFour,
    ContactUsInfo: __nuxt_component_2,
    CtaOne: __nuxt_component_3,
    Footer: __nuxt_component_3$1,
    OffCanvasMobileMenu: __nuxt_component_4
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  const _component_Breadcrumbs = __nuxt_component_1;
  const _component_ContactUsFour = resolveComponent("ContactUsFour");
  const _component_ContactUsInfo = __nuxt_component_2;
  const _component_CtaOne = __nuxt_component_3;
  const _component_Footer = __nuxt_component_3$1;
  const _component_OffCanvasMobileMenu = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Breadcrumbs, {
    items: "Contact Us",
    breadcrumbTitle: "Contact Us"
  }, null, _parent));
  _push(ssrRenderComponent(_component_ContactUsFour, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactUsInfo, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaOne, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Contact as default };
//# sourceMappingURL=Contact-84c178fc.mjs.map
