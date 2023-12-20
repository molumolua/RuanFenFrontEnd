import { _ as __nuxt_component_0 } from './Header-a5549ad8.mjs';
import { _ as __nuxt_component_1 } from './AccordionTwo-57407dea.mjs';
import { _ as __nuxt_component_2 } from './CtaThree-ae57b218.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import { d as data } from './service-6308e97d.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './mitech-home-infotechno-box-large-image-03-540x320-ec6f0ddd.mjs';
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
import './paths.mjs';

const _sfc_main = {
  components: {
    Header: __nuxt_component_0,
    AccordionTwo: __nuxt_component_1,
    CtaThree: __nuxt_component_2,
    Footer: __nuxt_component_3,
    OffCanvasMobileMenu: __nuxt_component_4
  },
  data() {
    return {
      data,
      slug: this.$route.params.slug
    };
  },
  mounted() {
    this.data = data.services.find((service) => service.slug == this.slug);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  const _component_AccordionTwo = __nuxt_component_1;
  const _component_CtaThree = __nuxt_component_2;
  const _component_Footer = __nuxt_component_3;
  const _component_OffCanvasMobileMenu = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="about-banner-wrap banner-space bg-cover" style="${ssrRenderStyle({ backgroundImage: `url('/images/bg/managed-it-services-hero-bg.jpg')` })}"><div class="container"><div class="row"><div class="col-lg-8 ms-auto me-auto"><div class="about-banner-content text-center"><h1 class="mb-15 text-white">${ssrInterpolate($data.data.heading)}</h1><h5 class="font-weight--normal text-white">Reach out to the world\u2019s most reliable IT services.</h5></div></div></div></div></div><div class="feature-large-images-wrapper section-space--ptb_100 pb-md-sm-0"><div class="container"><div class="cybersecurity-about-box"><div class="row"><div class="col-lg-4"><div class="modern-number-01"><h3 class="heading mt-0">Learn More About Our <span class="text-color-primary"> Success <br> Stories</span></h3></div></div><div class="col-lg-7 offset-lg-1"><div class="conact-us-wrap-one managed-it"><h5 class="heading">Mitech specializes in <span class="text-color-primary"> technological and IT-related services</span> such as product engineering, warranty management, building cloud, infrastructure, network, etc. </h5><div class="sub-heading">We\u2019re available for 8 hours a day!<br>Contact to require a detailed analysis and assessment of your plan. </div></div></div></div></div></div></div><div class="accordion-wrapper section-space--pb_100"><div class="container"><div class="row"><div class="col-lg-6 pr-5"><div class="faq-two-wrapper">`);
  _push(ssrRenderComponent(_component_AccordionTwo, null, null, _parent));
  _push(`</div></div><div class="col-lg-6"><div class="video-interview section-space--mt_40 video-popup"><a href="https://www.youtube.com/watch?v=9No-FiEInLA" class="video-link mt-30"><div class="single-popup-wrap"><img class="img-fluid border-radus-5"${ssrRenderAttr("src", _imports_0)} alt=""><div class="ht-popup-video video-button"><div class="video-mark"><div class="wave-pulse wave-pulse-1"></div><div class="wave-pulse wave-pulse-2"></div></div><div class="video-button__two"><div class="video-play"><span class="video-play-icon"></span></div></div></div></div></a></div></div></div></div></div><div class="feature-icon-wrapper section-space--pb_70"><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title-wrap text-center section-space--mb_20"><h3 class="heading">Prominent IT Security Services</h3></div></div></div><div class="row"><div class="col-12"><div class="feature-list__three"><div class="row"><div class="col-lg-6"><div class="grid-item animate"><div class="ht-box-icon style-03"><div class="icon-box-wrap"><div class="content-header"><div class="icon"><i class="fas fa-shield-alt"></i></div><h5 class="heading"> Mitech Management Systems </h5></div><div class="content"><div class="text">Our service offerings enhance customer experience throughout secure &amp; highly functional end-to-end warranty management.</div></div></div></div></div></div><div class="col-lg-6"><div class="grid-item animate"><div class="ht-box-icon style-03"><div class="icon-box-wrap"><div class="content-header"><div class="icon"><i class="fas fa-lock"></i></div><h5 class="heading"> Reliable Multi-function Technology </h5></div><div class="content"><div class="text">Develop and propose product improvements through periodical and accurate testing, repairing &amp; refining every version.</div></div></div></div></div></div><div class="col-lg-6"><div class="grid-item animate"><div class="ht-box-icon style-03"><div class="icon-box-wrap"><div class="content-header"><div class="icon"><i class="fas fa-magnet"></i></div><h5 class="heading"> Highly Professional Staffs </h5></div><div class="content"><div class="text">Develop and propose product improvements through periodical and accurate testing, repairing &amp; refining every version.</div></div></div></div></div></div><div class="col-lg-6"><div class="grid-item animate"><div class="ht-box-icon style-03"><div class="icon-box-wrap"><div class="content-header"><div class="icon"><i class="fas fa-medal"></i></div><h5 class="heading"> Infrastructure Integration Technology </h5></div><div class="content"><div class="text">At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution.</div></div></div></div></div></div></div></div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_CtaThree, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-35e898ef.mjs.map
