import { _ as __nuxt_component_0 } from './Header-a5549ad8.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { a as about } from './about-c80198d9.mjs';
import { d as data } from './cta-0c725fc4.mjs';
import { _ as __nuxt_component_3$1 } from './FunFactTwo-5d9a5a5a.mjs';
import { _ as __nuxt_component_2$1 } from './BrandLogoCarousel-3686721b.mjs';
import { _ as __nuxt_component_3$2, a as __nuxt_component_4$1 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import { T as TestimonialTwo } from './TestimonialTwo-77c88a65.mjs';
import { C as ContactUsThree } from './ContactUsThree-09024383.mjs';
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
import './funfact-d55c6eae.mjs';
import 'swiper/vue';
import 'swiper/core';
import './SectionTitle-b03cc0d0.mjs';
import './testimonial-a07af300.mjs';
import './paths.mjs';

const _sfc_main$4 = {
  props: ["title", "subTitle", "bgImg"]
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "about-banner-wrap banner-space about-us-bg bg-cover",
    style: { backgroundImage: `url('/images/bg/contact-us-01-hero-bg.jpg')` }
  }, _attrs))}><div class="container"><div class="row"><div class="col-lg-8 ms-auto me-auto"><div class="about-banner-content text-center"><h1 class="mb-15 text-white">About Mitech</h1><h5 class="font-weight--normal text-white">Mitech specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc.</h5></div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  data() {
    return {
      data: about
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "feature-large-images-wrapper section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title-wrap text-center section-space--mb_60"><h6 class="section-sub-title mb-20">${ssrInterpolate($data.data.aboutCompanyTwo.sectionSubTitle)}</h6><h3 class="heading">${$data.data.aboutCompanyTwo.sectionTitle}</h3></div></div></div><div class="cybersecurity-about-box section-space--pb_70"><div class="row"><div class="col-lg-4 offset-lg-1"><div class="modern-number-01"><h2 class="heading mr-5"><span class="mark-text">${ssrInterpolate($data.data.aboutCompanyTwo.headingMarkText)}</span>${ssrInterpolate($data.data.aboutCompanyTwo.heading)}</h2><h6 class="heading mt-30">${ssrInterpolate($data.data.aboutCompanyTwo.subHeading)}</h6></div></div><div class="col-lg-5 offset-lg-1"><div class="cybersecurity-about-text"><div class="text">${ssrInterpolate($data.data.aboutCompanyTwo.desc)}</div><div class="button-text">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "",
    class: "btn-text"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Discover now <span class="button-icon ml-1"${_scopeId}><i class="fas fa-arrow-right ms-1"${_scopeId}></i></span>`);
      } else {
        return [
          createTextVNode(" Discover now "),
          createVNode("span", { class: "button-icon ml-1" }, [
            createVNode("i", { class: "fas fa-arrow-right ms-1" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div><div class="row"><div class="col-12"><div class="feature-images__six"><div class="row"><!--[-->`);
  ssrRenderList($data.data.aboutItems, (about2) => {
    _push(`<div class="col-lg-4 col-md-6 wow move-up"><div class="ht-box-images style-06"><div class="image-box-wrap"><div class="box-image"><div class="default-image"><img class="img-fulid"${ssrRenderAttr("src", about2.icon)} alt="icon"></div></div><div class="content"><h5 class="heading">${ssrInterpolate(about2.heading)}</h5><div class="text">${ssrInterpolate(about2.desc)}</div>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "",
      class: "box-images-arrow"
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
      _: 2
    }, _parent));
    _push(`</div></div></div></div>`);
  });
  _push(`<!--]--></div></div><div class="section-under-heading text-center section-space--mt_60">${ssrInterpolate($data.data.aboutCompanyTwo.underHeading)} `);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($data.data.aboutCompanyTwo.linkText)}`);
      } else {
        return [
          createTextVNode(toDisplayString($data.data.aboutCompanyTwo.linkText), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutCompanyTwo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "about-resources-wrapper",
    style: { backgroundImage: `url('/images/bg/mitech-slider-cybersecurity-global-image.png')` }
  }, _attrs))}><div class="container-fluid"><div class="row align-items-center"><div class="col-lg-6 order-2 order-lg-1"><div class="resources-left-box"><div class="resources-inner"><h6 class="sub-title mb-20">${ssrInterpolate($data.data.ctaFour.subTitle)}</h6><h3 class="heading">${$data.data.ctaFour.title}</h3><div class="button mt-30"><button class="ht-btn ht-btn-md">Download now (3MB)</button></div></div></div></div><div class="col-lg-6 order-1 order-lg-2"><div class="resources-right-box"><div class="resources-right-inner text-center"><div class="resources-images"><img class="img-fluid"${ssrRenderAttr("src", $data.data.ctaFour.image)} alt="image"></div></div></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CtaFour.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      data: about
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-delivering-wrapper section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title-wrap text-center section-space--mb_20"><h3 class="heading">${$data.data.aboutDelivery.sectionTitle}</h3></div></div></div><div class="row"><!--[-->`);
  ssrRenderList($data.data.aboutDelivery.deliveryItems, (delivery) => {
    _push(`<div class="col-lg-6"><div class="delivering-optimal-wrap"><div class="list-item"><div class="marker"></div><div class="title-wrap"><h5 class="title">${ssrInterpolate(delivery.title)}</h5><div class="desc">${ssrInterpolate(delivery.desc)}</div></div></div></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutDelivery.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "about",
  components: {
    Header: __nuxt_component_0,
    PageHeader: __nuxt_component_1,
    AboutCompanyTwo: __nuxt_component_2,
    CtaFour: __nuxt_component_3,
    AboutDelivery: __nuxt_component_4,
    FunFactTwo: __nuxt_component_3$1,
    TestimonialTwo,
    BrandLogoCarousel: __nuxt_component_2$1,
    ContactUsThree,
    Footer: __nuxt_component_3$2,
    OffCanvasMobileMenu: __nuxt_component_4$1
  },
  head() {
    return {
      title: "About Us",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "About our description"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  const _component_PageHeader = __nuxt_component_1;
  const _component_AboutCompanyTwo = __nuxt_component_2;
  const _component_CtaFour = __nuxt_component_3;
  const _component_AboutDelivery = __nuxt_component_4;
  const _component_FunFactTwo = __nuxt_component_3$1;
  const _component_TestimonialTwo = resolveComponent("TestimonialTwo");
  const _component_BrandLogoCarousel = __nuxt_component_2$1;
  const _component_ContactUsThree = resolveComponent("ContactUsThree");
  const _component_Footer = __nuxt_component_3$2;
  const _component_OffCanvasMobileMenu = __nuxt_component_4$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_PageHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutCompanyTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaFour, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutDelivery, null, null, _parent));
  _push(ssrRenderComponent(_component_FunFactTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_TestimonialTwo, { class: "pb-0 bg-white" }, null, _parent));
  _push(ssrRenderComponent(_component_BrandLogoCarousel, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactUsThree, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { About as default };
//# sourceMappingURL=About-08e449a1.mjs.map
