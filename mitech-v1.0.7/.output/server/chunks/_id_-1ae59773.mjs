import { p as publicAssetsURL } from './paths.mjs';
import { _ as __nuxt_component_0 } from './Header-a5549ad8.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { _ as __nuxt_component_1 } from './AccordionTwo-57407dea.mjs';
import { _ as __nuxt_component_2 } from './CtaThree-ae57b218.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import { d as data } from './caseStidies-14b56fd1.mjs';
import { T as TestimonialTwo } from './TestimonialTwo-77c88a65.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './mitech-home-infotechno-box-large-image-03-540x320-ec6f0ddd.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'ufo';
import './config.mjs';
import 'destr';
import 'scule';
import './HeaderTop-a728fcac.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import './cta-0c725fc4.mjs';
import './SectionTitle-b03cc0d0.mjs';
import 'swiper/core';
import 'swiper/vue';
import './testimonial-a07af300.mjs';

const _imports_0 = "" + publicAssetsURL("images/icons/mitech-aqua-logo-83x108.png");
const _sfc_main = {
  components: {
    Header: __nuxt_component_0,
    TestimonialTwo,
    AccordionTwo: __nuxt_component_1,
    CtaThree: __nuxt_component_2,
    Footer: __nuxt_component_3,
    OffCanvasMobileMenu: __nuxt_component_4
  },
  data() {
    return {
      data,
      id: this.$route.params.id
    };
  },
  mounted() {
    this.data = data.projects.find((project) => project.id == this.$route.params.id);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_1$1;
  const _component_AccordionTwo = __nuxt_component_1;
  const _component_TestimonialTwo = resolveComponent("TestimonialTwo");
  const _component_CtaThree = __nuxt_component_2;
  const _component_Footer = __nuxt_component_3;
  const _component_OffCanvasMobileMenu = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="case-studies-details-wrapper"><div class="about-banner-wrap vision-space bg-cover" style="${ssrRenderStyle({ backgroundImage: `url('/images/bg/managed-it-services-hero-bg.jpg')` })}"><div class="container"><div class="row"><div class="col-lg-8 ms-auto me-auto"><div class="about-banner-content text-center"><div class="banner-logo-img mb-20"><img${ssrRenderAttr("src", _imports_0)} alt="image"></div><h1 class="mb-15 text-white">${ssrInterpolate($data.data.heading)}</h1></div></div></div></div></div><div class="vision-overview section-space--pt_100"><div class="container"><div class="row"><div class="col-12 section-title"><div class="section-title-wrap section-space--mb_30"><h3 class="heading">Overview</h3></div></div></div><div class="row"><div class="col-lg-5"><div class="vision-content"><h5 class="heading">Inventions, literary works, music &amp; design are all intangible assets. The legal right to these \u2018creations of the mind\u2019 is Intellectual Property (IP).</h5><div class="author section-space--mt_60"><h6 class="font-weight--reguler mb-1">Maggie Strickland</h6><p>/ Group Chief Information \u2013 Aqua Group</p></div></div></div><div class="col-lg-7"><div class="portfolio-details-content"><div class="text"><p>The studio was keen to create an identity that would not interfere with any of the existing brands, settling on a helicoid system that can be easily adapted to \u201Cwork with any colour system\u201D. The studio consulted with the various brands throughout the process. (Source: designweek.co.uk)</p></div><div class="portfolio-details-table section-space--mt_60"><table class=""><tbody><tr class="portfolio-details-tags"><td class="label">Tags</td><td>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Basic`);
      } else {
        return [
          createTextVNode("Basic")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr><tr class="portfolio-details-share"><td class="label">Share</td><td class="portfolio-sharing-list"><div class="inner"><a class="hint--bounce hint--top hint--primary twitter" target="_blank" aria-label="Twitter" href="https://twitter.com/"><i class="fab fa-twitter"></i></a><a class="hint--bounce hint--top hint--primary facebook" target="_blank" aria-label="Facebook" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a><a class="hint--bounce hint--top hint--primary linkedin" target="_blank" aria-label="Linkedin" href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i></a></div></td></tr></tbody></table></div></div></div></div></div></div><div class="requirements-vision section-space--pt_60"><div class="container"><div class="ht-problem-solution style-01"><div class="row"><div class="col-md-4"><h4 class="label problem-label section-space--mb_50">Requirements</h4></div><div class="offset-md-1 col-md-7"><h4 class="label solution-label section-space--mb_50">Our solution</h4></div></div><div class="item"><div class="row"><div class="col-md-4"><h6 class="problem">The communication between machines of different kinds sometimes cause troubles and inaccurate signal decoding results. </h6></div><div class="offset-md-1 col-md-7"><div class="solution"> Advancements in technology \u2013 including machine-to-machine communications between smart sensors, referred to as \u2018The Internet of Things\u2019. For example, appliances in the home that can be monitored and controlled wirelessly by the homeowner wherever they are. </div></div></div></div><div class="item"><div class="row"><div class="col-md-4"><h6 class="problem">The potential market for servers and networking equipment development is still unstable and shrinks every year. </h6></div><div class="offset-md-1 col-md-7"><div class="solution"> Market development \u2013 increasing market share in new markets such as servers and networking equipment. ARM\u2019s technology is well placed to provide lower power options to transport, distribute, analyse and store data across the internet. </div></div></div></div><div class="item"><div class="row"><div class="col-md-4"><h6 class="problem">Demand for energy efficient technology \u2013 the market demands high performance products using low power technology.</h6></div><div class="offset-md-1 col-md-7"><div class="solution"> This case study will demonstrate how ARM\u2019s strategies contribute to the achievement of its business vision, aims and objectives using an integrated approach focusing on innovation, its people and its network of partners. </div></div></div></div></div><div class="results-wrap section-space--ptb_60"><div class="row"><div class="col-lg-3"><div class="heading"><h2>Results:</h2></div></div><div class="col-lg-9"><div class="text"> ARM has an innovative business model. ARM does not manufacture the products in which its technology is used. </div></div></div></div></div></div><div class="accordion-wrapper section-space--pb_100"><div class="container"><div class="row"><div class="col-lg-6 pr-5"><div class="faq-two-wrapper section-space--mt_40">`);
  _push(ssrRenderComponent(_component_AccordionTwo, null, null, _parent));
  _push(`</div></div><div class="col-lg-6"><div class="video-interview section-space--mt_40 video-popup"><a href="https://www.youtube.com/watch?v=9No-FiEInLA" class="video-link mt-30" target="_blank"><div class="single-popup-wrap"><img class="img-fluid border-radus-5"${ssrRenderAttr("src", _imports_0$1)} alt=""><div class="ht-popup-video video-button"><div class="video-mark"><div class="wave-pulse wave-pulse-1"></div><div class="wave-pulse wave-pulse-2"></div></div><div class="video-button__two"><div class="video-play"><span class="video-play-icon"></span></div></div></div></div></a></div></div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_TestimonialTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaThree, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/case-studies/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
//# sourceMappingURL=_id_-1ae59773.mjs.map
