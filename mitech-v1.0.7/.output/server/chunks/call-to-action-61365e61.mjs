import { _ as __nuxt_component_0 } from './Header-a5549ad8.mjs';
import { _ as __nuxt_component_1 } from './Breadcrumbs-39496f55.mjs';
import { _ as __nuxt_component_2 } from './CtaThree-ae57b218.mjs';
import { _ as __nuxt_component_3 } from './CtaOne-3ad1d675.mjs';
import { _ as __nuxt_component_3$1, a as __nuxt_component_4 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import { useSSRContext, mergeProps } from 'vue';
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

const _sfc_main = {
  components: {
    Header: __nuxt_component_0,
    Breadcrumbs: __nuxt_component_1,
    CtaOne: __nuxt_component_3,
    CtaThree: __nuxt_component_2,
    Footer: __nuxt_component_3$1,
    OffCanvasMobileMenu: __nuxt_component_4
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  const _component_Breadcrumbs = __nuxt_component_1;
  const _component_CtaThree = __nuxt_component_2;
  const _component_CtaOne = __nuxt_component_3;
  const _component_Footer = __nuxt_component_3$1;
  const _component_OffCanvasMobileMenu = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Breadcrumbs, {
    items: "Call To Action",
    breadcrumbTitle: "Call To Action"
  }, null, _parent));
  _push(ssrRenderComponent(_component_CtaThree, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaOne, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/element/call-to-action.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const callToAction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { callToAction as default };
//# sourceMappingURL=call-to-action-61365e61.mjs.map
