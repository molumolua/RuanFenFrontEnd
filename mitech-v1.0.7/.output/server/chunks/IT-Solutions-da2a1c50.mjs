import { _ as __nuxt_component_0$1 } from './Header-a5549ad8.mjs';
import { _ as __nuxt_component_1 } from './Breadcrumbs-39496f55.mjs';
import { _ as __nuxt_component_3$1 } from './CtaContactTwo-c876b135.mjs';
import { _ as __nuxt_component_3$2, a as __nuxt_component_4 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import __nuxt_component_0 from './SectionTitle-b03cc0d0.mjs';
import { _ as __nuxt_component_3 } from './FeatureItem-09329b54.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { d as data } from './service-6308e97d.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './HeaderTop-a728fcac.mjs';
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
  components: {
    SectionTitle: __nuxt_component_0,
    FeatureItem: __nuxt_component_3
  },
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionTitle = __nuxt_component_0;
  const _component_FeatureItem = __nuxt_component_3;
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "feature-large-images-wrapper section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12">`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    class: "text-center section-space--mb_30",
    title: $data.data.itSolutionTitle,
    subTitle: $data.data.itSolutionSubTitle
  }, null, _parent));
  _push(`</div></div><div class="row"><div class="col-12"><div class="row row--35"><!--[-->`);
  ssrRenderList($data.data.services.slice(23, 29), (service) => {
    _push(`<div class="col-lg-4 col-md-6 mt-30">`);
    _push(ssrRenderComponent(_component_FeatureItem, { service }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="section-under-heading text-center section-space--mt_40"> Challenges are just opportunities in disguise. `);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServiceITSolution.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ServiceITSolution = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Header: __nuxt_component_0$1,
    Breadcrumbs: __nuxt_component_1,
    ServiceITSolution,
    CtaContactTwo: __nuxt_component_3$1,
    Footer: __nuxt_component_3$2,
    OffCanvasMobileMenu: __nuxt_component_4
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0$1;
  const _component_Breadcrumbs = __nuxt_component_1;
  const _component_ServiceITSolution = resolveComponent("ServiceITSolution");
  const _component_CtaContactTwo = __nuxt_component_3$1;
  const _component_Footer = __nuxt_component_3$2;
  const _component_OffCanvasMobileMenu = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Breadcrumbs, {
    items: "IT Solutions",
    breadcrumbTitle: "IT Solutions"
  }, null, _parent));
  _push(ssrRenderComponent(_component_ServiceITSolution, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaContactTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/IT-Solutions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ITSolutions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ITSolutions as default };
//# sourceMappingURL=IT-Solutions-da2a1c50.mjs.map
