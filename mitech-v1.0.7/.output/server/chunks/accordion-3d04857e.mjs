import { _ as __nuxt_component_0 } from './Header-a5549ad8.mjs';
import { _ as __nuxt_component_1 } from './Breadcrumbs-39496f55.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as __nuxt_component_2$1 } from './CtaThree-ae57b218.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import { _ as __nuxt_component_1$1 } from './AccordionTwo-57407dea.mjs';
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
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "accordionExample" }, _attrs))}><div class="card"><h2 class="card-header" id="headingOne"><button class="btn faq-title btn-block btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> How can we help your business? <span><i class="fas fa-chevron-down"></i><i class="fas fa-chevron-up"></i></span></button></h2><div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div class="card-body"> Through the collaboration with customers in discussing needs and demand, we&#39;re able to attain mutual understanding, gain customer trust to offer appropriate advice, and bring about suggestions on suitable technology to transform your business. </div></div></div><div class="card"><h2 class="card-header" id="headingTwo"><button class="btn faq-title btn-block btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> How working process is simplified? <span><i class="fas fa-chevron-down"></i><i class="fas fa-chevron-up"></i></span></button></h2><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"><div class="card-body"> Mitech takes into consideration every little detail to make sure the system run smoothly and responsively. Mitech employs a new technique called Minified Technology for securing customers&#39; database &amp; building up highly confidential firewalls. </div></div></div><div class="card"><h2 class="card-header" id="headingThree"><button class="btn faq-title btn-block btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> How can we help your business? <span><i class="fas fa-chevron-down"></i><i class="fas fa-chevron-up"></i></span></button></h2><div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"><div class="card-body"> Through the collaboration with customers in discussing needs and demand, we&#39;re able to attain mutual understanding, gain customer trust to offer appropriate advice, and bring about suggestions on suitable technology to transform your business. </div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AccordionOne.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Header: __nuxt_component_0,
    Breadcrumbs: __nuxt_component_1,
    AccordionOne: __nuxt_component_2,
    AccordionTwo: __nuxt_component_1$1,
    CtaThree: __nuxt_component_2$1,
    Footer: __nuxt_component_3,
    OffCanvasMobileMenu: __nuxt_component_4
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  const _component_Breadcrumbs = __nuxt_component_1;
  const _component_AccordionOne = __nuxt_component_2;
  const _component_CtaThree = __nuxt_component_2$1;
  const _component_Footer = __nuxt_component_3;
  const _component_OffCanvasMobileMenu = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Breadcrumbs, {
    items: "Accordion",
    breadcrumbTitle: "Accordion"
  }, null, _parent));
  _push(`<div class="accordion-wrapper section-space--pb_90"><div class="container"><div class="row"><div class="col-lg-8 offset-lg-2"><div class="faq-wrapper section-space--pt_90"><div class="section-elements-title mb-30"><h4>Accordions 01</h4></div>`);
  _push(ssrRenderComponent(_component_AccordionOne, null, null, _parent));
  _push(`</div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_CtaThree, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/element/accordion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const accordion = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { accordion as default };
//# sourceMappingURL=accordion-3d04857e.mjs.map
