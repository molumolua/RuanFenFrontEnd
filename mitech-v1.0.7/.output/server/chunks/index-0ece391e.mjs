import { _ as __nuxt_component_0$1 } from './Header-a5549ad8.mjs';
import { _ as __nuxt_component_1$1 } from './Breadcrumbs-39496f55.mjs';
import { _ as __nuxt_component_2 } from './CtaThree-ae57b218.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import __nuxt_component_0 from './SectionTitle-b03cc0d0.mjs';
import __nuxt_component_1 from './CaseStudiesItem-a6cb7c42.mjs';
import { d as data } from './caseStidies-14b56fd1.mjs';
import { useSSRContext, mergeProps, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main$1 = {
  components: {
    SectionTitle: __nuxt_component_0,
    CaseStudiesItem: __nuxt_component_1
  },
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionTitle = __nuxt_component_0;
  const _component_CaseStudiesItem = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "projects-wrapper section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12">`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    class: "text-center section-space--mb_40",
    title: $data.data.sectionTitle,
    subTitle: $data.data.sectionSubTitle
  }, null, _parent));
  _push(`</div></div><div class="row"><!--[-->`);
  ssrRenderList($data.data.projects, (project) => {
    _push(`<div class="col-lg-4 col-md-6">`);
    _push(ssrRenderComponent(_component_CaseStudiesItem, { project }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/CaseStudiesItemWrapper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CaseStudiesItemWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Header: __nuxt_component_0$1,
    Breadcrumbs: __nuxt_component_1$1,
    CaseStudiesItemWrapper,
    CtaThree: __nuxt_component_2,
    Footer: __nuxt_component_3,
    OffCanvasMobileMenu: __nuxt_component_4
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0$1;
  const _component_Breadcrumbs = __nuxt_component_1$1;
  const _component_CaseStudiesItemWrapper = resolveComponent("CaseStudiesItemWrapper");
  const _component_CtaThree = __nuxt_component_2;
  const _component_Footer = __nuxt_component_3;
  const _component_OffCanvasMobileMenu = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Breadcrumbs, {
    items: "Case Studies",
    breadcrumbTitle: "Case Studies"
  }, null, _parent));
  _push(ssrRenderComponent(_component_CaseStudiesItemWrapper, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaThree, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/case-studies/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-0ece391e.mjs.map
